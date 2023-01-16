const select = document.querySelector('.form_select');
const selectTitle = select.querySelector('.form_select-title');
const selectLabels = select.querySelectorAll('.form_select-label');

selectTitle.addEventListener('click', () => {
  if ('active' === select.getAttribute('data-state')) {
    select.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
  }
});

if (selectLabels !== undefined) {
  for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (evt) => {
        selectTitle.textContent = evt.target.textContent;
        select.setAttribute('data-state', '');
    });
  }
}

const submit = document.querySelector('.form_submit-btn');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
})

