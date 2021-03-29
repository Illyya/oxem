<template>
  <div class="app">
    <ThePreloader 
      v-if="isVisiblePreloader" 
      class="app__preloader" 
    />

    <div class="app__top">
      <QuestionAboutDownloadingInformation
        @tableDataQuery="tableDataQuery"
        class="app__question-about-downloading-information"
      />

      <TheSearch
        @valueAssignmentSearch="valueAssignmentSearch"
        class="app__search"
      />

      <hr />

      <ThePagination
        :currentPage="currentPage"
        :hasNextPage="hasNextPage"
        @currentPageNext="currentPageNext"
        @currentPageBack="currentPageBack"
        class="app__pagination"
      />

      <hr />
      <p class="app__text">Количество юзеров:{{ numberOfLines }}</p>
      <hr />
    </div>

    <button 
      @click="showModalUserAddForm" 
      class="app__button button_add-row"
    >
      Добавить
    </button>

    <TheTable
      :currentPage="currentPage"
      :inputSearchFilter="inputSearchFilter"
      @hasNextPageVal="hasNextPageVal"
      @numberOfLinesVal="numberOfLinesVal"
      @additionalInformation="additionalInformation"
      class="app__table"
    />

    <AdditionalInformation
      v-if="showAdditionalInformation.userSelected"
      :showAdditionalInformation="showAdditionalInformation"
      class="app__additional-information"
    />

    <ModalUserAddForm
      v-if="isVisibleModalUserAddForm"
      @showModalUserAddForm="showModalUserAddForm"
      class="app__modalUserAddForm"
    />
  </div>
</template>

<script>
import ThePreloader from "./components/ThePreloader.vue";
import QuestionAboutDownloadingInformation from "./components/QuestionAboutDownloadingInformation.vue";
import TheSearch from "./components/TheSearch.vue";
import ThePagination from "./components/ThePagination.vue";
import TheTable from "./components/TheTable.vue";
import AdditionalInformation from "./components/AdditionalInformation.vue";
import ModalUserAddForm from "./components/ModalUserAddForm.vue";

export default {
  components: {
    ThePreloader,
    QuestionAboutDownloadingInformation,
    TheSearch,
    ThePagination,
    TheTable,
    AdditionalInformation,
    ModalUserAddForm,
  },
  name: "App",

  data() {
    return {
      inputSearchFilter: "",
      currentPage: 1,
      hasNextPage: true,
      numberOfLines: null,
      showAdditionalInformation: {
        userSelected: "",
        description: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
      },
      isVisibleModalUserAddForm: false,
      isVisiblePreloader: false,
    };
  },
  methods: {
    hasNextPageVal(hasNextPageVal) {
      this.hasNextPage = hasNextPageVal;
    },
    numberOfLinesVal(numberOfLinesVal) {
      this.numberOfLines = numberOfLinesVal;
    },
    currentPageNext() {
      this.currentPage++;
    },
    currentPageBack() {
      this.currentPage--;
    },
    tableDataQuery(amountOfInformation) {
      this.isVisiblePreloader = true;
      this.currentPage = 1;

      this.$store
        .dispatch("tableDataQuery", amountOfInformation)
        .then(() => (this.isVisiblePreloader = false));
    },
    showModalUserAddForm() {
      this.isVisibleModalUserAddForm = !this.isVisibleModalUserAddForm;
    },
    additionalInformation(row) {
      this.showAdditionalInformation.userSelected = `${row.firstName} ${row.lastName}`;
      this.showAdditionalInformation.description = row.description;
      this.showAdditionalInformation.streetAddress = row.address.streetAddress;
      this.showAdditionalInformation.city = row.address.city;
      this.showAdditionalInformation.state = row.address.state;
      this.showAdditionalInformation.zip = row.address.zip;
    },
    valueAssignmentSearch(inputSearchFilter) {
      this.inputSearchFilter = inputSearchFilter;
    },
  },
  watch: {
    inputSearchFilter() {
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__preloader {
  }

  &__question-about-downloading-information {
    margin-bottom: 20px;
  }
  &__top {
  }

  &__search {
    display: flex;
    justify-content: center;
  }

  &__pagination {
  }

  &__button {
  }

  &__text {
    text-align: center;
  }

  &__table {
  }
  &__additional-information {
  }

  &__modalUserAddForm {
  }
}

.button {
  &_search {
  }

  &_pagination {
  }

  &_add-row {
    margin-bottom: 10px;
  }

  &_add-in-table {
  }
}
</style>
