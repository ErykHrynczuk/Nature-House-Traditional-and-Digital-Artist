  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animated-element');
          }
      })
  });
  observer.observe(document.getElementById("navigation-bar"));

  var menu = document.getElementById("navigation-bar").getElementsByTagName("ul")[0];

  function toggleMenu() {
      menu.classList.toggle('animated-element');
  };