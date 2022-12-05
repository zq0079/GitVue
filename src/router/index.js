import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Book from '@/components/Book.vue'
import pageOne from '@/components/pageOne.vue'

export default new VueRouter({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Book',
      component: Book
    },
    {
      path: '/pageOne',
      component: pageOne
    }
  ]
})
