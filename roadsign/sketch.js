// Add some header info
// For TM template code

// Video - is a single variable 
let video;
let label = "waiting";
let classifier; //variable that stores the model

// STEP 1: Load the model!
//will load any important assets, images, data files, models before the program starts in setup 
function preload(){
    //we set classifier = ml5.image classifier 
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SnHOSYnxZ/');
}
//we connect to capture device (webcam) in setup 
function setup() {
  //background(100);
  createCanvas(900, 600);
 // canvas.parent('sketch-holder');
  // Create the video
  video = createCapture(VIDEO);
  video.size(1000, 1000);
  video.hide();
  
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo(){
//the function in ml5 to classify an image is called "classify"
//first argument to the classify function that we need to hand to it, is the image that we want to classify that's the video
//JavaScript works asynchornously i.e it takes time to classify the image in the video and it's going to report an event back once it's finished 
//and we need to handle that by giving it the name of a function that's going to get called as a callback, let's call that function got results  
classifier.classify(video, gotResults);
}
//we draw the video on canvas
function draw() {
 // background(100);
  
  // Draw the video
  image(video, 100, 0, 1000, 1000);
  video.size(1, 1);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(label, width/2, height - 16);
  // STEP 4: Draw the label
}
//when the prgoram starts we said classify, then we pass it in the video then we get the result, we add the result into the canvas and then we need to classify again   

// STEP 3: Get the classification!
//can receive either an error or some correct results, so error goes first and result goes second  
function gotResults(error, results){
if(error){
    console.error(error);
    return;
}
//store the result in the label variable
label = results[0].label;
classifyVideo();
//console.log(results[0].label);
}