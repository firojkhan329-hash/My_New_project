        // Array of Hindi letters from क to ज्ञ
        const hindiLetters = [
            'क', 'ख', 'ग', 'घ', 'ङ',
            'च', 'छ', 'ज', 'झ', 'ञ',
            'ट', 'ठ', 'ड', 'ढ', 'ण',
            'त', 'थ', 'द', 'ध', 'न',
            'प', 'फ', 'ब', 'भ', 'म',
            'य', 'र', 'ल', 'व', 'श',
            'ष', 'स', 'ह', 'क्ष', 'त्र',
            'ज्ञ'
        ];

        const alphabetContainer = document.getElementById('alphabetContainer');
        const playAllBtn = document.getElementById('playAllBtn');
        const wave = document.getElementById('wave');

        // Speech synthesis setup
        const synth = window.speechSynthesis;
        
        // Create letter elements
        hindiLetters.forEach(letter => {
            const letterElement = document.createElement('div');
            letterElement.className = 'letter';
            letterElement.textContent = letter;
            letterElement.dataset.letter = letter;
            
            // Add sound wave element
            const soundWave = document.createElement('div');
            soundWave.className = 'sound-wave';
            letterElement.appendChild(soundWave);
            
            letterElement.addEventListener('click', () => {
                speakLetter(letter);
                highlightLetter(letterElement);
                animateWave();
            });
            
            alphabetContainer.appendChild(letterElement);
        });

        // Function to speak a letter
        function speakLetter(letter) {
            if (synth.speaking) {
                synth.cancel();
            }
            
            const utterance = new SpeechSynthesisUtterance(letter);
            utterance.lang = 'hi-IN';
            utterance.rate = 0.8;
            synth.speak(utterance);
        }

        // Function to highlight the clicked letter
        function highlightLetter(letterElement) {
            // Remove active class from all letters
            document.querySelectorAll('.letter').forEach(el => {
                el.classList.remove('active');
            });
            
            // Add active class to clicked letter
            letterElement.classList.add('active');
            
            // Remove active class after animation completes
            setTimeout(() => {
                letterElement.classList.remove('active');
            }, 1000);
        }

        // Function to animate the sound wave
        function animateWave() {
            wave.classList.remove('active');
            // Trigger reflow to restart animation
            void wave.offsetWidth;
            wave.classList.add('active');
        }

        // Function to play all letters in sequence
        function playAllLetters() {
            const letters = document.querySelectorAll('.letter');
            let index = 0;
            
            function playNextLetter() {
                if (index >= letters.length) return;
                
                const letter = letters[index];
                const letterChar = letter.dataset.letter;
                
                // Highlight the letter
                letter.classList.add('active');
                animateWave();
                
                // Speak the letter
                speakLetter(letterChar);
                
                // Remove highlight after speaking
                setTimeout(() => {
                    letter.classList.remove('active');
                }, 800);
                
                index++;
                
                // Schedule next letter
                playbackTimeout = setTimeout(playNextLetter, 1200);
            }
            
            playNextLetter();
        }

        // Variable to track ongoing playback
        let playbackTimeout;
        
        // Function to stop playback
        function stopPlayback() {
            clearTimeout(playbackTimeout);
            synth.cancel();
            document.querySelectorAll('.letter').forEach(el => {
                el.classList.remove('active');
            });
        }

        // Event listeners for buttons
        playAllBtn.addEventListener('click', playAllLetters);
        document.getElementById('stopAllBtn').addEventListener('click', stopPlayback);

        // Responsive touch feedback
        document.querySelectorAll('.letter').forEach(letter => {
            letter.addEventListener('touchstart', () => {
                letter.classList.add('active');
            });
            
            letter.addEventListener('touchend', () => {
                setTimeout(() => {
                    letter.classList.remove('active');
                }, 300);
            });
        });
  