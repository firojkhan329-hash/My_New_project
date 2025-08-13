  document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes from all tabs and buttons
                document.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('border-blue-600', 'text-blue-600');
                    b.classList.add('text-gray-500');
                });
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active class to clicked button
                btn.classList.remove('text-gray-500');
                btn.classList.add('border-blue-600', 'text-blue-600');
                
                // Show corresponding content
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Expandable content functionality
        document.querySelectorAll('.expand-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const content = document.getElementById(targetId);
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    btn.textContent = btn.textContent.replace('−', '+');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    btn.textContent = btn.textContent.replace('+', '−');
                }
            });
        });
        
        // Network topology animation
        function initTopology() {
            const container = document.getElementById('topologyDemo');
            
            // Create switches
            const switch1 = document.createElement('div');
            switch1.className = 'network-node bg-blue-600 text-white w-16 h-16';
            switch1.textContent = 'SW1';
            switch1.style.top = '50%';
            switch1.style.left = '20%';
            container.appendChild(switch1);
            
            const switch2 = document.createElement('div');
            switch2.className = 'network-node bg-blue-600 text-white w-16 h-16';
            switch2.textContent = 'SW2';
            switch2.style.top = '50%';
            switch2.style.left = '80%';
            container.appendChild(switch2);
            
            // Create links
            const links = [];
            for (let i = 0; i < 4; i++) {
                const link = document.createElement('div');
                link.className = 'network-link';
                
                // Position between switches with slight variation
                const yOffset = (i - 1.5) * 20;
                link.style.top = `calc(50% + ${yOffset}px - 1px)`;
                link.style.left = 'calc(20% + 32px)';
                
                // Calculate length based on positions
                const dx = 80 - 20; // % difference
                const dy = yOffset - yOffset; // same y offset
                const length = Math.sqrt(dx * dx + dy * dy);
                
                // Initial state (0 length)
                link.style.width = '0%';
                link.style.opacity = '0';
                
                // Rotate based on y offset
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                link.style.transform = `rotate(${angle}deg)`;
                
                container.appendChild(link);
                links.push(link);
                
                // Create animated traffic
                const traffic = document.createElement('div');
                traffic.className = 'traffic-flow';
                traffic.style.top = `calc(50% + ${yOffset}px - 5px)`;
                traffic.style.left = 'calc(20% + 32px)';
                container.appendChild(traffic);
                
                // Animate traffic
                setTimeout(() => {
                    traffic.style.transition = `left ${2 + Math.random() * 2}s linear`;
                    traffic.style.opacity = '1';
                    traffic.style.left = `calc(80% - 32px)`;
                    
                    // Reset animation
                    setTimeout(() => {
                        traffic.style.transition = 'none';
                        traffic.style.left = `calc(20% + 32px)`;
                        traffic.style.opacity = '0';
                        
                        // Repeat
                        setTimeout(() => {
                            traffic.style.transition = `left ${2 + Math.random() * 2}s linear`;
                            traffic.style.opacity = '1';
                            traffic.style.left = `calc(80% - 32px)`;
                        }, 1000);
                    }, (2 + Math.random() * 2) * 1000);
                }, i * 500);
            }
            
            // Animate links forming
            links.forEach((link, i) => {
                setTimeout(() => {
                    link.style.transition = 'width 1s ease-out, opacity 1s ease-out';
                    link.style.width = '60%';
                    link.style.opacity = '1';
                }, i * 300);
            });
            
            // Add EtherChannel highlight animation
            setTimeout(() => {
                const highlight = document.createElement('div');
                highlight.className = 'network-node bg-blue-500 bg-opacity-30 rounded-full absolute border-2 border-blue-500 border-dashed';
                highlight.style.width = '200px';
                highlight.style.height = '100px';
                highlight.style.top = 'calc(50% - 50px)';
                highlight.style.left = 'calc(50% - 100px)';
                highlight.style.opacity = '0';
                container.appendChild(highlight);
                
                setTimeout(() => {
                    highlight.style.transition = 'opacity 1s ease-out';
                    highlight.style.opacity = '0.5';
                    
                    // Pulse animation
                    setInterval(() => {
                        highlight.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            highlight.style.transform = 'scale(1)';
                        }, 500);
                    }, 1000);
                }, 500);
            }, 1500);
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initTopology);