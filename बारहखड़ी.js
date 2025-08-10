document.addEventListener('DOMContentLoaded', function() {
            const vowels = ['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ं', 'ः', '़'];
            const consonants = [
                'क', 'ख', 'ग', 'घ', 'ङ',
                'च', 'छ', 'ज', 'झ', 'ञ',
                'ट', 'ठ', 'ड', 'ढ', 'ण',
                'त', 'थ', 'द', 'ध', 'न',
                'प', 'फ', 'ब', 'भ', 'म',
                'य', 'र', 'ल', 'व', 'श',
                'ष', 'स', 'ह', 'क्ष', 'त्र',
                'ज्ञ'
            ];
            
            const grid = document.getElementById('grid');
            let synth = window.speechSynthesis;
            let currentUtterance = null;
            let isPlayingAll = false;
            let currentIndex = 0;
            
            // Create header row - vowels
            const vowelHeader = document.createElement('div');
            vowelHeader.className = 'cell vowel';
            vowelHeader.textContent = 'वर्ण';
            grid.appendChild(vowelHeader);
            
            vowels.forEach(vowel => {
                const cell = document.createElement('div');
                cell.className = 'cell vowel';
                cell.textContent = vowel;
                grid.appendChild(cell);
            });
            
            // Create consonant rows
            consonants.forEach(consonant => {
                // Consonant header
                const consonantCell = document.createElement('div');
                consonantCell.className = 'cell consonant';
                consonantCell.textContent = consonant;
                grid.appendChild(consonantCell);
                
                // Syllables for each vowel
                vowels.forEach(vowel => {
                    const syllable = consonant + vowel;
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    
                    const syllableSpan = document.createElement('span');
                    syllableSpan.className = 'syllable';
                    syllableSpan.textContent = syllable;
                    cell.appendChild(syllableSpan);
                    
                    const playBtn = document.createElement('div');
                    playBtn.className = 'play-btn';
                    playBtn.innerHTML = '<div class="play-icon"></div>';
                    
                    playBtn.addEventListener('click', () => {
                        if (currentUtterance) {
                            synth.cancel();
                        }
                        playBtn.classList.add('active');
                        speakSyllable(syllable);
                        
                        setTimeout(() => {
                            playBtn.classList.remove('active');
                        }, 500);
                    });
                    
                    cell.appendChild(playBtn);
                    grid.appendChild(cell);
                });
            });
            
            document.getElementById('play-all').addEventListener('click', () => {
                if (isPlayingAll) return;
                
                isPlayingAll = true;
                currentIndex = 0;
                playNextSyllable();
            });
            
            document.getElementById('stop-all').addEventListener('click', () => {
                synth.cancel();
                isPlayingAll = false;
                currentIndex = 0;
                
                // Remove active class from all buttons
                document.querySelectorAll('.play-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            });
            
            function playNextSyllable() {
                if (!isPlayingAll || currentIndex >= consonants.length * vowels.length) {
                    isPlayingAll = false;
                    return;
                }
                
                const consonantIndex = Math.floor(currentIndex / vowels.length);
                const vowelIndex = currentIndex % vowels.length;
                
                const consonant = consonants[consonantIndex];
                const vowel = vowels[vowelIndex];
                const syllable = consonant + vowel;
                
                const cellIndex = 1 + 13 + (consonantIndex * 13) + vowelIndex;
                const playBtn = grid.children[cellIndex].querySelector('.play-btn');
                
                playBtn.classList.add('active');
                speakSyllable(syllable, () => {
                    playBtn.classList.remove('active');
                    currentIndex++;
                    
                    setTimeout(playNextSyllable, 300);
                });
            }
            
            function speakSyllable(text, callback) {
                if (currentUtterance) {
                    synth.cancel();
                }
                
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'hi-IN';
                utterance.rate = 0.8;
                
                utterance.onend = function() {
                    if (callback) callback();
                };
                
                currentUtterance = utterance;
                synth.speak(utterance);
            }
        });