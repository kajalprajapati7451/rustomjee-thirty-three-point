// Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(function() {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 500);
        });

        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '12px 0';
                navbar.style.boxShadow = 'none';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                
                if (isVisible) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);
        
        // Initialize carousel with auto cycling
        const myCarousel = document.querySelector('#projectCarousel');
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000,
            wrap: true
        });