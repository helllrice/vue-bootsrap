<template>
    <my-header-auth />

    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a
                   @click="toggleElement"
                   class="nav-link active"
                   aria-current="page"
                   href="#"
                >
                  Cмена пароля
                </a>
            </li>
            <li class="nav-item">
                <a
                    @click="toggleElement2"
                    class="nav-link"
                    href="#"
                >
                  Изменение Email
                </a>
            </li>
        </ul>

        <div
            class="form"
            v-if="isElVisible"
        >
            <form
                @submit.prevent="handleSubmit"
            >
                <h4>изменение пароля</h4>
                <div class="form-group">
                    <label>Текущий пароль:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="password"
                        placeholder="Введите текущий пароль"
                    />
                </div>
                <div class="form-group">
                    <label>Новый пароль:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="password"
                        placeholder="Введите новый пароль"
                    />
                </div>
                <div class="form-group">
                    <label>Подтвердите новый пароль:</label>
                    <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="Подтвердите новый новый пароль"
                    />
                    <button class="btn btn-primary btn-block btn-reset">Сохранить изменения</button>

                </div>
            </form>
        </div>
        <div
            class="form"
            v-if="isElVisible2"
        >
            <form
                @submit.prevent="handleSubmit"
            >
                <h4>изменение Email</h4>
                <div class="form-group">
                    <label>Текущий Email:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="email"
                        placeholder="Введите текущий пароль"
                    />
                </div>
                <div class="form-group">
                    <label>Новый Email:</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="email"
                        placeholder="Введите новый пароль"
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        checked
                    >
                    <label
                        for="scales"
                        class="checkbox-email"
                    >
                      Получать дополнительную информацию на вам Email
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block btn-reset">Сохранить изменения</button>
                </div>
            </form>
        </div>
    </div>
    <my-footer />
</template>

<script>
import MyFooter from "@/components/Footer.vue";
import TableOrderUi from "@/components/UI/TableOrderUi.vue";
import MyDropdown from "@/components/UI/Dropdown.vue";
import MyHeaderAuth from "@/components/HeaderAuth.vue";

export default {
    name: "SettingsPage",
    components: {MyHeaderAuth, MyDropdown, TableOrderUi, MyFooter},
    data: () => {
        return {
            isElVisible: true,
            isElVisible2: false
        }
    },
    methods: {
        toggleElement() {
            this.isElVisible = true
            this.isElVisible2 = false
        },
        toggleElement2() {
           this.isElVisible2 = true
            this.isElVisible = false
        }
    }
}
</script>

<style scoped>
    .checkbox-email {
        padding-top: 10px;
        padding-left: 10px;
    }

    .form {
        padding-top: 15px;
        display: flex;
        justify-content: center;
    }

    .form-group {
        width: 400px;
    }

    .btn-reset {
        padding: 10px;
        margin: 20px 0 20px 0;
        background-color: #2faeab;
    }

    .navbar-box {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .nav-link {
        color: #111111;
    }
</style>