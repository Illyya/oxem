<template>
  <table class="table">
    <thead class="table__thead">
      <tr class="table__tr">
        <th @click="sortTable('id')" class="table__th">id</th>
        <th @click="sortTable('firstName')" class="table__th">firstName</th>
        <th @click="sortTable('lastName')" class="table__th">lastName</th>
        <th @click="sortTable('email')" class="table__th">email</th>
        <th @click="sortTable('phone')" class="table__th">phone</th>
      </tr>
    </thead>

    <tbody class="table__tbody">
      <tr
        v-for="row in paginatedTable"
        :key="row.phone"
        @click="additionalInformation(row)"
        class="table__tr"
      >
        <td class="table__td">{{ row.id }}</td>
        <td class="table__td">{{ row.firstName }}</td>
        <td class="table__td">{{ row.lastName }}</td>
        <td class="table__td">{{ row.email }}</td>
        <td class="table__td">{{ row.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TheTable",
  props: {
    currentPage: {
      type: Number,
    },
    inputSearchFilter: {
      type: String,
    },
  },
  methods: {
    additionalInformation(row) {
      this.$emit("additionalInformation", row);
    },
    sortTable(sortParam) {
      this.$store.commit("sortTable", sortParam);
    },
  },
  computed: {
    startIndex() {
      return (this.currentPage - 1) * 50;
    },
    endIndex() {
      return this.currentPage * 50;
    },
    filteredTable() {
      return this.$store.getters.filterDataTable(this.inputSearchFilter);
    },
    paginatedTable() {
      return this.filteredTable.slice(this.startIndex, this.endIndex);
    }
  },
  watch: {
    filteredTable() {
      this.$emit("numberOfLinesVal", this.filteredTable.length);

      this.$emit("hasNextPageVal", this.filteredTable.length > this.endIndex);
    },
    currentPage() {
      this.$emit("hasNextPageVal", this.filteredTable.length > this.endIndex);
    }
  },
};
</script>

<style lang="scss">
.table {
  width: 700px;
  border-collapse: collapse;
  
  &__thead {
  }

  &__tr {
  }

  &__th {
    padding: 5px 10px;
    border: 1px solid gray;
    cursor: pointer;
    user-select: none;
  }

  &__tbody {
    .table__tr {
      cursor: pointer;
      transition: 0.2s ease-out;

      &:hover {
        background-color: antiquewhite;
      }
    }
  }

  &__td {
    padding: 5px 10px;
    border: 1px solid gray;
  }
}
</style>
