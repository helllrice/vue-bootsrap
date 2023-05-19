<template>
    <div class="user-profile">
        <div class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href=""
                    role="button"
                    aria-expanded="false"
                >
                      <div class="nav-img">
                          <img
                              src="../../assets/images/team/alex.jpg"
                              class="user-img"
                              alt=""
                          >
                      </div>
                </a>
            <ul class="dropdown-menu">
                <li>
                  <a
                      class="dropdown-item"
                      href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                     class="dropdown-item"
                     href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                    <router-link to="/settings">
                        <a
                            class="dropdown-item"
                            href="#"
                        >
                          Settings
                        </a>
                    </router-link>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <router-link
                      to="/"
                      class="dropdown-item"
                  >
                    log out
                  </router-link>
                </li>
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
    .nav-img {
        width: 40px;
        height: 40px;
    }

    .user-img {
        border-radius: 100px;
        width: 100%;
    }

    .dropdown-menu {
        margin-left: -160px;
        margin-top: 10px;
        font-size: 12px;
        width: 200px;
    }

</style>