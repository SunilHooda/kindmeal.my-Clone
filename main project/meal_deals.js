//***This page contains the javascript file common in all the 3 pages****

// container inside which all cards will appear
let couponsContainer=document.querySelector("#coupons");

// on loading of page display the data presen in array 
window.addEventListener("load",displayCards(couponData));

let maxLen=10;

// function to display all the cards from the array
function displayCards(data){

    data.forEach(function(restaurant,index){
        // this will ensure to print the cards only 10 times irrespective of the array length
        if(index<10){
            let cards=document.createElement("div");
            cards.setAttribute("class","cards");
            cards.innerHTML=`
                    <div>
                        <a href="${restaurant.dishLink}"><img src="${restaurant.dishCategory}"></a>
                        <p>${restaurant.dishName}</p>
                    </div>
                    <div>
                        <p><a href="${restaurant.resLink}">${restaurant.resName}</a> —  <small id="greyText">${restaurant.resLocation}</small></p>
                        <small>${restaurant.resDescription}</small>
                        <br><br>
                        <a href="${restaurant.dishLink}"><button>Get Free Coupon</button></a>
                        <span id="rating"></span>
                    </div>
                    <div>
                        <div>
                            <img src="https://www.kindmeal.my/images/icon_egg.png" alt="">
                            <img src="https://www.kindmeal.my/images/icon_milk.png" alt="">
                            <img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="">
                        </div>
                        <div>
                            <span>KindMeal Discount</span>
                            <br>
                            <span>20% Off</span>
                        </div>
                        <div>
                            <span>Expires In</span>
                            <br>
                            <span>5 Days</span>
                        </div>
                    </div>
            `;
            couponsContainer.append(cards);
        }
    });
}
    
// for sorting based on categories and locations and display the cards accordingly
document.querySelector("#searchRes").addEventListener("click",function(){
    couponsContainer.innerHTML="";
    let location=document.querySelector("#location").value;
    let categories=document.querySelector("#categories").value;
    if(location!=="all"||categories!=="all"){
        let filteredCatOrLoc=couponData.filter(function(data){
            return data.resLocation===location||data.cat===categories
        })
        displayCards(filteredCatOrLoc);
    }else{
        displayCards(couponData);
    }      
})

// for sorting based on shop names or deals
document.querySelector("#search").addEventListener("click",function(){
    couponsContainer.innerHTML="";
    let dealOrShop=document.querySelector("#dealOrShop").value;
    if(dealOrShop!==""){
        let filteredShopOrDeal=couponData.filter(function(data){
            return data.resName===dealOrShop;
        })
        displayCards(filteredShopOrDeal);
    }else{
        displayCards(couponData);
    }      
})