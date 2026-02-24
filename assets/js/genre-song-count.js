(function () {
  function renderGenreSongCount() {
    if (!window.location.pathname.includes("/genres/")) {
      return;
    }

    var main = document.querySelector("main.content-area");
    var title = main ? main.querySelector("h1") : null;

    if (!main || !title) {
      return;
    }

    var songHeadings = Array.from(main.querySelectorAll("h2")).filter(
      function (heading) {
        return heading.textContent.trim().toLowerCase() === "song name";
      },
    );

    var existing = main.querySelector("[data-song-count]");
    if (existing) {
      existing.remove();
    }

    var count = songHeadings.length;
    var songLabel = count === 1 ? "song" : "songs";
    var countElement = document.createElement("p");

    countElement.setAttribute("data-song-count", "true");
    countElement.textContent = "Songs listed: " + count + " " + songLabel;

    title.insertAdjacentElement("afterend", countElement);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGenreSongCount);
  } else {
    renderGenreSongCount();
  }
})();
