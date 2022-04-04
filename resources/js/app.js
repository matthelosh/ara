require('./bootstrap');

import Vue  from 'vue';
import vuetify from './plugins/vuetify'
import { createInertiaApp, App, Link } from '@inertiajs/inertia-vue';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, app, props, plugin}) {
        Vue.use(plugin)

        new Vue({
            vuetify,
            render: h => h(App, props),
        }).$mount(el)
    },
})