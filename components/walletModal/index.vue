<template>
  <div
    class="modal modal-depositwithdraw"
    style="max-width: 680px"
    @click="(event) => event.stopPropagation()"
  >
    <div class="modal-container">
      <button
        class="modal-btn-close"
        @click="
          {
            $store.commit('closeModal');
          }
        "
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="modal-depositwithdraw-tabs">
        <div class="tabs">
          <div class="tabs-body">
            <button
              type="button"
              class="button-tab active button-tab-md button-tab-blue"
            >
              <i><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /></i>
              <span> Deposit </span>
            </button>
            <button
              type="button"
              class="button-tab button-tab-md button-tab-blue"
            >
              <i><font-awesome-icon icon="fa-solid fa-circle-arrow-up" /></i>
              <span> Withdraw </span>
            </button>
            <button
              type="button"
              class="button-tab button-tab-md button-tab-blue"
            >
              <i>
                <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" />
              </i>
              <span> Swap Crypto </span>
            </button>
            <button
              type="button"
              class="button-tab button-tab-md button-tab-blue"
            >
              <i>
                <font-awesome-icon icon="fa-solid fa-address-book" />
              </i>
              <span> Address book </span>
            </button>
            <button
              type="button"
              class="button-tab button-tab-md button-tab-blue"
            >
              <i>
                <font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot" />
              </i>
              <span> Buy Crypto </span>
            </button>
            <button
              type="button"
              class="button-tab button-tab-md button-tab-blue"
            >
              <i>
                <font-awesome-icon icon="fa-solid fa-coins" />
              </i>
              <span> Send Tips </span>
            </button>
          </div>
          <div class="tabs-footer">
            <div class="warning">
              <p>You currently do not have 2FA enabled</p>
              <button
                type="button"
                class="
                  button button-md button-grey2 button-center button-fullwidth
                "
              >
                <span class="button-inner">
                  <span class="button-text">
                    <span>⚠️&nbsp;&nbsp;Enable 2FA</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-depositwithdraw-body">
        <div class="body">
          <h2 class="body-title">Deposit</h2>
          <div class="currencies">
            <div
              :class="[
                'dropdown modal-depositwithdraw-balances dropdown-lg dropdown-bottom',
                cryptoSelectOpened ? 'dropdown-opened' : '',
              ]"
            >
              <div class="dropdown-trigger" @click="toggleCryptoSelect">
                <div class="icon">
                  <img
                    :src="
                      require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].icon}`)
                    "
                    :alt="cryptos[currentCryptoIndex].name"
                  />
                </div>
                <span class="text">
                  {{ cryptos[currentCryptoIndex].full_name }}
                </span>
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  class="icon-arrow"
                />
              </div>
              <div class="dropdown-inner" style="width: 100%">
                <div class="dropdown-content">
                  <div class="input input-md" placeholder="Search">
                    <div class="input-inner">
                      <span class="input-icon">
                        <font-awesome-icon
                          icon="fa-solid fa-magnifying-glass"
                        />
                      </span>
                      <input
                        autocomplete="off"
                        placeholder="Search"
                        class="input-tag"
                        id="cryptoSearch"
                        @keyup="searchCrypto"
                      />
                      <button
                        type="button"
                        :class="
                          1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'
                        "
                      >
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                      </button>
                      <div class="input-btn-successful">
                        <font-awesome-icon icon="fa-solid fa-check" />
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-menu dropdown-menu-lg">
                    <ul
                      id="cryptoMenu"
                      class="dropdown-menu-inner dropdown-menu-inner-has-scroll"
                      style="max-height: 200px"
                    >
                      <li
                        class="dropdown-menu-item"
                        v-for="(crypto, index) in cryptos"
                        :key="index"
                        :value="crypto.name"
                      >
                        <button
                          :class="
                            currentCryptoIndex === index
                              ? 'dropdown-menu-link dropdown-menu-link-selected'
                              : 'dropdown-menu-link'
                          "
                          @click="selectCrypto(index)"
                        >
                          <span class="currency is-wallet">
                            <img
                              width="24"
                              height="24"
                              :src="
                                require(`@/assets/images/crypto-icon/${crypto.icon}`)
                              "
                              :alt="crypto.name"
                              class="currency-icon"
                            />
                            <span class="currency-label">{{
                              crypto.name
                            }}</span>
                            <div class="currency-balances">
                              <span
                                class="currency-balances-balance"
                                style="font-size: 14px"
                              >
                                <span style="color: #fff" class="font-digits">
                                  0<span style="color: #55657e">.00000000</span>
                                </span>
                              </span>
                            </div>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="[
                'dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth',
                currentNetworkIndex < 0 ? 'dropdown-is-error' : '',
                networkSelectOpened ? 'dropdown-opened' : '',
              ]"
              v-if="cryptos[currentCryptoIndex].networks.length > 0"
            >
              <div class="dropdown-trigger" @click="toggleNetworkSelect">
                <span class="text" v-if="currentNetworkIndex < 0">
                  Network
                </span>
                <template v-else>
                  <div class="icon">
                    <img
                      :src="
                        require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].networks[currentNetworkIndex].icon}`)
                      "
                      :alt="
                        cryptos[currentCryptoIndex].networks[
                          currentNetworkIndex
                        ].name
                      "
                    />
                  </div>
                  <span class="text">{{
                    cryptos[currentCryptoIndex].networks[currentNetworkIndex]
                      .name
                  }}</span>
                </template>
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  class="icon-arrow"
                />
              </div>
              <div class="dropdown-inner" style="width: 100%">
                <div class="dropdown-content">
                  <div class="dropdown-menu dropdown-menu-lg">
                    <ul class="dropdown-menu-inner" style="max-height: 200px">
                      <li
                        class="dropdown-menu-item"
                        v-for="(network, subIndex) in cryptos[
                          currentCryptoIndex
                        ].networks"
                        :key="subIndex"
                        :value="network.name"
                      >
                        <button
                          :class="
                            subIndex === currentNetworkIndex
                              ? 'dropdown-menu-link dropdown-menu-link-selected'
                              : 'dropdown-menu-link'
                          "
                          @click="selectNetwork(subIndex)"
                        >
                          <div class="icon">
                            <img
                              :src="
                                require(`@/assets/images/crypto-icon/${network.icon}`)
                              "
                              :alt="network.name"
                            />
                          </div>
                          <span class="text">{{ network.name }}</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="select-chain-overlay"
            v-if="
              currentNetworkIndex < 0 &&
              cryptos[currentCryptoIndex].networks.length > 0
            "
          >
            <span>To continue, select network</span>
          </div>
          <div class="tab tab-deposit">
            <div class="tab-body">
              <div class="tab-title-block">
                <h2 class="your-address-title">Your BTC deposit address</h2>
                <p class="dw-plain-text dw-plain-text-16">
                  This address accepts only <span>BTC</span> transferring here
                  any other coin or WBTC both TRC-20 and ERC-20 will result in
                  fund loss. Copy <span>BTC</span> address here:
                </p>
              </div>
              <div class="input dep-address input-md">
                <div class="input-inner input-inner-readonly">
                  <input
                    autocomplete="off"
                    readonly="readonly"
                    class="input-tag"
                    value="bc1q2j82hdcjdjgk6akqmghv9y6lx3lankjy9tpjss"
                  />
                  <button
                    type="button"
                    :class="
                      1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'
                    "
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
                  >
                    <span class="button-inner">
                      <span class="button-icon">
                        <font-awesome-icon icon="fa-solid fa-clone" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div class="qr-block">
                <div class="qr-texts">
                  <p class="dw-plain-text dw-plain-text-14 min-dep">
                    ⚠️ The minimum deposit amount <span>0.00005</span> BTC,
                    lower amount won't be credited or refunded.
                  </p>
                  <p class="dw-plain-text dw-plain-text-14">
                    BetFury doesn't have any fee for BTC deposits. Bitcoin
                    deposits may take some time related to the network hash
                    rate.
                  </p>
                </div>
                <canvas
                  id="canvas"
                  ref="canvas"
                  class="qr"
                  height="120"
                  width="120"
                  style="height: 120px; width: 120px"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cryptoCurrency from "../../fakedata/cryptoList";

export default {
  name: "walletModal",
  head() {
    return {
      script: [
        {
          hid: "QRCode",
          src: "https://jojotoo-static.oss-cn-shanghai.aliyuncs.com/resources/script/qrcode.min.js",
          defer: true,
          callback: () => {
            this.QRCodeModuleLoaded = true;
          },
        },
      ],
    };
  },
  data() {
    return {
      cryptoSelectOpened: false,
      networkSelectOpened: false,
      cryptos: cryptoCurrency.cryptoList,
      currentCryptoIndex: 0,
      currentNetworkIndex: -1,
      QRCodeModuleLoaded: false,
      url: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    toggleCryptoSelect: function () {
      this.cryptoSelectOpened = !this.cryptoSelectOpened;
    },
    toggleNetworkSelect: function () {
      this.networkSelectOpened = !this.networkSelectOpened;
    },
    selectNetwork: function (subIndex) {
      this.currentNetworkIndex = subIndex;
      this.networkSelectOpened = false;
    },
    selectCrypto: function (index) {
      this.currentCryptoIndex = index;
      this.cryptoSelectOpened = false;
      this.currentNetworkIndex = -1;
    },
    searchCrypto() {
      var searchInput, filter, menu, items, label, i;
      searchInput = document.getElementById("cryptoSearch");
      filter = searchInput.value.toUpperCase();
      menu = document.getElementById("cryptoMenu");
      items = menu.getElementsByTagName("li");
      for (i = 0; i < items.length; i++) {
        label = items[i].getElementsByClassName("currency-label")[0];
        if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
          items[i].style.display = "";
        } else {
          items[i].style.display = "none";
        }
      }
    },
    fetchData() {
      this.url = "bc1q2j82hdcjdjgk6akqmghv9y6lx3lankjy9tpjss";
      this.$watch(
        (vm) => [vm.url, vm.url, vm.$refs],
        (val) => {
          const [url, QRCodeModuleLoaded, holder] = val;
          if (url && QRCodeModuleLoaded && holder.canvas) {
            this.getQRCode();
          }
        },
        {
          immediate: true,
          deep: true,
        }
      );
    },
    async getQRCode() {
      const options = {
        width: 120,
        height: 120,
        errorCorrectionLevel: "L",
        type: "image/png",
        rendererOpts: {
          quality: 1,
        },
      };
      await QRCode.toCanvas(this.$refs.canvas, this.url, options);
    },
  },
};
</script>
