<template>
    <div class="container">
        <my-header />
        <div class="table-wrap">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Рабочий график</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Алексей Васильевич Павлов</td>
                    <td>8:00 - 16: 00</td>
                    <td>Свободен</td>
                    <th>
                        <modal-ui />
                    </th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Алексей Васильевич Павлов</td>
                    <td>8:00 - 16: 00</td>
                    <td>Свободен</td>
                    <th><modal-ui /></th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Алексей Васильевич Павлов</td>
                    <td>8:00 - 16: 00</td>
                    <td>Свободен</td>
                    <th>
                        <modal-ui />
                    </th>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Алексей Васильевич Павлов)</td>
                    <td>8:00 - 16: 00</td>
                    <td>Свободен</td>
                    <th>
                        <modal-ui />
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
        <my-footer />
    </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import ModalUi from "@/components/UI/ModalUi.vue";
import MyFooter from "@/components/Footer.vue";

export default {
    name: "Workers",
    components: {MyFooter, ModalUi, MyHeader}
}
</script>

<style scoped>
    .table-wrap {
        padding: 50px 0 50px 0;
    }
</style>