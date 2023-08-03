import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reduser';

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
