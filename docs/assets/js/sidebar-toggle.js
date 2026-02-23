/* 
 * Desktop Sidebar Toggle Script
 * Adds a hamburger menu button for desktop that toggles sidebar visibility
 */

(function() {
    'use strict';

    // Create toggle button
    function createToggleButton() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'desktop-sidebar-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle sidebar');
        toggleBtn.setAttribute('aria-expanded', 'true');
        
        // Use the same icon style as docmd
        toggleBtn.innerHTML = `
            <svg class="lucide-icon icon-menu" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
        `;
        
        return toggleBtn;
    }

    // Initialize toggle functionality
    function initDesktopSidebarToggle() {
        // Don't initialize on mobile (will use existing mobile menu)
        if (window.innerWidth <= 768) {
            return;
        }

        const body = document.body;
        const toggleBtn = createToggleButton();
        
        // Insert button at the beginning of body
        body.insertBefore(toggleBtn, body.firstChild);
        
        // Load saved state from localStorage
        const savedState = localStorage.getItem('docmd-sidebar-visible');
        if (savedState === 'false') {
            body.classList.add('sidebar-hidden');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
        
        // Toggle functionality
        toggleBtn.addEventListener('click', function() {
            const isHidden = body.classList.toggle('sidebar-hidden');
            toggleBtn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
            
            // Save state to localStorage
            localStorage.setItem('docmd-sidebar-visible', isHidden ? 'false' : 'true');
        });
        
        // Keyboard accessibility
        toggleBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleBtn.click();
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDesktopSidebarToggle);
    } else {
        initDesktopSidebarToggle();
    }

    // Reinitialize on resize if switching between mobile/desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const toggleBtn = document.querySelector('.desktop-sidebar-toggle');
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile && toggleBtn) {
                // Remove desktop toggle on mobile
                toggleBtn.remove();
                document.body.classList.remove('sidebar-hidden');
            } else if (!isMobile && !toggleBtn) {
                // Re-add desktop toggle when resizing to desktop
                initDesktopSidebarToggle();
            }
        }, 250);
    });
})();
