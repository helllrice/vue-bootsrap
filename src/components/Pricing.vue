<template>
    <section class="pricing section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2><span>Pricing & Plan</span>suit for any your space</h2>

                    </div>
                </div>
            </div>

            <div class="card-box">
                <card-ui/>
                <card-ui/>
                <card-ui/>
            </div>

        </div>
    </section>
</template>

<script>
import CardUi from "@/components/UI/CardUi.vue";

export default {
    name: "my-pricing",
    components: {CardUi}
}
</script>

<style scoped>
.card-box {
    padding-top: 50px;
    display: flex;
    justify-content: center;
}
</style>