'use strict';
const luckyBtn = document.querySelector('#numbers-btn');
const JokerBtn = document.querySelector('#joker-btn');

let itnerval = 50000;

let numbers = [];

const numberGenerator = function () {
  numbers = [];
  while (numbers.length < 5) {
    let randomNumbers = Math.floor(Math.random() * 45) + 1;
    if (numbers.indexOf(randomNumbers) === -1) numbers.push(randomNumbers);
  }
};
const jokerGenerator = function () {
  const joker = Math.floor(Math.random() * 20) + 1;
  let startValue = 0;
  let endValue = parseInt(joker);
  let duration = Math.floor(itnerval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    document.querySelector('#joker').textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  });
};

const showLuckyNymbers = function () {
  numbers.forEach((el, num) => {
    let startValue = 0;
    let endValue = parseInt(el);
    let duration = Math.floor(itnerval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      document.getElementById(`num${num + 1}`).textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    });
    // document.getElementById(`num${num + 1}`).value = el;
  });
};

luckyBtn.addEventListener('click', function () {
  numberGenerator();
  showLuckyNymbers();
});

JokerBtn.addEventListener('click', function () {
  jokerGenerator();
});
