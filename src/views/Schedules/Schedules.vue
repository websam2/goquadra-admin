<template>
  <div class="bg-base-100 flex flex-col w-[100%] h-[100%] p-6">
    <Title text="Campos e Horários"></Title>
    <div
      class="flex flex-col h-[469px] bg-neutral rounded-md shadow-md m-10 p-6"
    >
      <div class="flex flex-row justify-between">
        <SubTitle text="Lista de campos e horários cadastrados"></SubTitle>
        <a
          href="#registerSchedule"
          class="btn btn-success ml-20 mt-2 mb-2 w-42 text-base-100"
          >Adicionar Registro</a
        >
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <!-- CRUD table head -->
          <thead>
            <tr>
              <th>Nome do campo</th>
              <th>Datas</th>
              <th>Horarios</th>
              <th>Forma de Pagamento</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>Campo coberto 01</th>
              <td>01/01/2022</td>
              <td>18:00-19:00</td>
              <td>Crédito</td>
              <td>R$170,00</td>
              <td class="flex">
                <a href="#editRegisterSchedule">
                  <img
                    class="m-auto cursor-pointer"
                    src="../../assets/pen.svg"
                    alt="pen"
                /></a>
                <img
                  class="m-auto cursor-pointer"
                  src="../../assets/trash.svg"
                  alt="trash"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-end btn-group mr-11">
      <button class="btn btn-active">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <button class="btn">4</button>
    </div>

    <!-- Modal para registar -->
    <div class="modal" id="registerSchedule">
      <div
        class="modal-box w-11/12 max-w-6xl bg-base-100 flex flex-col p-6 rounded-md"
      >
        <div class="flex flex-row justify-between">
          <SubTitle text="Cadastro da quadra, horários e pagamento"></SubTitle>
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
            <li class="step step-primary">Quadra</li>
            <li class="step">Cadastro</li>
            <li class="step">Data / Hora</li>
            <li class="step">Galeria de fotos</li>
          </ul>
        </div>
        <div class="flex flex-col mt-2">
          <RegisterSchedule></RegisterSchedule>
        </div>
      </div>
    </div>
        <!-- Modal para editar o registro -->
    <div class="modal" id="editRegisterSchedule">
      <div
        class="modal-box w-11/12 max-w-6xl bg-base-100 flex flex-col p-6 rounded-md"
      >
        <div class="flex flex-row justify-between">
          <SubTitle text="Cadastro da quadra, horários e pagamento"></SubTitle>
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
            <li class="step step-primary">Quadra</li>
            <li class="step">Cadastro</li>
            <li class="step">Data / Hora</li>
            <li class="step">Galeria de fotos</li>
          </ul>
        </div>
        <div class="flex flex-col mt-2">
          <EditRegisterSchedule></EditRegisterSchedule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from "../../components/SubTitle.vue";
import Title from "../../components/Title.vue";
import RegisterSchedule from "./components/RegisterSchedule.vue";
import EditRegisterSchedule from "./components/EditRegisterSchedule.vue";
export default {
  components: { Title, SubTitle, RegisterSchedule, EditRegisterSchedule },
};
</script>
