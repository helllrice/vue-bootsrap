<template>
  <!-- Button trigger modal -->
    <button
        type="button"
        class="btn btn-primary btn-modal"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
    >
        подробнее
    </button>

  <!-- Modal -->
    <div
        class="modal fade"
        id="exampleModal"
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
                      Информация о заказе
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
                    <div class="modal-item">
                        <ul>
                            <li>id: 1.</li>
                            <li>Название заказа:
                              <a
                                  href="#"
                                  class="modal-link"
                              >
                                Полный клиннинг всего.
                              </a>
                            </li>
                            <li>Статус: Создан.</li>
                            <li>Цена: 10000 ₽.</li>
                          <br>
                            <li>
                              <div class="input-group mb-3">
                                <label
                                    class="input-group-text"
                                    for="inputGroupSelect01"
                                >
                                  Добавить новую услугу:
                                </label>
                                <select
                                    class="form-select"
                                    id="inputGroupSelect01"
                                >
                                  <option selected>выберете новую услугу</option>
                                  <option value="1">Помыть окна (200р)</option>
                                  <option value="2">Простая уборка дома (100р)</option>
                                  <option value="3">Химическая чистка (1000р)</option>
                                </select>
                              </div>
                            </li>
                          <br>
                          <li>
                            <div class="input-group mb-3">
                              <label
                                  class="input-group-text"
                                  for="inputGroupSelect01"
                              >
                                Выбрать Мастера:
                              </label>
                              <select
                                  class="form-select"
                                  id="inputGroupSelect01"
                              >
                                <option selected>Мастера</option>
                                <option value="1">Алексей Васильевич Павлов</option>
                                <option value="2">Алексей Васильевич Павлов</option>
                                <option value="3">Алексей Васильевич Павлов</option>
                              </select>
                            </div>
                          </li>
                          <br>
                          <li>
                            <p>выбрать время уборки</p>
                            <DatePicker />
                          </li>
                            <br>
                            <li>Все желания будут исполнены после звонка менеджеру или заполнения формы на сайте. Объем и виды работ согласовываются и выбирается время. Уборка частного дома может выполняться в дневное время, когда хозяин на работе. Необходимо только принять работу, а вечером наслаждаться порядком и чистотой. </li>
                        </ul>
                    </div>

                </div>

                <div class="modal-footer">
                  <button
                      type="button"
                      class="btn btn-primary btn-modal"
                      data-bs-dismiss="modal"
                  >
                    закрыть
                  </button>
                    <button
                        type="button"
                        class="btn btn-primary btn-modal"
                        data-bs-dismiss="modal"
                    >
                      Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from "@/pages/adminPage/Components/DatePicker.vue";

export default {
    name: "modal-order-admin-ui",
  components: {DatePicker},
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

.btn-modal {
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    background-color: #2faeab;
}

.btn-modal:hover {
    background-color: #FFE534;
}

.modal-link {
  color: #2faeab;
}

</style>