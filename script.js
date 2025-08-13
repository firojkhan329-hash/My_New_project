
        function showTraffic(device) {
            const diagram = document.querySelector('#network-diagram svg');
            diagram.querySelectorAll('.packet').forEach(el => el.remove());
            
            let paths = [];
            let colors = [];
            
            switch(device) {
                case 'router':
                    paths = ['M130,180 L250,180', 'M130,180 L250,150', 'M130,180 L250,210'];
                    colors = ['#3b82f6', '#10b981', '#8b5cf6'];
                    break;
                case 'switch':
                    paths = ['M290,180 L450,180', 'M290,180 L450,150', 'M290,180 L450,210'];
                    colors = ['#3b82f6', '#10b981', '#8b5cf6'];
                    break;
                case 'hub':
                    paths = ['M690,180 L450,180', 'M690,180 L450,150', 'M690,180 L450,210',
                            'M690,180 L450,240', 'M690,180 L450,270'];
                    colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];
                    break;
                case 'bridge':
                    paths = ['M450,180 L290,180', 'M450,180 L290,150', 
                            'M450,180 L290,210', 'M450,180 L690,180'];
                    colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];
                    break;
            }
            
            paths.forEach((path, i) => {
                const packet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                packet.setAttribute("r", "5");
                packet.setAttribute("fill", colors[i]);
                packet.setAttribute("class", "packet");
                
                const animate = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
                animate.setAttribute("path", path);
                animate.setAttribute("dur", "2s");
                animate.setAttribute("repeatCount", "indefinite");
                
                packet.appendChild(animate);
                diagram.appendChild(packet);
            });
        }

        // Add event listeners to all animate buttons
        document.querySelectorAll('.animate-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const device = this.closest('.device-card').querySelector('h3').textContent.trim();
                showTraffic(device.toLowerCase());
            });
        });
        
        function showDeviceInfo(device) {
            const info = {
                'router': 'Routes traffic between networks using IP addresses (Layer 3)',
                'switch': 'Forwards frames within a network using MAC addresses (Layer 2)',
                'hub': 'Broadcasts to all connected devices (Layer 1)',
                'bridge': 'Connects network segments using MAC filtering (Layer 2)'
            };
            alert(`${device.toUpperCase()}: ${info[device]}`);
        }

        //Introduction to Networking & the OSI Model


        

        // Toggle OSI layer information
        function toggleLayerInfo(layer) {
            const element = document.getElementById(layer + '-info');
            element.classList.toggle('hidden');
            
            // Rotate the chevron icon
            const icon = event.currentTarget.querySelector('.fa-chevron-down');
            icon.classList.toggle('fa-rotate-180');
        }
        
        // Quiz checking function
        function checkQuiz() {
            const answers = {
                q1: 'b', // Network Layer
                q2: 'c', // Router
                q3: 'b'  // Error recovery and flow control
            };
            
            let score = 0;
            const form = document.getElementById('quizForm');
            const resultsElement = document.getElementById('quizResults');
            
            // Check each question
            for (const question in answers) {
                const selectedOption = form.elements[question].value;
                if (selectedOption === answers[question]) {
                    score++;
                }
            }
            
            // Display results
            resultsElement.classList.remove('hidden');
            if (score === 3) {
                resultsElement.innerHTML = `
                    <div class="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            <strong>Perfect!</strong>
                        </div>
                        <p class="mt-2">You got all 3 questions correct! You have a solid understanding of networking fundamentals.</p>
                    </div>
                `;
            } else if (score >= 1) {
                resultsElement.innerHTML = `
                    <div class="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-blue-500"></i>
                            <strong>Good job!</strong>
                        </div>
                        <p class="mt-2">You got ${score} out of 3 questions correct. Review the materials to improve your score.</p>
                    </div>
                `;
            } else {
                resultsElement.innerHTML = `
                    <div class="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-exclamation-circle mr-2 text-yellow-500"></i>
                            <strong>Keep trying!</strong>
                        </div>
                        <p class="mt-2">You got ${score} out of 3 questions correct. Review the OSI model sections and try again.</p>
                    </div>
                `;
            }
        }


        //Types of Networks (LAN, WAN, MAN, WLAN, PAN) 

         // Network card interactivity
        document.querySelectorAll('.network-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                alert(`You clicked on ${title}. Learn more about this network type in the full course!`);
            });
        });

        // Quiz functionality
        document.querySelector('#quizSection button').addEventListener('click', function() {
            const resultsDiv = document.getElementById('quizResults');
            let correctAnswers = 0;
            const totalQuestions = 5;
            
            // Check answers
            const q1Correct = document.querySelector('input[name="q1"][data-correct]').checked;
            const q2Correct = document.querySelector('input[name="q2"][data-correct]').checked;
            const q3Correct = document.querySelector('input[name="q3"][data-correct]').checked;
            const q4Correct = document.querySelector('input[name="q4"][data-correct]').checked;
            const q5Correct = document.querySelector('input[name="q5"][data-correct]').checked;

            correctAnswers = [q1Correct, q2Correct, q3Correct, q4Correct, q5Correct]
                .filter(correct => correct).length;

            resultsDiv.innerHTML = `
                <h3 class="font-bold text-lg mb-2">Quiz Results: ${correctAnswers}/${totalQuestions}</h3>
                <div class="text-sm">
                    ${q1Correct ? '✅' : '❌'} Question 1 ${q1Correct ? '✓' : '✗ The answer is MAN'}<br>
                    ${q2Correct ? '✅' : '❌'} Question 2 ${q2Correct ? '✓' : '✗ The answer is: Connects personal devices within a few meters'}<br>
                    ${q3Correct ? '✅' : '❌'} Question 3 ${q3Correct ? '✓' : '✗ The answer is LAN'}<br>
                    ${q4Correct ? '✅' : '❌'} Question 4 ${q4Correct ? '✓' : '✗ The answer is: Wi-Fi (802.11 standards)'}<br>
                    ${q5Correct ? '✅' : '❌'} Question 5 ${q5Correct ? '✓' : '✗ The answer is WAN'}
                </div>
            `;
            resultsDiv.classList.remove('hidden');
        });

        // Diagram animation
        const diagram = document.getElementById('networkDiagram');
        diagram.addEventListener('mouseover', () => {
            diagram.style.transform = 'scale(1.05) rotate(2deg)';
        });
        diagram.addEventListener('mouseout', () => {
            diagram.style.transform = 'scale(1)';
        });



        //Binary & Hexadecimal in Networking


        // Tab functionality
        function openTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('border-blue-500', 'text-blue-600');
                button.classList.add('border-transparent', 'text-gray-500');
            });
            
            // Show selected tab content
            document.getElementById(tabId).classList.add('active');
            
            // Highlight selected button
            document.querySelectorAll('.tab-button').forEach(button => {
                if (button.textContent.trim().toLowerCase().includes(tabId.split('-')[0])) {
                    button.classList.remove('border-transparent', 'text-gray-500');
                    button.classList.add('border-blue-500', 'text-blue-600');
                }
            });
        }

        // Conversion Functions
        function decimalToBinary() {
            const decimal = document.getElementById('decimal-input').value;
            if (!decimal) {
                alert('Please enter a decimal number');
                return;
            }
            const result = parseInt(decimal, 10).toString(2);
            document.getElementById('binary-result').textContent = result;
        }

        function binaryToDecimal() {
            const binary = document.getElementById('binary-input').value;
            if (!binary) {
                alert('Please enter a binary number');
                return;
            }
            // Validate binary input
            if (!/^[01]+$/.test(binary)) {
                alert('Please enter a valid binary number (only 0s and 1s)');
                return;
            }
            const result = parseInt(binary, 2);
            document.getElementById('decimal-result').textContent = result;
        }

        function hexToBinary() {
            const hex = document.getElementById('hex-input').value;
            if (!hex) {
                alert('Please enter a hexadecimal number');
                return;
            }
            // Validate hex input
            if (!/^[0-9a-fA-F]+$/.test(hex)) {
                alert('Please enter a valid hexadecimal number (0-9, A-F)');
                return;
            }
            const decimal = parseInt(hex, 16);
            const result = decimal.toString(2);
            document.getElementById('hex-binary-result').textContent = result;
        }

        function binaryToHex() {
            const binary = document.getElementById('binary-hex-input').value;
            if (!binary) {
                alert('Please enter a binary number');
                return;
            }
            // Validate binary input
            if (!/^[01]+$/.test(binary)) {
                alert('Please enter a valid binary number (only 0s and 1s)');
                return;
            }
            const decimal = parseInt(binary, 2);
            const result = decimal.toString(16).toUpperCase();
            document.getElementById('binary-hex-result').textContent = result;
        }

        function allConversions() {
            const input = document.getElementById('all-conversion-input').value;
            if (!input) {
                alert('Please enter a number');
                return;
            }

            let decimal, binary, hex;

            // Try to determine input type
            if (/^[01]+$/.test(input)) {
                // Binary input
                decimal = parseInt(input, 2);
                binary = input;
                hex = decimal.toString(16).toUpperCase();
            } else if (/^[0-9]+$/.test(input)) {
                // Decimal input
                decimal = parseInt(input, 10);
                binary = decimal.toString(2);
                hex = decimal.toString(16).toUpperCase();
            } else if (/^[0-9a-fA-F]+$/.test(input)) {
                // Hex input
                decimal = parseInt(input, 16);
                binary = decimal.toString(2);
                hex = input.toUpperCase();
            } else {
                alert('Please enter a valid binary, decimal, or hexadecimal number');
                return;
            }

            document.getElementById('all-binary-result').textContent = binary;
            document.getElementById('all-decimal-result').textContent = decimal;
            document.getElementById('all-hex-result').textContent = hex;
        }

        // Initialize first tab as active
        document.addEventListener('DOMContentLoaded', function() {
            openTab('decimal-tab');
        });


        //IPv6 Addressing Guide


            // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and content
                    tabButtons.forEach(btn => btn.classList.remove('border-blue-600', 'text-blue-600'));
                    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('border-blue-600', 'text-blue-600');
                    
                    // Show corresponding content
                    const tabId = button.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // IPv6 address visualization
            const ipv6Example = document.getElementById('ipv6-example');
            const exampleAddress = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
            const segments = exampleAddress.split(':');
            
            segments.forEach((segment, index) => {
                const segmentDiv = document.createElement('div');
                segmentDiv.className = 'address-segment group';
                
                segment.split('').forEach(char => {
                    const digitSpan = document.createElement('span');
                    digitSpan.className = 'hex-digit';
                    digitSpan.textContent = char;
                    digitSpan.title = `Segment ${index+1}, Position ${segment.indexOf(char)+1}`;
                    segmentDiv.appendChild(digitSpan);
                });
                
                if (index < segments.length - 1) {
                    const colonSpan = document.createElement('span');
                    colonSpan.textContent = ':';
                    segmentDiv.appendChild(colonSpan);
                }
                
                ipv6Example.appendChild(segmentDiv);
            });
        });

        // Cisco IOS Overview


        
 // Accordion functionality
        document.querySelectorAll('.accordion-toggle').forEach(toggle => {
            toggle.addEventListener('change', function() {
                const content = this.nextElementSibling.nextElementSibling;
                content.style.maxHeight = this.checked ? content.scrollHeight + 'px' : '0';
            });
        });
        
        // Smooth scrolling for TOC links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Highlight current section in TOC
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('#mainContent section');
            const scrollPosition = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const id = section.getAttribute('id');
                    document.querySelector(`aside a[href="#${id}"]`).classList.add('text-blue-600', 'bg-blue-50');
                    document.querySelector(`aside a[href="#${id}"]`).classList.remove('text-gray-700', 'hover:bg-gray-100');
                } else {
                    const id = section.getAttribute('id');
                    document.querySelector(`aside a[href="#${id}"]`).classList.remove('text-blue-600', 'bg-blue-50');
                    document.querySelector(`aside a[href="#${id}"]`).classList.add('text-gray-700', 'hover:bg-gray-100');
                }
            });
        });


        //Network Switch Fundamentals

           function startLab() {
            const labChoice = document.getElementById('lab-choice').value;
            const labOutput = document.getElementById('lab-output');
            
            if (!labChoice) {
                alert('Please select a lab scenario first!');
                return;
            }
            
            labOutput.classList.remove('hidden');
            
            // Simulated lab output based on selection
            let outputText = '';
            switch(labChoice) {
                case 'port-security':
                    outputText = `Switch# config terminal\n<br>`
                              + `Switch(config)# interface gig1/0/1\n<br>`
                              + `Switch(config-if)# switchport mode access\n<br>`
                              + `Switch(config-if)# switchport port-security\n<br>`
                              + `Switch(config-if)# switchport port-security maximum 2\n<br>`
                              + `Switch(config-if)# switchport port-security mac-address sticky\n<br>`
                              + `Switch(config-if)# switchport port-security violation restrict\n<br>`
                              + `Switch(config-if)# end\n<br>`
                              + `Switch# show port-security interface gig1/0/1\n<br>`
                              + `Port Security: Enabled\nPort Status: Secure-up\nViolation Mode: Restrict\nMaximum MAC Addresses: 2\nSticky MAC Addresses: 0\n`;
                    break;
                case 'trunking':
                    outputText = `Switch# config terminal\n<br>`
                              + `Switch(config)# interface gig1/0/24\n<br>`
                              + `Switch(config-if)# switchport mode trunk\n<br>`
                              + `Switch(config-if)# switchport trunk allowed vlan 10,20,30\n<br>`
                              + `Switch(config-if)# switchport trunk native vlan 99\n<br>`
                              + `Switch(config-if)# end\n<br>`
                              + `Switch# show interfaces trunk\n<br>`
                              + `Port    Mode        Encapsulation  Status    Native vlan\nGig1/0/24 on        802.1q         trunking    99\n`;
                    break;
                case 'vlan':
                    outputText = `Switch# config terminal\n<br>`
                              + `Switch(config)# vlan 50\n<br>`
                              + `Switch(config-vlan)# name Engineering\n<br>`
                              + `Switch(config-vlan)# state active\n<br>`
                              + `Switch(config-vlan)# exit\n<br>`
                              + `Switch(config)# interface gig1/0/15\n<br>`
                              + `Switch(config-if)# switchport access vlan 50\n<br>`
                              + `Switch(config-if)# end\n<br>`
                              + `Switch# show vlan brief\n<br>`
                              + `VLAN Name          Status    Ports\n50   Engineering    active    Gig1/0/15\n`;
                    break;
                case 'mac-static':
                    outputText = `Switch# config terminal\n<br>`
                              + `Switch(config)# mac address-table static 00:1A:2B:3C:4D:5E vlan 10 interface gig1/0/5\n<br>`
                              + `Switch(config)# end\n<br>`
                              + `Switch# show mac address-table static\n<br>`
                              + `Mac Address Table\n-------------------------------------------\nVlan    Mac Address       Type        Ports\n10      00:1a:2b:3c:4d:5e STATIC      Gig1/0/5\n`;
                    break;
            }
            
            labOutput.innerHTML = outputText;
        }

        //Inter-VLAN Routing

        function openTab(evt, tabName) {
            var i, tabcontent, tabbuttons;
            
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].className = tabcontent[i].className.replace(" active", "");
            }
            
            tabbuttons = document.getElementsByClassName("tab-button");
            for (i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
            }
            
            document.getElementById(tabName).className += " active";
            evt.currentTarget.className += " active";
        }
        
        function animateRouterStick() {
            const packet = document.getElementById("router-packet");
            packet.style.animation = "packetMoveRouter 3s linear forwards";
            packet.style.animationIterationCount = "infinite";
        }
        
        function animateLayer3() {
            const packet = document.getElementById("layer3-packet");
            packet.style.animation = "packetMoveSwitch 2s linear forwards";
            packet.style.animationIterationCount = "infinite";
        }
        
        function resetAnimation(diagramId) {
            const diagram = document.getElementById(diagramId);
            const packets = diagram.querySelectorAll(".packet");
            packets.forEach(packet => {
                packet.style.animation = "none";
            });
        }
        
        function checkAnswer(element, isCorrect) {
            const options = element.parentElement.querySelectorAll(".quiz-option");
            options.forEach(opt => {
                opt.style.backgroundColor = "";
                opt.style.color = "";
            });
            
            if (isCorrect) {
                element.style.backgroundColor = "#48bb78";
                element.style.color = "white";
            } else {
                element.style.backgroundColor = "#f56565";
                element.style.color = "white";
                // Find and highlight the correct answer
                options.forEach(opt => {
                    if (opt.onclick.toString().includes("true")) {
                        opt.style.backgroundColor = "#48bb78";
                        opt.style.color = "white";
                    }
                });
            }
        }
        
        // Initialize glossary tooltips
        document.querySelectorAll('.glossary-term').forEach(term => {
            term.addEventListener('mouseenter', function() {
                const definition = this.querySelector('.glossary-definition');
                definition.style.display = 'block';
            });
            term.addEventListener('mouseleave', function() {
                const definition = this.querySelector('.glossary-definition');
                definition.style.display = 'none';
            });
        });

        //Dynamic Routing Protocols (RIP, OSPF, EIGRP)

         



       //Static Routing

        // Toggle expandable content sections
        function toggleContent(id) {
            const content = document.getElementById(id);
            const btn = content.previousElementSibling;
            
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            btn.classList.toggle('active');
        }
        
        // Quiz functionality
        function selectOption(element) {
            const questionDiv = element.parentElement;
            const options = questionDiv.querySelectorAll('.quiz-option');
            const feedbackCorrect = questionDiv.querySelector('.quiz-feedback.correct');
            const feedbackIncorrect = questionDiv.querySelector('.quiz-feedback.incorrect');
            
            // Remove selected class from all options in this question
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            element.classList.add('selected');
            
            // Show appropriate feedback
            if (element.getAttribute('data-correct') === 'true') {
                feedbackCorrect.style.display = 'block';
                feedbackIncorrect.style.display = 'none';
            } else {
                feedbackCorrect.style.display = 'none';
                feedbackIncorrect.style.display = 'block';
            }
        }
        
        // Packet animation control
        const startAnimationBtn = document.getElementById('startAnimation');
        const packets = document.querySelectorAll('.data-packet');
        
        startAnimationBtn.addEventListener('click', function() {
            packets.forEach(packet => {
                if (packet.style.animationPlayState === 'running') {
                    packet.style.animationPlayState = 'paused';
                    startAnimationBtn.textContent = 'Show Packet Flow';
                } else {
                    packet.style.animationPlayState = 'running';
                    startAnimationBtn.textContent = 'Pause Animation';
                }
            });
        });
        
        // Randomize packet animation delays
        packets.forEach(packet => {
            const delay = Math.random() * 8;
            packet.style.animationDelay = `${delay}s`;
        });



        //DHCP: Configuration

         // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });
        
        // Interactive DHCP Pool Demo
        const ipPool = document.getElementById('ip-pool');
        const assignBtn = document.getElementById('assign-btn');
        const releaseBtn = document.getElementById('release-btn');
        const reserveBtn = document.getElementById('reserve-btn');
        const conflictBtn = document.getElementById('conflict-btn');
        const poolStatus = document.getElementById('pool-status');
        
        // Initialize IP pool (192.168.1.100 to 192.168.1.119 for demo)
        const poolSize = 20;
        let poolState = Array(poolSize).fill(0); // 0 = available, 1 = leased, 2 = reserved, 3 = conflict
        const leasedIPs = new Map();
        
        function renderPool() {
            ipPool.innerHTML = '';
            let leasedCount = 0;
            let reservedCount = 0;
            let conflictCount = 0;
            
            for (let i = 0; i < poolSize; i++) {
                const box = document.createElement('div');
                box.className = 'ip-box';
                box.dataset.ip = `192.168.1.${100 + i}`;
                
                switch(poolState[i]) {
                    case 1:
                        box.classList.add('leased');
                        box.title = `Leased to ${leasedIPs.get(i) || 'unknown'}`;
                        leasedCount++;
                        break;
                    case 2:
                        box.classList.add('reserved');
                        reservedCount++;
                        break;
                    case 3:
                        box.classList.add('conflict');
                        conflictCount++;
                        break;
                }
                
                box.addEventListener('click', () => {
                    if (poolState[i] === 1) {
                        alert(`IP Address: 192.168.1.${100 + i}\nLeased to: ${leasedIPs.get(i) || 'unknown'}`);
                    }
                });
                
                ipPool.appendChild(box);
            }
            
            poolStatus.innerHTML = `
                <div style="display: flex; gap: 1rem;">
                    <div>Total: ${poolSize}</div>
                    <div style="color: var(--success);">Leased: ${leasedCount}</div>
                    <div style="color: var(--warning);">Reserved: ${reservedCount}</div>
                    <div style="color: var(--danger);">Conflict: ${conflictCount}</div>
                    <div style="color: var(--secondary);">Available: ${poolSize - leasedCount - reservedCount - conflictCount}</div>
                </div>
            `;
        }
        
        assignBtn.addEventListener('click', () => {
            const availableIndices = [];
            poolState.forEach((state, index) => {
                if (state === 0) availableIndices.push(index);
            });
            
            if (availableIndices.length === 0) {
                alert('No available IP addresses in the pool!');
                return;
            }
            
            const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            poolState[randomIndex] = 1;
            leasedIPs.set(randomIndex, `Client-${Math.floor(Math.random() * 1000)}`);
            renderPool();
        });
        
        releaseBtn.addEventListener('click', () => {
            const leasedIndices = [];
            poolState.forEach((state, index) => {
                if (state === 1) leasedIndices.push(index);
            });
            
            if (leasedIndices.length === 0) {
                alert('No leased IP addresses to release!');
                return;
            }
            
            const randomIndex = leasedIndices[Math.floor(Math.random() * leasedIndices.length)];
            poolState[randomIndex] = 0;
            leasedIPs.delete(randomIndex);
            renderPool();
        });
        
        reserveBtn.addEventListener('click', () => {
            const availableIndices = [];
            poolState.forEach((state, index) => {
                if (state === 0) availableIndices.push(index);
            });
            
            if (availableIndices.length === 0) {
                alert('No available IP addresses to reserve!');
                return;
            }
            
            const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            poolState[randomIndex] = 2;
            renderPool();
        });
        
        conflictBtn.addEventListener('click', () => {
            const leasedIndices = [];
            poolState.forEach((state, index) => {
                if (state === 1) leasedIndices.push(index);
            });
            
            if (leasedIndices.length === 0) {
                alert('No leased IP addresses to create conflict with!');
                return;
            }
            
            const randomIndex = leasedIndices[Math.floor(Math.random() * leasedIndices.length)];

  //Network Address Translation (NAT)

             // Simple script to handle the tab switching
        document.addEventListener('DOMContentLoaded', function() {
            // Animation for diagrams
            setTimeout(() => {
                const elements = document.querySelectorAll('.slide-in');
                elements.forEach(el => {
                    el.style.opacity = '1';
                });
            }, 200);
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });

        //Network Security Fundamentals

         document.getElementById('password').addEventListener('input', function() {
                const password = this.value;
                const strengthMeter = document.getElementById('strength-meter-fill');
                const strengthText = document.getElementById('strength-text');
                const requirements = [
                    document.getElementById('req-length'),
                    document.getElementById('req-case'),
                    document.getElementById('req-number'),
                    document.getElementById('req-special'),
                    document.getElementById('req-common')
                ];
                
                let strength = 0;
                let reasons = [];
                
                // Check length
                if (password.length >= 12) {
                    strength += 20;
                    requirements[0].querySelector('span').textContent = '✓';
                    requirements[0].querySelector('span').className = 'w-4 mr-1 text-green-500';
                } else {
                    requirements[0].querySelector('span').textContent = '✗';
                    requirements[0].querySelector('span').className = 'w-4 mr-1 text-red-500';
                }
                
                // Check case
                if (password.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
                    strength += 20;
                    requirements[1].querySelector('span').textContent = '✓';
                    requirements[1].querySelector('span').className = 'w-4 mr-1 text-green-500';
                } else {
                    requirements[1].querySelector('span').textContent = '✗';
                    requirements[1].querySelector('span').className = 'w-4 mr-1 text-red-500';
                }
                
                // Check numbers
                if (password.match(/\d/)) {
                    strength += 20;
                    requirements[2].querySelector('span').textContent = '✓';
                    requirements[2].querySelector('span').className = 'w-4 mr-1 text-green-500';
                } else {
                    requirements[2].querySelector('span').textContent = '✗';
                    requirements[2].querySelector('span').className = 'w-4 mr-1 text-red-500';
                }
                
                // Check special chars
                if (password.match(/[^a-zA-Z0-9]/)) {
                    strength += 20;
                    requirements[3].querySelector('span').textContent = '✓';
                    requirements[3].querySelector('span').className = 'w-4 mr-1 text-green-500';
                } else {
                    requirements[3].querySelector('span').textContent = '✗';
                    requirements[3].querySelector('span').className = 'w-4 mr-1 text-red-500';
                }
                
                // Check common passwords
                if (!password.match(/123456|password|qwerty|abc123|letmein|monkey|111111/i)) {
                    strength += 20;
                    requirements[4].querySelector('span').textContent = '✓';
                    requirements[4].querySelector('span').className = 'w-4 mr-1 text-green-500';
                } else {
                    requirements[4].querySelector('span').textContent = '✗';
                    requirements[4].querySelector('span').className = 'w-4 mr-1 text-red-500';
                }
                
                // Update strength meter
                strengthMeter.style.width = strength + '%';
                
                if (password.length === 0) {
                    strengthText.textContent = 'Enter a password to check strength';
                    strengthMeter.style.backgroundColor = 'gray';
                } else if (strength < 40) {
                    strengthText.textContent = 'Weak';
                    strengthMeter.style.backgroundColor = '#ef4444';
                } else if (strength < 80) {
                    strengthText.textContent = 'Moderate';
                    strengthMeter.style.backgroundColor = '#f59e0b';
                } else {
                    strengthText.textContent = 'Strong';
                    strengthMeter.style.backgroundColor = '#10b981';
                }
            });


//Routing Tables and Path Selection

 //Domain Name System (DNS)

 // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scroll for anchor links with offset for fixed header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    //Comprehensive Guide to Access Control Lists (ACLs)

                       // Tab functionality
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Update active tab button
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('border-blue-600', 'text-blue-600');
                    btn.classList.add('border-transparent', 'text-gray-600');
                });
                button.classList.add('border-blue-600', 'text-blue-600');
                button.classList.remove('border-transparent', 'text-gray-600');
                
                // Show active tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabId).classList.add('active');
            });
        });

        //WAN Technologies

        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        });

        // Progress bar
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Accordion functionality for technical details
        document.querySelectorAll('.accordion-toggle').forEach(toggle => {
            toggle.addEventListener('change', function() {
                const content = this.nextElementSibling;
                content.style.maxHeight = this.checked ? content.scrollHeight + 'px' : '0';
            });
        });

        // Image lazy loading
        document.addEventListener('DOMContentLoaded', function() {
            const lazyImages = document.querySelectorAll('.tech-diagram');
            
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        });

        //Syslog & Network Monitoring

             // Syslog level filtering
        function filterLogs(level) {
            const logEntries = document.querySelectorAll('#log-viewer .log-entry');
            logEntries.forEach(entry => {
                entry.style.display = 'none';
                
                if (level === 'all') {
                    entry.style.display = 'block';
                } else {
                    const levelNames = ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'];
                    const entryClass = entry.className;
                    
                    if (level === entryClass.split(' ')[1].split('-')[2] || 
                        (level === 'emergency' && entryClass.includes('syslog-level-critical'))) {
                        entry.style.display = 'block';
                    }
                }
            });
        }
        
        // Network traffic simulation
        function simulateTraffic(type) {
            const networkGraph = document.getElementById('network-graph');
            const svg = networkGraph.querySelector('svg');
            
            // Remove existing animation elements
            const existingCircles = svg.querySelectorAll('circle[class="pulse-animation"]');
            existingCircles.forEach(circle => circle.remove());
            
            // Add new animations based on traffic type
            if (type === 'normal') {
                document.getElementById('bandwidth-util').textContent = '32%';
                document.querySelector('.progress-fill.bg-blue-500').style.width = '32%';
                
                // Add normal traffic animations
                svg.innerHTML += `
                    <circle cx="200" cy="116" r="5" fill="#3b82f6" class="pulse-animation">
                        <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="225" cy="200" r="5" fill="#3b82f6" class="pulse-animation" style="animation-delay: 1s;">
                        <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
                    </circle>
                `;
            } else if (type === 'high') {
                document.getElementById('bandwidth-util').textContent = '78%';
                document.querySelector('.progress-fill.bg-blue-500').style.width = '78%';
                
                // Add high traffic animations
                for (let i = 0; i < 5; i++) {
                    const x = 150 + Math.random() * 200;
                    const y = 50 + Math.random() * 350;
                    const delay = Math.random() * 2;
                    svg.innerHTML += `
                        <circle cx="${x}" cy="${y}" r="5" fill="#f59e0b" class="pulse-animation" style="animation-delay: ${delay}s;">
                            <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite" />
                        </circle>
                    `;
                }
            } else if (type === 'attack') {
                document.getElementById('bandwidth-util').textContent = '95%';
                document.querySelector('.progress-fill.bg-blue-500').style.width = '95%';
                
                // Add attack traffic animations
                for (let i = 0; i < 10; i++) {
                    const x = 150 + Math.random() * 200;
                    const y = 50 + Math.random() * 350;
                    const delay = Math.random() * 0.5;
                    svg.innerHTML += `
                        <circle cx="${x}" cy="${y}" r="5" fill="#ef4444" class="pulse-animation" style="animation-delay: ${delay}s;">
                            <animate attributeName="r" values="5;8;5" dur="0.5s" repeatCount="indefinite" />
                        </circle>
                    `;
                }
                
                // Flash the firewall node
                const firewallNode = document.querySelector('.network-node[title="Firewall"]');
                firewallNode.classList.add('animate-pulse');
                setTimeout(() => {
                    firewallNode.classList.remove('animate-pulse');
                }, 5000);
            }
        }
        
        // Initialize with normal traffic
        document.addEventListener('DOMContentLoaded', () => {
            simulateTraffic('normal');
        });


        //Network Monitoring & Performance Tools

          // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Section toggle function
        function toggleSection(sectionId, button) {
            const section = document.getElementById(sectionId);
            const icon = button.querySelector('svg');
            
            section.classList.toggle('section-collapse');
            section.classList.toggle('section-expanded');
            
            if (section.classList.contains('section-expanded')) {
                button.querySelector('span').textContent = 'Show Less';
                icon.style.transform = 'rotate(180deg)';
            } else {
                button.querySelector('span').textContent = button.querySelector('span').textContent.replace('Less', 'More');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Tool details toggle function
        function toggleToolDetails(detailsId) {
            const details = document.getElementById(detailsId);
            details.classList.toggle('section-collapse');
            details.classList.toggle('section-expanded');
        }

        // Create animated network diagram
        function createNetworkDiagram() {
            const container = document.getElementById('basic-network-diagram');
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            
            // Clear previous diagram
            container.innerHTML = '';
            
            // Create nodes
            const nodeCount = 10;
            const nodes = [];
            
            for (let i = 0; i < nodeCount; i++) {
                const node = document.createElement('div');
                node.className = 'network-node';
                
                // Position randomly but not too close to edges
                const x = 50 + Math.random() * (width - 100);
                const y = 50 + Math.random() * (height - 100);
                
                node.style.left = `${x}px`;
                node.style.top = `${y}px`;
                
                // Assign different animation delays
                node.style.animationDelay = `${Math.random() * 2}s`;
                
                container.appendChild(node);
                nodes.push({x, y, element: node});
                
                // Add data flow animation between some nodes
                if (i > 0) {
                    createDataFlow(nodes[i-1], nodes[i]);
                }
            }
        }

        // Create data flow animation between two nodes
        function createDataFlow(node1, node2) {
            const container = document.getElementById('basic-network-diagram');
            
            // Create line between nodes
            const line = document.createElement('div');
            line.className = 'network-line';
            
            // Calculate line position and dimensions
            const x1 = node1.x + 10;
            const y1 = node1.y + 10;
            const x2 = node2.x + 10;
            const y2 = node2.y + 10;
            
            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            line.style.width = `${length}px`;
            line.style.height = '2px';
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.transformOrigin = '0 0';
            line.style.transform = `rotate(${angle}deg)`;
            
            container.appendChild(line);
            
            // Create moving data packets
            setInterval(() => {
                const dataPacket = document.createElement('div');
                dataPacket.className = 'data-flow';
                
                // Start position at node1
                dataPacket.style.left = `${x1 - 4}px`;
                dataPacket.style.top = `${y1 - 4}px`;
                
                container.appendChild(dataPacket);
                
                // Animate to node2
                let startTime;
                const duration = 2000; // 2 seconds
                
                function animatePacket(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = (timestamp - startTime) / duration;
                    
                    if (progress < 1) {
                        const currentX = x1 + (x2 - x1) * progress;
                        const currentY = y1 + (y2 - y1) * progress;
                        
                        dataPacket.style.left = `${currentX - 4}px`;
                        dataPacket.style.top = `${currentY - 4}px`;
                        
                        requestAnimationFrame(animatePacket);
                    } else {
                        dataPacket.remove();
                    }
                }
                
                requestAnimationFrame(animatePacket);
            }, 1000);
        }

        // Initialize diagram when page loads
        window.addEventListener('load', createNetworkDiagram);
        window.addEventListener('resize', createNetworkDiagram);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });