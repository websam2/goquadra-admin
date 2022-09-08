<template>
  <div id="home" class="bg-primary w-[15%] h-[100%]">
    <img
      @click="goTo('/dashboard/home')"
      class="m-auto p-6 cursor-pointer"
      src="../assets/logo.svg"
      alt="GOQUADRA"
      srcset=""
    />

    <div class="flex justify-center p-2 mt-5 mb-5">
      <div class="avatar sm:w-12 m-2">
        <img class="rounded-full" :src="avatar" />
      </div>
      <div class="sm:text-xs md:text-lg text-base-100 m-auto">{{ name }}</div>
    </div>
    <ul class="menu bg-primary hover-bordered box-border">
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link to="/dashboard/home">Agendamentos</router-link>
      </li>
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link to="">Clientes</router-link>
      </li>
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link to="/dashboard/schedules">Campos e horários</router-link>
      </li>
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link to="">Usuários</router-link>
      </li>
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link to="">Assinatura</router-link>
      </li>
      <li class="text-base-100 sm:text-xs md:text-lg">
        <router-link @click="logout" to="/">Sair</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    avatar: String,
  },

  methods: {
    goTo(url) {
      this.$router.push(url);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("forgot");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="postcss">
li :hover {
  color: #10b981;
  font-size: 20px;
}
</style>
