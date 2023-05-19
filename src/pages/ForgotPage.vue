<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <a
                class="navbar-brand"
                href="#"
            >
                <img
                    src="../assets/images/logo-dark.png"
                    alt=""
                >
            </a>
            <div class="navbar-box">
                <div class="navbar-item">
                    <router-link to="/register">
                        <a href="#">Sing Up</a>
                    </router-link>
                </div>
                <div class="navbar-item">
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container container-forgot">
        <div class="form">
            <form
                @submit.prevent="handleSubmit"
            >
                <h3>
                    Forgot Password
                </h3>

                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        placeholder="Email"
                    />
                </div>

                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary btn-forgot"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    submit
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
                                  успешно
                                </h5>
                            </div>
                            <div class="modal-body">
                                инструкция по сбросу пароля отправлена на ваш Email.
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                  закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>


    <my-footer />
</template>

<script>
import axios from "axios";
import MyFooter from "@/components/Footer.vue";

export default {
    name: "forgot-page",
    components: {MyFooter},
    data() {
        return {
            email: ''
        }
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post('http://localhost:3000/forgot', {
                email: this.email
            });

            console.log(response)
        }
    }
}
</script>

<style scoped>
.btn-forgot {
    margin-top: 15px;
}

.container-forgot {
    display: flex;
    justify-content: center;
}

.form {
    margin: 50px 0 50px 0;
    padding: 50px 100px 50px 100px;
    background-color: #cccccc;
    border-radius: 20px;
}

form h3 {
    color: #2faeab;
}

.navbar-box {
    display: flex;
}

.btn-forgot {
    background-color: #2faeab;
}

.navbar-item {
    margin-left: 10px;
    font-size: 20px;
}
</style>