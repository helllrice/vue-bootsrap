<template>
  <div>
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
                                  <router-link to="/order">
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
                          <my-dropdown />
                      </div> <!-- / .navbar-collapse -->
                  </div> <!-- / .container -->
              </nav>
          </div>
          <!-- Main Menu End -->
      </header>

      <div class="container">
            <table-order-ui />
      </div>

      <my-footer />
  </div>
</template>

<script>
import MyFooter from "@/components/Footer.vue";
import TableUi from "@/components/UI/TableUi.vue";
import ModalUi from "@/components/UI/ModalUi.vue";
import TableOrderUi from "@/components/UI/TableOrderUi.vue";
import MyDropdown from "@/components/UI/Dropdown.vue";


export default {
    name: "order-page",
    components: {MyDropdown, TableOrderUi, ModalUi, TableUi, MyFooter}
}
</script>

<style scoped>
.navbar-box {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
}

.user-img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    object-fit: cover;
    cursor: pointer;
}
</style>