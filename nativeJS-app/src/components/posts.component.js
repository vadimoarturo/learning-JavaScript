import  {Component} from '../core/component';
import  {apiService} from '../service/api.service';
import  {TransformService} from '../service/transform.service';
import  {renderPost} from '../templates/post.template'

export class PostsComponent extends Component {
    constructor(id, {loader}){
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

   async onShow(){
      this.loader.show()
      const fbData = await apiService.fetchPosts()
      const posts = TransformService.fdbObjectToArray(fbData)
      const html = posts.map(post => renderPost(post, {withButton: true}))
      this.loader.hide()
      this.$el.insertAdjacentHTML('afterbegin', html.join(' '))

    }
    onHide(){
        this.$el.innerHTML = ''
    }
    

}

function buttonHandler(event){
   const $el = event.target
   const id = $el.dataset.id
   const title = $el.dataset.title
   if(id && title){
      let favorites = JSON.parse(localStorage.getItem('favorites'))|| []
     const condidate = favorites.find(p => p.id === id)


      if(condidate){
          $el.textContent = 'Сохранить'
          $el.classList.add('button-primary')
          $el.classList.remove('button-danger')
          favorites = favorites.filter(p => p.id !== id)

      } else {
          favorites.push({id, title})
          $el.textContent = 'Удалить'
          $el.classList.add('button-danger')
      }

      localStorage.setItem('favorites', JSON.stringify(favorites))
   }

}

