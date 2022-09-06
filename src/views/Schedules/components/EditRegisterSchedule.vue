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
      <FormKit
        type="form"
        :actions="false"
        @submit="FormSchedule"
        message-class="ml-8 text-error text-xs"
        incomplete-message="Dados incompletos, por favor preencher corretamente"
      >
        <div class="flex flex-col justify-center" v-show="step == 1">
          <FormKit type="group" name="select">
            <!-- Step selecionar -->
            <FormKit
              type="text"
              label="Nome do Campo"
              placeholder="Ex. Cadastro de quadra 01"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg w-full"
              label-class="text-lg"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
          </FormKit>
        </div>

        <div class="flex flex-col justify-center" v-show="step == 2">
          <FormKit type="group" name="fields">
            <!-- Step dados dos campos -->
            <FormKit
              type="text"
              label="Localização:"
              placeholder="Ex. Rua Félix, n 264, Centro - Registro"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg w-full"
              label-class="text-lg"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit
              type="text"
              label="Informação da quadra:"
              placeholder="Ex. Quadra coberta 01"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg w-full"
              label-class="text-lg"
              message-class="ml-2 text-error text-xs"
              validation="required"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit
              type="number"
              label="Valor:"
              placeholder="Ex. R$100,00"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg "
              label-class="text-lg"
              message-class="ml-2 text-error text-xs"
              validation="required "
              :validation-messages="{
                required: 'Precisa estar nesse formato, ex. R$ 100,00',
              }"
            />
          </FormKit>
        </div>

        <div class="flex flex-row justify-center" v-show="step == 3">
          <FormKit type="group" name="date">
            <!-- Step selecionar data e hora -->
            <FormKit
              type="select"
              label="Selecionar uma data"
              placeholder="Selecionar"
              outer-class="m-5"
              input-class="input input-bordered rounded-md text-lg"
              label-class="text-lg"
              :options="['05/09/2022']"
              validation="required"
              message-class="ml-2 text-error text-xs"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
            <FormKit
              label="Selecione os horários:"
              type="select"
              input-class="input input-bordered rounded-md text-lg"
              wrapper-class="m-5 text-lg"
              :options="[
                '08:00-09:00',
                '09:00-10:00',
                '10:00-11:00',
                '11:00-12:00',
                '12:00-13:00',
                '13:00-14:00',
                '14:00-15:00',
                '15:00-16:00',
                '16:00-17:00',
                '17:00-18:00',
                '18:00-19:00',
                '19:00-20:00',
                '20:00-21:00',
                '21:00-22:00',
              ]"
              validation="required"
              message-class="ml-2 text-error text-xs"
              :validation-messages="{
                required: 'O campo está vazio',
              }"
            />
          </FormKit>
        </div>

        <div class="flex flex-row justify-center" v-show="step == 4">
          <FormKit type="group" name="payment">
            <!-- Step forma de pagamento -->
            <FormKit
              type="file"
              label="Enviar as fotos das quadras ou campos"
              accept=".jpg,.jpeg,.png,"
              multiple
              :value="[{ name: '' }]"
              outer-class="m-5"
              input-class="flex input input-bordered rounded-md text-lg"
              label-class="text-lg"
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
