const uploadFileBtn = document.querySelector('.form_file-block');
const uploadFile = document.querySelector('.form_file-upload');
const deleteFile = document.querySelector('.form_file-delete');

uploadFileBtn.addEventListener('click', () => {
    uploadFile.click();
});

uploadFile.addEventListener('change', () => {
    if (uploadFile.files[0].name.length > 20) {
      uploadFileBtn.innerHTML = `${uploadFile.files[0].name.slice(0, 20)}...`;
      uploadFileBtn.classList.add('form_file-desc');
    } else {
      uploadFileBtn.innerHTML = uploadFile.files[0].name
    }
    deleteFile.classList.remove('hide')
});

deleteFile.addEventListener('click', () => {
    uploadFileBtn.innerHTML = '';
    uploadFileBtn.insertAdjacentHTML("afterbegin",
      `<img src='assets/images/order/file.svg' alt='file'>
            <span class="form_file-desc">ПРИКРЕПИТЬ ФАЙЛ</span>`
    );
    deleteFile.classList.add('hide');
})
