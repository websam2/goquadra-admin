<template>
  <div
    class="login flex flex-col justify-center items-center w-screen h-screen"
  >
    <!-- Notificação de cadastro -->
    <Loading v-show="isLoading"></Loading>
    <div
      v-show="isSucess"
      class="alert alert-success shadow-lg w-[513px] justify-center animate-bounce"
    >
      <Sucess>Enviamos seu link de redefinição de senha por e-mail!</Sucess>
    </div>

    <div
      v-show="isError"
      class="alert alert-error shadow-lg w-[513px] justify-center animate-bounce"
    >
      <Error>Whoops...Deu algo de errado. Coloque um e-mail válido!</Error>
    </div>

    <!-- Parametros da página   -->
    <div class="flex flex-col items-center w-[512px] h-[509px]">
      <img
        class="w-[242px] m-6"
        src="../../assets/logo.png"
        alt="GOQUADRA"
        srcset=""
      />
      <div
        class="login-form bg-base-100 w-[100%] h-[50%] rounded-md flex flex-col justify-around drop-shadow-md"
      >
        <FormKit
          type="form"
          id="registration"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Register"
          @submit="recovery"
          :actions="false"
          #default="{}"
          incomplete-message="Dados incompletos, por favor preencher corretamente"
        >
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            v-model="form.email"
            type="email"
            label-class="text-lg"
            label="Insira seu e-mail cadastrado"
            validation="required|email"
            placeholder="email@exemplo.com"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
              email: 'E-mail informado é inválido',
            }"
          />

          <button class="btn btn-secondary ml-20 mt-2 mb-2 w-36">ENVIAR</button>

          <router-link to="/" class="ml-16">Já sou registrado</router-link>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../../components/Loading.vue";
export default {
  components: { Loading },
  data: () => ({
    form: {
      email: "",
    },
    isSucess: false,
    isError: false,
    isLoading: false,
  }),
  methods: {
    recovery() {
      this.isLoading = true;
      this.isError = false;
      axios
        .post(
          "https://api.goquadra.com.br/api/forgot-password",
          {
            email: this.form.email,
          },
          { "Content-Type": "multipart/form-data" }
        )
        .then((response) => {
          //se der certo
          this.isError = false;
          this.isLoading = false;
          this.isSucess = true;
          setTimeout(() => {
            this.$router.push("/");
          }, "3000");
        })
        .catch((error) => {
          //se der erro
          this.isLoading = false;
          this.isError = true;
          console.log(`ERRO NA API: ${error.response.status}`);
        });

      // this.$router.push("/dashboard/home")
    },
  },
};
</script>

<style lang="postcss" scoped>
.login {
  background: linear-gradient(0deg, #f5f5f5 45%, #0a4888 0%);
}
</style>
