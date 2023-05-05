<template>
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
        подробнее
    </button>

  <!-- Modal -->
    <div class="modal fade"
         id="exampleModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"
                        id="exampleModalLabel"
                    >Информация о Заказе
                    </h5>
                    <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                            <ul>
                                <li>Тариф: Название(ссылка в новом окне)</li>
                                <li>Цена:</li>
                                <li>Услуги: </li>
                                <li></li>
                                <li></li>
                            </ul>
                </div>

                <div class="modal-footer">
                    <button
                            type="button"
                            class="btn btn-primary btn-modal"
                            data-bs-dismiss="modal">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalOrderUi"
}
</script>

<style scoped>
  .btn-modal {
      background-color: #2faeab;
  }

  .btn-modal:hover {
      background-color: #ffe534;
  }
</style>