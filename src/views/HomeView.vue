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

        const toParsed = this.transformDate(nowCST);
        const fromParsed = this.transformDate(yesterday);
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
    transformDate(inputDate) {
      // Split the input date into its components
      const [year, month, day] = inputDate.split("-");

      // Get the last two digits of the year
      const shortYear = year.slice(-2);

      // Format the date in DD/MM/YY
      const formattedDate = `${day}/${month}/${shortYear}`;

      return formattedDate;
    },
  },
  mounted() {
    this.getDailyWeights();
  },
};
</script>

<style>
</style>