//botao curtida

document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
    if (!likeBtn) return;
    const likeSvg =likeBtn.querySelector("svg");


    //localiza o contador

    let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodeType
    ===node.TEXT-NODE && node.textContent.trim() !== ""
)

//zera o contador
let cont = 0;

//atualiza
if(textNode){
textNode.textContent = '0';
}

//coração
function applyLikedStyle (){
likeSvg.style.fill = "#ef4444";
likeSvg.style.stroke = "#ef4444";
likeSvg.style.color = "#ef4444";
}

//efito curtida
likeSvg.style.transform = "scale(1.3)";
setTimeout (() => (likeSvg.style.transform = "scal(1)")150);


}