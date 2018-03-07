import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/common/Home'


import Foods from '@/components/page/Foods'
import Menus from '@/components/page/Menus'
import Add from '@/components/page/AddFood'
Vue.use(Router)

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home', component: Home,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'f',
                    component: Foods
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: '/',
                    component: Menus
                },
                {
                    path: 'a',
                    component: Add
                }
            ]
        }
    ]
})
