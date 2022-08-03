// smooth scroll
const navLinks = document.querySelectorAll(`.nav--each`);

navLinks.forEach((link) =>
  link.addEventListener(`click`, function (e) {
    e.preventDefault();

    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(`${id}`).scrollIntoView({
      behavior: "smooth",
    });
  })
);
