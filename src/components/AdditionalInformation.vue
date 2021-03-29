<template>
  <div class="additional-information">
    <p class="additional-information__text">
      Выбран пользователь <b>{{ showAdditionalInformation.userSelected }}</b>
    </p>
    <p class="additional-information__text">Описание:</p>
    <textarea
      v-model="showAdditionalInformation.description"
      class="additional-information__textarea"
    >
    </textarea>
    <p class="additional-information__text">
      Адрес проживания: <b>{{ showAdditionalInformation.streetAddress }}</b>
    </p>
    <p class="additional-information__text">
      Город: <b>{{ showAdditionalInformation.city }}</b>
    </p>
    <p class="additional-information__text">
      Провинция/штат: <b>{{ showAdditionalInformation.state }}</b>
    </p>
    <p class="additional-information__text">
      Индекс: <b>{{ showAdditionalInformation.zip }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: "AdditionalInformation",
  props: {
    showAdditionalInformation: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.additional-information {
  &__text {
  }

  &__textarea {
  }
}
</style>
