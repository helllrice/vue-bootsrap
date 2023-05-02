<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/logo-dark.png" alt="">
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

    <div class="container container-login">
        <div class="form">
            <form
                @submit.prevent="handleSubmit"
            >
                <h3>Login</h3>

                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="email"
                        placeholder="Email"
                    />
                </div>

                <div class="form-group">
                    <label>
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="Password"
                    />

                    <button class="btn btn-primary btn-block btn-log">Login</button>

                    <p class="forgot-password text-right">
                        <router-link to="forgot">
                            Forgot password?
                        </router-link>
                    </p>
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
    name: "login-form",
    components: {MyFooter},
    methods: {
        async handleSubmit() {
            const response = await axios.post('http://localhost:3000/login', {
                email: this.email,
                password: this.password
            })

            localStorage.setItem('token', response.data.accessToken);
            this.$router.push('/profile');
        }
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },

}
</script>

<style scoped>
.btn-log {
    margin-top: 15px;
    background-color: #38B6B5;
}

.container-login {
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
    color: #38B6B5;
}

.navbar-box {
    display: flex;
}

.navbar-item {
    margin-left: 10px;
    font-size: 20px;
}
</style>