<template>
  <div
    class="modal modal-intro modal-login"
    style="max-width: 735px"
    @click="(event) => event.stopPropagation()"
  >
    <div class="modal-container">
      <button class="modal-btn-close" @click="$store.commit('closeModal')">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="modal-intro-intro">
        <p>Leading Crypto Casino</p>
      </div>
      <div class="modal-intro-content">
        <div class="modal-login-head">
          <button
            type="button"
            size="sm"
            :class="
              $store.state.isLoginButtonToggled
                ? 'button-tab active button-tab-sm button-tab-blue'
                : 'button-tab button-tab-sm button-tab-blue'
            "
            @click="loginSignUpToggleHandler"
          >
            <span>{{ $t("login") }}</span>
          </button>
          <button
            type="button"
            size="sm"
            :class="
              $store.state.isLoginButtonToggled
                ? 'button-tab button-tab-sm button-tab-blue'
                : 'button-tab active button-tab-sm button-tab-blue'
            "
            @click="loginSignUpToggleHandler"
          >
            <span>{{ $t("signup") }}</span>
          </button>
        </div>
        <div class="modal-login-body">
          <form>
            <div class="modal-login-inputs">
              <div
                class="input input-md"
                type="email"
                placeholder="Enter your email"
                required="required"
              >
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon
                      icon="fa-solid fa-envelope"
                      color="#55657e"
                    />
                  </span>
                  <input
                    class="input-tag"
                    type="email"
                    placeholder="Enter your email"
                    required="required"
                    v-model="emailInput"
                    @keyup="getEmailLength"
                  />
                  <button
                    type="button"
                    :class="
                      emailLength > 0
                        ? 'input-btn-clear visible'
                        : 'input-btn-clear'
                    "
                    @click="clearEmail"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                </div>
              </div>
              <div
                class="input input-md"
                minlength="8"
                type="password"
                placeholder="Enter your password"
                required="required"
              >
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon
                      icon="fa-solid fa-lock"
                      color="#55657e"
                    />
                  </span>
                  <input
                    class="input-tag"
                    :type="isPasswordShown ? 'text' : 'password'"
                    placeholder="Enter your password"
                    minlength="8"
                    required="required"
                    v-model="pwdInput"
                    @keyup="getPwdLength"
                  />
                  <button
                    type="button"
                    :class="
                      pwdLength > 0
                        ? 'input-btn-clear visible'
                        : 'input-btn-clear'
                    "
                    @click="clearPassword"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                  <button
                    type="button"
                    class="
                      button
                      button-sm
                      button-blue
                      button-center
                      button-only-icon
                    "
                    @click="passwordShownToggler"
                  >
                    <span class="button-inner">
                      <span class="button-icon">
                        <font-awesome-icon
                          :icon="
                            isPasswordShown
                              ? 'fa-solid fa-eye-slash'
                              : 'fa-solid fa-eye'
                          "
                        />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div
                :class="
                  $store.state.isLoginButtonToggled
                    ? 'input input-md hidden'
                    : 'input input-md'
                "
                type="text"
                placeholder="Promo code (optional)"
              >
                <div class="input-inner input-inner-light-icons">
                  <span class="input-icon">
                    <font-awesome-icon icon="fa-solid fa-tag" color="#55657e" />
                  </span>
                  <input
                    class="input-tag"
                    type="text"
                    placeholder="Promo code (optional)"
                    v-model="promoInput"
                    @keyup="getPromoLength"
                  />
                  <button
                    type="button"
                    :class="
                      promoLength > 0
                        ? 'input-btn-clear visible'
                        : 'input-btn-clear'
                    "
                    @click="clearPromoCode"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                  <button
                    type="button"
                    :class="
                      promoLength > 0
                        ? 'promoBtn button button-sm button-blue button-center visible'
                        : 'promoBtn button button-sm button-blue button-center'
                    "
                  >
                    <span class="button-inner">
                      <span class="button-text"> Apply </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              :class="
                $store.state.isLoginButtonToggled
                  ? 'modal-login-check-block hidden'
                  : 'modal-login-check-block'
              "
            >
              <label class="checkbox">
                <Checkbox
                  :is-checked="isConfirmTerm"
                  :is-term="true"
                  @check-term="isConfirmTerm = !isConfirmTerm"
                />
                <span>
                  <span>
                    I confirm that I am 18 years old and I have read the
                    <a target="_blank" href="#">Terms of Service</a>
                  </span>
                </span>
              </label>
              <span
                :class="isConfirmTerm ? 'hidden' : ''"
                style="color: red; font-size: 14px; font-weight: 500"
              >
                Please accept the terms of service</span
              >
              <label class="checkbox">
                <Checkbox :is-checked="true" :is-term="false" />
                <span><span>Receive Email Promos</span></span>
              </label>
            </div>
            <div
              :class="
                $store.state.isLoginButtonToggled
                  ? 'modal-login-captcha hidden'
                  : 'modal-login-captcha'
              "
            >
              <div class="captcha">
                <iframe
                  src="https://newassets.hcaptcha.com/captcha/v1/1f7dc62/static/hcaptcha.html#frame=checkbox&amp;id=0n4iipj2qq9&amp;host=betfury.io&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;sitekey=932977c7-788d-4846-94f2-dca52df9fb6f&amp;theme=dark"
                  title="widget containing checkbox for hCaptcha security challenge"
                  tabindex="0"
                  frameborder="0"
                  scrolling="no"
                  data-hcaptcha-widget-id="0n4iipj2qq9"
                  data-hcaptcha-response=""
                  style="width: 303px; height: 78px; overflow: hidden"
                ></iframe>
              </div>
            </div>
            <a
              :class="
                $store.state.isLoginButtonToggled
                  ? 'forgot-pwd'
                  : 'forgot-pwd hidden'
              "
              @click="showForgotModal"
            >
              Forgot your password?
            </a>
            <button
              type="button"
              class="
                button
                button-lg
                button-blue
                button-center
                button-fullwidth
                button-submit
              "
              @click="onLogin"
            >
              <span class="button-inner">
                <span class="button-text">{{
                  $store.state.isLoginButtonToggled ? $t("login") : $t("signup")
                }}</span>
              </span>
            </button>
          </form>
          <div class="login-variants">
            <span class="login-variants-label"
              >Or
              {{ $store.state.isLoginButtonToggled ? "Login" : "Sign Up" }}
              with</span
            >
            <div class="login-variants-row">
              <div class="variant">
                <div class="variant-tooltip">Telegram</div>
                <button class="variant-btn bg-telegram">
                  <img
                    src="../../assets/images/login-signup/telegram-plane.svg"
                    alt="telegram icon"
                  />
                </button>
              </div>
              <div class="variant">
                <div class="variant-tooltip">Gmail</div>
                <button class="variant-btn bg-gmail">
                  <img
                    src="../../assets/images/login-signup/google.png"
                    alt="google icon"
                  />
                </button>
              </div>
              <div class="variant">
                <div class="variant-tooltip">TronWallet</div>
                <button class="variant-btn bg-tron">
                  <img
                    src="../../assets/images/login-signup/tron-wallet.svg"
                    alt="tron wallet icon"
                  />
                </button>
              </div>
              <div class="variant">
                <div class="variant-tooltip">MetaMask</div>
                <button class="variant-btn bg-metamask">
                  <img
                    src="../../assets/images/login-signup/metamask.png"
                    alt="meta mask icon"
                  />
                </button>
              </div>
              <div class="variant">
                <div class="variant-tooltip">Binance Chain</div>
                <button class="variant-btn bg-binance">
                  <img
                    src="../../assets/images/login-signup/binance_chain.svg"
                    alt="binance chain icon"
                  />
                </button>
              </div>
              <div class="variant">
                <div class="variant-tooltip">Coin 98</div>
                <button class="variant-btn bg-coin98">
                  <img
                    src="../../assets/images/login-signup/coin98.png"
                    alt="binance chain icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <p
            :class="$store.state.isLoginButtonToggled ? 'hint' : 'hint hidden'"
          >
            By accessing the site, I confirm that I am 18 years old and I have
            read the
            <a target="_blank" href="#"> terms of service </a>
          </p>
        </div>
        <div class="modal-login-footer">
          <p>
            {{
              $store.state.isLoginButtonToggled
                ? "Don't you have an account"
                : "Do you have an account"
            }}
            <button @click="loginSignUpToggleHandler">
              {{
                $store.state.isLoginButtonToggled ? $t("signup") : $t("login")
              }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../checkbox/index.vue";
import ForgotPassword from "../forgotPassword/index.vue";
import userinfo from "../../fakedata/userdb";
import WalletModal from "../walletModal/index.vue";

export default {
  name: "loginModal",
  components: { Checkbox, ForgotPassword, WalletModal },
  data() {
    return {
      isPasswordShown: false,
      isConfirmTerm: false,
      emailInput: "",
      emailLength: 0,
      pwdInput: "",
      pwdLength: 0,
      promoInput: "",
      promoLength: 0,
    };
  },
  methods: {
    loginSignUpToggleHandler: function () {
      this.$store.commit("loginSignUpToggleHandler");
    },
    passwordShownToggler: function () {
      this.isPasswordShown = !this.isPasswordShown;
    },
    getEmailLength: function () {
      this.emailLength = this.emailInput.length;
    },
    clearEmail: function () {
      this.emailInput = "";
      this.emailLength = 0;
    },
    getPwdLength: function () {
      this.pwdLength = this.pwdInput.length;
    },
    clearPassword: function () {
      this.pwdInput = "";
      this.pwdLength = 0;
    },
    getPromoLength: function () {
      this.promoLength = this.promoInput.length;
    },
    clearPromoCode: function () {
      this.promoInput = "";
      this.promoLength = 0;
    },
    showForgotModal: function () {
      this.$store.commit("showForgotModal");
    },
    async onLogin() {
      const response = await this.$api.auth.login(
        this.emailInput,
        this.pwdInput
      );
      if (response) {
        this.$store.commit("login");
        this.$store.commit("closeModal");
      }
    },
  },
};
</script>
