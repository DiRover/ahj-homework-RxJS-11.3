import { fromEvent } from 'rxjs';
import { data } from './data';
import Store from './Store';
import RenderTask from './RenderTask';
import RenderState from './RenderState';
import handler from './handler';

const page = document.querySelector('.page');// получаем корневой элемент для отрисовки приложения

const store = new Store(data);
const renderTask = new RenderTask(store, page);
const renderState = new RenderState(store, page);

renderState.init();// отрисовывваем список с проектами
renderTask.init();// отрисовываем список с задачами

fromEvent(document, 'click').subscribe((e) => { // обрабатваем все клики на странице технологией RxJS
  handler(e.target, store);// отработчик кликов
});
