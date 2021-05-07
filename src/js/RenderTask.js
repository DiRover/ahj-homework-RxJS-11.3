export default class RenderTask {// класс для списка задач
  constructor(store, page) {
    this.store = store;// экземпляр класса Store
    this.page = page;// корневой элемент для отображения
  }

  init() { // метод для отрисовки
    this.store.state$.subscribe((data) => { // получаем объект с проектными задачами и текущим, выбранным, проектом
      this.render(data);
    });// подписываемся на поток и рендерим список
  }

  render(data) { // метод для рендера списка
    const { projects } = data;// получаем проекты со списками задач из объекта
    const { currerntProject } = data;// получаем текщий, выбранный, проект
    const elemCon = document.createElement('div');// создаём элемент-контейнер
    elemCon.setAttribute('class', 'container state-container');// присваиваем ему классы стилей
    elemCon.innerHTML = `<div class="title-container"><h2 class="title">Task</h2><div>Project:</div><div class="current-project">${currerntProject.name}</div></div>`;// сделали заголовок с текущим названием выбранного проекта
    projects.forEach((item) => { // обрабатываем массив объектов с проектами
      if (item.name === currerntProject.name) { // если название проекта совпадает с названием выбранного проекта
        item.tasks.forEach((i) => { // то начинаем обрабатывать массив объектов с задачами выбранного проекта
          const elem = document.createElement('div');// создаём объект для задачи
          elem.setAttribute('class', 'task');// прописываем ему классы стилей
          elem.setAttribute('id', i.id);// присваиваем ему айди задачи
          const visible = i.done ? 'visible' : 'hidden';// если задача выполнена, галочка видна, если нет, то скрыта
          elem.innerHTML = `<div class='cycle' id=${i.id}><div style="visibility: ${visible}" class='check material-icons'>check</div></div><div>${i.name}</div>`;
          elemCon.append(elem);// приклеиваем к элементу-контейнеру
        });
      }
    });
    this.renderStateList(data);// сразу рендкрим поп ап для выбора проекта, но он ещё не виден
    this.page.append(elemCon);// приклеиваем к корневому элементу
  }

  renderStateList(data) { // рендер поп апа
    const elemCon = document.createElement('div');// создаём элемент-контейнер
    elemCon.setAttribute('class', 'state-list hidden');// прописываем ему классы стилей
    const nameProjects = data.projects.map((item) => item.name);// создаём массив названий проектов, можно и по другому, это лишнее
    nameProjects.forEach((item) => { // обрабатываем массив с названиями проектов
      const elem = document.createElement('div');// создаём элемент для хранения названия проекта
      elem.setAttribute('class', 'state-select');// прописываем ему классы стилей
      elem.innerHTML = `${item}`;// прописываем название
      elemCon.append(elem);// приклеиваем к элементу-контейнеру
    });
    this.page.append(elemCon);// приклеиваем к корневому элементу
  }
}
