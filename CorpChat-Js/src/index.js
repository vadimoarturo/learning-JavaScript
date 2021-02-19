import './scss/index.scss'
import {Users} from '@core/users'
import {App} from '@comp/App'
new Users([
  {
  login: 'demo',
  passwd: 'demo',
  name: 'Вадим'
  },
  {
    login: 'test',
    passwd: 'test',
    name: 'Кеша'
  } 
])

new App(localStorage.getItem('loginNow'), localStorage.getItem('infoPrev'))







