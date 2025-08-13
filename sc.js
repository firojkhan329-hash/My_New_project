  // Language toggle functionality
        const languageToggle = document.getElementById('languageToggle');
        const currentLanguageElement = document.getElementById('currentLanguage');
        let currentLanguage = 'EN';
        
        // Hindi translations - keyed by element IDs
        const hindiTranslations = {
            // Hero section
            'heroTitle': 'रासायनिक अभिक्रियाएँ और समीकरण',
            'heroSubtitle': 'रासायनिक परिवर्तन की मूल बातें सीखना',
            
            // Introduction
            'introTitle': 'रासायनिक अभिक्रियाओं का परिचय',
            'introText1': 'एक रासायनिक अभिक्रिया वह प्रक्रिया है जहां एक या अधिक पदार्थ, जिन्हें अभिकारक कहा जाता है, एक या अधिक भिन्न पदार्थों में परिवर्तित हो जाते हैं, जिन्हें उत्पाद कहा जाता है। रासायनिक अभिक्रियाओं में परमाणुओं के बीच रासायनिक बंधनों का टूटना और बनना शामिल होता है।',
            'introText2': 'रासायनिक समीकरण रासायनिक अभिक्रियाओं का प्रतीकात्मक निरूपण होते हैं, जहां अभिकारक बाईं ओर और उत्पाद दाईं ओर दिखाए जाते हैं, जो अभिक्रिया की दिशा को इंगित करने वाले एक तीर (→) द्वारा अलग किए जाते हैं।',
            'exampleText': 'उदाहरण: <br> 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O <br> (हाइड्रोजन + ऑक्सीजन → पानी)',
            'animationCaption': 'रासायनिक अभिक्रिया प्रक्रिया का दृश्य निरूपण',
            
            // Types of reactions
            'typesTitle': 'रासायनिक अभिक्रियाओं के प्रकार',
            'combinationTitle': 'संयोजन अभिक्रिया',
            'combinationText': 'दो या अधिक पदार्थ मिलकर एक एकल उत्पाद बनाते हैं। A + B → AB',
            'decompositionTitle': 'वियोजन अभिक्रिया',
            'decompositionText': 'एक यौगिक दो या अधिक सरल पदार्थों में टूट जाता है। AB → A + B',
            'displacementTitle': 'विस्थापन अभिक्रिया',
            'displacementText': 'अधिक क्रियाशील तत्व अपने यौगिक से कम क्रियाशील तत्व को विस्थापित कर देता है। A + BC → AC + B',
            'doubleDisplacementTitle': 'द्वि-विस्थापन अभिक्रिया',
            'doubleDisplacementText': 'दो यौगिकों के बीच आयनों का आदान-प्रदान होता है। AB + CD → AD + CB',
            'oxidationReductionTitle': 'ऑक्सीकरण-अपचयन (रेडॉक्स) अभिक्रियाएँ',
            'oxidationReductionText': 'इलेक्ट्रॉनों के ट्रांसफर वाली अभिक्रियाएँ। ऑक्सीकरण इलेक्ट्रॉनों की हानि है, अपचयन इलेक्ट्रॉनों की प्राप्ति है।',
            'oxidationTitle': 'ऑक्सीकरण',
            'oxidationPoint1': 'इलेक्ट्रॉनों की हानि',
            'oxidationPoint2': 'ऑक्सीकरण संख्या में वृद्धि',
            'oxidationPoint3': 'पदार्थ ऑक्सीकृत होता है (अपचायक)',
            'reductionTitle': 'अपचयन',
            'reductionPoint1': 'इलेक्ट्रॉनों की प्राप्ति',
            'reductionPoint2': 'ऑक्सीकरण संख्या में कमी',
            'reductionPoint3': 'पदार्थ अपचयित होता है (ऑक्सीकारक)',
            
            // Characteristics
            'characteristicsTitle': 'रासायनिक अभिक्रियाओं की विशेषताएँ',
            'evidenceTitle': 'रासायनिक अभिक्रिया के साक्ष्य',
            'evidence1': 'गैस का निकलना: बुलबुले बनना गैस उत्पादन का संकेत देता है',
            'evidence2': 'अवक्षेप का निर्माण: विलयन में ठोस पदार्थ की उपस्थिति',
            'evidence3': 'तापमान में परिवर्तन: ऊष्मा अवशोषित या मुक्त होती है',
            'evidence4': 'रंग परिवर्तन: नए पदार्थ के निर्माण का संकेत',
            'reactionConditionsTitle': 'अभिक्रिया की दशाएँ',
            'condition1Title': 'तापमान',
            'condition1Text': 'तापमान बढ़ने से सामान्यतः अभिक्रिया की दर बढ़ जाती है',
            'condition2Title': 'सांद्रता',
            'condition2Text': 'उच्च सांद्रता कणों के बीच टकराव की आवृत्ति को बढ़ाती है',
            'condition3Title': 'दाब (गैसों के लिए)',
            'condition3Text': 'दाब बढ़ने से अभिक्रिया की दर बढ़ती है',
            'condition4Title': 'उत्प्रेरक',
            'condition4Text': 'वे पदार्थ जो उपभुक्त हुए बिना अभिक्रिया की दर को बढ़ाते हैं',
            
            // Balancing equations
            'balancingTitle': 'रासायनिक समीकरणों को संतुलित करना',
            'balancingIntroTitle': 'द्रव्यमान संरक्षण का नियम',
            'balancingText1': 'रासायनिक समीकरणों को संतुलित किया जाना चाहिए ताकि समीकरण के दोनों ओर प्रत्येक तत्व के परमाणुओं की संख्या समान हो। यह द्रव्यमान संरक्षण के नियम का पालन करता है जो बताता है कि रासायनिक अभिक्रिया में पदार्थ को न तो उत्पन्न किया जा सकता है और न ही नष्ट किया जा सकता है।',
            'stepsTitle': 'समीकरणों को संतुलित करने के चरण:',
            'step1': 'सही सूत्रों के साथ असंतुलित समीकरण लिखें',
            'step2': 'दोनों ओर के प्रत्येक तत्व के परमाणुओं की गणना करें',
            'step3': 'संतुलन उन तत्वों से शुरू करें जो प्रत्येक तरफ केवल एक यौगिक में दिखाई देते हैं',
            'step4': 'परमाणुओं को संतुलित करने के लिए गुणांक का उपयोग करें (सब्स्क्रिप्ट को कभी न बदलें)',
            'step5': 'दोबारा जांचें कि सभी परमाणु संतुलित हैं',
            'exampleProblemTitle': 'उदाहरण समस्या',
            'exampleProblemText': 'समीकरण को संतुलित करें: C<sub>3</sub>H<sub>8</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O',
            'reactantsLabel': 'अभिकारक',
            'productsLabel': 'उत्पाद',
            'balanceButton': 'समीकरण संतुलित करें',
            
            // Applications
            'applicationsTitle': 'वास्तविक दुनिया में अनुप्रयोग',
            'industryTitle': 'औद्योगिक अनुप्रयोग',
            'industry1': 'हैबर प्रक्रिया: N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub> (अमोनिया उत्पादन)',
            'industry2': 'संपर्क प्रक्रिया: 2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub> (सल्फ्यूरिक अम्ल उत्पादन)',
            'industry3': 'बैटरी तकनीक: Zn + 2MnO<sub>2</sub> → ZnO + Mn<sub>2</sub>O<sub>3</sub> (क्षारीय बैटरियाँ)',
            'environmentTitle': 'पर्यावरणीय प्रभाव',
            'environment1': 'प्रकाश संश्लेषण: 6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> (कार्बन निर्धारण)',
            'environment2': 'अम्ल वर्षा: SO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>3</sub> (पर्यावरणीय चिंता)',
            'environment3': 'ओजोन क्षरण: CFCl<sub>3</sub> + UV → CFCl<sub>2</sub> + Cl (क्लोरोफ्लोरोकार्बन विघटन)',
            'dailyLifeTitle': 'दैनिक जीवन में रसायन विज्ञान',
            'dailyLife1Title': 'पाक कला',
            'dailyLife1Text': 'मैलार्ड अभिक्रिया: एमिनो अम्ल + शर्करा → स्वाद यौगिक (भोजन का भूरा होना)',
            'dailyLife2Title': 'चिकित्सा',
            'dailyLife2Text': 'उदासीनीकरण: HCl + NaOH → NaCl + H<sub>2</sub>O (एंटासिड टैबलेट)',
            'dailyLife3Title': 'सफाई',
            'dailyLife3Text': 'ऑक्सीकरण: 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> (ब्लीचिंग क्रिया)',
            
            // Quiz
            'quizTitle': 'इंटरएक्टिव प्रश्नोत्तरी',
            'quizHeader': 'अपना ज्ञान परखें',
            'quizInstructions': 'रासायनिक अभिक्रियाओं और समीकरणों की अपनी समझ का परीक्षण करने के लिए इन 5 प्रश्नों के उत्तर दें। प्रत्येक प्रश्न का एक सही उत्तर होता है।',
            'startQuiz': 'प्रश्नोत्तरी शुरू करें',
            'submitQuiz': 'प्रश्नोत्तरी जमा करें',
            
            // Summary
            'summaryTitle': 'सारांश और महत्वपूर्ण तथ्य',
            'keyConceptsTitle': 'मुख्य अवधारणाएँ',
            'concept1': 'रासायनिक अभिक्रियाओं में नए पदार्थ बनाने के लिए परमाणुओं का पुनर्व्यवस्थापन शामिल होता है',
            'concept2': 'समीकरणों को संतुलित किया जाना चाहिए ताकि द्रव्यमान संरक्षण के नियम को संतुष्ट किया जा सके',
            'concept3': 'पाँच मुख्य प्रकार: संयोजन, वियोजन, विस्थापन, द्वि-विस्थापन, रेडॉक्स',
            'concept4': 'अभिक्रिया के साक्ष्य में तापमान परिवर्तन, गैस निकलना, रंग परिवर्तन, अवक्षेप शामिल हैं',
            'concept5': 'तापमान, सांद्रता, दाब, सतह क्षेत्र, उत्प्रेरक से दर प्रभावित होती है',
            'formulasTitle': 'महत्वपूर्ण सूत्र',
            'practiceTipsTitle': 'अभ्यास युक्तियाँ',
            'tip1': 'गुणांक समायोजित करके समीकरणों को संतुलित करें, कभी भी सब्स्क्रिप्ट न बदलें',
            'tip2': 'संतुलन उन तत्वों से शुरू करें जो प्रत्येक तरफ केवल एक यौगिक में दिखाई देते हैं',
            'tip3': 'रेडॉक्स अभिक्रियाओं के लिए, यह पहचानने के लिए ऑक्सीकरण संख्या को ट्रैक करें कि क्या ऑक्सीकृत/अपचयित हुआ है',
            'tip4': 'हमेशा समीकरण के दोनों ओर के परमाणुओं की संख्या की दोबारा जांच करें',
            'tip5': 'अनुप्रयोगों को समझने के लिए वास्तविक दुनिया की अभिक्रियाओं के लिए समीकरण लिखने का अभ्यास करें',
            
            // Resources
            'resourcesTitle': 'संसाधन और आगे पढ़ने के लिए',
            'booksTitle': 'पुस्तकें',
            'book1': 'केमिस्ट्री: द सेंट्रल साइंस',
            'book2': 'कॉन्सेप्चुअल केमिस्ट्री',
            'book3': 'एनसीईआरटी रसायन विज्ञान पाठ्यपुस्तक कक्षा 10',
            'webTitle': 'वेब संसाधन',
            'web1': 'खान अकादमी - रसायन विज्ञान',
            'web2': 'केमिस्ट्री लिब्रेटेक्स्ट्स',
            'web3': 'फेट इंटरएक्टिव सिमुलेशन',
            'videosTitle': 'वीडियो',
            'video1': 'क्रैश कोर्स केमिस्ट्री',
            'video2': 'टेड-एड रसायन विज्ञान पाठ',
            'video3': 'एमआईटी ओपनकोर्सवेयर',
            
            // Footer
            'footerAboutTitle': 'इस संसाधन के बारे में',
            'footerAboutText': 'क्लास 10 के छात्रों के लिए रासायनिक अभिक्रियाओं और समीकरणों को कवर करने वाली इंटरएक्टिव तत्वों के साथ व्यापक शैक्षिक सामग्री।',
            'footerQuickTitle': 'त्वरित लिंक',
            'footerContactTitle': 'संपर्क करें',
            'footerLegalTitle': 'कानूनी',
            'copyrightText': '© 2023 रसायन विज्ञान शिक्षण संसाधन। सर्वाधिकार सुरक्षित।'
        };
        
        // English originals - used for toggling back
        const englishOriginals = {};
        
        // Initialize english originals
        Object.keys(hindiTranslations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                englishOriginals[key] = element.innerHTML;
            }
        });
        
        // Toggle between languages
        languageToggle.addEventListener('click', () => {
            if (currentLanguage === 'EN') {
                // Switch to Hindi
                currentLanguage = 'HI';
                currentLanguageElement.textContent = 'English';
                
                Object.keys(hindiTranslations).forEach(key => {
                    const element = document.getElementById(key);
                    if (element) {
                        element.innerHTML = hindiTranslations[key];
                    }
                });
            } else {
                // Switch back to English
                currentLanguage = 'EN';
                currentLanguageElement.textContent = 'EN';
                
                Object.keys(englishOriginals).forEach(key => {
                    const element = document.getElementById(key);
                    if (element) {
                        element.innerHTML = englishOriginals[key];
                    }
                });
            }
        });
        
        // Formula balancer functionality
        document.getElementById('balanceButton').addEventListener('click', function() {
            const reactants = document.getElementById('reactants').value.trim();
            const products = document.getElementById('products').value.trim();
            
            if (!reactants || !products) {
                document.getElementById('balanceError').textContent = 'Please enter both reactants and products';
                document.getElementById('balanceError').classList.remove('hidden');
                document.getElementById('balancedResult').classList.add('hidden');
                return;
            }
            
            // Very simple balancing for demonstration
            // In a real app, this would use a chemistry balancing algorithm
            if (reactants.includes('H2') && reactants.includes('O2') && products.includes('H2O')) {
                document.getElementById('balancedEquation').textContent = '2H₂ + O₂ → 2H₂O';
                document.getElementById('balancedResult').classList.remove('hidden');
                document.getElementById('balanceError').classList.add('hidden');
            } else if (reactants.includes('Fe') && reactants.includes('Cl2') && products.includes('FeCl3')) {
                document.getElementById('balancedEquation').textContent = '2Fe + 3Cl₂ → 2FeCl₃';
                document.getElementById('balancedResult').classList.remove('hidden');
                document.getElementById('balanceError').classList.add('hidden');
            } else if (reactants.includes('Al') && reactants.includes('HCl') && products.includes('AlCl3') && products.includes('H2')) {
                document.getElementById('balancedEquation').textContent = '2Al + 6HCl → 2AlCl₃ + 3H₂';
                document.getElementById('balancedResult').classList.remove('hidden');
                document.getElementById('balanceError').classList.add('hidden');
            } else {
                document.getElementById('balanceError').textContent = 'Unable to balance this equation. Try some common examples like H2 + O2 → H2O';
                document.getElementById('balanceError').classList.remove('hidden');
                document.getElementById('balancedResult').classList.add('hidden');
            }
        });
        
        // Show answer for practice problems
        window.showAnswer = function(questionNum) {
            const answerElement = document.getElementById('answer' + questionNum);
            answerElement.classList.toggle('hidden');
        };
        
        // Quiz functionality
        const quizAnswers = {
            q1: 'B',
            q2: 'B',
            q3: 'A',
            q4: 'D',
            q5: 'A'
        };
        
        const quizExplanations = {
            q1: 'This is a combination reaction where hydrogen and oxygen combine to form water.',
            q2: 'Balanced equations satisfy the Law of Conservation of Mass which states that mass cannot be created or destroyed in a chemical reaction.',
            q3: 'Zn is oxidized as it loses electrons to form Zn²⁺ in ZnSO₄.',
            q4: 'All of these are evidences that a chemical reaction has occurred.',
            q5: 'The balanced equation shows 2 aluminum atoms reacting with 6 hydrochloric acid molecules to produce 2 aluminum chloride molecules and 3 hydrogen gas molecules.'
        };
        
        document.getElementById('startQuiz').addEventListener('click', function() {
            document.getElementById('quizIntro').classList.add('hidden');
            document.getElementById('quizQuestions').classList.remove('hidden');
        });
        
        document.getElementById('submitQuiz').addEventListener('click', function() {
            let score = 0;
            const feedback = [];
            
            for (let i = 1; i <= 5; i++) {
                const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
                
                if (selectedOption) {
                    if (selectedOption.value === quizAnswers[`q${i}`]) {
                        score++;
                        feedback.push(`<div class="p-3 bg-green-50 rounded mb-2"><p class="font-medium text-green-800">Question ${i}: Correct!</p><p class="text-sm mt-1">${quizExplanations[`q${i}`]}</p></div>`);
                    } else {
                        feedback.push(`<div class="p-3 bg-red-50 rounded mb-2"><p class="font-medium text-red-800">Question ${i}: Incorrect.</p><p class="text-sm mt-1">Correct answer: ${quizAnswers[`q${i}`]}. ${quizExplanations[`q${i}`]}</p></div>`);
                    }
                } else {
                    feedback.push(`<div class="p-3 bg-yellow-50 rounded mb-2"><p class="font-medium text-yellow-800">Question ${i}: Not answered.</p><p class="text-sm mt-1">Correct answer: ${quizAnswers[`q${i}`]}. ${quizExplanations[`q${i}`]}</p></div>`);
                }
            }
            
            document.getElementById('quizQuestions').classList.add('hidden');
            document.getElementById('quizResults').classList.remove('hidden');
            document.getElementById('scoreDisplay').textContent = `Score: ${score}/5 (${score * 20}%)`;
            document.getElementById('answerFeedback').innerHTML = feedback.join('');
        });
        
        document.getElementById('retryQuiz').addEventListener('click', function() {
            // Reset all radio buttons
            document.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.checked = false;
            });
            
            document.getElementById('quizResults').classList.add('hidden');
            document.getElementById('quizQuestions').classList.remove('hidden');
        });
        
        // Reaction rate chart
        const ctx = document.getElementById('reactionRateChart').getContext('2d');
        const reactionRateChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['0°C', '10°C', '20°C', '30°C', '40°C', '50°C', '60°C'],
                datasets: [{
                    label: 'Reaction Rate vs Temperature',
                    data: [0.2, 0.5, 1.0, 1.8, 3.2, 5.6, 9.5],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Rate: ${context.parsed.y} units`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Reaction Rate'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        }
                    }
                }
            }
        });
        
        // Help button functionality
        document.getElementById('helpButton').addEventListener('click', function() {
            alert(currentLanguage === 'EN' 
                ? 'Need help with chemical reactions? Contact us at info@chemlearning.com' 
                : 'रासायनिक अभिक्रियाओं में सहायता चाहिए? हमसे संपर्क करें info@chemlearning.com पर');
        });