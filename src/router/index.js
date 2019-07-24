import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Accolades from '@/components/Accolades'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'About', component: About, alias: '/about' },
    { path: '/accolades', name: 'Accolades', component: Accolades },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/certifications', name: 'Certifications', component: Certifications },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/publications', name: 'Publications', component: Publications }
  ]
})
