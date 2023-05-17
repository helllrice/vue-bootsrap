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
                    <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-item">
                        <ul>
                            <li>Всего заказов: 18</li>
                            <li>Кол-во успешных: 15</li>
                            <li>Кол-во неуспешных: 3</li>
                            <li>Всего завершенных заказов на сумму: 135989 ₽</li>
                            <li>Статус: Пользователь не заблокирован</li>
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
    name: "modal-admin-ui",
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