<template>
  <div>
      <my-header-auth />

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
import MyHeaderAuth from "@/components/HeaderAuth.vue";


export default {
    name: "order-page",
    components: {MyHeaderAuth, MyDropdown, TableOrderUi, ModalUi, TableUi, MyFooter}
}
</script>

<style scoped>
.navbar-box {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
}

</style>