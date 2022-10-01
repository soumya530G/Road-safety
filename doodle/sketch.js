// let circles = [];
// let squares = [];
// let triangles = [];
// //to add all the images preload function
// function preload(){
// for(let i = 0; i < 100; i++){
//     //since files in data are saved with initial trailing 0's and numbers after let's do this
//     let index = nf(i + 1, 4, 0);
//     circles[i] = loadImage(`data/circle${index}.png`);
//     squares[i] = loadImage(`data/square${index}.png`);
//     triangles[i] = loadImage(`data/triangle${index}.png`);
// }
// }

// let shapeclassifier;

// function setup(){
//     createCanvas(400, 400);
//     //background(0);
//     //drawing the circle
//     //image(circles[0], 0, 0, width, height);
//     let options = {
//         //width, height, third parameter is what each pixel has it's own rgb value and alpha value so channels of image
//         //alpha is 255 so can't be used here, we're leaving at 4 here
//         inputs: [64, 64, 4],
//         //we need to specify the task, we want ml5 to configure a convolutional neural network for us, so we indicate imageclassification
//         task: "imageClassification",
//         //debug to true triggers an automatic visualization of the loss function as it's training  
//         //a loss function is 
//         debug: true,
//     }
//     shapeclassifier = ml5.neuralNetwork(options);
//     //we add data to neural network using add data here
//     //the training data set should include input associated with it's target, the image associated with it's label
//     //so we can configure an object with an image property that is the actual circle image, ml5 knows about p5 images, ml5 can work with raw pixel data 
//     //but it's convenient to give it the loaded images as it is   
//     for(let i = 0; i < circles.length; i++){
//        // let input = { image: circles[i]};
//         //let target = { label: "circle"};
//         shapeclassifier.addData({ image: circles[i]}, { label: "circle"});
//         shapeclassifier.addData({ image: squares[i]}, { label: "square"});
//         shapeclassifier.addData({ image: triangles[i]}, { label: "triangle"});  
//     }
//     //now we need to call normalize data which analyses your data, look at the min and max ranges of pixel values then normalize all the inputs to nubers b/w 0 and 1
//     shapeclassifier.normalizeData();
//     //50 means we want to send all of the data, all 300 images into the neural network 50 times, then we need a callback to let us know it's done so we do that in 2nd argument which is a function we've defined later   
//     shapeclassifier.train({epochs: 50}, finishedTraining);
// }
//  function finishedTraining(){
//     console.log('finished training!!');
//     shapeclassifier.save();
//  }


//step one is to load the data via preload function and draw it
//step two is to create an ml5 neural network called as shapeclassifier, for doing
//an image classification problem with a convolutional neural network the dimension of the image are fundamental to how 
//neural network deals with data, what's width and height of image 
//we then save the model so we don't have to run the training process again 
//now we can have training and prediction all happening at the same time but let's spearate them, we'll take the frozen saved modle which is now completely divorced from the data and 
// upload it to the p5 web editor sketch, with that we can keep our training data private 


let shapeclassifier;
let canvas;
function setup() {
  canvas = createCanvas(64, 64);
   let options = {
        inputs: [64, 64, 4],
        task: "imageClassification",
    };
    shapeclassifier = ml5.neuralNetwork(options);
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }
  shapeclassifier.load(modelDetails, modelLoaded);
}
function modelLoaded(){
  console.log("model is ready!!");
}
//ask for prediction when I click the mouse
function mousePressed(){
  shapeclassifier.classify({image: canvas}, gotResults);
}

function gotResults(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  strokeWeight(4);
  rectMode(CENTER);
  rect(width/2, height/2, 40);
}