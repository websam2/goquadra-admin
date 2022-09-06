<template>
  <div
    class="login flex flex-col justify-center items-center w-screen h-screen"
  >
    <Loading v-show="isLoading"></Loading>

    <div class="flex flex-col items-center w-[512px]">
      <img
        class="w-[242px]"
        src="../../assets/logo.png"
        alt="GOQUADRA"
        srcset=""
      />
      <p class="text-gray-light text-base w-[330px] text-center m-7">
        Não tem uma conta criada? Crie sua conta agora mesmo
        <router-link to="/register"
          ><span class="text-blue font-bold">clicando aqui</span></router-link
        >
      </p>
      <div
        class="login-form bg-base-100 w-[100%] h-[100%] rounded-md flex flex-col justify-around drop-shadow-md"
      >
        <FormKit
          type="form"
          :actions="false"
          @submit="login"
          message-class="ml-8 text-error text-xs"
          incomplete-message="Dados incompletos, por favor preencher corretamente"
        >
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            type="email"
            v-model="form.email"
            label-class="text-lg"
            label="E-mail"
            validation="required|email"
            validation-visibility=""
            placeholder="email@exemplo.com"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
              email: 'E-mail informado é inválido',
            }"
          />

          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            type="password"
            v-model="form.password"
            label="Senha"
            label-class="text-lg"
            validation="required"
            validation-visibility=""
            placeholder="****************"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
            }"
          />

          <FormKit
            outer-class="ml-6"
            wrapper-class="w-full flex flex-row "
            label-class="ml-2"
            v-model="form.forgot"
            type="checkbox"
            label="Lembre-me"
            name="terms"
            message-class="ml-2 text-error text-xs"
            @change="forgotCheck"
          />

          <div class="flex flex-row align-baseline justify-center">
            <button @click="login()" class="btn btn-secondary m-6 w-36">
              Entrar
            </button>

            <router-link to="/recovery" class="m-6 my-8"
              >Esqueceu a sua senha?</router-link
            >
          </div>
        </FormKit>
      </div>
    </div>
    <div
      v-show="isError"
      class="alert alert-error shadow-lg w-[513px] justify-center animate-bounce mt-5"
    >
      <Error
        >Whoops... Deu algo de errado. Dados não confere no cadastro.</Error
      >
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
      password: "",
      forgot: false,
    },

    isError: false,
    isLoading: false,
  }),
  methods: {
    submit() {
      console.log(this.form);
    },
    login() {
      this.isLoading = true;
      axios
        .post(
          "https://api.goquadra.com.br/api/auth/login",
          { email: this.form.email, password: this.form.password },
          { "Content-Type": "multipart/form-data" }
        )
        .then((response) => {
          this.isLoading = false;
          const token = response.data.info_token.original.access_token;
          const user = JSON.stringify(response.data.user);
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          this.$router.push("/dashboard/home");
        })
        .catch((error) => {
          this.isLoading = false;
          this.isError = true;
          console.log(`ERRO NA API: ${error.response.status}`);
        });
    },
    // Armazenamento dos dados de login
    autologin() {
      this.isLoading = true;
      const forgot = localStorage.getItem("forgot");
      const token = localStorage.getItem("token");
      if (forgot === "true") {
        if (token) {
          axios
            .post(
              "https://api.goquadra.com.br/api/auth/refresh",
              {},
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            )
            .then((response) => {
              this.isLoading = false;
              console.log(response.data);
              localStorage.setItem("token", response.data.access_token);
              this.$router.push("/dashboard/home");
            })
            .catch((error) => {
              this.isLoading = false;
              console.log(error);
            });
        }
      }
      this.isLoading = false;
    },
    forgotCheck() {
      if (this.form.forgot == false) {
        localStorage.setItem("forgot", true);
      } else {
        localStorage.setItem("forgot", false);
      }
    },
  },
  // Efeito de clique no formulário
  // const handleIconClick = (node, e) => {
  //   node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  //   node.props.type = node.props.type === 'password' ? 'text' : 'password'
  // },

  mounted() {
    this.autologin();
  },
};
</script>

<style lang="postcss" scoped>
@import url("https://fonts.google.com/specimen/Inter?query=inter");
* {
  font-family: Inter, Arial;
}
.login {
  background: linear-gradient(0deg, #f5f5f5 45%, #0a4888 0%);
}
.formkit-suffix-icon {
  width: 10%;
  scale: ;
}
</style>
