//image sliding
  //first image sliding
  let myIndex = 0;
  carousel();

  function carousel() {
    let x = document.getElementsByClassName("mySlides1");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) myIndex = 1;
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
  }
  //second image sliding
  s2Index = 0;
  sliding2();

  function sliding2() {
    let x = document.getElementsByClassName("mySlides2");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    s2Index++;
    if (s2Index > x.length) s2Index = 1;
    x[s2Index - 1].style.display = "block";

    setTimeout(sliding2, 2000);
  }
  //third sliding
  let index = 0;
  sliding();

  function sliding() {
    let y = document.getElementsByClassName("mySlides");

    for (let i = 0; i < y.length; i++) {
      y[i].style.opacity = "0.4";
    }
    index++;
    if (index > y.length) index = 1;
    y[index - 1].style.opacity = "1";
    setTimeout(sliding, 2000);
  }

  //main content

  let arr1 = [
    {
      image:
        "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/283210376_505164994685720_366849823846066202_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Vuau1O3Up0cAX-sMOzV&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8mY1udVQ5BZ_R-psAPy_xOn-ijcNJmRdAnLBgrfU1Msg&oe=62AEA0FD",
      description: "Swedish Meatballs With Mash And Gravy 🇸🇪",
    },
    {
      image:
        "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/278979723_977865336135056_829345967473066298_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=_ttxe56JhjsAX_Npzuu&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-er-3WZmjVitDbwGOXaqSOe3rjsPt5AgNd4P-7AfxXoQ&oe=62AE54AB",
      description:
        "Scientists Use Crispr Gene Editing To Alter The Social Behav..",
    },
    {
      image:
        "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/280697169_420481719680425_2519533840496617684_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eT6_x93Yx1kAX83Dea1&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-i_yqiaI9isgPg3Yy9JUXuY9QxvNo8cYPiwH25RRnLzg&oe=62ADFFCB",
      description: "Kaya Harbor Seal Sealebrates Birthday With Friends",
    },
    {
      image:
        "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/282060217_386411623429652_3546094542583801599_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=bC6Yw08AalgAX9Uy4in&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-dL8-n-K0kg6xCxW5YIgokmIM72lRYWjhzGfV9PLc9KA&oe=62ACDC6D",
      description: "Hundreds Of Tiny Rare Butterflies Head Into The Wild",
    },
    {
      image:
        "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/279958094_1385161191953183_7922181364608512557_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=BiIOIzaHyb4AX84KlCh&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8RdCmwif-sDu66XqK__XXFbIOSnRyboy5akh6sj8-Wvw&oe=62AEAD66",
      description: "Are Consumers Ready For Cultivated Meat?",
    },
  ];

  displayData1(arr1);

  let arr2 = [
    {
      image: "https://www.kindmeal.my/photos/moment/24/24042-45838-s.jpg",
      description: "Casa Of Italy ",
    },
    {
      image: "https://www.kindmeal.my/photos/moment/24/24041-45833-s.jpg",
      description: "Bröom Artisan Bakery",
    },
    {
      image: "https://www.kindmeal.my/photos/moment/24/24039-45826-s.jpg",
      description: "Davina Da Vegan",
    },
    {
      image: "https://www.kindmeal.my/photos/moment/24/24038-45822-s.jpg",
      description: "香港仔冰室 SS2 Cafe Hk Boy",
    },
    {
      image: "https://www.kindmeal.my/photos/moment/24/24037-45818-s.jpg",
      description: "Honestly Superb Meals",
    },
  ];

  displayData2(arr2);

  let arr3 = [
    {
      image: "https://www.kindmeal.my/photos/item/0/591-8322-s.jpg",
      description: "Almond Oatmilk",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/126-6530-s.jpg",
      description: "Vegetarian Spring Rolls with Tea 水仙茶卷",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/452-5346-s.jpg",
      description: "Crispy Goose",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/482-5774-s.jpg",
      description: "Yellow Lentils curry",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/445-5229-s.jpg",
      description: "Salad Bowl (Falafel)",
    },
  ];
  displayData3(arr3);

  let arr4 = [
    {
      image: "https://www.kindmeal.my/photos/member/10/10538-m.jpg",
      description: "CarmenLee",
    },
    {
      image: "https://www.kindmeal.my/photos/member/32/32319-m.jpg",
      description: "AiSimLoo",
    },
    {
      image: "https://www.kindmeal.my/photos/member/11/11296-m.jpg",
      description: "JacquelineHeng",
    },
    {
      image: "https://www.kindmeal.my/photos/member/34/34239-m.jpg",
      description: "WallingfordConsultancy",
    },
    {
      image: "https://www.kindmeal.my/photos/member/39/39036-m.jpg",
      description: "LeongSowYean",
    },
  ];

  displayData4(arr4);

  function displayData1(array) {
    array.map(function (elem) {
      let box = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.setAttribute("src", elem.image);

      let description = document.createElement("p");
      description.innerText = elem.description;

      box.append(avatar, description);
      document.querySelector("#box2").append(box);
    });
  }
  function displayData2(array) {
    array.map(function (elem) {
      let box = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.setAttribute("src", elem.image);

      let description = document.createElement("p");
      description.innerText = elem.description;

      box.append(avatar, description);
      document.querySelector("#box3").append(box);
    });
  }
  function displayData3(array) {
    array.map(function (elem) {
      let box = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.setAttribute("src", elem.image);

      let description = document.createElement("p");
      description.innerText = elem.description;

      box.append(avatar, description);
      document.querySelector("#box4").append(box);
    });
  }
  function displayData4(array) {
    array.map(function (elem) {
      let box = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.setAttribute("src", elem.image);

      let description = document.createElement("p");
      description.innerText = elem.description;

      box.append(avatar, description);
      document.querySelector("#box5").append(box);
    });
  }