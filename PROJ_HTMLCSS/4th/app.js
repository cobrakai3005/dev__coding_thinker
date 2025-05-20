const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");
const right = document.querySelector(".right");

body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "back.out",
  });
});

right.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Click";
  gsap.to(cursor, {
    scale: 4,
    color: "white",
    backgroundColor: "rgb(252, 249, 249, 0.4)",
  });
});
right.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#f8c914",
  });
});
