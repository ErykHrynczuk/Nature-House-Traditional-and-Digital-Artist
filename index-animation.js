 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('animated-element');
         }
     })
 });
 observer.observe(document.getElementById("navigation-bar"));
 observer.observe(document.getElementsByClassName("read-more")[0]);
 observer.observe(document.getElementsByClassName("cover")[0]);
 observer.observe(document.getElementsByClassName("about-container")[0]);
 observer.observe(document.getElementsByClassName("recommendations")[0].getElementsByClassName("flex-container")[0]);
 observer.observe(document.getElementsByClassName("recommendations")[0].getElementsByClassName("flex-container")[1]);
 observer.observe(document.getElementsByClassName("gallery-image")[0]);
 observer.observe(document.getElementsByClassName("gallery-image")[1]);
 observer.observe(document.getElementsByClassName("gallery-image")[2]);

 var menu = document.getElementById("navigation-bar").getElementsByTagName("ul")[0];

 function toggleMenu() {
     menu.classList.toggle('animated-element');
 };