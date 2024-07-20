<template>
  <div>En construccion</div>
</template>

<script>
import graphService from "@/services/graphService";
export default {
  methods: {
    async getDailyWeights() {
      try {
        // Get the current date and time in CST
        const now = new Date();
        const offset = -6; // CST is GMT-6
        const nowCST = new Date(now.getTime() + offset * 60 * 60 * 1000);

        // Calculate yesterday's date
        const yesterday = new Date(nowCST);
        yesterday.setDate(yesterday.getDate() - 1);

        // Format dates in YYYY-MM-DD format
        const formatDate = (date) => date.toISOString().split("T")[0];

        const toParsed = formatDate(nowCST);
        const fromParsed = formatDate(yesterday);
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const { data } = graphService.dailyWeights({
          to: toParsed,
          from: fromParsed,
          username,
          password,
        });

        console.log("Daily Weights", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getDailyWeights();
  },
};
</script>

<style>
</style>