<template>
    <header class="header">
        <!-- Header Top Start -->
        <div class="header-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="header-top-info text-center text-lg-left">
                            <i class="icofont-google-map"></i><strong> ADDRESS:</strong>568 Elizaberth Str, London, UK
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header-top-socials float-lg-right text-center ">
                            <a href="https://twitter.com"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="https://facebook.com"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                            <a href="https://instagram.com"><font-awesome-icon icon="fa-solid fa-rss" /></a>
                            <a href="https://www.feedspot.com"><font-awesome-icon icon="fa-solid fa-circle-play" /></a>
                            <a href="https://youtube.com/"><font-awesome-icon icon="fa-brands fa-instagram" size="lg"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Top End -->
        <!-- Header Middle Start -->
<!--        <div class="header-middle d-none d-md-block d-lg-block">-->
<!--            <div class="container">-->
<!--                <div class="row align-items-center">-->
<!--                    <div class="col-lg-4 col-xl-3">-->
<!--                        <div class="logo d-none d-lg-block">-->
<!--                            <a href="index.html"><img src="../assets/images/logo-dark.png" alt="Clenora"-->
<!--                                                      class="img-fluid"></a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-8 col-xl-9">-->
<!--                        <div class="header-mid-info ">-->
<!--                            <div class="header-info-single">-->
<!--                                <div class="icon-box">-->
<!--                                    <font-awesome-icon icon="fa-solid fa-clock" size="lg" style="color: #2faeab;"/>-->
<!--                                </div>-->
<!--                                <div class="text-box">-->
<!--                                    <span>Working hours</span>-->
<!--                                    <h5>MON-FRI:9.00-21.00</h5>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="header-info-single">-->
<!--                                <div class="icon-box">-->
<!--                                    <font-awesome-icon icon="fa-solid fa-phone" size="lg" style="color: #2faeab;" />-->
<!--                                </div>-->
<!--                                <div class="text-box">-->
<!--                                    <span>Hotline 24/7</span>-->
<!--                                    <h5><a href="+0962-58-58-258">+0962-58-58-258</a></h5>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="header-info-single">-->
<!--                                <div class="icon-box">-->
<!--                                    <font-awesome-icon icon="fa-solid fa-envelope" size="lg" style="color: #2faeab;"/>-->
<!--                                </div>-->
<!--                                <div class="text-box">-->
<!--                                    <span>Email Us</span>-->
<!--                                    <h5><a href="malito:support@clenora.com.uk">support@clenora.com.uk</a></h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <!-- Header Middle End -->

        <!-- Main Menu Start -->
        <div class="site-navigation main_menu d-none d-lg-block ">
            <nav class="navbar navbar-expand-md">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span>
                    </button>

                    <!-- Collapse -->
                    <div class="collapse navbar-collapse navbar-box" id="navbarMenu">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <router-link to="/auth-main">
                                    <a href="" class="nav-link">
                                        Home
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/profile">
                                    <a href="" class="nav-link">
                                        Order
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/workers">
                                    <a href="" class="nav-link">
                                        Workers
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item ">
                                <a href="contact.html" class="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbar4" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog<i class="fa fa-angle-down"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbar4">
                                    <a class="dropdown-item " href="blog.html">
                                        Blog
                                    </a>
                                    <a class="dropdown-item " href="blog-details.html">
                                        Blog Details
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <my-dropdown />
                    </div> <!-- / .navbar-collapse -->
                </div> <!-- / .container -->
            </nav>
        </div>
        <!-- Main Menu End -->

        <div class="site-navigation main_menu d-sm-block d-md-block d-lg-none d-md-none" id="mainmenu-area">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="../assets/images/logo-dark.png" alt="Clenora" class="img-fluid">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu2"
                            aria-controls="navbarMenu2" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icofont-navigation-menu"></span>
                    </button>

                    <!-- Collapse -->
                    <div class="collapse navbar-collapse user-navbar" id="navbarMenu2">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a href="index.html" class="nav-link  ">
                                    Home
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="service.html" class="nav-link  ">
                                    Services
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbar4" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Project<i class="fa fa-angle-down"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbar4">
                                    <a class="dropdown-item " href="project.html">
                                        Projects
                                    </a>
                                    <a class="dropdown-item " href="project-details.html">
                                        Project Details
                                    </a>
                                </div>
                            </li>

                            <li class="nav-item ">
                                <a href="about.html" class="nav-link  ">
                                    About
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbar4" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog<i class="fa fa-angle-down"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbar4">
                                    <a class="dropdown-item " href="blog.html">
                                        Blog
                                    </a>
                                    <a class="dropdown-item " href="blog-details.html">
                                        Blog Details
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item ">
                                <a href="contact.html" class="nav-link  ">
                                    coc
                                </a>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/workers">
                                    <a href="contact.html" class="nav-link  ">
                                        Workers
                                    </a>
                                </router-link>
                            </li>
                        </ul>
                    </div> <!-- / .navbar-collapse -->
                </div> <!-- / .container -->
            </nav>
        </div>
        <!-- Main Menu End -->
    </header>

    <div class="container">
        <div class="table-wrap" >
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">название тарифа</th>
                    <th scope="col">Дата и время начала исполнения</th>
                    <th scope="col">Дата и время конец исполнения</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders">
                    <th scope="row">{{ order.id }}</th>
                    <td>{{ order.rate }}</td>
                    <td>{{ order.date }}</td>
                    <td>03.04.2023,  19:22</td>
                    <th>создан</th>
                    <th><modal-order-ui v-bind:orders="orders"/></th>
                </tr>
                </tbody>
            </table>
        </div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-rate" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Добавить уборку
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Создание заявки</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-order">
                            <h5>Выберете тариф</h5>
                            <select  v-model="selected" class="form-select" aria-label="Default select example">
                                <option value>тарифы</option>
                                <option value="Помыть окна (500р)">Помыть окна (500р)</option>
                                <option value="Сделать полную уборку (1000р)">Сделать полную уборку (1000р)</option>
                                <option value="Полный клиннинг всего (10000р)">Полный клиннинг всего (10000р)</option>
                            </select>
                        </div>
                      <br>
                      <ul>
                        <li>
                          <li>
                            <div class="input-group mb-3">
                              <label class="input-group-text" for="inputGroupSelect01">Выбрать Мастера:</label>
                              <select class="form-select" id="inputGroupSelect01">
                                <option selected>Мастера</option>
                                <option value="1">Алексей Васильевич Павлов</option>
                                <option value="2">Алексей Васильевич Павлов</option>
                                <option value="3">Алексей Васильевич Павлов</option>
                              </select>
                              <p>ознакомиться с нашими мастерами можно
                                <router-link to="/workers">
                                  <button class="modal-btn" data-bs-dismiss="modal" >тут</button>
                                </router-link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <p>выбрать время уборки</p>
                            <DatePicker />
                          </li>
                          <br>
                          <p>после создания заявки с вами свяжется наш менеджер для подтверждения услуги.</p>
                        </li>
                      </ul>

                    </div>
                    <div class="modal-footer">
                        <button @click="createOrder" type="button" class="btn btn-secondary btn-rate" data-bs-dismiss="modal">Создать заявку</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

        <my-footer />
</template>

<script>
import TableUi from "@/components/UI/TableUi.vue";
import MyHeader from "@/components/Header.vue";
import MyFooter from "@/components/Footer.vue";
import TableOrderUi from "@/components/UI/TableOrderUi.vue";
import MyDropdown from "@/components/UI/Dropdown.vue";
import ModalOrderUi from "@/components/UI/ModalOrderUi.vue";
import DatePicker from "@/pages/adminPage/Components/DatePicker.vue";

export default {
    name: "my-profile",
    components: {ModalOrderUi, MyDropdown, TableOrderUi, MyFooter, MyHeader, TableUi, DatePicker},
    data() {
        return {
            orders: [
                {id: 1, rate: 'помыть окна', price: 200, date: '03.04.2023, 19:22', status: 'создан',}
            ],
            selected: '',

        }
    },
    methods: {
        createOrder() {
            const newOrder = {
                id: this.orders.length + 1,
                rate: this.selected,
                date: new Date().toLocaleString(),
                status: 'создан',
                selected: this.selected
            }
            this.orders.push(newOrder)
        }
    }
}
</script>

<style scoped>
    .modal-btn {
        border: none;
        background-color: #fff;
      color: #2faeab;
    }

    .modal-order h5 {
        padding: 10px;
    }

     .btn-rate {
         margin: 10px;
         background-color: #2faeab;
     }

      .navbar-box {
          padding-top: 10px;
          display: flex;
          justify-content: space-between;
      }
</style>