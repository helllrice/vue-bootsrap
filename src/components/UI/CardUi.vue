<template>
  <div>
      <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">Генеральная уборка</h5>
              <p class="card-text">Генеральная уборка в жилых помещениях осуществяется бригатой специально обученных специалистов прошедших службу безопасности</p>
              <h3>от 70 руб / м2</h3>
              <router-link to="/profile">
                <button type="button" class="btn btn-warning btn-card">Заказать</button>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "CardUi"
}
</script>

<style scoped>
    .card {
        margin-left: 40px;
    }

    .btn-card {
        margin-top: 20px;
        background-color: #FFE534;
        border: none;
    }

    .btn-card:hover {
        background-color: #259392;
        color: #ffffff;
        transition: .2s;
    }
</style>