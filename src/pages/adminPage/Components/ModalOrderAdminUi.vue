<template>
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
        подробнее
    </button>

  <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о заказе</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-item">
                        <ul>
                            <li>id: 1.</li>
                            <li>Название заказа: Полный клиннинг всего.</li>
                            <li>Статус: Создан.</li>
                            <li>Цена: 10000 ₽.</li>
                            <li>Дата и время начала исполнения: 03.04.2023, 19:22.</li>
                            <li>Дата и время конец исполнения: 03.04.2023, 19:22.</li>
                            <br>
                            <li>Все желания будут исполнены после звонка менеджеру или заполнения формы на сайте. Объем и виды работ согласовываются и выбирается время. Уборка частного дома может выполняться в дневное время, когда хозяин на работе. Необходимо только принять работу, а вечером наслаждаться порядком и чистотой. </li>
                        </ul>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-modal" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal-order-admin-ui",
}
</script>

<style scoped>
.modal-body {
    display: flex;
    justify-content: space-between;
}

.modal-item img {
    border-radius: 100px;
    width: 100px;
    height: 100px;
}

.modal-info {
    padding-left: 15px;
}

.btn-modal {
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    background-color: #2faeab;
}

.btn-modal:hover {
    background-color: #FFE534;
}

</style>