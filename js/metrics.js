    let dragDropContainer=document.getElementById('dragDropContainer');dragDropContainer.addEventListener('drop',function(event){event.preventDefault();const files=event.dataTransfer.files;if(files.length>0){analyzeFile(files[0]);}});dragDropContainer.addEventListener('dragover',function(event){event.preventDefault();});
    // const fileInput=document.getElementById('fileInput');fileInput.addEventListener('change',function(event){const files=event.target.files;if(files.length>0){analyzeFile(files[0]);}});
    // function analyzeFile(file){const audioContext=new(window.AudioContext||window.webkitAudioContext)();const reader=new FileReader();reader.onload=function(){audioContext.decodeAudioData(reader.result,function(buffer){const channelData=buffer.getChannelData(0);const rms=calculateRMS(channelData);const peakAmplitude=calculatePeakAmplitude(channelData);const zeroCrossingRate=calculateZeroCrossingRate(channelData);displayMetric("RMS",rms);displayMetric("PeakAmplitude",peakAmplitude);displayMetric("ZeroCrossingRate",zeroCrossingRate);});};reader.readAsArrayBuffer(file);}
    function calculateRMS(samples){const squaredSum=samples.reduce((sum,sample)=>sum+sample*sample,0);return Math.sqrt(squaredSum/samples.length).toFixed(2);}
    function calculatePeakAmplitude(samples){return Math.max(...samples).toFixed(2);}
    function calculateZeroCrossingRate(signal){let zeroCrossings=0;for(let i=1;i<signal.length;i++){if(signal[i-1]*signal[i]<0){zeroCrossings++;}}return((zeroCrossings/signal.length)*100).toFixed(2);}
    function displayMetric(metricName,value){const element=document.getElementById(metricName);if(element){element.innerText=`${metricName}: ${value}`;}}







// function calculateSpectralCentroid(frequencies,magnitudes){let weightedSum=0;let totalMagnitude=0;for(let i=0;i<frequencies.length;i++){weightedSum+=frequencies[i]*magnitudes[i];totalMagnitude+=magnitudes[i];}return totalMagnitude===0?0:(weightedSum/totalMagnitude).toFixed(2);}
// function calculateRMS(samples){try{if(!Array.isArray(samples)||samples.length===0){throw new Error("Invalid input: samples must be a non-empty array.");}const squaredSum=samples.reduce((sum,sample)=>sum+sample*sample,0);return Math.sqrt(squaredSum/samples.length).toFixed(2);}catch(error){console.error("Error calculating RMS:",error);return null;}}
// function calculateHarmonicRatio(frequencies,magnitudes){try{if(!Array.isArray(frequencies)||!Array.isArray(magnitudes)||frequencies.length!==magnitudes.length){throw new Error("Invalid input: frequencies and magnitudes must be arrays of the same length.");}let harmonicEnergy=0;let totalEnergy=magnitudes.reduce((sum,mag)=>sum+mag,0);for(let i=1;i<frequencies.length;i++){if(frequencies[i]%frequencies[0]===0){harmonicEnergy+=magnitudes[i];}}return (harmonicEnergy/totalEnergy*100).toFixed(2);}catch(error){console.error("Error calculating Harmonic Ratio:",error);return null;}}
// function extractMetadata(file){try{const metadata={};if(!file)throw new Error("File is invalid for metadata extraction.");metadata.artist="Example Artist";metadata.album="Example Album";metadata.genre="Example Genre";return metadata;}catch(error){console.error("Error extracting metadata:",error);return {};}}
// function extractDuration(file){return new Promise((resolve,reject)=>{try{const audio=new Audio();audio.src=URL.createObjectURL(file);audio.onloadedmetadata=function(){resolve(audio.duration);};audio.onerror=function(){reject('Error extracting audio duration.');};}catch(error){reject("Error loading audio file for duration extraction: "+error);}});}
// function extractBitrate(file){try{if(!file)throw new Error("Invalid file for bitrate extraction.");return 320;}catch(error){console.error("Error extracting bitrate:",error);return null;}}
// function plotRMS(rmsValues,timeLabels){try{const ctx=document.getElementById('rmsChart').getContext('2d');const rmsChart=new Chart(ctx,{type:'line',data:{labels:timeLabels,datasets:[{label:'RMS',data:rmsValues,borderColor:'rgba(75, 192, 192, 1)',fill:false}]}});}catch(error){console.error("Error plotting RMS chart:",error);}}
// function detectClipping(channelData){try{if(!Array.isArray(channelData))throw new Error("Invalid audio data for clipping detection.");const clippingThreshold=1.0;const clippingRegions=[];for(let i=0;i<channelData.length;i++){if(Math.abs(channelData[i])>=clippingThreshold){clippingRegions.push(i);}}return clippingRegions;}catch(error){console.error("Error detecting clipping:",error);return[];}}
// function validateAudioData(file){try{if(!file||!file.name||!file.size){throw new Error("Invalid file: file must have a name and size.");}return true;}catch(error){console.error("File validation error:",error);return false;}}
// function calculatePeakAmplitude(samples){const peak=Math.max(...samples);return peak.toFixed(2);}
// function calculateZeroCrossingRate(signal){let zeroCrossings=0;for(let i=1;i<signal.length;i++){if(signal[i-1]*signal[i]<0){zeroCrossings++;}}return((zeroCrossings/signal.length)*100).toFixed(2);}
// function displayMetric(metricName,value){const element=document.getElementById(metricName);if(element){element.innerText=`${metricName}: ${value}`;}}
// let dragDropContainer=document.getElementById('dragDropContainer');dragDropContainer.addEventListener('drop',function(event){event.preventDefault();const files=event.dataTransfer.files;if(files.length>0){analyzeFile(files[0]);}}); dragDropContainer.addEventListener('dragover',function(event){event.preventDefault();});
// const fileInput=document.getElementById('fileInput');fileInput.addEventListener('change',function(event){const files=event.target.files;if(files.length>0){analyzeFile(files[0]);}});
// function analyzeFile(file){const audioContext=new(window.AudioContext||window.webkitAudioContext)();const reader=new FileReader();reader.onload=function(){audioContext.decodeAudioData(reader.result,function(buffer){const channelData=buffer.getChannelData(0);const rms=calculateRMS(channelData);const peakAmplitude=calculatePeakAmplitude(channelData);const zeroCrossingRate=calculateZeroCrossingRate(channelData);displayMetric("RMS",rms);displayMetric("PeakAmplitude",peakAmplitude);displayMetric("ZeroCrossingRate",zeroCrossingRate);});};reader.readAsArrayBuffer(file);}
// /* Populate Metadata */ function populateMetadata(){console.error('populateMetadata is not yet implemented.');}
// /* Generate Formula   */ function generateFormula(metric){const formulas={rms:`\\sqrt{\\frac{1}{N} \\sum_{i=1}^N x_i^2}`,harmonic:`\\frac{\\text{Energy of Harmonics}}{\\text{Total Energy}}`};return formulas[metric]||'\\text{No Formula Available}';}
// /* Render Formula     */ function renderFormula(container,formula){const element=document.getElementById(container);if(element){element.innerHTML=`\\(${formula}\\)`;MathJax.typesetPromise([element]).catch(err=>console.error('MathJax render error:',err));}}


// COMMENT FUNCTION 
// COMMENT FUNCTION 
// COMMENT FUNCTION 