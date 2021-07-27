{
  'use strict';

  const allItems = {
    drinks: [
      {src: "img/drink_caramel.png", alt: "キャラメルドリンクの画像", result: "キャラメル"},
      {src: "img/drink_chocolate.png", alt: "チョコレートドリンクの画像", result: "チョコレート"},
      {src: "img/drink_strawberry.png", alt: "ストロベリードリンクの画像", result: "ストロベリー"},
      {src: "img/drink_matcha.png", alt: "抹茶ドリンクの画像", result: "抹茶"},
    ],
    coffee: [
      {src: "img/coffee_blend.png", alt: "ホットコーヒーの画像", result: "ホットコーヒー"},
      {src: "img/coffee_macchiato.png", alt: "カフェ・マキアートの画像", result: "カフェ・マキアート"},
      {src: "img/coffee_iced_coffee.png", alt: "アイスコーヒーの画像", result: "アイスコーヒー"},
      {src: "img/coffee_iced_latte.png", alt: "アイスカフェラテの画像", result: "アイスカフェラテ"},
    ],
    foods: [
      {src: "img/food_carbonara.png", alt: "キャラメルドリンクの画像", result: "カルボナーラ"},
      {src: "img/food_meatsauce.png", alt: "チョコレートドリンクの画像", result: "ミートソース"},
      {src: "img/food_neapolitan.png", alt: "ストロベリードリンクの画像", result: "ナポリタン"},
      {src: "img/food_tarako.png", alt: "抹茶ドリンクの画像", result: "たらこ"},
    ]
  };

  const colors = [
    "linear-gradient(to right top, #f523a0, #db1946 , #ff468c, #ff8e4d)",
    "linear-gradient(to right top, #2ad5cd, #4c9af5 36%, #d295f1)",
    "linear-gradient(to right top, #fd862c 27%, #fff100 73%, #e7592e)",
    "linear-gradient(to right, #a10fd7, #f935da, #a10fff)",
    "linear-gradient(to right top, #2db41b, #faff9b 15%, #41df57 35%, #adff37 90%)",
    "radial-gradient(#080995, #4283ff 67%, #5bd4ff)",
    "repeating-conic-gradient(#ffdb3c 0deg, #ffa939 20deg, #ffdb3c  40deg)",
    "repeating-conic-gradient(#f523a0 0deg, #db1946  20deg, #f523a0  40deg)"
  ];
  const startBtn = document.getElementById('start-btn');
  const progress = document.getElementById('progress');
  const menuItems = document.querySelectorAll('.menu li');
  const itemsContainer = document.getElementById('items-container');
  const resultContainer = document.getElementById('result-container');
  const result = document.getElementById('result');
  let category = document.querySelector('.active').dataset.id;
  
  menuItems.forEach(menu => {
    menu.addEventListener('click', () => {
      menuItems.forEach(menu => {
        menu.classList.remove('active');
      });
      menu.classList.add('active');
      category = document.querySelector('.active').dataset.id;

      while(itemsContainer.firstChild){
        itemsContainer.removeChild(itemsContainer.firstChild);
      }
      resultContainer.classList.remove('is-show');

      createItems(allItems[category]);
    });
  })

  startBtn.addEventListener('click', (e) => {
    if(e.target.className === 'disabled') {
      return;
    }
    let category = document.querySelector('.active').dataset.id;
    startBtn.className = 'disabled';
    const styledItems = document.querySelectorAll('.picked, .unpicked');
    if (styledItems.length !== 0) {
      styledItems.forEach((item) => {
        item.className = 'item';
        resultContainer.classList.remove('is-show');
      });
    }

    progress.classList.add('run');
    setTimeout(lottery, 2000, allItems[category]);
  });

  function createItems(items) {
    items.forEach((item) => {
      const list = document.createElement('li');
      const imgElement = document.createElement('img');
      list.className = 'item';
      imgElement.src = item.src;
      imgElement.alt = item.alt;
      list.appendChild(imgElement);
      itemsContainer.appendChild(list);
    });
  }

  function lottery(items) {
    const resultNum = Math.floor(Math.random() * items.length);
    const colorNum = Math.floor(Math.random() * colors.length);

    const itemLists = document.querySelectorAll('.item');
    itemLists.forEach((item, index) => {
      if (index === resultNum) {
        item.classList.add('picked');
      } else {
        item.classList.add('unpicked');
      }
    })

    result.textContent = items[resultNum].result;
    resultContainer.style.background = colors[colorNum];
    resultContainer.classList.add('is-show');
    startBtn.classList.remove('disabled');
    progress.classList.remove('run');
  }

  createItems(allItems[category]);
}