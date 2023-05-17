<template>
    <div id="app">
        <div class="sidebar">
            <ul>
                <li>
                    <router-link to="/admin">
                        <font-awesome-icon icon="fa-solid fa-users" style="color: #008080;" />
                        <a class="admin-link" href=""> Пользователи</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-workers">
                        <font-awesome-icon icon="fa-solid fa-briefcase" style="color: #008080;" />
                        <a class="admin-link" href=""> Работники</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-orders">
                        <font-awesome-icon icon="fa-solid fa-clipboard" style="color: #008080;" />
                        <a class="admin-link" href="">
                              Заказы
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin-settings">
                        <font-awesome-icon icon="fa-solid fa-gear" style="color: #008080;" />
                        <a class="admin-link" href="">  Настройки</a>
                    </router-link>
                </li>
                <li></li>
            </ul>
        </div>

        <div class="main-content">
            <nav class="navbar">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div class="user-profile">
                    <p>jack jones</p>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" role="button" aria-expanded="false">
                            <div class="nav-img">
                                <img src="../../assets/images/team/alex.jpg" class="user-img" alt="">
                            </div>
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/" class="dropdown-item">log out</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="table-wrap">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Кол-во успешных заказов</th>
                        <th scope="col">Кол-во неуспешных заказов</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>wizardcatt@gmail.com</td>
                        <td>15</td>
                        <td>3</td>
                        <th>
                            <modal-admin-ui />
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>wizardcatt@gmail.com</td>
                        <td>15</td>
                        <td>3</td>
                        <th>
                            <modal-admin-ui />
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>wizardcatt@gmail.com</td>
                        <td>15</td>
                        <td>3</td>
                        <th>
                            <modal-admin-ui />
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>wizardcatt@gmail.com</td>
                        <td>15</td>
                        <td>3</td>
                        <th>
                            <modal-admin-ui />
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <my-footer />
        </div>
    </div>
</template>

<script>
import Sidebar from "@/pages/adminPage/AdminSettings.vue";
import MyDropdown from "@/components/UI/Dropdown.vue";
import ModalAdminUi from "@/pages/adminPage/Components/ModalAdminUi.vue";
import MyFooter from "@/components/Footer.vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faClipboard, faGear, faUsers, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faUsers, faGear, faClipboard, faBriefcase)

export default {
    name: 'AdminPanel',
    components: {MyFooter, ModalAdminUi, MyDropdown, Sidebar, FontAwesomeIcon},
}
</script>

<style scoped>
/* Custom styles for the admin panel */
#app {
    display: flex;
    height: 100vh;
}

.user-profile {
    display: flex;
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


ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

li {
    margin-left: 30px;
    padding: 10px;
    font-size: 20px;
}

.admin-link {
    color: #2faeab;
}
</style>