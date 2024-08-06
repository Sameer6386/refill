// Mobile Menu Toggle:

document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.add("hidden");
});

//  progress Bar

document.addEventListener("DOMContentLoaded", function () {
  const progressCircles = document.querySelectorAll(".progress-circle");
  progressCircles.forEach((circle) => {
    const progress = circle.getAttribute("data-progress");
    const circleProgress = circle.querySelector(".circle");
    const radius = circleProgress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    circleProgress.style.strokeDashoffset = offset;
  });
});
