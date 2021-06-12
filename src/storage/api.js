let storage = {
  get() {
    let data = JSON.parse(localStorage.getItem('todolist')) || [];
    return data;
  },
  set(data) {
    localStorage.setItem('todolist', JSON.stringify(data));
  }
}

export default storage;