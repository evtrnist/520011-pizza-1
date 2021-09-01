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
      <router-link to="/cart">{{ totalPrice }}} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link class="header__login" to="/login" v-if="!user">
        <span>Войти</span>
      </router-link>

      <template v-if="user">
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
              :src="user.avatar"
              srcset="@/assets/img/users/user5@2x.jpg"
              :alt="user.name"
              width="32"
              height="32"
            />
          </picture>
          <span>{{ user.name }}</span>
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
  computed: {
    ...mapState({
      user: (state) => state.user,
      totalPrice: (state) => state.cart.totalPrice,
    }),
  },
};
</script>
