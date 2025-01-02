/* DOM Content Loaded */ document.addEventListener('DOMContentLoaded',()=>{
/* File Name          */ function processFileName(){const i=document.getElementById('fileInputFileName');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaFileName_primary').textContent=f[0].name;console.log(`File Name: ${f[0].name}`);});}
/* File Size          */ function processFileSize(){const i=document.getElementById('fileInputFileSize');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaFileSize_primary').textContent=`${(f[0].size/(1024*1024)).toFixed(2)} MB`;console.log(`File Size: ${(f[0].size/(1024*1024)).toFixed(2)} MB`);});}
/* Last Modified      */ function processLastModified(){const i=document.getElementById('fileInputLastModified');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaLastModified_primary').textContent=new Date(f[0].lastModified).toLocaleDateString();console.log(`Last Modified: ${new Date(f[0].lastModified).toLocaleDateString()}`);});}
/* MIME Type        */ function processMimeType(){const i=document.getElementById('fileInputMimeType');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaMimeType_primary').textContent=f[0].type||"Unknown";console.log(`MIME Type: ${f[0].type||"Unknown"}`);});}
/* Extension         */ function processExtension(){const i=document.getElementById('fileInputExtension');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaExtension_primary').textContent=f[0].name.split('.').pop();console.log(`Extension: ${f[0].name.split('.').pop()}`);});}
/* Encoding          */ function processEncoding(){const i=document.getElementById('fileInputEncoding');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaEncoding_primary').textContent="UTF-8";console.log("Encoding: UTF-8");});}
/* Title             */ function processTitle(){const i=document.getElementById('fileInputTitle');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaTitle_primary').textContent="Processed Title";console.log("Title Processed: Processed Title");});}
/* Artist            */ function processArtist(){const i=document.getElementById('fileInputArtist');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaArtist_primary').textContent="Processed Artist";console.log("Artist Processed: Processed Artist");});}
/* Album            */ function processAlbum(){const i=document.getElementById('fileInputAlbum');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaAlbum_primary').textContent="Processed Album";console.log("Album Processed: Processed Album");});}
/* Genre            */ function processGenre(){const i=document.getElementById('fileInputGenre');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaGenre_primary').textContent="Processed Genre";console.log("Genre Processed: Processed Genre");});}
/* Year             */ function processYear(){const i=document.getElementById('fileInputYear');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaYear_primary').textContent="2024";console.log("Year Processed: 2024");});}
/* Track Number     */ function processTrackNumber(){const i=document.getElementById('fileInputTrackNumber');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaTrack_primary').textContent="Track 1";console.log("Track Number Processed: Track 1");});}
/* Composer         */ function processComposer(){const i=document.getElementById('fileInputComposer');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaComposer_primary').textContent="Processed Composer";console.log("Composer Processed: Processed Composer");});}
/* Lyrics            */ function processLyrics(){const i=document.getElementById('fileInputLyrics');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaLyrics_primary').textContent="Processed Lyrics";console.log("Lyrics Processed: Processed Lyrics");});}
/* Publisher         */ function processPublisher(){const i=document.getElementById('fileInputPublisher');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaPublisher_primary').textContent="Processed Publisher";console.log("Publisher Processed: Processed Publisher");});}
/* Disc Number       */ function processDiscNumber(){const i=document.getElementById('fileInputDiscNumber');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaDiscNumber_primary').textContent="Disc 1";console.log("Disc Number Processed: Disc 1");});}
/* Encoder           */ function processEncoder(){const i=document.getElementById('fileInputEncoder');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaEncoder_primary').textContent="Processed Encoder";console.log("Encoder Processed: Processed Encoder");});}
/* Language          */ function processLanguage(){const i=document.getElementById('fileInputLanguage');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}document.getElementById('metaLanguage_primary').textContent="English";console.log("Language Processed: English");});}
/* Copyright          */ function processCopyright(){const i=document.getElementById('fileInputCopyright');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const copyright=analyzeCopyright(f[0]);document.getElementById('metaCopyright_primary').textContent=`Copyright: ${copyright}`;console.log(`Copyright Processed: ${copyright}`);});}
/* ISRC              */ function processISRC(){const i=document.getElementById('fileInputISRC');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const isrc=analyzeISRC(f[0]);document.getElementById('metaISRC_primary').textContent=`ISRC: ${isrc}`;console.log(`ISRC Processed: ${isrc}`);});}
/* UPC               */ function processUPC(){const i=document.getElementById('fileInputUPC');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const upc=analyzeUPC(f[0]);document.getElementById('metaUPC_primary').textContent=`UPC: ${upc}`;console.log(`UPC Processed: ${upc}`);});}
/* Geolocation        */ function processGeolocation(){const i=document.getElementById('fileInputGeolocation');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const geo=analyzeGeolocation(f[0]);document.getElementById('metaGeolocation_primary').textContent=`Geo: ${geo}`;console.log(`Geolocation Processed: ${geo}`);});}
/* Region Recording    */ function processRegionRecording(){const i=document.getElementById('fileInputRegionRecording');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const region=analyzeRegionRecording(f[0]);document.getElementById('metaRegionRecording_primary').textContent=`Region: ${region}`;console.log(`Region Processed: ${region}`);});}
/* Creation Date     */ function processCreationDate(){const i=document.getElementById('fileInputCreationDate');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const date=analyzeCreationDate(f[0]);document.getElementById('metaCreationDate_primary').textContent=`Creation Date: ${date}`;console.log(`Creation Date Processed: ${date}`);});}
/* Modification Date */ function processModificationDate(){const i=document.getElementById('fileInputModificationDate');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const date=analyzeModificationDate(f[0]);document.getElementById('metaModificationDate_primary').textContent=`Modification Date: ${date}`;console.log(`Modification Date Processed: ${date}`);});}
/* License Type      */ function processLicenseType(){const i=document.getElementById('fileInputLicenseType');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const license=analyzeLicenseType(f[0]);document.getElementById('metaLicenseType_primary').textContent=`License: ${license}`;console.log(`License Type Processed: ${license}`);});}
/* Creative Commons  */ function processCreativeCommons(){const i=document.getElementById('fileInputCreativeCommons');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const cc=analyzeCreativeCommons(f[0]);document.getElementById('metaCreativeCommons_primary').textContent=`CC: ${cc}`;console.log(`Creative Commons Info Processed: ${cc}`);});}
/* Album Art URL     */ function processAlbumArtURL(){const i=document.getElementById('fileInputAlbumArtURL');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const url=analyzeAlbumArtURL(f[0]);document.getElementById('metaAlbumArtURL_primary').textContent=`URL: ${url}`;console.log(`Album Art URL Processed: ${url}`);});}
/* Language          */ function processLanguage(){const i=document.getElementById('fileInputLanguage');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const language=analyzeLanguage(f[0]);document.getElementById('metaLanguage_primary').textContent=`Language: ${language}`;console.log(`Language Processed: ${language}`);});}
/* Source URL        */ function processSourceURL(){const i=document.getElementById('fileInputSourceURL');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const url=analyzeSourceURL(f[0]);document.getElementById('metaSourceURL_primary').textContent=`Source: ${url}`;console.log(`Source URL Processed: ${url}`);});}
/* Genre Subcategory */ function processGenreSubcategory(){const i=document.getElementById('fileInputGenreSubcategory');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const genre=analyzeGenreSubcategory(f[0]);document.getElementById('metaGenreSubcategory_primary').textContent=`Genre: ${genre}`;console.log(`Genre Subcategory Processed: ${genre}`);});}
/* Explicit Content  */ function processExplicitContent(){const i=document.getElementById('fileInputExplicitContent');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const explicit=analyzeExplicitContent(f[0]);document.getElementById('metaExplicitContent_primary').textContent=`Explicit: ${explicit}`;console.log(`Explicit Content Processed: ${explicit}`);});}
/* Keywords          */ function processKeywords(){const i=document.getElementById('fileInputKeywords');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const keywords=analyzeKeywords(f[0]);document.getElementById('metaKeywords_primary').textContent=`Keywords: ${keywords}`;console.log(`Keywords Processed: ${keywords}`);});}
/* Geotag            */ function processGeotag(){const i=document.getElementById('fileInputGeotag');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const geotag=analyzeGeotag(f[0]);document.getElementById('metaGeotag_primary').textContent=`Geotag: ${geotag}`;console.log(`Geotag Processed: ${geotag}`);});}
/* Recording Env     */ function processRecordingEnvironment(){const i=document.getElementById('fileInputRecordingEnvironment');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const env=analyzeRecordingEnvironment(f[0]);document.getElementById('metaRecordingEnvironment_primary').textContent=`Environment: ${env}`;console.log(`Recording Environment Processed: ${env}`);});}
/* Audio Watermark   */ function processAudioWatermark(){const i=document.getElementById('fileInputAudioWatermark');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const watermark=analyzeAudioWatermark(f[0]);document.getElementById('metaAudioWatermark_primary').textContent=`Watermark: ${watermark}`;console.log(`Audio Watermark Processed: ${watermark}`);});}
/* Frequency Peaks   */ function processFrequencyPeaks(){const i=document.getElementById('fileInputFrequencyPeaks');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const peaks=analyzeFrequencyPeaks(f[0]);document.getElementById('metaFrequencyPeaks_primary').textContent=`Peaks: ${peaks}`;console.log(`Frequency Peaks Processed: ${peaks}`);});}
/* Octave Bands      */ function processOctaveBands(){const i=document.getElementById('fileInputOctaveBands');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const bands=analyzeOctaveBands(f[0]);document.getElementById('metaOctaveBands_primary').textContent=`Bands: ${bands} dB`;console.log(`Octave Bands Processed: ${bands} dB`);});}
/* Harmonic Ratio    */ function processHarmonicRatio(){const i=document.getElementById('fileInputHarmonicRatio');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const ratio=analyzeHarmonicRatio(f[0]);document.getElementById('metaHarmonicRatio_primary').textContent=`Ratio: ${ratio}%`;console.log(`Harmonic Ratio Processed: ${ratio}%`);});}
/* Dominant Frequency*/ function processDominantFrequency(){const i=document.getElementById('fileInputDominantFrequency');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const freq=analyzeDominantFrequency(f[0]);document.getElementById('metaDominantFrequency_primary').textContent=`Freq: ${freq} Hz`;console.log(`Dominant Frequency Processed: ${freq} Hz`);});}
/* Fundamental Freq  */ function processFundamentalFrequency(){const i=document.getElementById('fileInputFundamentalFrequency');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const freq=analyzeFundamentalFrequency(f[0]);document.getElementById('metaFundamentalFrequency_primary').textContent=`Freq: ${freq} Hz`;console.log(`Fundamental Frequency Processed: ${freq} Hz`);});}
/* Harmonic Distort. */ function processHarmonicDistortion(){const i=document.getElementById('fileInputHarmonicDistortion');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const distortion=analyzeHarmonicDistortion(f[0]);document.getElementById('metaHarmonicDistortion_primary').textContent=`Distortion: ${distortion}%`;console.log(`Harmonic Distortion Processed: ${distortion}%`);});}
/* Spectral Slope    */ function processSpectralSlope(){const i=document.getElementById('fileInputSpectralSlope');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const slope=analyzeSpectralSlope(f[0]);document.getElementById('metaSpectralSlope_primary').textContent=`Slope: ${slope} dB/octave`;console.log(`Spectral Slope Processed: ${slope} dB/octave`);});}
/* Inharmonicity     */ function processInharmonicity(){const i=document.getElementById('fileInputInharmonicity');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const inharmonicity=analyzeInharmonicity(f[0]);document.getElementById('metaInharmonicity_primary').textContent=`Inharmonicity: ${inharmonicity}`;console.log(`Inharmonicity Processed: ${inharmonicity}`);});}
/* Spectral Centroid */ function processSpectralCentroid(){const i=document.getElementById('fileInputSpectralCentroid');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const centroid=analyzeSpectralCentroid(f[0]);document.getElementById('metaSpectralCentroid_primary').textContent=`Centroid: ${centroid} Hz`;console.log(`Spectral Centroid Processed: ${centroid} Hz`);});}
/* Spectral Flatness */ function processSpectralFlatness(){const i=document.getElementById('fileInputSpectralFlatness');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const flatness=analyzeSpectralFlatness(f[0]);document.getElementById('metaSpectralFlatness_primary').textContent=`Flatness: ${flatness}`;console.log(`Spectral Flatness Processed: ${flatness}`);});}
/* Spectral Kurtosis */ function processSpectralKurtosis(){const i=document.getElementById('fileInputSpectralKurtosis');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const kurtosis=analyzeSpectralKurtosis(f[0]);document.getElementById('metaSpectralKurtosis_primary').textContent=`Kurtosis: ${kurtosis}`;console.log(`Spectral Kurtosis Processed: ${kurtosis}`);});}
/* Spectral Skewness */ function processSpectralSkewness(){const i=document.getElementById('fileInputSpectralSkewness');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const skewness=analyzeSpectralSkewness(f[0]);document.getElementById('metaSpectralSkewness_primary').textContent=`Skewness: ${skewness}`;console.log(`Spectral Skewness Processed: ${skewness}`);});}
/* Noise-to-Harmonic */ function processNoiseToHarmonicRatio(){const i=document.getElementById('fileInputNoiseToHarmonic');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const ratio=analyzeNoiseToHarmonicRatio(f[0]);document.getElementById('metaNoiseToHarmonic_primary').textContent=`NHR: ${ratio}`;console.log(`Noise-to-Harmonic Ratio Processed: ${ratio}`);});}
/* Energy per Octave */ function processEnergyPerOctave(){const i=document.getElementById('fileInputEnergyPerOctave');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const energy=analyzeEnergyPerOctave(f[0]);document.getElementById('metaEnergyPerOctave_primary').textContent=`Energy: ${energy}%`;console.log(`Energy per Octave Processed: ${energy}%`);});}
/* Total Energy      */ function processTotalEnergy(){const i=document.getElementById('fileInputTotalEnergy');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const energy=analyzeTotalEnergy(f[0]);document.getElementById('metaTotalEnergy_primary').textContent=`Total Energy: ${energy} J`;console.log(`Total Energy Processed: ${energy} J`);});}
/* Mean Energy       */ function processMeanEnergy(){const i=document.getElementById('fileInputMeanEnergy');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const mean=analyzeMeanEnergy(f[0]);document.getElementById('metaMeanEnergy_primary').textContent=`Mean Energy: ${mean} J`;console.log(`Mean Energy Processed: ${mean} J`);});}
/* Energy (Bass)     */ function processEnergyDistributionBass(){const i=document.getElementById('fileInputEnergyBass');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const bass=analyzeEnergyDistributionBass(f[0]);document.getElementById('metaEnergyBass_primary').textContent=`Bass Energy: ${bass}%`;console.log(`Energy Distribution (Bass) Processed: ${bass}%`);});}
/* Energy (Treble)   */ function processEnergyDistributionTreble(){const i=document.getElementById('fileInputEnergyTreble');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const treble=analyzeEnergyDistributionTreble(f[0]);document.getElementById('metaEnergyTreble_primary').textContent=`Treble Energy: ${treble}%`;console.log(`Energy Distribution (Treble) Processed: ${treble}%`);});}
/* Dynamic Range     */ function processDynamicRange(){const i=document.getElementById('fileInputDynamicRange');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const range=analyzeDynamicRange(f[0]);document.getElementById('metaDynamicRange_primary').textContent=`Dynamic Range: ${range} dB`;console.log(`Dynamic Range Processed: ${range} dB`);});}
/* Crest Factor      */ function processCrestFactor(){const i=document.getElementById('fileInputCrestFactor');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const crest=analyzeCrestFactor(f[0]);document.getElementById('metaCrestFactor_primary').textContent=`Crest Factor: ${crest}`;console.log(`Crest Factor Processed: ${crest}`);});}
/* Envelope Variance */ function processEnergyEnvelopeVariance(){const i=document.getElementById('fileInputEnergyEnvelopeVariance');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const variance=analyzeEnergyEnvelopeVariance(f[0]);document.getElementById('metaEnergyEnvelopeVariance_primary').textContent=`Variance: ${variance}`;console.log(`Energy Envelope Variance Processed: ${variance}`);});}
/* Normalized Energy */ function processNormalizedEnergy(){const i=document.getElementById('fileInputNormalizedEnergy');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const normalized=analyzeNormalizedEnergy(f[0]);document.getElementById('metaNormalizedEnergy_primary').textContent=`Normalized Energy: ${normalized}`;console.log(`Normalized Energy Processed: ${normalized}`);});}
/* Transient Energy  */ function processTransientEnergy(){const i=document.getElementById('fileInputTransientEnergy');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const transient=analyzeTransientEnergy(f[0]);document.getElementById('metaTransientEnergy_primary').textContent=`Transient Energy: ${transient}%`;console.log(`Transient Energy Processed: ${transient}%`);});}
/* Sustain Energy    */ function processSustainEnergy(){const i=document.getElementById('fileInputSustainEnergy');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const sustain=analyzeSustainEnergy(f[0]);document.getElementById('metaSustainEnergy_primary').textContent=`Sustain Energy: ${sustain}%`;console.log(`Sustain Energy Processed: ${sustain}%`);});}
/* Peak-to-Avg Ratio */ function processPeakToAverageRatio(){const i=document.getElementById('fileInputPAR');i.addEventListener('change',e=>{const f=e.target.files;if(f.length===0){console.log("No file selected.");return;}const ratio=analyzePeakToAverageRatio(f[0]);document.getElementById('metaPAR_primary').textContent=`PAR: ${ratio} dB`;console.log(`Peak-to-Average Ratio Processed: ${ratio} dB`);});}
});

/* DOM Content Loaded */ 
document.addEventListener('DOMContentLoaded', () => {
    /* Populate Metadata */ 
    function populateMetadata(file, metaId, metaSourceId) {
      if (!file) {
        console.error(`No file provided for ${metaId}`);
        return;
      }
      const element = document.getElementById(metaId);
      const sourceElement = document.getElementById(metaSourceId);
      if (element && sourceElement) {
        element.textContent = file.name; // Set the file name or other property
        sourceElement.textContent = file.type; // Example: Set MIME type
        console.log(`Metadata populated for ${metaId}`);
      } else {
        console.error(`Element not found: ${metaId} or ${metaSourceId}`);
      }
    }
  
    /* Calls for Metadata Properties */
    function handleFileInput(inputId, metaId, metaSourceId) {
      const input = document.getElementById(inputId);
      if (input) {
        input.addEventListener('change', (event) => {
          const file = event.target.files[0];
          populateMetadata(file, metaId, metaSourceId);
        });
      } else {
        console.error(`Input element not found: ${inputId}`);
      }
    }
  
    /* List of all metadata mappings */
    const metadataMappings = [
      { inputId: 'fileInputFileSize', metaId: 'metaFileSize_primary', metaSourceId: 'metaFileSizeSource_primary' },
      { inputId: 'fileInputMimeType', metaId: 'metaMimeType_primary', metaSourceId: 'metaMimeTypeSource_primary' },
      { inputId: 'fileInputExtension', metaId: 'metaExtension_primary', metaSourceId: 'metaExtensionSource_primary' },
      { inputId: 'fileInputEncoding', metaId: 'metaEncoding_primary', metaSourceId: 'metaEncodingSource_primary' },
      { inputId: 'fileInputTitle', metaId: 'metaTitle_primary', metaSourceId: 'metaTitleSource_primary' },
      { inputId: 'fileInputArtist', metaId: 'metaArtist_primary', metaSourceId: 'metaArtistSource_primary' },
      { inputId: 'fileInputAlbum', metaId: 'metaAlbum_primary', metaSourceId: 'metaAlbumSource_primary' },
      { inputId: 'fileInputGenre', metaId: 'metaGenre_primary', metaSourceId: 'metaGenreSource_primary' },
      { inputId: 'fileInputYear', metaId: 'metaYear_primary', metaSourceId: 'metaYearSource_primary' },
      { inputId: 'fileInputTrack', metaId: 'metaTrack_primary', metaSourceId: 'metaTrackSource_primary' },
      { inputId: 'fileInputComposer', metaId: 'metaComposer_primary', metaSourceId: 'metaComposerSource_primary' },
      { inputId: 'fileInputLyrics', metaId: 'metaLyrics_primary', metaSourceId: 'metaLyricsSource_primary' },
      { inputId: 'fileInputPublisher', metaId: 'metaPublisher_primary', metaSourceId: 'metaPublisherSource_primary' },
      { inputId: 'fileInputDiscNumber', metaId: 'metaDiscNumber_primary', metaSourceId: 'metaDiscNumberSource_primary' },
      { inputId: 'fileInputEncoder', metaId: 'metaEncoder_primary', metaSourceId: 'metaEncoderSource_primary' },
      { inputId: 'fileInputLanguage', metaId: 'metaLanguage_primary', metaSourceId: 'metaLanguageSource_primary' },
      { inputId: 'fileInputCopyright', metaId: 'metaCopyright_primary', metaSourceId: 'metaCopyrightSource_primary' },
      { inputId: 'fileInputIsrc', metaId: 'metaIsrc_primary', metaSourceId: 'metaIsrcSource_primary' },
      { inputId: 'fileInputBpm', metaId: 'metaBpm_primary', metaSourceId: 'metaBpmSource_primary' },
      { inputId: 'fileInputAlbumArtist', metaId: 'metaAlbumArtist_primary', metaSourceId: 'metaAlbumArtistSource_primary' },
      { inputId: 'fileInputKey', metaId: 'metaKey_primary', metaSourceId: 'metaKeySource_primary' },
      { inputId: 'fileInputInitialKey', metaId: 'metaInitialKey_primary', metaSourceId: 'metaInitialKeySource_primary' },
      { inputId: 'fileInputLength', metaId: 'metaLength_primary', metaSourceId: 'metaLengthSource_primary' },
      { inputId: 'fileInputComments', metaId: 'metaComments_primary', metaSourceId: 'metaCommentsSource_primary' },
      { inputId: 'fileInputSpectralCentroid', metaId: 'metaSpectralCentroid_primary', metaSourceId: 'metaSpectralCentroidSource_primary' },
      { inputId: 'fileInputSpectralFlatness', metaId: 'metaSpectralFlatness_primary', metaSourceId: 'metaSpectralFlatnessSource_primary' },
      { inputId: 'fileInputSpectralBandwidth', metaId: 'metaSpectralBandwidth_primary', metaSourceId: 'metaSpectralBandwidthSource_primary' },
      { inputId: 'fileInputSpectralRollOff', metaId: 'metaSpectralRollOff_primary', metaSourceId: 'metaSpectralRollOffSource_primary' },
      { inputId: 'fileInputSpectralContrast', metaId: 'metaSpectralContrast_primary', metaSourceId: 'metaSpectralContrastSource_primary' },
      { inputId: 'fileInputSpectralEnergy', metaId: 'metaSpectralEnergy_primary', metaSourceId: 'metaSpectralEnergySource_primary' },
      { inputId: 'fileInputSpectralFlux', metaId: 'metaSpectralFlux_primary', metaSourceId: 'metaSpectralFluxSource_primary' },
      { inputId: 'fileInputSpectralEntropy', metaId: 'metaSpectralEntropy_primary', metaSourceId: 'metaSpectralEntropySource_primary' },
      { inputId: 'fileInputRMS', metaId: 'metaRMS_primary', metaSourceId: 'metaRMSSource_primary' },
      { inputId: 'fileInputPeakAmplitude', metaId: 'metaPeakAmplitude_primary', metaSourceId: 'metaPeakAmplitudeSource_primary' },
      { inputId: 'fileInputZeroCrossingRate', metaId: 'metaZeroCrossingRate_primary', metaSourceId: 'metaZeroCrossingRateSource_primary' },
      { inputId: 'fileInputLowEnergyRatio', metaId: 'metaLowEnergyRatio_primary', metaSourceId: 'metaLowEnergyRatioSource_primary' },
      { inputId: 'fileInputAttackTime', metaId: 'metaAttackTime_primary', metaSourceId: 'metaAttackTimeSource_primary' },
      { inputId: 'fileInputDecayTime', metaId: 'metaDecayTime_primary', metaSourceId: 'metaDecayTimeSource_primary' },
      { inputId: 'fileInputSustainLevel', metaId: 'metaSustainLevel_primary', metaSourceId: 'metaSustainLevelSource_primary' },
      { inputId: 'fileInputReleaseTime', metaId: 'metaReleaseTime_primary', metaSourceId: 'metaReleaseTimeSource_primary' },
      { inputId: 'fileInputTemporalCentroid', metaId: 'metaTemporalCentroid_primary', metaSourceId: 'metaTemporalCentroidSource_primary' },
      { inputId: 'fileInputFrequencyPeaks', metaId: 'metaFrequencyPeaks_primary', metaSourceId: 'metaFrequencyPeaksSource_primary' },
      { inputId: 'fileInputOctaveBands', metaId: 'metaOctaveBands_primary', metaSourceId: 'metaOctaveBandsSource_primary' },
      { inputId: 'fileInputHarmonicRatio', metaId: 'metaHarmonicRatio_primary', metaSourceId: 'metaHarmonicRatioSource_primary' },
      { inputId: 'fileInputDominantFrequency', metaId: 'metaDominantFrequency_primary', metaSourceId: 'metaDominantFrequencySource_primary' },
      { inputId: 'fileInputFundamentalFrequency', metaId: 'metaFundamentalFrequency_primary', metaSourceId: 'metaFundamentalFrequencySource_primary' },
      { inputId: 'fileInputHarmonicDistortion', metaId: 'metaHarmonicDistortion_primary', metaSourceId: 'metaHarmonicDistortionSource_primary' },
      { inputId: 'fileInputSpectralSlope', metaId: 'metaSpectralSlope_primary', metaSourceId: 'metaSpectralSlopeSource_primary' },
      { inputId: 'fileInputInharmonicity', metaId: 'metaInharmonicity_primary', metaSourceId: 'metaInharmonicitySource_primary' },
      { inputId: 'fileInputEnergyPerOctave', metaId: 'metaEnergyPerOctave_primary', metaSourceId: 'metaEnergyPerOctaveSource_primary' },
      { inputId: 'fileInputDynamicRange', metaId: 'metaDynamicRange_primary', metaSourceId: 'metaDynamicRangeSource_primary' },
      { inputId: 'fileInputCrestFactor', metaId: 'metaCrestFactor_primary', metaSourceId: 'metaCrestFactorSource_primary' },
      { inputId: 'fileInputEnergyEnvelopeVariance', metaId: 'metaEnergyEnvelopeVariance_primary', metaSourceId: 'metaEnergyEnvelopeVarianceSource_primary' },
      { inputId: 'fileInputNormalizedEnergy', metaId: 'metaNormalizedEnergy_primary', metaSourceId: 'metaNormalizedEnergySource_primary' },
      { inputId: 'fileInputTransientEnergy', metaId: 'metaTransientEnergy_primary', metaSourceId: 'metaTransientEnergySource_primary' },
      { inputId: 'fileInputSustainEnergy', metaId: 'metaSustainEnergy_primary', metaSourceId: 'metaSustainEnergySource_primary' },
      { inputId: 'fileInputPeakToAverageRatio', metaId: 'metaPeakToAverageRatio_primary', metaSourceId: 'metaPeakToAverageRatioSource_primary' }
      
    ];
  
    /* Initialize all metadata handlers */
    metadataMappings.forEach(({ inputId, metaId, metaSourceId }) => {
      handleFileInput(inputId, metaId, metaSourceId);
    });
  });
  



