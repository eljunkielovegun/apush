// Initialize Mermaid for timeline rendering
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: false,
                htmlLabels: true
            },
            timeline: {
                useMaxWidth: false,
                // Customize timeline colors to match site theme
                noteMargin: 10,
                width: '100%',
                height: 'auto'
            }
        });
    }

    // Timeline navigation (if on timeline page)
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    
    if (timelineButtons.length > 0) {
        // Add click event to timeline buttons
        timelineButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                timelineButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all timeline containers
                document.querySelectorAll('.timeline-container-wrapper').forEach(container => {
                    container.style.display = 'none';
                });
                
                // Show selected timeline container
                const timelineId = this.getAttribute('data-timeline');
                document.getElementById(timelineId).style.display = 'block';
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile navigation toggle (for responsive design)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // Period navigation (if on period pages)
    const prevPeriodBtn = document.querySelector('.prev-period');
    const nextPeriodBtn = document.querySelector('.next-period');
    
    if (prevPeriodBtn) {
        prevPeriodBtn.addEventListener('click', function(e) {
            const prevPage = this.getAttribute('href');
            if (prevPage) {
                window.location.href = prevPage;
            }
            e.preventDefault();
        });
    }
    
    if (nextPeriodBtn) {
        nextPeriodBtn.addEventListener('click', function(e) {
            const nextPage = this.getAttribute('href');
            if (nextPage) {
                window.location.href = nextPage;
            }
            e.preventDefault();
        });
    }

    // Collapsible sections for mobile view (if on period pages)
    const collapsibleHeadings = document.querySelectorAll('.period-content h2');
    
    if (collapsibleHeadings.length > 0 && window.innerWidth < 768) {
        collapsibleHeadings.forEach(heading => {
            // Add toggle icon
            const toggleIcon = document.createElement('span');
            toggleIcon.className = 'toggle-icon';
            toggleIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
            heading.appendChild(toggleIcon);
            
            // Make next elements collapsible until next heading
            let currentElement = heading.nextElementSibling;
            const collapsibleElements = [];
            
            while (currentElement && currentElement.tagName !== 'H2') {
                collapsibleElements.push(currentElement);
                currentElement = currentElement.nextElementSibling;
            }
            
            // Create collapsible section
            heading.addEventListener('click', function() {
                // Toggle icon
                const icon = this.querySelector('.toggle-icon i');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
                
                // Toggle visibility of collapsible elements
                collapsibleElements.forEach(element => {
                    if (element.style.display === 'none') {
                        element.style.display = '';
                    } else {
                        element.style.display = 'none';
                    }
                });
            });
        });
    }

    // Search functionality (if exists on page)
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Function to perform search
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query.length < 2) {
            alert('Please enter at least 2 characters to search.');
            return;
        }
        
        // Redirect to search results page with query parameter
        window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    }

    // Process search results if on search page
    if (window.location.href.includes('search-results.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        
        if (searchQuery) {
            displaySearchResults(searchQuery);
        }
    }

    // Function to display search results (would need to be customized)
    function displaySearchResults(query) {
        const searchResultsContainer = document.getElementById('search-results');
        const searchTermElement = document.getElementById('search-term');
        
        if (searchTermElement) {
            searchTermElement.textContent = query;
        }
        
        // In a real implementation, you would search through your content
        // For this demo, we'll use hardcoded results
        const sampleResults = [
            {
                title: 'Period 1: Native American Societies',
                url: 'period1.html#native-american-societies',
                snippet: '...diverse Native American societies adapted to their environments through innovations in agriculture, resource use, and social structure...'
            },
            {
                title: 'Period 5: Civil War and Reconstruction',
                url: 'period5.html#civil-war',
                snippet: '...Lincoln and most Union supporters began the Civil War to preserve the Union, but the Emancipation Proclamation reframed the purpose...'
            },
            {
                title: 'Territorial Expansion Timeline',
                url: 'timelines.html#territorial-expansion',
                snippet: '...timeline showing the major events in U.S. territorial acquisition from colonial era through modern times...'
            }
        ];
        
        // Filter results based on query
        const filteredResults = sampleResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase()) || 
            result.snippet.toLowerCase().includes(query.toLowerCase())
        );
        
        // Display results
        if (searchResultsContainer) {
            if (filteredResults.length > 0) {
                const resultsHTML = filteredResults.map(result => `
                    <div class="search-result">
                        <h3><a href="${result.url}">${result.title}</a></h3>
                        <p>${result.snippet}</p>
                    </div>
                `).join('');
                
                searchResultsContainer.innerHTML = resultsHTML;
            } else {
                searchResultsContainer.innerHTML = '<p>No results found for your search. Please try different keywords.</p>';
            }
        }
    }

    // Print page functionality
    const printButton = document.getElementById('print-button');
    
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Feedback form submission (if exists)
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server
            // For this demo, we'll just show a thank you message
            feedbackForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for your feedback!</h3>
                    <p>We appreciate your input and will use it to improve our study guide.</p>
                </div>
            `;
        });
    }
});