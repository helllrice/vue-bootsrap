<template>
  <my-header />
  <my-banner />
  <my-feature />
  <my-about />
  <my-process />
  <my-pricing />
  <my-blog />
  <my-footer/>

</template>

<script>
import MyHeader from "@/components/Header.vue";
import CardUi from "@/components/UI/CardUi.vue";
import MyBanner from "@/components/Banner.vue";
import MyFeature from "@/components/Feature.vue";
import MyAbout from "@/components/About.vue";
import MyProcess from "@/components/Process.vue";
import MyTestimonial from "@/components/Testimonial.vue";
import MyPricing from "@/components/Pricing.vue";
import MyBlog from "@/components/Blog.vue";
import MyFooter from "@/components/Footer.vue";


export default {
    name: "my-main",
    components: {MyFooter, MyBlog, MyPricing, MyTestimonial, MyProcess, MyAbout, MyFeature, MyBanner, CardUi, MyHeader},


}
</script>

<style scoped>

</style>