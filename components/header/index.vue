<template>
  <div class="header-box">
    <div class="container">
      <div class="header-content">
        <div class="header-left">
          <div class="logo-and-bar">
            <div class="logo-and-bar-content">
              <button @click="toggler">
                <font-awesome-icon icon="fa-solid fa-bars-staggered" />
              </button>
              <NuxtLink to="/">
                <img src="./../../assets/images/logo.svg" alt="logo" />
              </NuxtLink>
            </div>
          </div>
          <div
            :class="
              isGamingSelected
                ? 'header-left-btn gaming'
                : 'header-left-btn sport'
            "
          >
            <button class="gaming" @click="gaming">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-heart" size="1x" />
              </span>
              <span>Gaming</span>
            </button>
            <button class="sport" @click="sport">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-basketball" size="1x" />
              </span>
              <span>Sport</span>
            </button>
          </div>
        </div>
        <div class="header-right">
          <template v-if="$store.state.isLoggedIn">
            <div class="btn-container">
              <div class="dropdown balance-wrapper dropdown-lg dropdown-bottom">
                <div class="dropdown-trigger-custom">
                  <div>
                    <div class="balance">
                      <div class="balance-currency-wrap">
                        <span class="currency" font="16">
                          <img
                            width="24"
                            height="24"
                            src="../../assets/images/crypto-icon/bitcoin.svg"
                            alt="BTC"
                            class="currency-icon"
                          />
                          <div class="currency-balances">
                            <span
                              class="currency-balances-balance"
                              style="font-size: 14px"
                            >
                              <span style="color: #fff" class="font-digits">
                                0
                              </span>
                              <span style="color: #55657e"> .00000000 </span>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <font-awesome-icon
                    icon="fa-solid fa-angle-down"
                    class="icon-arrow"
                  />
                </div>
              </div>
              <button
                type="button"
                class="button btn-wallet button-lg button-red button-center"
                @click="$store.commit('showWalletModal')"
              >
                <span class="button-inner">
                  <span class="button-icon">
                    <font-awesome-icon icon="fa-solid fa-wallet" size="1x" />
                  </span>
                  <span class="button-text">Wallet</span>
                </span>
              </button>
              <div
                class="
                  dropdown
                  profile-wrapper
                  dropdown-lg dropdown-bottomRight
                "
              >
                <div class="dropdown-trigger-custom">
                  <div class="profile">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                      class="profile-arc"
                    >
                      <path
                        d="M 19.998806194792405 1.000000037504499 A 19 19 0 1 0 20 1"
                        fill="none"
                        stroke="#2a3546"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M 20 1 A 19 19 0 0 0 20 1"
                        fill="none"
                        stroke="#2ddc4b"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <div class="user profile-avatar">
                      <div
                        class="user-avatar"
                        style="width: 32px; height: 32px"
                      >
                        <div class="user-inner">
                          <picture>
                            <img
                              height="32"
                              width="32"
                              src="../../assets/images/avatar/avatar1.avif"
                              alt="avatar"
                              style="transform: translateX(0px)"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-angle-down"
                      class="icon-arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button @click="$store.commit('logout')">Log out</button>
          </template>
          <template v-else>
            <div class="btn-container no-logged">
              <button @click="loginFunc">{{ $t("login") }}</button>
              <button @click="signupFunc">{{ $t("signup") }}</button>
            </div>
          </template>
          <button
            id="notify-btn"
            class="notify-btn"
            v-if="$store.state.isLoggedIn"
          >
            <div class="notify-btn-inner">
              <font-awesome-icon icon="fa-solid fa-bell" />
              <div class="amount">23</div>
            </div>
          </button>
          <button class="chat-btn">
            <div class="chat-btn-inner">
              <font-awesome-icon icon="fa-solid fa-comment-dots" />
              <div class="amount" v-if="$store.state.isLoggedIn">
                <span>99+</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isGamingSelected: true,
    };
  },
  methods: {
    gaming: function () {
      this.isGamingSelected = true;
    },
    sport: function () {
      this.isGamingSelected = false;
    },
    toggler: function () {
      this.$store.commit("setSidebarToggle");
    },
    loginFunc: function () {
      this.$store.commit("showLoginModal");
    },
    signupFunc: function () {
      this.$store.commit("showSignupModal");
    },
  },
};
</script>
