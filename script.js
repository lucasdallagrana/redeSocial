document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");
  const likesCountSpan = likeBtn ? likeBtn.querySelector(".like-count") : null;

  if (!likeBtn) return;

  const likeSvg = likeBtn.querySelector("svg");
  let isLiked = false;
  let baseLikes = 1200; // Valor inicial das curtidas

  // Formata o número (ex: 1200 vira 1.2k)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  }

  // Animação de pulso no ícone SVG
  function animateSvg(svgElement) {
    if (!svgElement) return;
    svgElement.style.transform = "scale(1.3)";
    setTimeout(() => {
      svgElement.style.transform = "scale(1)";
    }, 150);
  }

  // Incrementa a curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");
      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
      animateSvg(likeSvg);
    }
  }

  // Remove a curtida
  function removeLike() {
    if (isLiked) {
      baseLikes = Math.max(0, baseLikes - 1);
      isLiked = false;
      likeBtn.classList.remove("liked");
      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
      animateSvg(likeSvg);
    }
  }

  // Clique no botão do coração
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isLiked) {
      removeLike();
    } else {
      addLike();
    }
  });

  // Clique duplo ou único na imagem do post
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Clique no botão de Bookmark
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      animateSvg(svg);
    });
  }
});