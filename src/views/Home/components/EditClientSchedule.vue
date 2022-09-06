<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-end">
      <!-- <div class="modal-action">
            <a href="#" class="btn btn-error m-2 text-base-100">Voltar</a>
          </div> -->
      <div class="modal-action">
        <a href="" class="btn btn-success m-2 text-base-100">Próximo</a>
      </div>
    </div>

    <div class="flex flex-col">
      <FormKit type="form">
        <div class="flex flex-col justify-center" v-show="step == 1">
          <FormKit type="group" name="select">
            <!-- Step selecionar campo -->
            <FormKit
              label="Nome do Campo"
              placeholder="Selecionar"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg w-full"
              label-class="text-lg"
              type="select"
              :options="['Campo de teste 01']"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit type="group" name="fields">
              <!-- Step dados dos campos -->
              <div class="text-lg w-full m-5">Localização:</div>
              <div class="text-lg w-full m-5">Informação da quadra:</div>
              <div class="text-lg w-full m-5">Valor:</div>
            </FormKit>
          </FormKit>
        </div>

        <div class="flex flex-col items-center" v-show="step == 2">
          <FormKit type="group" name="date">
            <!-- Step selecionar data e hora -->
            <FormKit
              label="Selecionar uma data"
              placeholder="Selecionar"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg"
              label-class="text-lg"
              type="select"
              :options="['05/09/2022']"
              validation="required"
              message-class="ml-2 text-error text-xs"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit
              label="Selecionar os horários"
              type="checkbox"
              decorator-class="flex mr-5"
              wrapper-class="flex m-2 text-lg"
              :options="['08:00-09:00', '09:00-10:00', '10:00-11:00']"
              validation="required|min:2"
              message-class="ml-2 text-error text-xs"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
          </FormKit>
        </div>

        <div class="flex flex-col items-center" v-show="step == 3">
          <FormKit type="group" name="payment">
            <!-- Step forma de pagamento -->
            <FormKit
              label="Qual a forma de pagamento"
              placeholder="Selecionar"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg"
              label-class="text-lg"
              type="select"
              :options="['Crédito', 'Débito', 'Pix', 'Dinheiro']"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit
              label="Informações adicionais"
              placeholder="Ex. Compo ou quadra coberta"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg"
              label-class="text-lg"
              type="textarea"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
          </FormKit>
        </div>
      </FormKit>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
};
</script>
