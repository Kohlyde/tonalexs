/* Initialize audio ctx */
const audioPlayer = document.getElementById("audioPlayer");
/* Get canvas element */
const canvas = document.getElementById("spectrogramCanvas");
/* Get 2D context */
const canvasCtx = canvas.getContext("2d");

/* Ensure AudioContext is declared only once */
if (!window.audioContext) {
    window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

/* Check if AudioContext is suspended and resume it */
document.addEventListener('click', () => {
    if (window.audioContext.state === 'suspended') {
        window.audioContext.resume().then(() => console.log('AudioContext resumed.'));
    }
});

/* Initialize analyser */
const analyser = window.audioContext.createAnalyser();
/* Create gain node */
const gainNode = window.audioContext.createGain();
/* Create media source node */
let sourceNode = window.audioContext.createMediaElementSource(audioPlayer);

/* Connect audio nodes */
sourceNode.connect(analyser);
sourceNode.connect(gainNode);
gainNode.connect(window.audioContext.destination);

/* Set analyser parameters */
analyser.fftSize = 2048;
/* Get frequency bin count */
const bufferLength = analyser.frequencyBinCount;
/* Initialize data array */
const dataArray = new Uint8Array(bufferLength);

/* Function to draw spectrogram */
function drawSpectrogram() {
    /* Request animation frame */
    requestAnimationFrame(drawSpectrogram);
    /* Get frequency data */
    analyser.getByteFrequencyData(dataArray);
    /* Clear the canvas */
    canvasCtx.fillStyle = "rgb(255, 255, 255)";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    /* Draw zero-axis line */
    const zeroLineY = canvas.height / 2 + 10;
    canvasCtx.beginPath();
    canvasCtx.setLineDash([5, 5]);
    canvasCtx.strokeStyle = "#1E2337";
    canvasCtx.lineWidth = 1;
    canvasCtx.moveTo(0, zeroLineY);
    canvasCtx.lineTo(canvas.width, zeroLineY);
    canvasCtx.stroke();
    canvasCtx.setLineDash([]);

    /* Draw spectrogram bars */
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        canvasCtx.fillStyle = `rgb(30, 35, 55)`;
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
    }
}

/* Start drawing the spectrogram */
drawSpectrogram();

/* Event listeners for audio player */
audioPlayer.addEventListener("play", () => {
    if (window.audioContext.state === "suspended") {
        window.audioContext.resume().catch((err) =>
            console.error("Audio context resume failed:", err)
        );
    }
    drawSpectrogram();
});

audioPlayer.addEventListener("pause", () => {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
});

/* Handle file input for loading audio */
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

/* Resize canvas dynamically */
window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = 300;
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
});

/* Calculate Spectral Centroid */
function calculateSpectralCentroid(frequencies, magnitudes) {
    let weightedSum = 0;
    let totalMagnitude = 0;
    for (let i = 0; i < frequencies.length; i++) {
        weightedSum += frequencies[i] * magnitudes[i];
        totalMagnitude += magnitudes[i];
    }
    return totalMagnitude === 0 ? 0 : (weightedSum / totalMagnitude).toFixed(2);
}

/* Calculate RMS */
function calculateRMS(samples) {
    const squaredSum = samples.reduce((sum, sample) => sum + sample * sample, 0);
    return Math.sqrt(squaredSum / samples.length).toFixed(2);
}

/* Calculate Zero-Crossing Rate */
function calculateZeroCrossingRate(signal) {
    let zeroCrossings = 0;
    for (let i = 1; i < signal.length; i++) {
        if (signal[i - 1] * signal[i] < 0) {
            zeroCrossings++;
        }
    }
    return ((zeroCrossings / signal.length) * 100).toFixed(2);
}

/* Detect Clipping */
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

/* Display Calculated Metrics */
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

/* Periodically update metrics */
function startMetricUpdates(analyser, dataArray, audioContext, audioPlayer) {
    setInterval(() => {
        if (!audioPlayer.paused) {
            displayMetrics(analyser, dataArray, audioContext);
        }
    }, 1000);
}

/* Init WaveSurfer DOM */
let waveSurfer;
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#waveform');
    if (!container) {
        console.error('WaveSurfer container not found!');
        return;
    }
    waveSurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'gold',
        progressColor: '#1e2337'
    });

    document.getElementById('fileInput').addEventListener('change', e => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('audio/')) {
            const fileURL = URL.createObjectURL(file);
            waveSurfer.load(fileURL);
            waveSurfer.on('ready', () => {
                console.log('Waveform rendering complete!');
            });
            waveSurfer.on('error', err => {
                console.error('WaveSurfer error:', err);
            });
        } else {
            alert('Invalid audio file.');
        }
    });
});