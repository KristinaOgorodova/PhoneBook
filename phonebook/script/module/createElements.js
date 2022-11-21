  const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    return container;
  };

  const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerContainer = createContainer();
    header.append(headerContainer);

    header.headerContainer = headerContainer;

    return header;
  };

  const createLogo = title => {
    const h1 = document.createElement('h1');
    h1.classList.add('logo');
    h1.textContent = `Телефонный справочник. ${title}`;

    return h1;
  };

  const createMain = () => {
    const main = document.createElement('main');

    const mainContainer = createContainer();
    main.append(mainContainer);
    main.mainContainer = mainContainer;
    return main;
  };

  const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerContainer = createContainer();
    footer.append(footerContainer);
    footer.footerContainer = footerContainer;
    return footer;
  };

  const createFooterLogo = title => {
    const p = document.createElement('p');
    p.classList.add('footer-logo');
    p.textContent = `Все права защищены © ${title}`;

    return p;
  };

  const createButtonsGroup = params => {
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');

    const btns = params.map(({className, type, text}) => {
      const button = document.createElement('button');
      button.type = type;
      button.textContent = text;
      button.className = className;
      return button;
    });

    btnWrapper.append(...btns);

    return {
      btnWrapper,
      btns,
    };
  };

  const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    thead.insertAdjacentHTML('beforeend', `
     <tr>
     <th class="delete">Удалить</th>
     <th>Имя</th>
     <th>Фамилия</th>
     <th>Телефон</th>
</tr>`);

    const tbody = document.createElement('tbody');

    table.append(thead, tbody);
    table.tbody = tbody;
    return table;
  };

  const createForm = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('form-overlay');

    const form = document.createElement('form');
    form.classList.add('form');
    form.insertAdjacentHTML('beforeend', `
      <button class="close" type="button"></button>
      <h2 class="form-title">Добавить контакт</h2>
      <div class="form-group">
        <label for="name" class="form-label">Имя:</label>
        <input type="text" id="name" class="form-input" name="name" required>
      </div>
      <div class="form-group">
        <label for="surname" class="form-label">Фамилия:</label>
        <input type="text" id="surname" class="form-input" 
        name="surname" required>
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Телефон:</label>
        <input type="number" id="phone" class="form-input" 
        name="phone" required>
      </div>`);

    const buttonGroup = createButtonsGroup([
      {
        className: 'btn btn-primary mr-3',
        type: 'submit',
        text: 'Добавить',
      },
      {
        className: 'btn btn-danger',
        type: 'reset',
        text: 'Отмена',
      },
    ]);

    form.append(...buttonGroup.btns);
    overlay.append(form);
    return {
      overlay,
      form,
    };
  };

  const createRow = ({name: firstName, surname, phone}) => {
    const tr = document.createElement('tr');
    tr.classList.add('contact');

    const tdDel = document.createElement('td');
    tdDel.classList.add('delete');
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('del-icon');
    buttonDel.dataset.phone = phone;
    tdDel.append(buttonDel);

    const tdName = document.createElement('td');
    tdName.textContent = firstName;

    const tdSurname = document.createElement('td');
    tdSurname.textContent = surname;

    const tdPhone = document.createElement('td');
    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${phone}`;
    phoneLink.textContent = phone;
    tr.phoneLink = phoneLink;

    tdPhone.append(phoneLink);
    tr.append(tdDel, tdName, tdSurname, tdPhone);
    return tr;
  };

  export{
    createContainer, 
    createHeader, 
    createLogo, 
    createMain, 
    createFooter, 
    createFooterLogo,
    createButtonsGroup, 
    createTable,
    createForm,
    createRow};