import { renderGallery } from './gallery.js';
import { closeImgOverlayForm } from './img-upload-form.js';
import { pristine, correctInputData } from './form-validation.js';

const imgUploadForm = document.querySelector('.img-upload__form');

renderGallery();

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    correctInputData(); // корректирует введенные данные перед отправкой
    imgUploadForm.submit(); // отправляет данные на сервер
    closeImgOverlayForm();
  }

});

