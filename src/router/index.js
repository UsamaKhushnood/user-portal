import Vue from "vue";
import VueRouter from "vue-router";

import TheContainer from "@/components/main/TheContainer";
import Dashboard from "../Dashboard";
import MyProjects from "@/views/MyProjects";
import PageNotFound from "@/views/PageNotFound";
import JobsTasks from "@/views/JobsTasks";
import BuyServices from "@/views/BuyServices";
import JobPortal from "@/views/JobPortal";
import Payments from "@/views/Payments";
import Warranty from "@/views/Warranty";
import Appointment from "@/views/Appointment";
import Reviews from "@/views/Reviews";
import SupportHelp from "@/views/SupportHelp";
import Reports from "@/views/Reports";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: TheContainer,
        redirect: "/dashboard",
        children: [{
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/my-projects",
                name: "My Projects",
                component: MyProjects,
            },
            {
                path: "/job-tasks",
                name: "Jobs Tasks",
                component: JobsTasks,
            },
            {
                path: "/buy-services",
                name: "Buy Services",
                component: BuyServices,
            },
            {
                path: "/job-portal",
                name: "Job Portal",
                component: JobPortal,
            },
            {
                path: "/payments",
                name: "Payments",
                component: Payments,
            },
            {
                path: "/warranty",
                name: "Warranty",
                component: Warranty,
            },
            {
                path: "/appointment",
                name: "Appointment",
                component: Appointment,
            },
            {
                path: "/reviews",
                name: "Reviews",
                component: Reviews,
            },
            {
                path: "/support-help",
                name: "Support Help",
                component: SupportHelp,
            },
            {
                path: "/reports",
                name: "Reports",
                component: Reports,
            },
        ],
    },
    {
        path: "**",
        name: "OOPs",
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;