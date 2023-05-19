<template>
    <my-header-auth />
    <div class="container">
        <div class="table-wrap" >
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
                <tr v-for="order in orders">
                    <th scope="row">{{ order.id }}</th>
                    <td>{{ order.rate }}</td>
                    <td>{{ order.date }}</td>
                    <td>03.04.2023,  19:22</td>
                    <th>создан</th>
                    <th>
                      <modal-order-ui v-bind:orders="orders"/>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>

        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary btn-rate"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
        >
            Добавить уборку
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="exampleModalLabel"
                        >
                          Создание заявки
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-order">
                            <h5>Выберете тариф</h5>
                            <select
                                v-model="selected"
                                class="form-select"
                                aria-label="Default select example"
                            >
                                <option value>тарифы</option>
                                <option value="Помыть окна (500р)">Помыть окна (500р)</option>
                                <option value="Сделать полную уборку (1000р)">Сделать полную уборку (1000р)</option>
                                <option value="Полный клиннинг всего (10000р)">Полный клиннинг всего (10000р)</option>
                            </select>
                        </div>
                      <br>
                      <ul>
                        <li>
                          <li>
                            <div class="input-group mb-3">
                              <label
                                  class="input-group-text"
                                  for="inputGroupSelect01"
                              >
                                Выбрать Мастера:</label>
                              <select
                                  class="form-select"
                                  id="inputGroupSelect01">
                                <option selected>Мастера</option>
                                <option value="1">Алексей Васильевич Павлов</option>
                                <option value="2">Алексей Васильевич Павлов</option>
                                <option value="3">Алексей Васильевич Павлов</option>
                              </select>
                              <p>ознакомиться с нашими мастерами можно
                                <router-link to="/workers">
                                  <button
                                      class="modal-btn"
                                      data-bs-dismiss="modal"
                                  >
                                    тут
                                  </button>
                                </router-link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <p>выбрать время уборки</p>
                            <DatePicker />
                          </li>
                          <br>
                          <p>после создания заявки с вами свяжется наш менеджер для подтверждения услуги.</p>
                        </li>
                      </ul>

                    </div>
                    <div class="modal-footer">
                        <button
                            @click="createOrder"
                            type="button"
                            class="btn btn-secondary btn-rate"
                            data-bs-dismiss="modal"
                        >
                          Создать заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

        <my-footer />
</template>

<script>
import TableUi from "@/components/UI/TableUi.vue";
import MyHeader from "@/components/Header.vue";
import MyFooter from "@/components/Footer.vue";
import TableOrderUi from "@/components/UI/TableOrderUi.vue";
import MyDropdown from "@/components/UI/Dropdown.vue";
import ModalOrderUi from "@/components/UI/ModalOrderUi.vue";
import DatePicker from "@/pages/adminPage/Components/DatePicker.vue";
import MyHeaderAuth from "@/components/HeaderAuth.vue";

export default {
    name: "my-profile",
    components: {MyHeaderAuth, ModalOrderUi, MyDropdown, TableOrderUi, MyFooter, MyHeader, TableUi, DatePicker},
    data() {
        return {
            orders: [
                {id: 1, rate: 'помыть окна', price: 200, date: '03.04.2023, 19:22', status: 'создан',}
            ],
            selected: '',

        }
    },
    methods: {
        createOrder() {
            const newOrder = {
                id: this.orders.length + 1,
                rate: this.selected,
                date: new Date().toLocaleString(),
                status: 'создан',
                selected: this.selected
            }
            this.orders.push(newOrder)
        }
    }
}
</script>

<style scoped>
    .modal-btn {
        border: none;
        background-color: #fff;
      color: #2faeab;
    }

    .modal-order h5 {
        padding: 10px;
    }

     .btn-rate {
         margin: 10px;
         background-color: #2faeab;
     }

      .navbar-box {
          padding-top: 10px;
          display: flex;
          justify-content: space-between;
      }
</style>