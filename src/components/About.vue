<template>
  <!-- ABout section start -->
    <section class="about-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2><span>The one-stop</span> Cleaning Service in your city</h2>
                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusan</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <div class="about-box mb-4 mb-lg-0">
                        <img src="../assets/images/about/about1.jpg" alt="" class="img-fluid">
                        <div class="about-header">
                            <h3>Residential <span>Cleaning</span></h3>
                            <h6>One Time / Recurring</h6>
                            <p>When you work with Clenora Cleaning you can cross a major choir off your list, cleaning
                                your home.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Kitchen</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Bathrooms</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Bedrooms</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Living Rooms</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Windows</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Extra Services</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Carpet</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Seasonal</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Move in/out</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Post construction</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Express</li>
                                </ul>
                            </div>
                        </div>
                        <a href="contact.html" class="btn btn-main btn-block">Get a free quote estimate</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="about-box">
                        <img src="../assets/images/about/about2.jpg" alt="" class="img-fluid">
                        <div class="about-header">
                            <h3>Commercial <span>Cleaning</span></h3>
                            <h6>One Time / Recurring</h6>
                            <p>In Clenora we use a wide variety of cleaning methods, chemicals, and equipment to
                                facilitate and expedite the cleaning process.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Office</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Shops</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Medical facilities</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Factories</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Restaurants</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Warehouses</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Airports</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Move in/out</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Government facilities</li>
                                    <li>
                                        <font-awesome-icon icon="fa-solid fa-check"
                                                           style="color: #8acc00;"/>
                                          Showrooms</li>
                                </ul>
                            </div>
                        </div>
                        <a href="contact.html" class="btn btn-main-tp btn-block">Get a free quote estimate</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  <!-- About section End -->
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


library.add(faCheck)

export default {
    name: "my-about"
}
</script>

<style scoped>

</style>