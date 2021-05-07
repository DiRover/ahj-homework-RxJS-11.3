/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { pluck } from 'rxjs/operators';

export default class RenderState {// класс для списка проектов
  constructor(store, page) {
    this.store = store;// экземпляр класса Store
    this.page = page;// корневой элемент для отображения
  }

  init() { // метод для отрисовки
    this.store.state$// берём поток store$ у экземпляра класса Store
      .pipe(
        pluck('projects'), // оператором pluck ловим в нём объект с проектами по ключу projects
      )
      .subscribe((projects) => { this.render(projects); });// подписываемся на поток и рендерим список
  }

  render(projects) { // метод для рендера списка
    const elemCon = document.createElement('div');// создаём элемент-контейнер
    elemCon.setAttribute('class', 'container task-container');// присваиваем ему классы стилей
    elemCon.innerHTML = '<h2 class="title">State</h2>';// прописываем заголовок
    projects.forEach((item) => { // обрабатываем массив объектов с проектами
      const doneTask = item.tasks.filter((i) => { // получаем массив выполненных задач, для отображения их числа
        if (i.done) return i;
      });
      const elem = document.createElement('div');// создаём элемент для названия проекта и числа выполненных задач
      elem.setAttribute('class', 'state');// присваиваем ему классы стилей
      elem.setAttribute('id', item.id);// присваиваем айди проекта, не нужн на самом деле
      elem.innerHTML = `<div>${item.name}</div><div>${doneTask.length}</div>`;// прописываем имя и кол-во задач
      elemCon.append(elem);// клеим в элемент контейнер
    });
    this.page.innerHTML = '';// очищаем страницу во время каждого рендера, лучше это делать тут, иначе списку будут множиться
    this.page.append(elemCon);// прилепляем элемент-контейнер к корневому элементу
  }
}
