<template>
  <div class="modalUserAddForm">
    <div
      @click="showModalUserAddForm"
      class="modalUserAddForm__backgroundUserAddForm"
    >
    </div>
    <form
      @submit.prevent="addUser"
      novalidate
      action="#"
      class="modalUserAddForm__userAddForm userAddForm"
    >
      <div
        class="userAddForm__form-group"
        :class="{ 'form-group--error': $v.userAddForm.id.$error }"
      >
        <label class="userAddForm__label">id</label>

        <input
          class="userAddForm__input"
          v-model.trim="$v.userAddForm.id.$model"
          placeholder="nubmers"
        />
      </div>
      <div class="error" v-if="!$v.userAddForm.id.numeric">Введите число</div>

      <div
        class="userAddForm__form-group"
        :class="{ 'form-group--error': $v.userAddForm.firstName.$error }"
      >
        <label class="userAddForm__label">firstName</label>

        <input
          class="userAddForm__input"
          v-model.trim="$v.userAddForm.firstName.$model"
          placeholder="letters"
        />
      </div>
      <div class="error" v-if="!$v.userAddForm.firstName.alpha">
        Введите латинские буквы
      </div>

      <div
        class="userAddForm__form-group"
        :class="{ 'form-group--error': $v.userAddForm.lastName.$error }"
      >
        <label class="userAddForm__label">lastName</label>

        <input
          class="userAddForm__input"
          v-model.trim="$v.userAddForm.lastName.$model"
          placeholder="letters"
        />
      </div>
      <div class="error" v-if="!$v.userAddForm.lastName.alpha">
        Введите латинские буквы
      </div>

      <div
        class="userAddForm__form-group"
        :class="{ 'form-group--error': $v.userAddForm.email.$error }"
      >
        <label class="userAddForm__label">email</label>

        <input
          class="userAddForm__input"
          v-model.trim="$v.userAddForm.email.$model"
          placeholder="###@##.##"
        />
      </div>
      <div class="error" v-if="!$v.userAddForm.email.email">
        Введите вашу почту
      </div>

      <div class="userAddForm__form-group">
        <label class="userAddForm__label">phone </label>

        <input-mask
          v-model.trim="$v.userAddForm.phone.$model"
          mask="(999)999-9999"
          maskChar="_"
          placeholder="(___)___-____"
          class="userAddForm__input"
        >
        </input-mask>
      </div>

      <button
        v-if="!this.$v.$invalid"
        class="userAddForm__button button_add-in-table"
      >
        Добавить в таблицу
      </button>
    </form>
  </div>
</template>

<script>
import { required, numeric, alpha, email } from "vuelidate/lib/validators";

export default {
  name: "ModalUserAddForm",
  data() {
    return {
      userAddForm: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    showModalUserAddForm() {
      this.$emit("showModalUserAddForm");
    },
    addUser() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        this.$store.commit("addUser", this.userAddForm);

        this.userAddForm = {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        };

        this.$v.$reset();
      }
    },
  },
  validations: {
    userAddForm: {
      id: {
        required,
        numeric,
      },
      firstName: {
        required,
        alpha,
      },
      lastName: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    },
  },
};
</script>

<style lang="scss">
.modalUserAddForm {
  &__backgroundUserAddForm {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(222, 184, 135, 0.157);
  }

  &__userAddForm {
    position: fixed;
  }
}

.userAddForm {
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  background-color: azure;

  &__form-group {
    padding: 10px 20px;
    display: flex;
  }

  &__label {
    margin-right: auto;
  }

  &__input {
  }

  &__button {
  }

  .form-group--error {
    border: 1px solid rgb(255, 85, 85);
  }
  .error {
    color: rgb(255, 85, 85);
  }
}
</style>
