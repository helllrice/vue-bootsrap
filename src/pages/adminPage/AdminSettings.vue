<template>
    <div id="app">
        <div class="sidebar">
            <ul class="sidebar-menu">
                <li>
                    <router-link to="/admin">
                        <font-awesome-icon
                            icon="fa-solid fa-users"
                            style="color: #008080;"
                        />
                        <a
                            class="admin-link"
                            href=""
                        >
                          Пользователи
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-workers">
                        <font-awesome-icon
                            icon="fa-solid fa-briefcase"
                            style="color: #008080;"
                        />
                        <a
                            class="admin-link"
                            href=""
                        >
                          Работники
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-orders">
                        <font-awesome-icon
                            icon="fa-solid fa-clipboard"
                            style="color: #008080;"
                        />
                        <a
                            class="admin-link"
                            href=""
                        >
                            Заказы
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-settings">
                        <font-awesome-icon
                            icon="fa-solid fa-gear"
                            style="color: #008080;"
                        />
                        <a
                            class="admin-link"
                            href=""
                        >
                          Настройки
                        </a>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="main-content">
            <nav class="navbar">
                <form
                    class="d-flex"
                    role="search"
                >
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    >
                    <button
                        class="btn btn-outline-success"
                        type="submit"
                    >
                      Search
                    </button>
                </form>

                <div class="user-profile">
                    <p>jack jones</p>
                    <div class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href=""
                            role="button"
                            aria-expanded="false"
                        >
                            <div class="nav-img">
                                <img
                                    src="../../assets/images/team/alex.jpg"
                                    class="user-img"
                                    alt=""
                                >
                            </div>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                              <router-link
                                  to="/"
                                  class="dropdown-item"
                              >
                                log out
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
            <my-footer />
        </div>
    </div>


</template>

<script>
import MyDropdown from "@/components/UI/Dropdown.vue";
import ModalAdminUi from "@/pages/adminPage/Components/ModalAdminUi.vue";
import MyFooter from "@/components/Footer.vue";


export default {
    name: 'admin-orders',
    components: { MyFooter, ModalAdminUi, MyDropdown, },
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
/* Custom styles for the admin panel */
#app {
    display: flex;
    height: 100vh;
}

.nav-tabs {
    padding-top: 20px;
}

.user-profile {
    display: flex;
}

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

.nav-img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
}

.user-img {
    border-radius: 100px;
    width: 100%;
}

.dropdown-menu {
    margin-left: -160px;
    margin-top: 10px;
    width: 200px;

}

.dropdown-menu li {
    font-size: 12px;
    color: #2faeab;
}

.dropdown {
    width: 100px;
}

.sidebar {
    width: 250px;
    background-color: #f0f0f0;
}

.main-content {
    flex: 1;
    padding: 20px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.sidebar-menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.sidebar-menu li {
    margin-left: 30px;
    padding: 10px;
    font-size: 20px;
}

.admin-link {
    color: #2faeab;
}
</style>