//botao curtida

document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
    if (!likeBtn) return;
    const likeSvg =likeBtn.querySelector("svg");

   
    //localiza o contador

    let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodeType
}