// Function to extract metadata from the file
async function extractMetadata(file) {
    const metadataServices = [
      {
        name: "Primary Service (onloadedmetadata)",
        extract: function(audio) {
          try {
            return {
              title: { value: audio.title || null, source: "Primary Service" },
              artist: { value: audio.artist || null, source: "Primary Service" },
              album: { value: audio.album || null, source: "Primary Service" },
              genre: { value: audio.genre || null, source: "Primary Service" },
              year: { value: audio.year || null, source: "Primary Service" },
              track: { value: audio.track || null, source: "Primary Service" },
              composer: { value: audio.composer || null, source: "Primary Service" },
              lyrics: { value: audio.lyrics || null, source: "Primary Service" },
              publisher: { value: audio.publisher || null, source: "Primary Service" },
              discNumber: { value: audio.discNumber || null, source: "Primary Service" },
              encoder: { value: audio.encoder || null, source: "Primary Service" },
              language: { value: audio.language || null, source: "Primary Service" },
              copyright: { value: audio.copyright || null, source: "Primary Service" },
              isrc: { value: audio.isrc || null, source: "Primary Service" },
              bpm: { value: audio.bpm || null, source: "Primary Service" },
              albumArtist: { value: audio.albumArtist || null, source: "Primary Service" },
              key: { value: audio.key || null, source: "Primary Service" },
              initialKey: { value: audio.initialKey || null, source: "Primary Service" },
              length: { value: audio.duration ? (audio.duration / 60).toFixed(2) + ' mins' : null, source: "Primary Service" },
              comments: { value: audio.comments || null, source: "Primary Service" }
            };
          } catch (err) {
            console.error('Error in Primary Service:', err);
            return null;
          }
        }
      },
      {
        name: "Secondary Service (jsmediatags)",
        extract: function(file) {
          return new Promise((resolve, reject) => {
            try {
              jsmediatags.read(file, {
                onSuccess: function(tag) {
                  resolve({
                    title: { value: tag.tags.title || null, source: "Secondary Service" },
                    artist: { value: tag.tags.artist || null, source: "Secondary Service" },
                    album: { value: tag.tags.album || null, source: "Secondary Service" },
                    genre: { value: tag.tags.genre || null, source: "Secondary Service" },
                    year: { value: tag.tags.year || null, source: "Secondary Service" },
                    track: { value: tag.tags.track || null, source: "Secondary Service" },
                    composer: { value: tag.tags.composer || null, source: "Secondary Service" },
                    lyrics: { value: tag.tags.lyrics || null, source: "Secondary Service" },
                    publisher: { value: tag.tags.publisher || null, source: "Secondary Service" },
                    discNumber: { value: tag.tags.disc || null, source: "Secondary Service" },
                    encoder: { value: tag.tags.encoder || null, source: "Secondary Service" },
                    language: { value: tag.tags.language || null, source: "Secondary Service" },
                    copyright: { value: tag.tags.copyright || null, source: "Secondary Service" },
                    isrc: { value: tag.tags.isrc || null, source: "Secondary Service" },
                    bpm: { value: tag.tags.bpm || null, source: "Secondary Service" },
                    albumArtist: { value: tag.tags.album_artist || null, source: "Secondary Service" },
                    key: { value: tag.tags.key || null, source: "Secondary Service" },
                    initialKey: { value: tag.tags.initial_key || null, source: "Secondary Service" },
                    length: { value: tag.tags.length || null, source: "Secondary Service" },
                    comments: { value: tag.tags.comment || null, source: "Secondary Service" }
                  });
                },
                onError: function(error) {
                  console.error('Error in Secondary Service:', error);
                  reject(error);
                }
              });
            } catch (err) {
              console.error('Error in Secondary Service:', err);
              reject(err);
            }
          });
        }
      },
      {
        name: "Fallback Service (Unavailable)",
        extract: function() {
          return {
            title: { value: "Unavailable", source: "Fallback Service" },
            artist: { value: "Unavailable", source: "Fallback Service" },
            album: { value: "Unavailable", source: "Fallback Service" },
            genre: { value: "Unavailable", source: "Fallback Service" },
            year: { value: "Unavailable", source: "Fallback Service" },
            track: { value: "Unavailable", source: "Fallback Service" },
            composer: { value: "Unavailable", source: "Fallback Service" },
            lyrics: { value: "Unavailable", source: "Fallback Service" },
            publisher: { value: "Unavailable", source: "Fallback Service" },
            discNumber: { value: "Unavailable", source: "Fallback Service" },
            encoder: { value: "Unavailable", source: "Fallback Service" },
            language: { value: "Unavailable", source: "Fallback Service" },
            copyright: { value: "Unavailable", source: "Fallback Service" },
            isrc: { value: "Unavailable", source: "Fallback Service" },
            bpm: { value: "Unavailable", source: "Fallback Service" },
            albumArtist: { value: "Unavailable", source: "Fallback Service" },
            key: { value: "Unavailable", source: "Fallback Service" },
            initialKey: { value: "Unavailable", source: "Fallback Service" },
            length: { value: "Unavailable", source: "Fallback Service" },
            comments: { value: "Unavailable", source: "Fallback Service" }
          };
        }
      }
    ];
  
    // Populate metadata in a coalesced manner with source tracking
    async function populateMetadata(file) {
      const audio = new Audio();
      audio.src = URL.createObjectURL(file);
  
      try {
        // Primary service (try-catch block in place)
        audio.onloadedmetadata = function() {
          const metadata = metadataServices[0].extract(audio);
          if (metadata) {
            updateFields(metadata);
          }
        };
  
        // Secondary service (async with try-catch block)
        try {
          const metadata = await metadataServices[1].extract(file);
          if (metadata) {
            updateFields(metadata);
          }
        } catch (error) {
          console.log('Secondary service failed, using fallback...');
          // Fallback service
          const fallbackMetadata = metadataServices[2].extract();
          updateFields(fallbackMetadata);
        }
      } catch (error) {
        console.error('Error in file processing:', error);
      }
    }
  
    // Update fields in the table with value and source
    function updateFields(metadata) {
      const fields = ['fileName', 'fileSize', 'lastModified', 'mimeType', 'extension', 'title', 'artist', 'album', 'genre', 'year', 'track', 'composer', 'lyrics', 'publisher', 'discNumber', 'encoder', 'language', 'copyright', 'isrc', 'bpm', 'albumArtist', 'key', 'initialKey', 'length', 'comments'];
  
      fields.forEach((field) => {
        try {
          const valueElement = document.getElementById(field);
          const sourceElement = document.getElementById(field + 'Source');
          if (metadata[field] && metadata[field].value !== null) {
            valueElement.textContent = metadata[field].value;
            sourceElement.textContent = metadata[field].source;
          } else {
            valueElement.textContent = 'Unavailable';
            sourceElement.textContent = 'Unavailable';
          }
        } catch (error) {
          console.error('Error updating field:', field, error);
        }
      });
    }
  
    // Expose populateMetadata to be used in other parts of the app
    window.populateMetadata = populateMetadata;
  }
  