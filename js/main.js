{
  'use strict';

  const items = [
    {src: "img/drink_caramel.png", alt: "キャラメルドリンクの画像", result: "キャラメル"},
    {src: "img/drink_chocolate.png", alt: "チョコレートドリンクの画像", result: "チョコレート"},
    {src: "img/drink_strawberry.png", alt: "ストロベリードリンクの画像", result: "ストロベリー"},
    {src: "img/drink_matcha.png", alt: "抹茶ドリンクの画像", result: "抹茶"},
  ];
  const startBtn = document.getElementById('start-btn');
  const itemsContainer = document.getElementById('items-container');

  startBtn.addEventListener('click', (e) => {
    if(e.target.className === 'disabled') {
      return;
    }
    startBtn.className = 'disabled';
    const styledItems = document.querySelectorAll('.picked, .unpicked');
    if (styledItems.length !== 0) {
      styledItems.forEach((item) => {
        item.className = 'item';
      });
    }

    startBtn.className = 'disabled';
    setTimeout(lottery, 2000);
  });

  function createItems() {
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

  function lottery() {
    const resultNum = Math.floor(Math.random() * items.length);
    console.log(resultNum);

    const itemLists = document.querySelectorAll('.item');
    itemLists.forEach((item, index) => {
      if (index === resultNum) {
        item.classList.add('picked');
      } else {
        item.classList.add('unpicked');
      }
    })

    startBtn.classList.remove('disabled');
  }

  createItems();
}