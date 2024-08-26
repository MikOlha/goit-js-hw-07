function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

controls.querySelector('[data-create]').addEventListener('click', () => {
  const amount = controls.querySelector('input').value;
  if (amount < 1 || amount > 100) return;
  createBoxes(amount);
});

controls.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.innerHTML = ''; // очищаємо попередні елементи
  boxesContainer.appendChild(fragment);
  controls.querySelector('input').value = ''; // очищаємо інпут
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}