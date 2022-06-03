import Vue from 'vue';
import VueRouter from 'vue-router';

 Vue.use(VueRouter);

import HelloSign from "../components/HelloSign.vue";
import HelloPayment from "../components/HelloPayment";
import DataRevision from "../components/DataRevision";
import Finalization from "../components/Finalization";

 const routes = [
    {
        path:'/',
        component: HelloSign
    },
    {
        path:'/payment',
        component: HelloPayment
    },
    {
        path:'/revision',
        component: DataRevision
    },
    {
        path:'/finalization',
        component: Finalization
    }
 ];

 const router = new VueRouter({

    routes,
    mode:'history'
 })


 export default router;