const letter = $(".letter");
const navItem = $("#nav-items");
const intro = $("#intro");
const hidden = $(".hidden");
const introContact = $("#intro-contact")
const underline = $(".underline");

let tl = gsap.timeline();

tl
    .from(navItem, 0.9, { x: 500, ease: "power1.easeOut" })
    .staggerFrom(hidden, 1.2, { autoAlpha: 0, y: 30, ease: "power1.easeOut" }, .8, "-=1")
    .from(introContact, 1.2, { autoAlpha: 0, y: 200, ease: "power1.easeOut" }, "-=1.5")
    .staggerFromTo(letter, 1,
        { autoAlpha: 0, x: 10 },
        { autoAlpha: 1, x: -10, ease: Power1.easeOut }, 0.1, "-=1")
    .to(underline, 1, { textDecoration: "underline", ease: "power1.easeIn" }, "-=0.5")


