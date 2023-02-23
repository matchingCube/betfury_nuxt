export const state = () => ({
  // sidebar toggle state
  isSidebarToggled: true,
  isModal: false,
  isLoginModal: false,
  isLoginButtonToggled: true,
  isForgotModalShown: false,
  isLoggedIn: false,
  isWalletModal: false,
});

export const mutations = {
  // sidebar toggle handler
  setSidebarToggle(state) {
    return (state.isSidebarToggled = !state.isSidebarToggled);
  },
  showLoginModal(state) {
    state.isModal = true;
    state.isLoginModal = true;
    state.isLoginButtonToggled = true;
  },
  showSignupModal(state) {
    state.isModal = true;
    state.isLoginModal = true;
    state.isLoginButtonToggled = false;
  },
  showForgotModal(state) {
    return (state.isForgotModalShown = true);
  },
  showWalletModal(state) {
    state.isModal = true;
    state.isWalletModal = true;
  },
  loginSignUpToggleHandler(state) {
    return (state.isLoginButtonToggled = !state.isLoginButtonToggled);
  },
  closeModal(state) {
    state.isModal = false;
    state.isLoginModal = false;
    state.isForgotModalShown = false;
    state.isWalletModal = false;
  },
  closeLoginModal(state) {
    return (state.isLoginModal = false);
  },
  closeForgotModal(state) {
    return (state.isForgotModalShown = false);
  },
  closeWalletModal(state) {
    return (state.isWalletModal = false);
  },
  login(state) {
    return (state.isLoggedIn = true);
  },
  logout(state) {
    return (state.isLoggedIn = false);
  },
};
