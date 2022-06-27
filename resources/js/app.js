require('./bootstrap');

import Vue  from 'vue';
// import { ZiggyVue } from 'ziggy';
// import { Ziggy } from './ziggy';

import vuetify from './plugins/vuetify'
import { createInertiaApp, App, Link } from '@inertiajs/inertia-vue';


Vue.prototype.$route = route()
createInertiaApp({
    resolve: name => {
    	const page = require(`./Pages/${name}`)
    	if (page === undefined) {
    		console.log('Page Module: '+name+' Not Found')
    	}
    	return page
    },
    reject: err => {
    	console.log(err)
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