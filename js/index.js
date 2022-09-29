const imgType = document.querySelectorAll('.card__img--type');
const cards = document.querySelectorAll('.cards');
const imgProduct = document.querySelector('.product__img')
const obs = document.querySelector('.obs')

const changeImage = (e) => {
  e.stopPropagation();
  const parentCard = e.target.parentElement.parentElement;
  const imgCard = parentCard.querySelector('.card__img');
  imgCard.src = e.target.src;
};

const openProduct = (e) => {
  location.href = './1-product/index.html';
};

const magnifyingImg = (e) => {
  const { top: t, left: l } = imgProduct.getBoundingClientRect();
  let posMouseY = e.clientY - t + 1;
  let posMouseX = e.clientX - l + 1;
  imgProduct.style.backgroundPosition = `${posMouseX * 100 / 500}% ${posMouseY * 100 / 390}%`;
};

const changeBgImg = (e) => {
  console.log(parseInt(scrollY / 10));
  obs.style.backgroundImage = `url('https://website-au-resources.s3.ap-southeast-2.amazonaws.com/weekender/images/seq_0_${parseInt(scrollY / 10)}.png')`
};

imgType.forEach((element) => {
  element.addEventListener('click', changeImage);
});

cards.forEach((element) => {

  element.addEventListener('click', openProduct);
});

imgProduct?.addEventListener('mousemove', magnifyingImg);

window.addEventListener('scroll', changeBgImg);