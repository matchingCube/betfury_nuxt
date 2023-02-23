<template>
  <div class="modals-container">
    <div
      v-show="$store.state.isLoginModal"
      class="modal-wrapper"
      @click="$store.commit('closeModal')"
    >
      <LoginModal />
    </div>
    <div
      v-show="$store.state.isForgotModalShown"
      class="modal-wrapper"
      @click="$store.commit('closeModal')"
    >
      <ForgotPassword />
    </div>
    <div
      v-show="$store.state.isWalletModal"
      class="modal-wrapper"
      @click="$store.commit('closeModal')"
    >
      <WalletModal />
    </div>
  </div>
</template>

<script>
import LoginModal from "../loginModal/index.vue";
export default {
  name: "modal",
  components: { LoginModal },
};
</script>