import HomeView from "@/views/HomeView.vue";
import NullWeightView from "@/views/NullWeightView.vue";
import WeightingView from "@/views/WeightingView.vue";
import Router from "vue-router";
import Vue from "vue";
import ReportView from "@/views/ReportView.vue";
import PrintView from "@/views/PrintView.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/pesaje",
      name: "Weighting",
      component: WeightingView,
    },
    {
      path: "/ticket",
      name: "PrintView",
      component: PrintView,
    },
    {
      path: "/anular-pesaje",
      name: "NullWeight",
      component: NullWeightView,
    },
    {
      path: "/reporte",
      name: "ReportView",
      component: ReportView,
    },

    // Add more routes here
  ],
});
