<template>
  <div class="pagination">
    <button
      :disabled="currentPage <= 1"
      @click="currentPageBack"
      class="pagination__button button button_pagination"
    >
      Назад
    </button>
    <button
      :disabled="!hasNextPage"
      @click="currentPageNext"
      class="pagination__button button button_pagination"
    >
      Вперед
    </button>
    <p class="pagination__text">Текущая страница: {{ currentPage }}</p>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    currentPage: {
      type: Number,
    },
    hasNextPage: {
      type: Boolean,
    },
  },
  methods: {
    currentPageBack() {
      this.$emit("currentPageBack");
    },
    currentPageNext() {
      this.$emit("currentPageNext");
    },
  },
};
</script>

<style lang="scss">
.pagination {
  text-align: center;

  &__button {
    &:first-of-type {
      margin-right: 20px;
    }
  }

  &__text {
  }
}
</style>
