let video;
let poseNet;
let pose;
let skeleton;
let brain;
let state = 'waiting';
let targetLabel;
function keyPressed(){
    //now let's add a function to save the data 
    if(key == 's'){
        brain.saveData();
    } else {
    targetLabel = key;
    console.log(targetLabel);
    //executes a fucntion after a set amount of time
    setTimeout(function(){
        console.log('collecting');
        state = 'collecting'; 
   
        setTimeout(function(){
            console.log('not collecting');
            state = 'waiting';        
    
        }, 10000);

    }, 10000);
}
}
function setup(){
         createCanvas(640, 480);
         video = createCapture(VIDEO);
         video.hide();
       poseNet = ml5.poseNet(video, modelLoaded); //we're referencing ml5 library.the name of function 
       //poseNet works differently than ml5.js library, it works based on event handlers 
        //so if I want to set up a pose event by calling this method "on", on pose I want this function to execute, whenever thise posenet model detects a pose, then call this function and give me the results of that pose
         poseNet.on('pose', gotPoses)
         //here's how to congifure neural network we'll use 4 properities here
         let options = {
            inputs: 34,
            outputs: 4,
            task: 'classification',
            debug: true
         }
         brain = ml5.neuralNetwork(options);
        //  brain.loadData('dataa.json', dataReady);
        //  console.log('data loaded');
         //we need to add data to our neural network
}
 
// function dataReady(){
//     //call normalize data 
//     console.log('data normaliz call');
//     brain.normalizeData();
//     console.log('data normalized');
//     //running thru all the datat ten times 
//     brain.train({epochs: 50}, finished); 
//     console.log('data trained');
// }

// function finished(){
//     console.log('model trained');
//     brain.save();
//     console.log('data saved');
// }

function gotPoses(poses){
    //     console.log(poses);
         //if the length of the array is zero, 
        if(poses.length > 0){
             //save first pose in a global variable 'pose'
           pose = poses[0].pose;
          skeleton = poses[0].skeleton;
          //want to have data in a plain array
          //going through a pose, get the data, putting them in an array
          if(state == 'collecting'){
          let inputs = [];
          for(let i = 0; i < pose.keypoints.length; i++){
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            inputs.push(x);
            inputs.push(y);
            }
            //target also wants an array but here it's just a label, so we can tkae the target label put it in the array and that's
            //what we're giving an add data function  
            let target = [targetLabel];
          brain.addData(inputs, target);
        }
        }
    }
    
  function modelLoaded(){
    console.log('poseNet ready');
  } 

  function draw(){
    translate(video.width, 0);
    scale(-1, 1);
    image(video, 0, 0, video.width, video.height);
    if(pose){
        for(let i = 0; i < skeleton.length; i++){
       let a = skeleton[i][0];
       let b = skeleton[i][1];
        strokeWeight(2);
        stroke(0);
        line(a.position.x, a.position.y, b.position.x, b.position.y); 
        }
    
    for(let i = 0; i < pose.keypoints.length; i++){
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        fill(0);
        stroke(255);
        ellipse(x, y, 16, 16);
        }
  }
}