<template>
  <div
    class="login flex flex-col justify-center items-center w-screen h-screen"
  >
    <Loading v-show="isLoading"></Loading>

    <!-- Notificação de cadastro concluído -->
    <div
      v-show="isSucess"
      class="alert alert-success shadow-lg sm:w-[640px] justify-center animate-bounce"
    >
      <Sucess>Yeah! Parabéns seu registro foi concluído!</Sucess>
    </div>

    <!-- Parametros da página   -->
    <div class="flex flex-col items-center">
      <img
        class="w-[242px] m-6"
        src="../../assets/logo.png"
        alt="GOQUADRA"
        srcset=""
      />
      <div
        class="login-form bg-base-100 sm:w-[512px] h-[100%] rounded-md flex flex-col justify-around drop-shadow-md"
      >
        <FormKit
          type="form"
          :actions="false"
          @submit="register"
          message-class="ml-8 text-error text-xs"
          incomplete-message="Dados incompletos, por favor preencher corretamente"
        >
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            type="text"
            v-model="form.name"
            label-class="text-lg"
            label="Nome completo"
            validation="required"
            placeholder="Nome completo"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
            }"
          />
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            type="email"
            v-model="form.email"
            label-class="text-lg"
            label="E-mail"
            validation="required|email"
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
            type="select"
            v-model="form.city"
            label-class="text-lg"
            label="Cidade"
            validation="required"
            placeholder="Cidade"
            message-class="ml-2 text-error text-xs"
            :options="['Registro', 'Sete Barras', 'Jacupiranga']"
            :validation-messages="{
              required: 'O campo está vazio',
            }"
          />
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            type="select"
            v-model="form.state"
            label-class="text-lg"
            label="Estado"
            validation="required"
            placeholder="Estado"
            message-class="ml-2 text-error text-xs"
            :options="['São Paulo']"
            :validation-messages="{
              required: 'O campo está vazio',
            }"
          />
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            label-class="text-lg"
            type="password"
            v-model="form.password"
            name="password"
            label="Senha"
            validation="required"
            placeholder="****************"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
            }"
          />
          <FormKit
            outer-class="m-5"
            input-class="input input-bordered rounded-md w-full"
            label-class="text-lg"
            type="password"
            v-model="form.password_confirm"
            name="password_confirm"
            label="Confirmar a senha"
            validation="required|confirm"
            validation-visibility=""
            validation-label="Confirmação de senha"
            placeholder="****************"
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              required: 'O campo está vazio',
              confirm: 'Senha não confere',
            }"
          />
          <FormKit
            outer-class="ml-6"
            wrapper-class="w-full flex flex-row "
            label-class="ml-2"
            v-model="form.forgot"
            type="checkbox"
            label="Termos de uso e privacidade"
            name="terms"
            validation="accepted"
            validation-visibility=""
            message-class="ml-2 text-error text-xs"
            :validation-messages="{
              accepted: 'Concordo com o termos de uso e privacidade ',              
            }"
          />
          <div class="flex flex-row align-baseline justify-center">
            <button @click="register()" class="btn btn-secondary m-6 w-36">
              Cadastrar
            </button>
            <router-link to="/" class="m-6 my-8">Já sou registrado</router-link>
          </div>
        </FormKit>
      </div>
    </div>
    <!-- Notificação de erro no cadastro -->
    <div
      v-show="isError"
      class="alert alert-error shadow-lg w-[513px] justify-center animate-bounce mt-5"
    >
      <Error
        >Whoops... Deu algo de errado. Preencher os dados corretamente.</Error
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
      name: "",
      email: "",
      city: "",
      state: "",
      password: "",
      password_confirm: "",
      forgot: false,
    },
    isSucess: false,
    isError: false,
    isLoading: false,
  }),
  methods: {
    submit() {
      console.log(this.form);
    },
    register() {
      this.isLoading = true;
      this.isError = false;
      axios
        .post(
          "https://api.goquadra.com.br/api/user",
          {
            name: this.form.name,
            email: this.form.email,
            city: this.form.city,
            state: this.form.state,
            password: this.form.password,
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
