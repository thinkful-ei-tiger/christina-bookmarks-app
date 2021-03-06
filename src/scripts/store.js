const storeData = {
  bookmarkList: [],
  adding: false,
  error: null,
  errorMessage: '',
  filter: 0
};

const createBookmark = function (formData) {
  const bookmark = {};
  storeData.bookmarkList.push(Object.assign(formData, bookmark));
};

const findAndDelete = function (id) {
  let index = storeData.bookmarkList.findIndex(item => item.id === id);
  storeData.bookmarkList.splice(index, 1);
};

const setError = function (value) {
  storeData.error = value;
};

export default {
  storeData,
  setError,
  createBookmark,
  findAndDelete
};