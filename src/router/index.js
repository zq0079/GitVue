import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Book from '@/components/Book.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/',
      component: Book
    }
  ]
})
