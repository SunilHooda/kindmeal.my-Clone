let couponsContainer = document.querySelector("#coupons");

// on loading of page display the data presen in array
window.addEventListener("load", displayCards(featuredData));

// function to display all the cards from the array
function displayCards(data) {
  data.forEach(function (elem) {
    let card = document.createElement("div");
    card.setAttribute("class", "cards");
    card.innerHTML = `
                <div>
                    <a href="${elem.buttonLink}"><img src="${elem.dishCategory}"></a>
                    <p>${elem.dishName}</p>
                </div>
                <div>
                    <p><a href="${elem.buttonLink}">${elem.resName}</a></p>
                    <small>${elem.resDescription}</small>
                    <br><br>
                    <button> <a href="${elem.buttonLink}">View Shop</a></button>
                   
                </div>
        `;
    couponsContainer.append(card);
  });
}
