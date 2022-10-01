
let classifier;

// Label
let label = 'loading please wait...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/TSkJ0WNNj/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(800, 500);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
  let emoji = '🤐';
 if(label == 'Stop'){
    emoji = '🛑'
 } else if(label == 'give way'){
    emoji = '⛛'
 } else if(label == 'school area'){
  emoji = '🚸'
 } else if(label == 'warning sign'){
  emoji = '⚠'
 } else if(label == 'car sliding'){
  emoji = '⛐'
 } else if(label == 'no pedestrians'){
  emoji = '🚷'
 } else if(label == 'no entry'){
  emoji = '🚫'
 } else if(label == 'two way left way traffic'){
  emoji = '⛖'
 }
textSize(256);
text(emoji, width/2, height/2);
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}

// // Add some header info
// // For TM template code

// // Video - is a single variable 
// let video;
// let label = "waiting";
// let classifier; //variable that stores the model

// // STEP 1: Load the model!
// //will load any important assets, images, data files, models before the program starts in setup 
// function preload(){
//     //we set classifier = ml5.image classifier 
//     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TSkJ0WNNj/');
// }
// //we connect to capture device (webcam) in setup 
// function setup() {
//   createCanvas(1010, 740);

//   // STEP 2: Start classifying
//   classifyAudio();
// }

// // STEP 2 classify!
// function classifyVideo(){
// //the function in ml5 to classify an image is called "classify"
// //first argument to the classify function that we need to hand to it, is the image that we want to classify that's the video
// //JavaScript works asynchornously i.e it takes time to classify the image in the video and it's going to report an event back once it's finished 
// //and we need to handle that by giving it the name of a function that's going to get called as a callback, let's call that function got results  
// classifier.classify(gotResults);
// }
// //we draw the video on canvas
// function draw() {
//   background(0);
//   textAlign(CENTER, CENTER);
// }

// let emoji = '😁';
// if(label == 'Stop'){
//     emoji = '☺'
// } else if(label == 'no overtaking'){
//     emoji = '🙉'
// }
// textSize(256);
// text(emoji, width/2, height/2);
// function gotResults(error, results){
// if(error){
//     console.error(error);
//     return;
// }
// //store the result in the label variable
// label = results[0].label;

// //console.log(results[0].label);
// }