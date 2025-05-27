document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById("backToTop");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const currentYearSpan = document.getElementById("currentYear");

  // Back to Top Button Functionality
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
        backToTopButton.style.opacity = "1"; // For smoother appearance
      } else {
        backToTopButton.style.opacity = "0"; // For smoother disappearance
        // Set display to none after transition (optional, if opacity is not enough)
        setTimeout(() => {
            if(window.scrollY <= 300) backToTopButton.style.display = "none";
        }, 300); // Match CSS transition duration
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


  // Mobile Menu Toggle
  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuIcon.classList.toggle("active"); // For hamburger animation
    });

    // Close menu when a link is clicked (optional, good for SPAs or single-page sites)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('active');
            }
        });
    });
  }

  // Set Current Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Optional: Active Nav Link Styling based on scroll position
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100; // Adjusted for fixed nav and some offset
      let sectionId = current.getAttribute("id");

      /*
      If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To REMOVE active class from other links
      - To ADD active class to current link
      */
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
      }
    });
  }
  // Initial call to set active link on page load (if not at the very top)
  navHighlighter();

});