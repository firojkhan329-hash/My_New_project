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


        //new image 

                 
    const data = [
      { letter: "क", word: "कबूतर", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRko9g4axDyO8cgdav7ogiRXAQzj5DJ3Lht3w&s" },
      { letter: "ख", word: "खरगोश", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5aB48f8XXU3nRyh_E6TqME53S5ZO1HTCpw&s" },
      { letter: "ग", word: "गमला",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTDmmYPa42ifdqGVpSemt3GdhXFLrv9Ehlg&s" },
      { letter: "घ", word: "घड़ी",  img: "https://png.pngtree.com/png-vector/20230115/ourmid/pngtree-wall-clock-watch-png-image_6563204.png" },
      { letter: "ङ", word: "अंग",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyANsSuiRVAOSrf-11UmfFdwaadoI1zV_NQ&s" },
      { letter: "च", word: "चम्मच", img: "https://m.media-amazon.com/images/I/71mAL3R-hWL.jpg" },
      { letter: "छ", word: "छाता", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUBX1jLs9xh-K8nZeeV9JdXF0YA0j7aunww&s" },
      { letter: "ज", word: "जहाज",  img: "https://static.vecteezy.com/system/resources/thumbnails/024/521/101/small_2x/cruise-ship-transparent-background-png.png" },
      { letter: "झ", word: "झंडा",  img: "https://static.vecteezy.com/system/resources/previews/029/938/187/non_2x/national-indian-flag-ai-generative-free-png.png" },
      { letter: "ञ", word: "पंच",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9uvZ_2vU33b6mwM-raIBTMf_jRJgSRdy4mfQdRU6eA19Gvq99hYVYoJCTf48wuXg_NE&usqp=CAU" },
      { letter: "ट", word: "टमाटर", img: "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png" },
      { letter: "ठ", word: "ठेला",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Rog5TvZNjX9fsZLtscSQ5wwwb8xeRiEz8g&s" },
      { letter: "ड", word: "डमरू",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtWlQAlNWXp0f_WJ1WGQDCL5arWhUBURUbg&s" },
      { letter: "ढ", word: "ढोलक",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZcy372xdKkdZGwUk3UK0sMa-nxjsWbPMpw&s" },
      { letter: "ण", word: "बाण",    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Devanagari_%E0%A4%A3.svg/1200px-Devanagari_%E0%A4%A3.svg.png" },
      { letter: "त", word: "तरबूज", img: "https://png.pngtree.com/png-clipart/20220805/ourlarge/pngtree-watermelon-fruit-vector-illustration-png-image_6099706.png" },
      { letter: "थ", word: "थाली",  img: "https://mahaastores.com/cdn/shop/products/thali.png?v=1643614225" },
      { letter: "द", word: "दरवाज़ा",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Z6Rp5BKTYzNOC36HmaIVjmM6SbHZGdHgoA&s" },
      { letter: "ध", word: "धनुष",  img: "https://png.pngtree.com/png-clipart/20220430/original/pngtree-bow-png-image_7597567.png" },
      { letter: "न", word: "नल",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wR1q7Tp3sRhnBRgvXvQC4rRI7wZLJNL_Sg&s" },
      { letter: "प", word: "पतंग",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPOTLuep151NbO5T4tCTI1tE7IKlGmBMFGrr4csRuO9Z0RoTbC8zBgGF-Behjq5Uo65s&usqp=CAU" },
      { letter: "फ", word: "फूल",  img: "https://png.pngtree.com/png-clipart/20190227/ourlarge/pngtree-watercolor-flower-yellow-flowers-png-png-image_707954.jpg" },
      { letter: "ब", word: "बत्तख",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-f3OmSP5N3J_CLWRz1J2Bx5YRILf-kp5_w&s" },
      { letter: "भ", word: "भालू",  img: "https://st3.depositphotos.com/32102558/34410/i/450/depositphotos_344100926-stock-photo-black-bear-wild-animal-nature.jpg" },
      { letter: "म", word: "मछली",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV6SxVHNS-5XwHYgMpC5dWE_sClSP7P31Wg&s" },
      { letter: "य", word: "यज्ञ",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQdMjt1YDxdN_qVcL42W8vODdCCmKeW9x8Q&s" },
      { letter: "र", word: "रस्सी",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJQw-538-OC8wBt4kk7r81QxUeI0BAvY0TQ&s" },
      { letter: "ल", word: "लट्टू",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNx4d1-n8-kKOstss6XIBiTZwwXWjMIop9-pJxW-_Alh4sS5KncX__x3je7TwgOrjrtWI&usqp=CAU" },
      { letter: "व", word: "वन",    img: "https://upforestcorporation.co.in/Public/Theme1/assets/images/UP_Forest_Corporation-23.png" },
      { letter: "श", word: "शरबत",  img: "https://static.vecteezy.com/system/resources/thumbnails/048/415/224/small_2x/mockup-portion-of-fresh-made-lime-juice-isolated-over-transparent-background-free-png.png" },
      { letter: "ष", word: "षट्कोण",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozEtwtPLrN_U-Sz2yt6SSvuVrIvMDzS3giw&s" },
      { letter: "स", word: "सूरज",  img: "https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-hot-sun-with-rays-cartoon-exposure-vector-png-image_6681743.png" },
      { letter: "ह", word: "हाथी",  img: "https://png.pngtree.com/png-clipart/20230318/ourmid/pngtree-elephant-asian-elephant-png-image_6653067.png" },
      { letter: "क्ष", word: "क्षत्रिय",img: "https://pbs.twimg.com/profile_images/993499337425485824/UxVukDBI_400x400.jpg" },
      { letter: "त्र", word: "त्रिशूल",img: "https://png.pngtree.com/png-clipart/20230508/ourmid/pngtree-golden-lord-shiva-trishul-png-image_7088475.png" },
      { letter: "ज्ञ", word: "ज्ञानी",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FUufokwVwl3Xp2UwIbF8udpeAQVEkjBJFw&s" }
    ];

    const grid = document.getElementById('grid');
    const playAllBtn = document.getElementById('playAllBtn');
    const stopBtn = document.getElementById('stopBtn');

    let currentUtterance = null;
    let currentPlayingIndex = -1;

    const clearPlayingState = () => {
      document.querySelectorAll('.card.playing').forEach(c => c.classList.remove('playing'));
    };

    const playSound = (item, cardElement) => {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }

      clearPlayingState();
      if (cardElement) {
        cardElement.classList.add('playing');
      }
      
      currentUtterance = new SpeechSynthesisUtterance(`${item.letter} से ${item.word}`);
      currentUtterance.lang = 'hi-IN';
      currentUtterance.rate = 0.95;
      
      currentUtterance.onend = () => {
        if (cardElement) {
          cardElement.classList.remove('playing');
        }
        currentUtterance = null;
        // If playing all, move to the next
        if (currentPlayingIndex !== -1 && currentPlayingIndex < data.length - 1) {
          currentPlayingIndex++;
          playAllWordsSequential();
        } else {
          currentPlayingIndex = -1; // Reset when all done
          playAllBtn.disabled = false;
          stopBtn.disabled = true;
        }
      };

      currentUtterance.onerror = (event) => {
        console.error("SpeechSynthesis Error:", event.error);
        if (cardElement) {
          cardElement.classList.remove('playing');
        }
        currentUtterance = null;
        currentPlayingIndex = -1; // Reset on error
        playAllBtn.disabled = false;
        stopBtn.disabled = true;
      }
      
      speechSynthesis.speak(currentUtterance);
      playAllBtn.disabled = true;
      stopBtn.disabled = false;
    };

    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${item.letter} से ${item.word}`);
      card.style.animationDelay = `${index * 40}ms`;

      card.innerHTML = `
        <img src="${item.img}" alt="${item.word} का चित्र" loading="lazy" />
        <h2>${item.letter}</h2>
        <p>${item.word}</p>
      `;
      
      card.addEventListener('click', () => playSound(item, card));
      card.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); 
          playSound(item, card);
        }
      });

      grid.appendChild(card);
    });

    // Function to play all words sequentially
    const playAllWordsSequential = () => {
      if (currentPlayingIndex < data.length) {
        const item = data[currentPlayingIndex];
        const cardElement = grid.children[currentPlayingIndex]; // Get the corresponding card element
        playSound(item, cardElement);
      } else {
        currentPlayingIndex = -1; // Reset when done
        playAllBtn.disabled = false;
        stopBtn.disabled = true;
        clearPlayingState();
      }
    };

    // Event listener for Play All button
    playAllBtn.addEventListener('click', () => {
      currentPlayingIndex = 0; // Start from the beginning
      playAllWordsSequential();
    });

    // Event listener for Stop button
    stopBtn.addEventListener('click', () => {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      currentPlayingIndex = -1; // Reset index
      clearPlayingState();
      playAllBtn.disabled = false;
      stopBtn.disabled = true;
    });

    // Pre-load voices to avoid delay on first click
    speechSynthesis.getVoices();
