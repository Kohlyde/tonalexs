const audioPlayer = document.getElementById("audioPlayer");
const canvas = document.getElementById("spectrogramCanvas");
const canvasCtx = canvas.getContext("2d");

// Create Audio Context with fallback for older browsers
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let sourceNode = null;

try {
  sourceNode = audioContext.createMediaElementSource(audioPlayer);
} catch (error) {
  console.error("Error creating audio source:", error);
}

const analyser = audioContext.createAnalyser();
const gainNode = audioContext.createGain();

// Connect audio nodes
sourceNode.connect(analyser);
sourceNode.connect(gainNode);
gainNode.connect(audioContext.destination);

// Set analyser parameters
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Function to draw the spectrogram
function drawSpectrogram() {
  requestAnimationFrame(drawSpectrogram);

  // Get frequency data
  analyser.getByteFrequencyData(dataArray);

  // Clear canvas for redrawing
  canvasCtx.fillStyle = "rgb(255, 255, 255)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw zero-axis dashed line
  const zeroLineY = canvas.height / 2 + 10; // Adjusted position
  canvasCtx.beginPath();
  canvasCtx.setLineDash([5, 5]); // Dashed line
  canvasCtx.strokeStyle = "#1E2337"; // Blood orange color
  canvasCtx.lineWidth = 1;
  canvasCtx.moveTo(0, zeroLineY);
  canvasCtx.lineTo(canvas.width, zeroLineY);
  canvasCtx.stroke();
  canvasCtx.setLineDash([]); // Reset dash style

  // Draw spectrogram bars
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i];
    canvasCtx.fillStyle = `rgb(30, 35, 55)`; // Fire-like color
    canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth + 2, barHeight / 2);
    x += barWidth + 1;
  }
}

// Event listeners for audio player
audioPlayer.addEventListener("play", () => {
  if (audioContext.state === "suspended") {
    audioContext.resume().catch((err) =>
      console.error("Audio context resume failed:", err)
    );
  }
  drawSpectrogram();
});

audioPlayer.addEventListener("pause", () => {
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
});

// Handle file input for loading audio
document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("audio/")) {
    const objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
    audioPlayer.load();
    audioPlayer.play();
  } else {
    alert("Please select a valid audio file.");
  }
});
// Resize canvas dynamically for responsiveness
window.addEventListener("resize", () => {
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = 300; // Set a default height
canvasCtx.clearRect(0, 0, canvas.width, canvas.height); // Clear on resize
});

// Calculate Spectral Centroid
function calculateSpectralCentroid(frequencies, magnitudes) {
  let weightedSum = 0;
  let totalMagnitude = 0;
  for (let i = 0; i < frequencies.length; i++) {
    weightedSum += frequencies[i] * magnitudes[i];
    totalMagnitude += magnitudes[i];
  }
  return totalMagnitude === 0 ? 0 : (weightedSum / totalMagnitude).toFixed(2);
}

// Calculate RMS (Root Mean Square)
function calculateRMS(samples) {
  const squaredSum = samples.reduce((sum, sample) => sum + sample * sample, 0);
  return Math.sqrt(squaredSum / samples.length).toFixed(2);
}

// Calculate Peak Amplitude
function calculatePeakAmplitude(samples) {
  return Math.max(...samples).toFixed(2);
}

// Calculate Zero-Crossing Rate
function calculateZeroCrossingRate(signal) {
  let zeroCrossings = 0;
  for (let i = 1; i < signal.length; i++) {
    if (signal[i - 1] * signal[i] < 0) {
      zeroCrossings++;
    }
  }
  return ((zeroCrossings / signal.length) * 100).toFixed(2);
}

// Detect Clipping
function detectClipping(channelData) {
  const clippingThreshold = 1.0;
  const clippingRegions = [];
  for (let i = 0; i < channelData.length; i++) {
    if (Math.abs(channelData[i]) >= clippingThreshold) {
      clippingRegions.push(i);
    }
  }
  return clippingRegions;
}

// Display Calculated Metrics
function displayMetrics(analyser, dataArray, audioContext) {
  analyser.getByteFrequencyData(dataArray);
  const frequencies = Array.from({ length: dataArray.length }, (_, i) => i * (audioContext.sampleRate / analyser.fftSize));
  const spectralCentroid = calculateSpectralCentroid(frequencies, dataArray);
  const rms = calculateRMS(dataArray);
  const peakAmplitude = calculatePeakAmplitude(dataArray);
  const zeroCrossingRate = calculateZeroCrossingRate(dataArray);

  console.log("Spectral Centroid:", spectralCentroid);
  console.log("RMS:", rms);
  console.log("Peak Amplitude:", peakAmplitude);
  console.log("Zero-Crossing Rate:", zeroCrossingRate);
}

// Periodically update metrics
function startMetricUpdates(analyser, dataArray, audioContext, audioPlayer) {
  setInterval(() => {
    if (!audioPlayer.paused) {
      displayMetrics(analyser, dataArray, audioContext);
    }
  }, 1000); // Update every second
}
// Calculate Spectral Centroid
function calculateSpectralCentroid(frequencies, magnitudes) {
  let weightedSum = 0;
  let totalMagnitude = 0;
  for (let i = 0; i < frequencies.length; i++) {
    weightedSum += frequencies[i] * magnitudes[i];
    totalMagnitude += magnitudes[i];
  }
  return totalMagnitude === 0 ? 0 : (weightedSum / totalMagnitude).toFixed(2);
}

// Calculate RMS (Root Mean Square)
function calculateRMS(samples) {
  const squaredSum = samples.reduce((sum, sample) => sum + sample * sample, 0);
  return Math.sqrt(squaredSum / samples.length).toFixed(2);
}

// Calculate Peak Amplitude
function calculatePeakAmplitude(samples) {
  return Math.max(...samples).toFixed(2);
}

// Calculate Zero-Crossing Rate
function calculateZeroCrossingRate(signal) {
  let zeroCrossings = 0;
  for (let i = 1; i < signal.length; i++) {
    if (signal[i - 1] * signal[i] < 0) {
      zeroCrossings++;
    }
  }
  return ((zeroCrossings / signal.length) * 100).toFixed(2);
}

// Detect Clipping
function detectClipping(channelData) {
  const clippingThreshold = 1.0;
  const clippingRegions = [];
  for (let i = 0; i < channelData.length; i++) {
    if (Math.abs(channelData[i]) >= clippingThreshold) {
      clippingRegions.push(i);
    }
  }
  return clippingRegions;
}

// Display Calculated Metrics
function displayMetrics(analyser, dataArray, audioContext) {
  analyser.getByteFrequencyData(dataArray);
  const frequencies = Array.from({ length: dataArray.length }, (_, i) => i * (audioContext.sampleRate / analyser.fftSize));
  const spectralCentroid = calculateSpectralCentroid(frequencies, dataArray);
  const rms = calculateRMS(dataArray);
  const peakAmplitude = calculatePeakAmplitude(dataArray);
  const zeroCrossingRate = calculateZeroCrossingRate(dataArray);

  console.log("Spectral Centroid:", spectralCentroid);
  console.log("RMS:", rms);
  console.log("Peak Amplitude:", peakAmplitude);
  console.log("Zero-Crossing Rate:", zeroCrossingRate);
}

// Periodically update metrics
function startMetricUpdates(analyser, dataArray, audioContext, audioPlayer) {
  setInterval(() => {
    if (!audioPlayer.paused) {
      displayMetrics(analyser, dataArray, audioContext);
    }
  }, 1000); // Update every second
}

/* DOM Ready Event   */ document.addEventListener('DOMContentLoaded',()=>{const container=document.querySelector('#waveform');if(!container){console.error('WaveSurfer container not found in the DOM!');return;}const waveSurfer=WaveSurfer.create({container:'#waveform',waveColor:'violet',progressColor:'purple'});});


// const audioPlayer = document.getElementById("audioPlayer");
// const canvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = canvas.getContext("2d");

// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let sourceNode = null;

// try {
//   sourceNode = audioContext.createMediaElementSource(audioPlayer);
// } catch (error) {
//   console.error("Error creating audio source:", error);
// }

// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();

// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);

// analyser.fftSize = 2048;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// function drawSpectrogram() {
//   requestAnimationFrame(drawSpectrogram);

//   // Get frequency data
//   analyser.getByteFrequencyData(dataArray);

//   // Clear canvas
//   canvasCtx.fillStyle = "rgb(255, 255, 255)";
//   canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

//   // Draw zero-axis dashed line
//   canvasCtx.beginPath();
//   canvasCtx.setLineDash([5, 5]);
//   canvasCtx.strokeStyle = "rgb(255, 69, 0)";
//   canvasCtx.lineWidth = 1;
//   canvasCtx.moveTo(0, canvas.height / 2);
//   canvasCtx.lineTo(canvas.width, canvas.height / 2);
//   canvasCtx.stroke();
//   canvasCtx.setLineDash([]);

//   // Draw spectrogram bars
//   const barWidth = (canvas.width / bufferLength) * 2.5;
//   let x = 0;

//   for (let i = 0; i < bufferLength; i++) {
//     const barHeight = dataArray[i];
//     canvasCtx.fillStyle = `rgb(${barHeight + 200}, ${barHeight + 100}, 0)`;
//     canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
//     x += barWidth + 1;
//   }
// }

// audioPlayer.addEventListener("play", () => {
//   if (audioContext.state === "suspended") {
//     audioContext.resume().catch((err) =>
//       console.error("Audio context resume failed:", err)
//     );
//   }
//   drawSpectrogram();
// });

// audioPlayer.addEventListener("pause", () => {
//   canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
// });

// document.getElementById("fileInput").addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     const objectURL = URL.createObjectURL(file);
//     audioPlayer.src = objectURL;
//     audioPlayer.load();
//     audioPlayer.play();
//   } else {
//     alert("Please select a valid audio file.");
//   }
// });



// const audioPlayer = document.getElementById("audioPlayer");
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const sourceNode = audioContext.createMediaElementSource(audioPlayer);
// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();
// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// analyser.fftSize = 2048;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// const canvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = canvas.getContext("2d");

// function drawSpectrogram() {
//   requestAnimationFrame(drawSpectrogram);
//   analyser.getByteFrequencyData(dataArray);
//   canvasCtx.fillStyle = "rgb(255, 255, 255)";
//   canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
//   const barWidth = (canvas.width / bufferLength) * 2.5;
//   let x = 0;
//   for (let i = 0; i < bufferLength; i++) {
//     const barHeight = dataArray[i];
//     // Fire-like color adjustment
//     canvasCtx.fillStyle = `rgb(${barHeight + 200}, ${barHeight + 100}, 0)`;
//     canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
//     x += barWidth + 1;
//   }
// }

// audioPlayer.addEventListener("play", () => {
//   if (audioContext.state === "suspended") {
//     audioContext.resume();
//   }
//   drawSpectrogram();
// });

// audioPlayer.addEventListener("pause", () => {
//   canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
// });

// document.getElementById("fileInput").addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     const objectURL = URL.createObjectURL(file);
//     audioPlayer.src = objectURL;
//     audioPlayer.load();
//     audioPlayer.play();
//   } else {
//     alert("Please select a valid audio file.");
//   }
// });



// const audioPlayer = document.getElementById("audioPlayer");
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const sourceNode = audioContext.createMediaElementSource(audioPlayer);
// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();
// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// analyser.fftSize = 2048;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// const canvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = canvas.getContext("2d");

// function drawSpectrogram() {
//   requestAnimationFrame(drawSpectrogram);
//   analyser.getByteFrequencyData(dataArray);
//   canvasCtx.fillStyle = "rgb(255, 255, 255)";
//   canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
//   const barWidth = (canvas.width / bufferLength) * 2.5;
//   let x = 0;
//   for (let i = 0; i < bufferLength; i++) {
//     const barHeight = dataArray[i];
//     canvasCtx.fillStyle = `rgb(${barHeight + 100}, 10, 15)`;
//     canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
//     x += barWidth + 1;
//   }
// }

// audioPlayer.addEventListener("play", () => {
//   if (audioContext.state === "suspended") {
//     audioContext.resume();
//   }
//   drawSpectrogram();
// });

// audioPlayer.addEventListener("pause", () => {
//   canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
// });

// document.getElementById("fileInput").addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     const objectURL = URL.createObjectURL(file);
//     audioPlayer.src = objectURL;
//     audioPlayer.load();
//     audioPlayer.play();
//   } else {
//     alert("Please select a valid audio file.");
//   }
// });
// // References to elements
// const dragDropContainer = document.getElementById("dragDropContainer");
// const fileInput = document.getElementById("fileInput");
// const audioPlayer = document.getElementById("audioPlayer");
// const spectrogramCanvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = spectrogramCanvas.getContext("2d");

// // Initialize Audio Context
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const sourceNode = audioContext.createMediaElementSource(audioPlayer);
// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();
// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// analyser.fftSize = 2048;

// // Prepare spectrogram variables
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// // Drag-and-Drop functionality
// dragDropContainer.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   dragDropContainer.classList.add("dragging");
// });
// dragDropContainer.addEventListener("dragleave", () => {
//   dragDropContainer.classList.remove("dragging");
// });
// dragDropContainer.addEventListener("drop", (event) => {
//   event.preventDefault();
//   dragDropContainer.classList.remove("dragging");
//   const file = event.dataTransfer.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     loadAudio(file);
//   } else {
//     alert("Please drop a valid audio file.");
//   }
// });

// // File input functionality
// fileInput.addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     loadAudio(file);
//   } else {
//     alert("Please select a valid audio file.");
//   }
// });

// // Load the audio file into the player
// function loadAudio(file) {
//   const objectURL = URL.createObjectURL(file);
//   audioPlayer.src = objectURL;
//   audioPlayer.load();
//   audioPlayer.play();
// }

// // Draw spectrogram
// function drawSpectrogram() {
//   requestAnimationFrame(drawSpectrogram);
//   analyser.getByteFrequencyData(dataArray);
//   canvasCtx.fillStyle = "rgb(0, 0, 0)";
//   canvasCtx.fillRect(0, 0, spectrogramCanvas.width, spectrogramCanvas.height);

//   const barWidth = (spectrogramCanvas.width / bufferLength) * 2.5;
//   let x = 0;

//   for (let i = 0; i < bufferLength; i++) {
//     const barHeight = dataArray[i];
//     canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
//     canvasCtx.fillRect(
//       x,
//       spectrogramCanvas.height - barHeight / 2,
//       barWidth,
//       barHeight / 2
//     );
//     x += barWidth + 1;
//   }
// }

// // Event listeners for audio player
// audioPlayer.addEventListener("play", () => {
//   if (audioContext.state === "suspended") {
//     audioContext.resume();
//   }
//   drawSpectrogram();
// });
// audioPlayer.addEventListener("pause", () => {
//   canvasCtx.clearRect(0, 0, spectrogramCanvas.width, spectrogramCanvas.height);
// });


// // Reference necessary elements
// const audioPlayer = document.getElementById("audioPlayer");
// const spectrogramCanvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = spectrogramCanvas.getContext("2d");
// const dropArea = document.querySelector(".visualization-container");

// // Initialize Audio Context
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const sourceNode = audioContext.createMediaElementSource(audioPlayer);
// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();
// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// analyser.fftSize = 2048;

// // Prepare for spectrogram
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// // Drag-and-Drop functionality
// dropArea.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   dropArea.classList.add("dragging");
// });
// dropArea.addEventListener("dragleave", () => {
//   dropArea.classList.remove("dragging");
// });
// dropArea.addEventListener("drop", (event) => {
//   event.preventDefault();
//   dropArea.classList.remove("dragging");
//   const file = event.dataTransfer.files[0];
//   if (file && file.type.startsWith("audio/")) {
//     loadAudio(file);
//   } else {
//     alert("Please drop a valid audio file.");
//   }
// });

// // Load the audio file into the player
// function loadAudio(file) {
//   const objectURL = URL.createObjectURL(file);
//   audioPlayer.src = objectURL;
//   audioPlayer.load();
//   audioPlayer.play();
// }

// // Draw spectrogram
// function drawSpectrogram() {
//   requestAnimationFrame(drawSpectrogram);
//   analyser.getByteFrequencyData(dataArray);
//   canvasCtx.fillStyle = "rgb(0, 0, 0)";
//   canvasCtx.fillRect(0, 0, spectrogramCanvas.width, spectrogramCanvas.height);

//   const barWidth = (spectrogramCanvas.width / bufferLength) * 2.5;
//   let x = 0;

//   for (let i = 0; i < bufferLength; i++) {
//     const barHeight = dataArray[i];
//     canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
//     canvasCtx.fillRect(
//       x,
//       spectrogramCanvas.height - barHeight / 2,
//       barWidth,
//       barHeight / 2
//     );
//     x += barWidth + 1;
//   }
// }

// // Event listeners for play and pause
// audioPlayer.addEventListener("play", () => {
//   if (audioContext.state === "suspended") {
//     audioContext.resume();
//   }
//   drawSpectrogram();
// });
// audioPlayer.addEventListener("pause", () => {
//   canvasCtx.clearRect(0, 0, spectrogramCanvas.width, spectrogramCanvas.height);
// });




// const audioPlayer = document.getElementById("audioPlayer");
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const sourceNode = audioContext.createMediaElementSource(audioPlayer);
// const analyser = audioContext.createAnalyser();
// const gainNode = audioContext.createGain();
// sourceNode.connect(analyser);
// sourceNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// analyser.fftSize = 2048;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// const canvas = document.getElementById("spectrogramCanvas");
// const canvasCtx = canvas.getContext("2d");
// function drawSpectrogram() {requestAnimationFrame(drawSpectrogram); analyser.getByteFrequencyData(dataArray); canvasCtx.fillStyle = "rgb(0, 0, 0)"; canvasCtx.fillRect(0, 0, canvas.width, canvas.height); const barWidth = (canvas.width / bufferLength) * 2.5; let x = 0; for (let i = 0; i < bufferLength; i++) {const barHeight = dataArray[i]; canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`; canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2); x += barWidth + 1;}} 
// audioPlayer.addEventListener("play", () => {if (audioContext.state === "suspended") {audioContext.resume();} drawSpectrogram();});
// audioPlayer.addEventListener("pause", () => {canvasCtx.clearRect(0, 0, canvas.width, canvas.height);});
// function calculateSpectralCentroid(frequencies, magnitudes) {let weightedSum = 0; let totalMagnitude = 0; for (let i = 0; i < frequencies.length; i++) {weightedSum += frequencies[i] * magnitudes[i]; totalMagnitude += magnitudes[i];} return totalMagnitude === 0 ? 0 : (weightedSum / totalMagnitude).toFixed(2);}
// function calculateRMS(samples) {const squaredSum = samples.reduce((sum, sample) => sum + sample * sample, 0); return Math.sqrt(squaredSum / samples.length).toFixed(2);}
// function calculatePeakAmplitude(samples) {return Math.max(...samples).toFixed(2);}
// function calculateZeroCrossingRate(signal) {let zeroCrossings = 0; for (let i = 1; i < signal.length; i++) {if (signal[i - 1] * signal[i] < 0) {zeroCrossings++;}} return ((zeroCrossings / signal.length) * 100).toFixed(2);}
// function detectClipping(channelData) {const clippingThreshold = 1.0; const clippingRegions = []; for (let i = 0; i < channelData.length; i++) {if (Math.abs(channelData[i]) >= clippingThreshold) {clippingRegions.push(i);}} return clippingRegions;}
// function extractMetadata(file) {const metadata = {}; metadata.artist = "Example Artist"; metadata.album = "Example Album"; metadata.genre = "Example Genre"; return metadata;}
// function extractDuration(file) {return new Promise((resolve, reject) => {const audio = new Audio(); audio.src = URL.createObjectURL(file); audio.onloadedmetadata = function () {resolve(audio.duration);}; audio.onerror = function () {reject('Error extracting audio duration.');};});}
// function extractBitrate(file) {return 320;}
// function loadWaveform(file) {wavesurfer.load(URL.createObjectURL(file));}
// function plotRMS(rmsValues, timeLabels) {const ctx = document.getElementById('rmsChart').getContext('2d'); const rmsChart = new Chart(ctx, {type: 'line', data: {labels: timeLabels, datasets: [{label: 'RMS', data: rmsValues, borderColor: 'rgba(75, 192, 192, 1)', fill: false}]}});}
