<template>


    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">
                                <i class="bi bi-speedometer2"></i> Dashboard
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link">
                                <i class="bi bi-basket2"></i> Products
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/orders" class="nav-link">
                                <i class="bi bi-receipt"></i> Orders
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Content -->
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
            </main>
        </div>
    </div>


</template>

<script>
export default {
    name: 'AdminPanel',
}
</script>

<style>
/* Custom styles for the admin panel */
</style>