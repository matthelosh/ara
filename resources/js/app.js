require('./bootstrap');

import Vue  from 'vue';
// import { ZiggyVue } from 'ziggy';
// import { Ziggy } from './ziggy';

import vuetify from './plugins/vuetify'
import { createInertiaApp, App, Link } from '@inertiajs/inertia-vue';
Vue.prototype.$route = route()
createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, app, props, plugin}) {
        Vue.use(plugin)
        // Vue.use(ZiggyVue, Ziggy)
        new Vue({
            vuetify,
            render: h => h(App, props),
        }).$mount(el)
    },
})