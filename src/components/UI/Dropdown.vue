<template>
    <div class="user-profile">
        <div class="user-img">

        </div>
        <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                <img src="../../assets/images/team/team3.jpg" class="user-img" alt="">
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                    <router-link to="/settings">
                        <a class="dropdown-item" href="#">Settings</a>
                    </router-link>
                </li>
                <li><hr class="dropdown-divider"></li>

                <li><router-link to="/" class="dropdown-item">log out</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-dropdown"
}
</script>

<style scoped>
.user-img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    object-fit: cover;
    cursor: pointer;
}
</style>