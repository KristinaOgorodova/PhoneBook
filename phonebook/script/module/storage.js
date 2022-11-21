
export const getStorage = () => (localStorage.getItem('phonebook') ?
JSON.parse(localStorage.getItem('phonebook')) : []);


export const setStorage = (data) => {
  localStorage.setItem('phonebook', JSON.stringify(data));
};

export const removeStorage = (number) => {
  const data = getStorage('phonebook');
  const newData = data.filter(item => item.phone !== number);
  setStorage(newData);
};

export const addContactData = contact => {
  const data = getStorage('phonebook');
  data.push(contact);
  setStorage(data);
};
