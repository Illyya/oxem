<template>
  <div class="question-about-downloading-information">
    <button
      @click="tableDataQuery('small')"
      class="question-about-downloading-information__button"
    >
      Маленький объём информации
    </button>

    <button
      @click="tableDataQuery('big')"
      class="question-about-downloading-information__button"
    >
      Большой объём информации
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionAboutDownloadingInformation",
  methods: {
    tableDataQuery(amountOfInformation) {
      this.$emit("tableDataQuery", amountOfInformation);
    },
  },
};
</script>

<style lang="scss">
.question-about-downloading-information {
  
  &__button {
    
    &:first-of-type {
      margin-right: 20px;
    }
  }
}
</style>