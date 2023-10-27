

// truncateCardTitle
window.addEventListener("load", function () {
  truncateCardTitle();
});
function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (let i = 0; i < cardList.length; i++) {
    let text = cardList[i].innerHTML;
    let newText = truncateString(text, 50);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// slidebar Mini

const toggleBtn = document.querySelector(".sidebarMini__button")
const sidebarMini = document.querySelector(".sidebarMini")
const switchBtn = document.querySelector("#checkbox")

toggleBtn.addEventListener("click",function(){
  sidebarMini.classList.toggle("is-opend")
})
switchBtn.addEventListener("click",function(){
  document.querySelector('body').classList.toggle("darkMode")
})
