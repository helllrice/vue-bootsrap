<template>
    <div class="register-form">
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/logo-dark.png" alt="">
                </a>
                <div class="navbar-box">
                    <div class="navbar-item">
                        <a href="#">Sing Up</a>
                    </div>
                    <div class="navbar-item">
                        <router-link to="/login">
                            <a href="#">Login</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>


        <div class="container container-reg">
            <div class="form">
                <form @submit.prevent="handleSubmit">
                    <h3>Sing Up</h3>

                    <div class="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="first_name"
                            placeholder="First Name"/>
                    </div>

                    <div class="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="last_name"
                            placeholder="Last Name"/>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            placeholder="Email"/>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            placeholder="Password"/>
                    </div>

                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="password_confirm"
                            placeholder="Confirm Password"/>
                    </div>

                    <button class="btn btn-primary btn-block btn-reg">Sing Up</button>
                </form>
            </div>
        </div>
    </div>

    <my-footer />
</template>

<script>
import axios from "axios";
import MyFooter from "@/components/Footer.vue";
export default {
    name: "register-form",
    components: {MyFooter},
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    },
    methods: {
        async handleSubmit() {
             const response = await axios.post('http://localhost:3000/register', {
                 first_name: this.first_name,
                 last_name: this.last_name,
                 email: this.email,
                 password: this.password,
                 password_confirm: this.password_confirm

             });
            this.$router.push('/login');
            console.log(response)
        }

    }
}
</script>

<style scoped>
    .register-form {
        background-color: #ffffff;
    }

    .container-reg {
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

    .navbar-item {
        margin-left: 10px;
        font-size: 20px;
    }

    .btn-reg {
        background-color: #2faeab;
        margin-top: 15px;
    }
</style>