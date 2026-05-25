const eventDate = new Date("June 20, 2026 11:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  document.getElementById("countdown").innerHTML =
    `${days} días ${hours} hrs ${minutes} min`;

},1000);


/* ANIMACIONES */

const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

fades.forEach(fade => {
  observer.observe(fade);
});