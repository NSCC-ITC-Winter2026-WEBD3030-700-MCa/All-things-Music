(function () {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.title = "Back to top";
  btn.innerHTML = "&#8679;";
  document.body.appendChild(btn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
