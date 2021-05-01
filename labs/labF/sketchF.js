let song;
let mic;
let volH = [];
let fft;
// this is here just so then i have my global variables set for the rest of the code

function setup() {
  song = loadSound('assets/Help.mp3');
  
  // this attaches the song i have in my asset file to a variable 
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
  // this sets up the mic and lets it so i can input audio from my own device
  amp = new p5.Amplitude();
  amp.setInput(song)
  // this is here so the volume of the song is tracked so it can be audio vizulized
  fft = new p5.FFT(0.9, 128);
  fft.setInput(mic);
  // this is here so that the audio from my mic can be transfered over to be vizualized
  
}

function mousePressed() {
  if (song.isPlaying()) {
    // this checks if the song is playing and if it is it will stop the song
    song.pause();
    
  } else {
    song.play();
    // this is here so if the song isnt playing it just starts the song
  }
}

function draw() {
  
  background(0)
  let vol = amp.getLevel();
  circle(mouseX ,mouseY, vol*500,);
  console.log('volume', vol);
  // this is the vizualizer for the song 
  let spectrum = fft.analyze();
  noStroke();
  fill(0);
  for (let i = 0; i< spectrum.length; i++){
    // takeing the volume data from my mic and converting into rectangles with sepretee heights
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
    fill(255,100,i)
    // this is the code for the mic audio vizualizer
  }

  
}




