<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Информация о пользоватееле</h5>
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
              <br>
              <li>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">Изменить Email</span>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping">
                </div>
              </li>
              <br>
              <li>
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01">Options</label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Статус</option>
                    <option value="1">Активирован</option>
                    <option value="2">Неактивирован</option>
                  </select>
                </div>
              </li>
              <li>
                <br>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">Изменить Пароль</span>
                  <input type="text" class="form-control" placeholder="Новый пароль" aria-label="password" aria-describedby="addon-wrapping">
                </div>
              </li>
              <br>
              <li>
                <h5>Заказы Пользователя</h5>
                <br>
                <div class="table-wrap" >
                  <table class="table table-striped">
                    <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">название заказа</th>
                      <th scope="col">Дата и время начала исполнения</th>
                      <th scope="col">Дата и время конец исполнения</th>
                      <th scope="col">Статус</th>
                      <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Полный клиннинг всего (10000р)</td>
                      <td>03.04.2023,  19:22</td>
                      <td>03.04.2023,  19:22</td>
                      <th>создан</th>
                      <th>
                        <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Подробнее</button>
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Полный клиннинг всего (10000р)</td>
                      <td>03.04.2023,  19:22</td>
                      <td>03.04.2023,  19:22</td>
                      <th>создан</th>
                      <th>
                        <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Подробнее</button>
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Полный клиннинг всего (10000р)</td>
                      <td>03.04.2023,  19:22</td>
                      <td>03.04.2023,  19:22</td>
                      <th>создан</th>
                      <th>
                        <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Подробнее</button>
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Полный клиннинг всего (10000р)</td>
                      <td>03.04.2023,  19:22</td>
                      <td>03.04.2023,  19:22</td>
                      <th>создан</th>
                      <th>
                        <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Подробнее</button>
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Полный клиннинг всего (10000р)</td>
                      <td>03.04.2023,  19:22</td>
                      <td>03.04.2023,  19:22</td>
                      <th>создан</th>
                      <th>
                        <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Подробнее</button>
                      </th>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-modal" data-bs-dismiss="modal">Закрыть</button>
          <button class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">информация о заказе Пользователя</h5>
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
          <button type="button" class="btn btn-secondary btn-modal" data-bs-dismiss="modal">Закрыть</button>
          <button class="btn btn-primary btn-modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Информация о пользователе</button>
        </div>
      </div>
    </div>
  </div>
  <a class="btn btn-primary btn-modal" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Подробнее</a>
</template>

<script>
import ModalOrderAdminUi from "@/pages/adminPage/Components/ModalOrderAdminUi.vue";
import DropdownButton from "@/components/UI/DropdownButton.vue";

export default {
    name: "modal-admin-ui",
  components: {DropdownButton, ModalOrderAdminUi},
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