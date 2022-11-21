
import { hoverRow, renderContacts, renderPhoneBook} from './module/render.js';
import { getStorage} from './module/storage.js';
import { modalControl, deleteControl} from './module/control.js';
import { formControl} from './module/control.js';


const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const data = getStorage();
  const {
    list,
    logo,
    btnAdd,
    formOverlay,
    form,
    btnDel,
  } = renderPhoneBook(app, title);

  // Функционал
  const allRow = renderContacts(list, data);
  const {closeModal} = modalControl(btnAdd, formOverlay);
  hoverRow(allRow, logo);
  deleteControl(btnDel, list);
  formControl(form, list, closeModal);
  console.log(data);
  };


window.phoneBookInit = init;

