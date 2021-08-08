<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="../assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">0 ₽</router-link>
    </div>
    <div class="header__user">
      <router-link class="header__login" to="/login" v-if="!isAuth">
        <span>Войти</span>
      </router-link>

      <!-- если авторизован -->
      <template v-if="isAuth">
        <router-link to="/profile">
          <picture>
            <source
              type="image/webp"
              srcset="
                @/assets/img/users/user5.webp    1x,
                @/assets/img/users/user5@2x.webp 2x
              "
            />
            <img
              src="@/assets/img/users/user5.jpg"
              srcset="@/assets/img/users/user5@2x.jpg"
              alt="Василий Ложкин"
              width="32"
              height="32"
            />
          </picture>
          <span>Василий Ложкин</span>
        </router-link>
        <router-link to="/" class="header__logout">
          <span>Выйти</span>
        </router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: {
    isAuth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
