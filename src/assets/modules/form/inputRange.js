const rangeInput = document.querySelector('input[type="range"]');
const outputPercent = document.querySelector('.form_custom-percent');

const handleInputChange = (e) => {
  const min = e.target.min;
  const max = e.target.max;
  const val = e.target.value;
  outputPercent.innerHTML = e.target.value + '%';
  e.target.style.backgroundSize = `${(val - min) * 100 / (max - min)}% 100%`;
}

rangeInput.addEventListener('input', handleInputChange);
