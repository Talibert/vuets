import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'

/**
 * A técnica de Lazy Load vai ajudar a carregar a view e seus componentes apenas quando ela de fato for chamada
 * @param view
 */
const lazyLoad = (view: string) => import(`@/views/${view}.vue`)

/**
 * Criando um array com as rotas do projeto
 *
 * O primeiro objeto vai passar o DefaultLayout como componeente e as views desejadas como childrens
 * Isso significa que as vies contidas no array `children` vão ser utilizadas como `router-view` no componente DefaultLayout
 */
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: HomeView }, // Será aplicada junto com o DefaultLayout
      { path: 'about', name: 'About', component: lazyLoad("AboutView") }, // Será aplicada junto com o DefaultLayout
    ]
  },
  { path: '/login', name: 'Login', component: lazyLoad("LoginView") }, // Será aplicada sem o DefaultLayout
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
