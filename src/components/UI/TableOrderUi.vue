<template>
    <div class="table-wrap">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">название тарифа</th>
                <th scope="col">Дата и время начала исполнения</th>
                <th scope="col">Дата и время конец исполнения</th>
                <th scope="col">Статус</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Помыть окна(200р)</td>
                <td>03.04.23  19:22</td>
                <td>03.04.23  19:22</td>
                <th>Создан</th>
                <th>
                    <modal-order-ui />
                </th>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Помыть окна(200р)</td>
                <td>03.04.23  19:22</td>
                <td>03.04.23  19:22</td>
                <th>Исполняется</th>
                <th><modal-order-ui /></th>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Помыть окна(200р)</td>
                <td>03.04.23  19:22</td>
                <td>03.04.23  19:22</td>
                <th>Завершен</th>
                <th><modal-order-ui /></th>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Помыть окна(200р)</td>
                <td>03.04.23  19:22</td>
                <td>03.04.23  19:22</td>
                <th>Отменен</th>
                <th><modal-order-ui /></th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ModalUi from "@/components/UI/ModalUi.vue";
import ModalOrderUi from "@/components/UI/ModalOrderUi.vue";

export default {
    name: "tableOrder-ui",
    components: {ModalOrderUi, ModalUi}
}
</script>

<style scoped>

</style>