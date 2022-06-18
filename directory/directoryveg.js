let cardContainer = document.querySelector(".cards");
window.addEventListener("load", displayCards(vegData));

function displayCards(data) {
  data.map(function (elem) {
    let card = document.createElement("div");

    let resName = document.createElement("h2");
    resName.innerText = elem.resName;

    let resDescrip = document.createElement("p");
    resDescrip.innerText = elem.resDescrip;

    let line = document.createElement("hr");

    let resAddHead = document.createElement("h3");
    resAddHead.innerText = elem.resAddHead;

    let resAdd = document.createElement("p");
    resAdd.innerText = elem.resAdd;

    let resMobHead = document.createElement("h3");
    resMobHead.innerText = elem.resMobHead;

    let resNumber = document.createElement("p");
    resNumber.innerText = elem.resNumber;

    let resTimeHead = document.createElement("h3");
    resTimeHead.innerText = elem.resTimeHead;

    let resTiming = document.createElement("p");
    resTiming.innerText = elem.resTiming;

    let avatar = document.createElement("img");
    avatar.setAttribute("src", elem.resLocation);

    card.append(
      resName,
      resDescrip,
      line,
      resAddHead,
      resAdd,
      resMobHead,
      resNumber,
      resTimeHead,
      resTiming,
      avatar
    );
    cardContainer.append(card);
  });
}

document.querySelector("#btn1").addEventListener("click", function () {
  cardContainer.innerHTML = "";
  let shop = document.querySelector("#shopName").value;
  if (shop !== "") {
    let filteredShop = vegData.filter(function (elem) {
      return elem.resName === shop;
    });
    displayCards(filteredShop);
  } else {
    displayCards(vegData);
  }
});

document.querySelector("#btn1").addEventListener("click", function () {
  cardContainer.innerHTML = "";
  let shopArea = document.querySelector("#allShops").value;
  if (shopArea !== "") {
    let filteredbyArea = vegData.filter(function (elem) {
      return elem.area === shopArea;
    });
    displayCards(filteredbyArea);
  } else {
    displayCards(vegData);
  }
});

document.querySelector("#vegetarian").addEventListener("click", myfunction);
myfunction;
