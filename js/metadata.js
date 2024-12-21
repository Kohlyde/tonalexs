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
  
  // Metadata extraction
  function extractAudioMetadata(file) {
    if (!file) {
      console.error("No file provided for metadata extraction.");
      return;
    }
  
    const fileReader = new FileReader();
  
    // Basic File-Level Metadata
    const fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB"; // Convert to MB
    const mimeType = file.type || "Unknown";
    const lastModified = new Date(file.lastModified).toLocaleString();
    const extension = file.name.split(".").pop();
  
    // Populate basic file properties
    document.getElementById("fileName").innerText = file.name || "Unknown";
    document.getElementById("fileSize").innerText = fileSize;
    document.getElementById("lastModified").innerText = lastModified;
    document.getElementById("mimeType").innerText = mimeType;
    document.getElementById("extension").innerText = extension;
  
    fileReader.onload = function () {
      window.jsmediatags.read(file, {
        onSuccess: function (tag) {
          const metadata = tag.tags;
  
          // Populate metadata tags
          document.getElementById("title").innerText = metadata.title || "Unknown";
          document.getElementById("artist").innerText = metadata.artist || "Unknown";
          document.getElementById("album").innerText = metadata.album || "Unknown";
          document.getElementById("genre").innerText = metadata.genre || "Unknown";
          document.getElementById("year").innerText = metadata.year || "Unknown";
          document.getElementById("track").innerText = metadata.track || "Unknown";
          document.getElementById("composer").innerText = metadata.composer || "Unknown";
          document.getElementById("lyrics").innerText = metadata.unsynchronisedLyrics || "Not Available";
          document.getElementById("publisher").innerText = metadata.publisher || "Unknown";
          document.getElementById("discNumber").innerText = metadata.part_of_a_set || "Unknown";
          document.getElementById("encoder").innerText = metadata.encoded_by || "Unknown";
          document.getElementById("language").innerText = metadata.language || "Unknown";
          document.getElementById("copyright").innerText = metadata.copyright || "Unknown";
          document.getElementById("isrc").innerText = metadata.isrc || "Unknown";
          document.getElementById("bpm").innerText = metadata.TBPM || "Unknown";
          document.getElementById("albumArtist").innerText = metadata.album_artist || "Unknown";
          document.getElementById("key").innerText = metadata.key || "Unknown";
          document.getElementById("initialKey").innerText = metadata.initial_key || "Unknown";
          document.getElementById("length").innerText = metadata.length || "Unknown";
          document.getElementById("comments").innerText = metadata.comment || "None";
  
          // Display album art (if available)
          if (metadata.picture && metadata.picture.data) {
            const pictureData = new Uint8Array(metadata.picture.data);
            const blob = new Blob([pictureData]);
            const url = URL.createObjectURL(blob);
            document.getElementById("albumArt").src = url;
          } else {
            document.getElementById("albumArt").src = "https://via.placeholder.com/100";
          }
        },
        onError: function (error) {
          console.error("Error extracting metadata:", error);
          alert("Failed to extract metadata from the audio file.");
        },
      });
    };
  
    fileReader.onerror = function (error) {
      console.error("FileReader error:", error);
      alert("Failed to read the audio file.");
    };
  
    fileReader.readAsArrayBuffer(file);
  }
  
  // Bind the file input element to the metadata extraction function
  document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    extractAudioMetadata(file);
  });
  



// function extractAudioMetadata(file) {
//     if (!file) {
//       console.error("No file provided for metadata extraction.");
//       return;
//     }
  
//     const fileReader = new FileReader();
  
//     // Basic File-Level Metadata
//     const fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB"; // Convert to MB
//     const mimeType = file.type || "Unknown";
//     const lastModified = new Date(file.lastModified).toLocaleString();
//     const extension = file.name.split(".").pop();
  
//     // Populate basic file properties
//     document.getElementById("fileName").innerText = file.name || "Unknown";
//     document.getElementById("fileSize").innerText = fileSize;
//     document.getElementById("lastModified").innerText = lastModified;
//     document.getElementById("mimeType").innerText = mimeType;
//     document.getElementById("extension").innerText = extension;
  
//     fileReader.onload = function () {
//       window.jsmediatags.read(file, {
//         onSuccess: function (tag) {
//           const metadata = tag.tags;
  
//           // Populate metadata tags
//           document.getElementById("title").innerText = metadata.title || "Unknown";
//           document.getElementById("artist").innerText = metadata.artist || "Unknown";
//           document.getElementById("album").innerText = metadata.album || "Unknown";
//           document.getElementById("genre").innerText = metadata.genre || "Unknown";
//           document.getElementById("year").innerText = metadata.year || "Unknown";
//           document.getElementById("track").innerText = metadata.track || "Unknown";
//           document.getElementById("composer").innerText = metadata.composer || "Unknown";
//           document.getElementById("lyrics").innerText = metadata.unsynchronisedLyrics || "Not Available";
//           document.getElementById("publisher").innerText = metadata.publisher || "Unknown";
//           document.getElementById("discNumber").innerText = metadata.part_of_a_set || "Unknown";
//           document.getElementById("encoder").innerText = metadata.encoded_by || "Unknown";
//           document.getElementById("language").innerText = metadata.language || "Unknown";
//           document.getElementById("copyright").innerText = metadata.copyright || "Unknown";
//           document.getElementById("isrc").innerText = metadata.isrc || "Unknown";
//           document.getElementById("bpm").innerText = metadata.TBPM || "Unknown";
//           document.getElementById("albumArtist").innerText = metadata.album_artist || "Unknown";
//           document.getElementById("key").innerText = metadata.key || "Unknown";
//           document.getElementById("initialKey").innerText = metadata.initial_key || "Unknown";
//           document.getElementById("length").innerText = metadata.length || "Unknown";
//           document.getElementById("comments").innerText = metadata.comment || "None";
  
//           // Display album art (if available)
//           if (metadata.picture && metadata.picture.data) {
//             const pictureData = new Uint8Array(metadata.picture.data);
//             const blob = new Blob([pictureData]);
//             const url = URL.createObjectURL(blob);
//             document.getElementById("albumArt").src = url;
//           } else {
//             document.getElementById("albumArt").src = "https://via.placeholder.com/100";
//           }
//         },
//         onError: function (error) {
//           console.error("Error extracting metadata:", error);
//           alert("Failed to extract metadata from the audio file.");
//         },
//       });
//     };
  
//     fileReader.onerror = function (error) {
//       console.error("FileReader error:", error);
//       alert("Failed to read the audio file.");
//     };
  
//     fileReader.readAsArrayBuffer(file);
//   }
  





// // function extractAudioMetadata(file) {
// //     if (!file) {
// //         console.error("No file provided for metadata extraction.");
// //         return;
// //     }
// //     const fileReader = new FileReader();

// //     // Basic File-Level Metadata
// //     const fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB"; // Convert to MB
// //     const fileType = file.type || "Unknown";
// //     const lastModified = new Date(file.lastModified).toLocaleString();

// //     // Check and Display Basic File Properties
// //     if (document.getElementById("fileName")) document.getElementById("fileName").innerText = `File Name: ${file.name || "Unknown"}`;
// //     if (document.getElementById("fileSize")) document.getElementById("fileSize").innerText = `File Size: ${fileSize}`;
// //     if (document.getElementById("fileType")) document.getElementById("fileType").innerText = `File Type: ${fileType}`;
// //     if (document.getElementById("lastModified")) document.getElementById("lastModified").innerText = `Last Modified: ${lastModified}`;

// //     // Read the file as ArrayBuffer for metadata extraction
// //     fileReader.onload = function () {
// //         window.jsmediatags.read(file, {
// //             onSuccess: function (tag) {
// //                 const metadata = tag.tags;

// //                 // Check and Display Standard Metadata Fields
// //                 if (document.getElementById("title")) document.getElementById("title").innerText = `Title: ${metadata.title || "Unknown"}`;
// //                 if (document.getElementById("artist")) document.getElementById("artist").innerText = `Artist: ${metadata.artist || "Unknown"}`;
// //                 if (document.getElementById("album")) document.getElementById("album").innerText = `Album: ${metadata.album || "Unknown"}`;
// //                 if (document.getElementById("genre")) document.getElementById("genre").innerText = `Genre: ${metadata.genre || "Unknown"}`;
// //                 if (document.getElementById("year")) document.getElementById("year").innerText = `Year: ${metadata.year || "Unknown"}`;
// //                 if (document.getElementById("track")) document.getElementById("track").innerText = `Track Number: ${metadata.track || "Unknown"}`;
// //                 if (document.getElementById("composer")) document.getElementById("composer").innerText = `Composer: ${metadata.composer || "Unknown"}`;
// //                 if (document.getElementById("bitrate")) document.getElementById("bitrate").innerText = `Bitrate: ${metadata.TBPM || "Unknown"}`;
// //                 if (document.getElementById("comments")) document.getElementById("comments").innerText = `Comments: ${metadata.comment || "None"}`;

// //                 // Check and Display Additional Metadata Fields
// //                 if (document.getElementById("lyrics")) document.getElementById("lyrics").innerText = `Lyrics: ${metadata.unsynchronised_lyrics || "Not Available"}`;
// //                 if (document.getElementById("publisher")) document.getElementById("publisher").innerText = `Publisher: ${metadata.publisher || "Unknown"}`;
// //                 if (document.getElementById("discNumber")) document.getElementById("discNumber").innerText = `Disc Number: ${metadata.part_of_a_set || "Unknown"}`;
// //                 if (document.getElementById("encoder")) document.getElementById("encoder").innerText = `Encoder: ${metadata.encoded_by || "Unknown"}`;
// //                 if (document.getElementById("language")) document.getElementById("language").innerText = `Language: ${metadata.language || "Unknown"}`;
// //                 if (document.getElementById("copyright")) document.getElementById("copyright").innerText = `Copyright: ${metadata.copyright || "None"}`;
// //                 if (document.getElementById("isrc")) document.getElementById("isrc").innerText = `ISRC: ${metadata.isrc || "Unknown"}`;
// //                 if (document.getElementById("bpm")) document.getElementById("bpm").innerText = `BPM: ${metadata.TBPM || "Unknown"}`;
// //                 if (document.getElementById("albumArtist")) document.getElementById("albumArtist").innerText = `Album Artist: ${metadata.album_artist || "Unknown"}`;
// //                 if (document.getElementById("length")) document.getElementById("length").innerText = `Length: ${metadata.length || "Unknown"}`;

// //                 // New: Key and Initial Key
// //                 if (document.getElementById("key")) document.getElementById("key").innerText = `Key: ${metadata.key || "Unknown"}`;
// //                 if (document.getElementById("initialKey")) document.getElementById("initialKey").innerText = `Initial Key: ${metadata.initial_key || "Unknown"}`;

// //                 // New: Geolocation (if available)
// //                 if (document.getElementById("geolocation")) document.getElementById("geolocation").innerText = `Geolocation: ${metadata.geolocation || "Not Available"}`;

// //                 // Display Album Art (if available)
// //                 if (metadata.picture && metadata.picture.data) {
// //                     const albumArtUrl = URL.createObjectURL(new Blob([metadata.picture.data]));
// //                     if (document.getElementById("albumArt")) document.getElementById("albumArt").src = albumArtUrl;
// //                 } else {
// //                     if (document.getElementById("albumArt")) document.getElementById("albumArt").src = "https://via.placeholder.com/40";
// //                 }

// //                 // Debug: Log all metadata to the console for verification
// //                 console.log("Extracted Metadata:", metadata);
// //             },
// //             onError: function (error) {
// //                 console.error("Error extracting metadata:", error);
// //                 alert("Failed to extract metadata from the audio file.");
// //             },
// //         });
// //     };

// //     fileReader.onerror = function (error) {
// //         console.error("FileReader error:", error);
// //         alert("Failed to read the audio file.");
// //     };

// //     fileReader.readAsArrayBuffer(file);


// // // Bind the file input element to the metadata extraction function
// // document.getElementById("fileInput").addEventListener("change", function (event) {
// //     const file = event.target.files[0];
// //     extractAudioMetadata(file);
// // });
