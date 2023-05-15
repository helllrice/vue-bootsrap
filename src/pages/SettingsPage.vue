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
                                        profile
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/workers">
                                    <a href="" class="nav-link">
                                        workers
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link to="/order">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbar4" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        order<i class="fa fa-angle-down"></i>
                                    </a>
                                </router-link>
                            </li>
                        </ul>
                        <my-dropdown />
                    </div> <!-- / .navbar-collapse -->
                </div> <!-- / .container -->
            </nav>
        </div>
        <!-- Main Menu End -->

    </header>

    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a
                   @click="toggleElement"
                   class="nav-link active"
                   aria-current="page"
                   href="#"
                >Cмена пароля</a>
            </li>
            <li class="nav-item">
                <a
                    @click="toggleElement2"
                    class="nav-link"
                    href="#">Изменение Email</a>
            </li>
        </ul>

        <div class="form" v-if="isElVisible">
            <form
                @submit.prevent="handleSubmit"
            >
                <h4>
                    изменение пароля
                </h4>

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
        <div class="form" v-if="isElVisible2">
            <form
                @submit.prevent="handleSubmit"
            >
                <h4>
                    изменение Email
                </h4>

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
                    <input type="checkbox" id="scales" name="scales" checked>
                    <label for="scales" class="checkbox-email"> Получать дополнительную информацию на вам Email</label>
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

export default {
    name: "SettingsPage",
    components: {MyDropdown, TableOrderUi, MyFooter},
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