<template>
  <div class="flex justify-between w-screen h-screen">
    <DashboardMenu :name="user.name" :avatar="user.avatar"></DashboardMenu>

    <div class="bg-base-100 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashboardMenu from "../../components/DashboardMenu.vue";
export default {
  components: {
    DashboardMenu,
  },
  data: () => ({
    user: {},
  }),
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
  },
};
</script>

<style>
.login {
  background: linear-gradient(0deg, #f5f5f5 45%, #0a4888 0%);
}
</style>
