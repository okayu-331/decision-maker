{
  'use strict';

  const items = [
    {src: "img/drink_caramel.png", alt: "キャラメルドリンクの画像", result: "キャラメル"},
    {src: "img/drink_chocolate.png", alt: "チョコレートドリンクの画像", result: "チョコレート"},
    {src: "img/drink_strawberry.png", alt: "ストロベリードリンクの画像", result: "ストロベリー"},
    {src: "img/drink_matcha.png", alt: "抹茶ドリンクの画像", result: "抹茶"},
  ];

  function createItems() {
    const itemsContainer = document.getElementById('items-container');
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

  createItems();
}