import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Book from '@/components/Book.vue'

export default new VueRouter({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Book',
      component: Book
    }
  ]
})
