<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        подробнее
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о работнике</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-item">
                        <ul>
                            <li>ФИО: Алексей Васильевич Павлов</li>
                            <li>Дата рождения: 28.04.2001</li>
                            <li>Пол: Муж.</li>
                            <li>Телефон: 8 (992) 111 11 11</li>
                            <li>Паспорт:
                                <span v-if="isElVisible">5621 121313</span>

                                <button @click="isElVisible = !isElVisible">Показать / скрыть</button>

                            </li>
                        </ul>
                    </div>
                    <div class="modal-item">
                        <img src="../../assets/images/team/team2.jpg" alt="">
                    </div>
                </div>
                <div class="modal-info">
                    <ul>
                        <li>Кол-во успешных работ: 20</li>
                        <li>Жалоб: 0</li>
                        <li>Статус: Занят</li>
                        <li>График: 8:00 - 16: 00</li>
                    </ul>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal-ui",
    data: () => {
        return {
            isElVisible: false
        }
    },
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

</style>