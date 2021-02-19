import './scss/index.scss'

dataUsers()
checkLogin()

function dataUsers(){
  const users = [
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
  ]
  
  localStorage.setItem('usersObject', JSON.stringify(users))
}


function checkLogin(){
if (localStorage.getItem('loginNow')) {
    localStorage.getItem('infoPrev') ? showApp() : infoPrev()

 } else {
   const welcomeHTML = `
   <div class="welcome">
   <h1>Корпоративный чат компании Рога и Копыта</h1>
<form id="create" class="welcome__form">
   <div class="welcome__form__components"> 
       <input class="input-style" type="text" id="name" name="login" placeholder="Введите логин">
   </div>
   <div class="welcome__form__components"> 
       <input class="input-style" type="text" id="passwd" name="password" placeholder="Введите пароль">
   </div>
   <div class="welcome__form__components"> 
       <button class="button-style" id="login">Войти</button>
   </div>

</form>
</div>
   `

   document.getElementById('app').insertAdjacentHTML('afterend', welcomeHTML);
 }
}

const $login = document.getElementById('login')
if($login){
$login.addEventListener('click', (event) => {
  event.preventDefault()
  const loginName = document.getElementById('name').value
  const passwd = document.getElementById('passwd').value
  const usersName = JSON.parse(localStorage.getItem('usersObject'))
  
usersName.forEach((element) => {
  if (element.login === loginName && element.passwd === passwd){
    localStorage.setItem('loginNow', true)
    localStorage.setItem('userName', element.name)
    localStorage.setItem('loginName', element.login)
    document.querySelector('.welcome').classList.add('hide')
    infoPrev()
  }

})
})
}


function infoPrev(){
  const infoHTML = `
  <div class="info">
  <h1>Привет ${localStorage.getItem('userName')}</h1>
  <button class="button-style" id="start">Начать</button>
 </div>
  `
  document.getElementById('app').insertAdjacentHTML('afterend', infoHTML);

  const $start = document.getElementById('start')
if($start){
$start.addEventListener('click', (event) => {
  event.preventDefault()
  localStorage.setItem('infoPrev', true)
  document.querySelector('.info').classList.add('hide')
  showApp()
})
}

}

function showApp() {
  const panelHTML = `
  <div class="panel">
  <h1>Навигация</h1>
 </div>
  `
document.getElementById('app').insertAdjacentHTML('afterend', panelHTML);
}