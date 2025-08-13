
 // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        
        fadeElements.forEach(fadeElement => {
            appearOnScroll.observe(fadeElement);
        });

        // Tab functionality
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
            });
            document.getElementById(tabId).style.display = 'block';
            
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('bg-blue-700', 'bg-green-700', 'bg-purple-700');
                btn.classList.add('bg-blue-600', 'bg-green-600', 'bg-purple-600');
            });
        }
        
        // Quiz functionality
        function checkAnswers() {
            const answers = {
                q1: 'C',
                q2: 'A',
                q3: 'A',
                q4: 'B',
                q5: 'A'
            };
            
            let score = 0;
            let feedback = '';
            
            for (let i = 1; i <= 5; i++) {
                const questionName = 'q' + i;
                const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
                
                if (selectedOption) {
                    const userAnswer = selectedOption.parentNode.textContent.trim().charAt(0);
                    if (userAnswer === answers[questionName]) {
                        score++;
                    } else {
                        feedback += `<p><strong>Question ${i}:</strong> Correct answer is ${answers[questionName]}</p>`;
                    }
                } else {
                    feedback += `<p><strong>Question ${i}:</strong> Not answered. Correct answer is ${answers[questionName]}</p>`;
                }
            }
            
            const resultsDiv = document.getElementById('quiz-results');
            const scoreDiv = document.getElementById('score-display');
            const feedbackDiv = document.getElementById('answer-feedback');
            
            scoreDiv.innerHTML = `<p class="text-lg font-semibold">You scored ${score} out of 5 (${(score/5*100).toFixed(0)}%)</p>`;
            feedbackDiv.innerHTML = feedback;
            
            resultsDiv.classList.remove('hidden');
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        }