<template>
  <div>
    <Modal v-show="$store.state.isModal" />
    <Header />
    <div class="main-body-box">
      <Sidebar />
      <div
        :class="
          $store.state.isSidebarToggled
            ? 'main-content-box'
            : 'main-content-box fluid'
        "
      ></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar/index.vue";
import Header from "../components/header/index.vue";
import LoginModal from "../components/loginModal/index.vue";
import Account from "../pages/account/index.vue";
import Modal from "../components/modal/index.vue";

export default {
  name: "index",
  components: { Sidebar, Header, LoginModal, Account, Modal },
};
</script>
