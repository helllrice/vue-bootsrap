<template>
  <!-- Feature section start -->
    <section class="feature">
        <div class="container">
            <div class="row feature-inner">
                <div class="col-lg-4 col-md-6">
                    <div class="feature-box mb-4 mb-lg-0">
                        <div class="feature-icon">
                            <font-awesome-icon icon="fa-solid fa-users" />
                        </div>
                        <div class="feature-text">
                            <h4>Commit Quality</h4>
                            <p>Our cleaners alway secure and profressional</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-box mb-4 mb-lg-0">
                        <div class="feature-icon">
                            <font-awesome-icon icon="fa-solid fa-sack-dollar" />
                        </div>
                        <div class="feature-text">
                            <h4>Affordable</h4>
                            <p>Help you save time and money for cleaning</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-box mb-4 mb-lg-0">
                        <div class="feature-icon">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="feature-text">
                            <h4>24/7 Support</h4>
                            <p>We always ready to support client 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!-- Feature section end -->
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faComments, faSackDollar, faUsers} from "@fortawesome/free-solid-svg-icons";


library.add(faUsers, faSackDollar, faComments)


export default {
    name: "my-feature"
}
</script>

<style scoped>

</style>