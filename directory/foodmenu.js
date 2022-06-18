let couponContainer = document.querySelector("#coupons");
window.addEventListener("load", displayCards(foodData));

function displayCards(data) {
  data.map(function (elem) {
    let card = document.createElement("div");
    card.setAttribute("class", "cards");

    let dishImg = document.createElement("img");
    dishImg.setAttribute("src", elem.dishImg);

    let dishName = document.createElement("h3");
    dishName.innerText = elem.dishName;

    let resName = document.createElement("h4");
    resName.innerText = elem.resName;

    let resLocation = document.createElement("p");
    resLocation.innerText = elem.resLocation;

    card.append(dishImg, dishName, resName, resLocation);
    couponContainer.append(card);
  });
}
