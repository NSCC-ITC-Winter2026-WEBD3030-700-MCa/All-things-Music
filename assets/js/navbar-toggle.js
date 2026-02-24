(function () {
  function initializeNavbarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const headerRight = document.querySelector('.header-right');
    
    if (!sidebar || !headerRight) return;

    // Create hamburger button
    const btn = document.createElement('button');
    btn.id = 'navbar-toggle-button';
    btn.className = 'navbar-toggle-btn';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.setAttribute('title', 'Toggle sidebar');

    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    `;

    // Add to header-right (before theme toggle)
    const themeToggle = document.getElementById('theme-toggle-button');
    if (themeToggle) {
      themeToggle.parentNode.insertBefore(btn, themeToggle);
    } else {
      headerRight.appendChild(btn);
    }

    // Load saved state
    const isSidebarHidden = localStorage.getItem('sidebar-hidden') === 'true';
    if (isSidebarHidden) {
      sidebar.style.transform = 'translateX(-100%)';
      sidebar.style.visibility = 'hidden';
      btn.classList.add('active');
    }

    // Toggle handler
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isHidden = sidebar.style.visibility === 'hidden';
      
      if (isHidden) {
        sidebar.style.transform = 'translateX(0)';
        sidebar.style.visibility = 'visible';
        btn.classList.remove('active');
        localStorage.setItem('sidebar-hidden', 'false');
      } else {
        sidebar.style.transform = 'translateX(-100%)';
        sidebar.style.visibility = 'hidden';
        btn.classList.add('active');
        localStorage.setItem('sidebar-hidden', 'true');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbarToggle);
  } else {
    initializeNavbarToggle();
  }
})();
