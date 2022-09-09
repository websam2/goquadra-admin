<template>
  <Loading v-show="isLoading" class="w-[90%]" />
  <div id="home" class="bg-base-100 flex flex-col h-[100%] overflow-y-auto p-6">
    <Title text="Painel de Controle"></Title>
    <div class="flex flex-row justify-center">
      <Card text="Agendamento Diários" :number="dash.appointments_today">
      </Card>
      <Card text="Agendamento Mensais" :number="dash.appointments_month">
      </Card>
      <Card text="Quadras" :number="dash.field_count"> </Card>
      <Card text="Visualização Perfil" :number="0"> </Card>
    </div>
    <div
      class="flex flex-col h-[469px] bg-neutral rounded-md shadow-md m-5 p-6"
    >
      <div class="flex flex-row justify-between">
        <SubTitle text="Agendamentos diários"></SubTitle>
        <a
          href="#schedule"
          class="btn btn-success ml-20 mt-2 mb-2 w-42 text-base-100"
          >Agendar</a
        >
      </div>
      <div class="overflow-x-auto">
        <table class="flex flex-col table table-zebra w-full">
          <!-- CRUD table head -->
          <thead>
            <tr>
              <th>Data / Hora</th>
              <th>Nome</th>
              <th>Pagamento</th>
              <th>Quadra</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>17/06_20:00-21:00</th>
              <td>Nome do Campo</td>
              <td>Crédito</td>
              <td>Coberta cima</td>
              <td class="flex flex-row">
                <a href="#editClientSchedule"
                  ><img
                    class="m-2 cursor-pointer"
                    src="../../assets/pen.svg"
                    alt="pen"
                  />
                </a>
                <img
                  class="m-2 cursor-pointer"
                  src="../../assets/trash.svg"
                  alt="trash"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Cards dos gráficos -->
    <div class="flex fle-row m-2 justify-between">
      <div
        class="flex flex-col w-[50%] bg-neutral rounded-md shadow-md m-auto p-6"
      >
        <SubTitle text="Recebimentos semanais"></SubTitle>
        <div class="chart1">
          <LineChart1 class=""></LineChart1>
        </div>
      </div>
      <div
        class="flex flex-col w-[50%] bg-neutral rounded-md shadow-md m-auto p-6"
      >
        <SubTitle text="Recebimentos mensais"></SubTitle>
        <div class="chart2">
          <LineChart2 class=""></LineChart2>
        </div>
      </div>
    </div>
    <!-- Modal com os steps AGENDAR -->
    <div class="modal" id="schedule">
      <div
        class="modal-box w-11/12 max-w-6xl bg-base-100 flex flex-col p-6 rounded-md"
      >
        <div class="flex flex-row justify-between">
          <SubTitle text="Agendamento"></SubTitle>
          <button class="btn btn-circle btn-outline">
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
            ></a>
          </button>
        </div>
        <div class="flex justify-center">
          <ul class="steps mt-4">
            <li class="step step-primary">Dados do campo</li>
            <li class="step">Data / Hora</li>
            <li class="step">Forma de pagamento</li>
          </ul>
        </div>
        <div class="flex flex-col mt-2">
          <ClientSchedule></ClientSchedule>
        </div>
      </div>
    </div>
    <!-- Modal com os steps editar o agendamento -->
    <div class="modal" id="editClientSchedule">
      <div
        class="modal-box w-11/12 max-w-6xl bg-base-100 flex flex-col p-6 rounded-md"
      >
        <div class="flex flex-row justify-between">
          <SubTitle text="Agendamento"></SubTitle>
          <button class="btn btn-circle btn-outline">
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
            ></a>
          </button>
        </div>
        <div class="flex justify-center">
          <ul class="steps mt-4">
            <li class="step step-primary">Dados do campo</li>
            <li class="step">Data / Hora</li>
            <li class="step">Forma de pagamento</li>
          </ul>
        </div>
        <div class="flex flex-col mt-2">
          <EditClientSchedule></EditClientSchedule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../../components/Card.vue";
import LineChart1 from "../../components/LineChart1.vue";
import LineChart2 from "../../components/LineChart2.vue";
import SubTitle from "../../components/SubTitle.vue";
import Title from "../../components/Title.vue";
import ClientSchedule from "./components/ClientSchedule.vue";
import EditClientSchedule from "./components/EditClientSchedule.vue";
import Loading from "../../components/Loading.vue";

export default {
  components: {
    Title,
    Card,
    SubTitle,
    LineChart1,
    LineChart2,
    ClientSchedule,
    EditClientSchedule,
    Loading,
  },
  data() {
    return {
      dash: {},
      isLoading: false,
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      axios
        .get("https://api.goquadra.com.br/api/company/dash", {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.isLoading = false;
          this.dash = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
