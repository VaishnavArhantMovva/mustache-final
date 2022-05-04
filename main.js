function preload()
{
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide(); 
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on ("pose",gotPoses);   
}

function modelloaded()
{
    console.log("posenet is loaded");
}
noseX = "";
noseY = "";

function gotPoses(results)
{
   noseX = results[0].pose.nose.x-45;
   noseY = results[0].pose.nose.y-10;
   console.log("noseX ="+noseX+" noseY ="+noseY);
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,100,100)
}

function snapshot() {
    save("spyware_exe.png");
}