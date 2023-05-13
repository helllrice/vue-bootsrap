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
        <div class="header-middle d-none d-md-block d-lg-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-xl-3">
                        <div class="logo d-none d-lg-block">
                            <router-link to="/">
                                <a href="">
                                    <img
                                            src="../assets/images/logo-dark.png"
                                            alt="Clenora"
                                            class="img-fluid" />
                                </a>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-9">
                        <div class="header-mid-info ">
                            <div class="header-info-single">
                                <div class="icon-box">
                                    <font-awesome-icon icon="fa-solid fa-clock" size="lg" style="color: #2faeab;"/>
                                </div>
                                <div class="text-box">
                                    <span>Working hours</span>
                                    <h5>MON-FRI:9.00-21.00</h5>
                                </div>
                            </div>

                            <div class="header-info-single">
                                <div class="icon-box">
                                    <font-awesome-icon icon="fa-solid fa-phone" size="lg" style="color: #2faeab;" />
                                </div>
                                <div class="text-box">
                                    <span>Hotline 24/7</span>
                                    <h5><a href="+0962-58-58-258">+0962-58-58-258</a></h5>
                                </div>
                            </div>

                            <div class="header-info-single">
                                <div class="icon-box">
                                    <font-awesome-icon icon="fa-solid fa-envelope" size="lg" style="color: #2faeab;"/>
                                </div>
                                <div class="text-box">
                                    <span>Email Us</span>
                                    <h5><a href="malito:support@clenora.com.uk">support@clenora.com.uk</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Middle End -->

        <!-- Main Menu Start -->
        <div class="site-navigation main_menu d-none d-lg-block ">
            <nav class="navbar navbar-expand-md">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>



                    <!-- Collapse -->
                    <div class="collapse navbar-collapse navbar-box" id="navbarMenu">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a href="#" class="nav-link">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <router-link to="/order">
                                    <a class="nav-link" href="#">
                                        Order<i class="fa fa-angle-down"></i>
                                    </a>
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/workers">
                                    <a href=""  class="nav-link">
                                        Workers
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item ">
                                <a href="#footer" class="nav-link">
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
                        <div class="header-register-btns">
                            <my-dropdown />
                        </div>
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

                    <!-- Collapse -->
                    <div class="collapse navbar-collapse" id="navbarMenu2">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <router-link to="/auth-main">
                                    <a href="" class="nav-link  ">
                                        Home
                                    </a>
                                </router-link>
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
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div> <!-- / .navbar-collapse -->
                </div> <!-- / .container -->
            </nav>
        </div>
        <!-- Main Menu End -->
    </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCirclePlay, faClock, faRss, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import MyDropdown from "@/components/UI/Dropdown.vue";


library.add(faTwitter, faFacebook, faInstagram, faRss, faCirclePlay, faClock, faPhone, faEnvelope)

export default {
    name: "my-header-auth",
    components: {MyDropdown, FontAwesomeIcon}
}
</script>

<style scoped>
/*====================
Banner Area
======================*/
.section-padding {
    padding: 130px 0px;
}

.page-header {
    padding: 100px 0px 100px;
    text-align: center;
    border-top: 1px solid #e0e0e0;
}

.page-header .page-header-content h2 {
    color: #999999;
    font-size: 60px;
    letter-spacing: -.25px;
}

.page-header .page-header-content h2 span {
    display: block;
    color: #259392;
}

.page-header-content ul {
    margin-top: 10px;
}

.page-header-content ul li {
    text-transform: uppercase;
}

.page-header-content ul li a {
    color: #666;
}

.page-header-content ul li a:hover {
    color: #ffe534;
}

.page-header-content ul li:last-child {
    color: #000;
}

.section-heading {
    text-align: center;
    margin-bottom: 90px;
}

.section-heading h2 {
    font-size: 60px;
    line-height: 60px;
    font-weight: 400;
    color: #999999;
    margin-bottom: 40px;
}

.section-heading h2 span {
    color: #259392;
    font-weight: 700;
    display: block;
}

.section-heading h3 {
    margin-bottom: 30px;
}

.text-color {
    color: #ffe534;
}

.text-color2 {
    color: #259392;
}

.pt-200 {
    padding-top: 200px !important;
}

.section-bottom {
    padding-bottom: 120px;
}

/*=======================
Header TopBar
============================*/
.header-top {
    border-bottom: 1px solid #ececec;
    padding: 10px 0px;
}

.header-top-info strong {
    color: #222;
    margin-right: 8px;
}

.header-top-socials a {
    color: #666666;
    margin-left: 15px;
}

/* ================
Header MIddle
================*/
.header-middle {
    padding: 15px 0px 20px;
}

.header-info-single {
    display: inline-block;
    margin-left: 106px;
}

.header-info-single .icon-box {
    float: left;
    margin-top: 12px;
}

.header-info-single .icon-box i {
    font-size: 22px;
    color: #259392;
}

.header-info-single .text-box {
    padding-left: 40px;
}

.header-info-single .text-box span {
    text-transform: uppercase;
    color: #666666;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .5px;
}

.header-info-single .text-box h5 {
    margin-top: -7px;
    color: #000;
}

.header-right-info .btn {
    border-radius: 0px;
}

/*-------------------
   MENU
----------------------*/
.navbar {
    padding: 0px;
}

.navbar-nav li.active a {
    color: #ffe534;
}

.navbar-nav .nav-link {
    padding-left: 0px !important;
    padding-right: 35px !important;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    color: #111;
}

.navbar-box {
    display: flex;
    justify-content: space-between;
}

.header-register-btns {
    display: flex;
}

.navbar-nav .nav-link:hover {
    color: #ffe534;
}

.navbar-nav .nav-link i {
    margin-left: 5px;
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    content: "";
    vertical-align: middle;
    background: no-repeat 50%;
    background-size: 100% 100%;
}

/*-------------------
  DROPDOWN MENU
----------------------*/
.dropdown-item {
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: background-color .1s;
    text-transform: capitalize;
    text-transform: uppercase;
}

.dropdown-item:last-child {
    border-color: transparent;
}

.dropdown-item:hover {
    color: #000000;
    text-decoration: none;
    background-color: #ffe534;
}

.dropdown-toggle::after {
    display: none;
}

.nav-item.dropdown .dropdown-menu {
    transition: all 300ms ease;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
    border: 0px;
    padding: 0px;
    position: absolute;
    border-top: 2px solid #ffe534;
    min-width: 220px;
}
</style>