// post-info-enhancer.js
// Enhances Blogger post footers with a custom date, author display, and share buttons.

document.addEventListener("DOMContentLoaded", function () {
  const postTitles = document.querySelectorAll(".post-title.entry-title");

  postTitles.forEach(function (title) {
    const postUrl = title.querySelector("a") ? title.querySelector("a").href : window.location.href;
    const postTitleText = title.textContent.trim();

    // Customizable Display Date
    const postDate = "Custom Note: e.g. Richard Feynman's Birthday: May 11, 1918";

    // Create post date display
    const dateDisplay = document.createElement("div");
    dateDisplay.className = "post-date";
    dateDisplay.textContent = postDate;

    // Create author display with a link (replace with your own profile URL and name)
    const authorDisplay = document.createElement("div");
    authorDisplay.className = "post-author";
    authorDisplay.innerHTML = `<a class='author-name' href='https://www.blogger.com/profile/YOUR_PROFILE_ID' rel='noopener noreferrer' target='_blank'>By: YourNameHere</a>`;

    // Social sharing platforms
    const platforms = [
      {
        name: "Minds",
        url: `https://www.minds.com/newsfeed/subscriptions/latest?intentUrl=${encodeURIComponent(postUrl)}`,
        className: "minds-share-button",
        icon: "https://example.com/minds-icon.png"
      },
      {
        name: "X",
        url: `https://x.com/intent/tweet?text=${encodeURIComponent(postTitleText)}&url=${encodeURIComponent(postUrl)}`,
        className: "x-share-button",
        icon: "https://example.com/x-icon.png"
      },
      {
        name: "Bluesky",
        url: `https://bsky.app/compose?text=${encodeURIComponent(postTitleText)}%20${encodeURIComponent(postUrl)}`,
        className: "bsky-share-button",
        icon: "https://example.com/bluesky-icon.png"
      },
      {
        name: "Line",
        url: `https://line.me/R/msg/text/?${encodeURIComponent(postTitleText)}%20${encodeURIComponent(postUrl)}`,
        className: "line-share-button",
        icon: "https://example.com/line-icon.png"
      }
    ];

    const infoContainer = document.createElement("div");
    infoContainer.className = "post-info";

    infoContainer.appendChild(dateDisplay);

    platforms.forEach(platform => {
      const button = document.createElement("a");
      button.className = `share-button ${platform.className}`;
      button.href = platform.url;
      button.target = "_blank";
      button.title = `Share to ${platform.name}`;

      const icon = document.createElement("img");
      icon.src = platform.icon;
      icon.alt = `${platform.name} Icon`;
      icon.width = 30;
      icon.height = 30;

      button.appendChild(icon);
      infoContainer.appendChild(button);
    });

    infoContainer.appendChild(authorDisplay);

    const postFooter = title.closest(".post-outer")?.querySelector(".post-footer");
    if (postFooter) {
      postFooter.appendChild(infoContainer);
    }
  });
});
