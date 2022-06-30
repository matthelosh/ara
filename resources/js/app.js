require('./bootstrap');

import Vue  from 'vue';
// import { ZiggyVue } from 'ziggy';
// import { Ziggy } from './ziggy';
import Default from './Layouts/Default'
import vuetify from './plugins/vuetify'
import { createInertiaApp, App, Link } from '@inertiajs/inertia-vue';


Vue.prototype.$route = route()
createInertiaApp({
    // resolve: name => import(`./Pages/${name}`).then(module => {
    //     return module ? module : import('./Pages/NotFound')
    // }).catch( err => {
    //     return import('./Pages/NotFound')
    // }),
    resolve: name => {
        if(name.startsWith('Front/')) {
            let path = name.split('/')
            return import(`./Themes/${path[1]}/Pages/${path[2]}`)
        } else {
            return import(`./Pages/${name}`).then(module => {
                return module ? module : import('./Pages/NotFound')
            }).catch( err => {
                return import('./Pages/NotFound')
            })
        }
    },
    setup({ el, app, props, plugin}) {
        Vue.use(plugin)
        // Vue.use(ZiggyVue, Ziggy)
        new Vue({
            vuetify,
            render: h => h(App, props),
        }).$mount(el)
    },
})