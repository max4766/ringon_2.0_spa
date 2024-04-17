import { createMemoryHistory, createRouter } from 'vue-router'

import Main from '../components/Main.vue'
import Subsidiaries from '../components/Subsidiaries.vue'
import Call from '../components/Call.vue'
import License from '../components/License.vue'
import MyPage from '../components/MyPage.vue'
import AllCallList from '../components/AllCallList.vue'
import UserList from '../components/UserList.vue'

const routes = [
  { 
    path: '/', 
    component: Main 
  },
  { 
    path: '/Subsidiaries', 
    component: Subsidiaries 
  },
  { 
    path: '/Call', 
    component: Call
  },
  { 
    path: '/License', 
    component: License
  },
  { 
    path: '/MyPage', 
    component: MyPage
  },
  { 
    path: '/AllCallList', 
    component: AllCallList
  },
  { 
    path: '/UserList', 
    component: UserList
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router