<template>
  <div class="search">
    <input
      v-model="inputSearch"
      @keyup.enter="valueAssignmentSearch"
      type="text"
      class="search__input"
    />
    <button 
      @click="valueAssignmentSearch" 
      class="search__button button_search"
    >
      Найти
    </button>
  </div>
</template>

<script>
export default {
  name: "TheSearch",
  data() {
    return {
      inputSearch: "",
      inputSearchFilter: "",
    };
  },
  methods: {
    valueAssignmentSearch() {
      this.inputSearchFilter = this.inputSearch.trim().toUpperCase();

      this.$emit("valueAssignmentSearch", this.inputSearchFilter);
    },
  },
};
</script>

<style lang="scss">
.search {
  
  &__input {
    margin-right: 20px;
  }

  &__button {
  }
}
</style>
