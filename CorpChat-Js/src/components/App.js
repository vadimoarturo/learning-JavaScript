export class App{
    constructor(loginNow,infoPrev){

        if (loginNow) {
            infoPrev ? this.showApp('app') : this.infoPrev('app')
        
         } else {
            this.innerHTML('app')
            this.entryLogin()
         }

    }

    entryLogin(){
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
                this.infoPrev('app')
              }
            
            })
            })
            }

    }

    innerHTML(appId){
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
     
        document.getElementById(appId).insertAdjacentHTML('afterend', welcomeHTML);
    }

    showApp(appId){
        const panelHTML = `
        <div class="panel">
        <h1>Навигация</h1>
       </div>
        `
      document.getElementById(appId).insertAdjacentHTML('afterend', panelHTML);
    }

    infoPrev(appId){
        const infoHTML = `
        <div class="info">
        <h1>Привет ${localStorage.getItem('userName')}</h1>
        <button class="button-style" id="start">Начать</button>
       </div>
        `
        document.getElementById(appId).insertAdjacentHTML('afterend', infoHTML);
      
        const $start = document.getElementById('start')
      if($start){
      $start.addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.setItem('infoPrev', true)
        document.querySelector('.info').classList.add('hide')
        this.showApp('app')
      })
      }
      
      }
}


