// Navbar Toggle Functionality for All Screen Sizes
(function () {
  "use strict";

  // Initialize navbar toggle functionality
  function initNavbarToggle() {
    // Find the sidebar element (DocMD uses various selectors)
    var sidebar =
      document.querySelector(".sidebar") ||
      document.querySelector("aside.sidebar") ||
      document.querySelector("nav.sidebar") ||
      document.querySelector('[role="navigation"]');

    // Find or create toggle button
    var toggleButton =
      document.querySelector(".sidebar-toggle") ||
      document.querySelector(".nav-toggle") ||
      document.querySelector("[data-sidebar-toggle]") ||
      document.querySelector('button[aria-label*="menu" i]') ||
      document.querySelector('button[aria-label*="sidebar" i]');

    if (!sidebar) {
      console.warn("Sidebar element not found");
      return;
    }

    // Update existing button with hamburger icon or create new one
    if (toggleButton) {
      updateToggleButtonIcon(toggleButton);
      toggleButton.style.display = "inline-flex";
      toggleButton.style.visibility = "visible";
    } else {
      toggleButton = createToggleButton();
    }

    // Add click handler to toggle button
    if (toggleButton) {
      // Remove existing listeners
      var newToggleButton = toggleButton.cloneNode(true);
      toggleButton.parentNode.replaceChild(newToggleButton, toggleButton);
      toggleButton = newToggleButton;

      toggleButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSidebar();
      });
    }

    // Add keyboard support (Escape to close)
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidebar();
      }
    });

    // Store initial state
    var sidebarState = localStorage.getItem("sidebarState");
    if (sidebarState === "hidden") {
      document.body.classList.add("sidebar-hidden");
      document.body.classList.add("sidebar-collapsed");
      if (toggleButton) {
        toggleButton.style.left = "1rem";
      }
    } else {
      if (toggleButton) {
        toggleButton.style.left = "260px";
      }
    }
  }

  // Update existing toggle button with hamburger menu icon
  function updateToggleButtonIcon(button) {
    button.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    button.setAttribute("aria-label", "Toggle navigation menu");
    button.style.cursor = "pointer";
    button.style.transition = "left 0.3s ease, all 0.3s ease";
    button.classList.add("custom-nav-toggle");
  }

  // Create a toggle button if one doesn't exist
  function createToggleButton() {
    var button = document.createElement("button");
    button.className = "sidebar-toggle custom-toggle custom-nav-toggle";
    button.setAttribute("aria-label", "Toggle navigation menu");
    button.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';

    // Style the button
    button.style.cssText =
      "position: fixed; top: 5rem; left: 260px; z-index: 1001; padding: 0.5rem; background: #ffffff; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: left 0.3s ease, all 0.3s ease;";

    // Insert button into the page
    var header =
      document.querySelector("header") ||
      document.querySelector(".header") ||
      document.body;

    if (header === document.body) {
      document.body.insertBefore(button, document.body.firstChild);
    } else {
      header.appendChild(button);
    }

    return button;
  }

  // Toggle sidebar visibility
  function toggleSidebar() {
    var isHidden = document.body.classList.contains("sidebar-hidden");

    if (isHidden) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }

  // Open sidebar
  function openSidebar() {
    document.body.classList.remove("sidebar-hidden");
    document.body.classList.remove("sidebar-collapsed");
    localStorage.setItem("sidebarState", "visible");
    
    // Move button to the right when sidebar is visible
    var toggleBtn = document.querySelector(".custom-nav-toggle");
    if (toggleBtn) {
      toggleBtn.style.left = "260px";
    }
  }

  // Close sidebar
  function closeSidebar() {
    document.body.classList.add("sidebar-hidden");
    document.body.classList.add("sidebar-collapsed");
    localStorage.setItem("sidebarState", "hidden");
    
    // Move button to the left when sidebar is hidden
    var toggleBtn = document.querySelector(".custom-nav-toggle");
    if (toggleBtn) {
      toggleBtn.style.left = "1rem";
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbarToggle);
  } else {
    initNavbarToggle();
  }

  // Re-initialize on page navigation (for SPA behavior)
  window.addEventListener("popstate", initNavbarToggle);

  // Expose functions globally for external use
  window.navbarToggle = {
    open: openSidebar,
    close: closeSidebar,
    toggle: toggleSidebar,
  };
})();
