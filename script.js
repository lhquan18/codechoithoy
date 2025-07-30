"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

noButton.addEventListener("mouseenter", function () {
  if (noCount === MAX_IMAGES) {
    moveNoButtonRandomly();
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu bé ,mai có mặt PQ ra phường nhée :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Đừng mơ",
    "Toy cưới em trai anhh",
    "Đợi 30 tuổi đii",
    "Toy cưới thằng khácccc",
    "Anh cút điii",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function moveNoButtonRandomly() {
  // Lấy kích thước của màn hình và vị trí của nút
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Tạo vị trí ngẫu nhiên cho nút
  const randomX = Math.random() * (screenWidth - noButton.offsetWidth);
  const randomY = Math.random() * (screenHeight - noButton.offsetHeight);

  // Cập nhật vị trí của nút
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}
