<template>
  <!-- Process start -->
    <section class="process section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2>
                          <span>Easy steps </span>
                          to start with us
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="process-box">
                        <div class="process-icon">
                            <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                        </div>
                        <h3>Book Online Form</h3>
                        <p>Easy make an appointment onlinebr
                        <span> with a fews clicks</span>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="process-box">
                        <div class="process-icon">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </div>
                        <h3>Get Confirmation</h3>
                        <p>After complete your online form, our
                        <span>staff will contact you to confirm </span>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="process-box">
                        <div class="process-icon">
                            <font-awesome-icon icon="fa-solid fa-face-laugh" />
                        </div>
                        <h3>Let's Enjoy</h3>
                        <p>Enjoy cleanliness and the shine
                        <span> around you</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!-- Process ENd -->
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faClipboardList, faFaceLaugh, faPhone} from "@fortawesome/free-solid-svg-icons";


library.add(faFaceLaugh, faPhone, faClipboardList)

export default {
    name: "my-process"
}
</script>

<style scoped>

</style>