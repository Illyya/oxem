import Vue from 'vue'
import Vuex from 'vuex'
import { tableDataQuery } from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataTable: [],
    sortingDirection: true,
  },

  getters: {
    dataTable: state => {
      return state.dataTable
    },
    filterDataTable: (state, getters) => inputSearchFilter => {
      let filteredTable = getters.dataTable.filter(el => Object
        .values(el)
        .slice(0, 5)
        .map(String)
        .some(value => value.toUpperCase().includes(inputSearchFilter))
      )

      return filteredTable;
    }
  },

  mutations: {
    addUser(state, addUser) {
      state.dataTable
        .unshift({ id: addUser.id, firstName: addUser.firstName, lastName: addUser.lastName, email: addUser.email, phone: addUser.phone, })
    },
    loadingTableData(state, dataTable) {
      state.dataTable = dataTable;
    },
    sortTable(state, sortParam) {
      state.sortingDirection = !state.sortingDirection;

      function removeExtraCharacters(value) {
        return value.toString().replace(/\D/gi, '');
      }

      if (sortParam === ('id') || sortParam === ('phone')) {

        if (state.sortingDirection) {
          state.dataTable.sort((a, b) => removeExtraCharacters(a[sortParam]) - removeExtraCharacters(b[sortParam]))
        } else {
          state.dataTable.sort((a, b) => removeExtraCharacters(b[sortParam]) - removeExtraCharacters(a[sortParam]))
        }
      } else {

        if (state.sortingDirection) {

          state.dataTable.sort(function (a, b) {
            const nameA = a[sortParam].toLowerCase(),
              nameB = b[sortParam].toLowerCase()
            if (nameA < nameB)
              return -1
            if (nameA > nameB)
              return 1
            return 0
          })
        } else {
          state.dataTable.sort(function (a, b) {
            const nameA = a[sortParam].toLowerCase(),
              nameB = b[sortParam].toLowerCase()
            if (nameA < nameB)
              return 1
            if (nameA > nameB)
              return -1
            return 0
          })
        }
      }

    },
  },

  actions: {
    async tableDataQuery({ commit }, amountOfInformation) {
      commit('loadingTableData', await tableDataQuery(amountOfInformation))
    }
  },

  modules: {
  }
})
