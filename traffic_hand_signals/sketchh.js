let video;
let poseNet;
let pose;
let skeleton;
let brain;
let state = 'waiting';
let targetLabel;
function keyPressed(){
    targetLabel = key;
    console.log(targetLabel);
    setTimeout(function(){
        console.log('collecting');
        state = 'collecting';
    }, 10000);
}

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    let options = {
        inputs: 34,
        output: 4,
        task: 'classification',
        debug: true
    } 
    brain = ml5.neuralNetwork(options);
}

function gotPoses(poses){
    //console.log(poses)
    if(poses.length > 0){
        pose = pose[0].pose;
        skeleton = poses[0].skeleton;
        brain.addData(inputs, target);
    }

    function modelLoaded(){
        console.log('posenet ready');
    }
    function draw(){
        transform(video.width, 0);
        scale(-1, 1);
        Image(video, 0, 0, video.width, <i class="fa fa-file-video-o" aria-hidden="true"></i>)
    }
}