<template>
  <div>
    <Header />
    <div class="main-body-box">
      <Sidebar />
      <div
        :class="
          $store.state.isSidebarToggled
            ? 'main-content-box'
            : 'main-content-box fluid'
        "
      >
        <div class="account-head">
          <h2>Account</h2>
        </div>
        <div class="account-tab">
          <NuxtLink to="/account">
            <img src="./../../assets/images/icon/icon-my-account.png" alt="" />
            <h4>My Account</h4>
          </NuxtLink>
          <NuxtLink to="/account?tab=transactions">
            <img
              src="./../../assets/images/icon/icon-transactions.png"
              alt=""
            />
            <h4>Transactions</h4>
          </NuxtLink>
          <NuxtLink to="/account?tab=game">
            <img
              src="./../../assets/images/icon/icon-game-history.png"
              alt=""
            />
            <h4>Game History</h4>
          </NuxtLink>
          <NuxtLink to="/account?tab=download">
            <img src="./../../assets/images/icon/download.png" alt="" />
            <h4>Sessions</h4>
          </NuxtLink>
        </div>
        <!-- account tab info -->
        <div
          :class="
            this.$route.query.tab === undefined
              ? 'account-part active'
              : 'account-part'
          "
        >
          <div class="account-tab-box">
            <div class="account-dashboard-card account-dash-card-1">
              <img
                src="./../../assets/images/dashboard-icon/sprite.png"
                alt=""
              />
              <div
                class="account-dashboard-card-right account-dash-card-right-1"
              >
                <h2>User3175069</h2>
                <NuxtLink to="/">Change</NuxtLink>
              </div>
            </div>
            <div class="account-dashboard-card adc-rank">
              <img src="./../../assets/images/dashboard-icon/rank.png" alt="" />
              <div class="account-dashboard-card-right adc-rank-right">
                <h4>My Rank : <span>Newcomer</span></h4>
                <div class="adc-progress-box">
                  <Progress :percentage="35" />
                  <img
                    src="./../../assets/images/dashboard-icon/gift.png"
                    alt=""
                  />
                </div>
                <NuxtLink to="/">View All Rank</NuxtLink>
              </div>
            </div>
            <div class="account-dashboard-card acb-box">
              <div class="acb-img-box">
                <img
                  src="./../../assets/images/dashboard-icon/cash-back-bg.png"
                  alt=""
                />
                <img
                  src="./../../assets/images/dashboard-icon/cash-back.png"
                  alt=""
                />
              </div>
              <div class="account-dashboard-card-right acb-rightacb-right">
                <h4>My Cashback:</h4>
                <div class="acb-right-content">
                  <h4>1%</h4>
                  <img
                    src="./../../assets/images/dashboard-icon/download.png"
                    alt=""
                  />
                  <h4>1%</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="account-update-box">
            <Emailcard />
            <Passwordcard />
            <Facard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/sidebar/index.vue";
import Progress from "../../components/progress/index.vue";
import Emailcard from "../../components/emailcard/index.vue";
import Facard from "../../components/facard/index.vue";

export default {
  name: "Account",
  components: { Sidebar, Progress, Emailcard, Emailcard, Facard },
  mounted() {
    console.log(this.$route.query.tab);
  },
};
</script>

<style lang="scss">
.account-head {
  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
  }
}

.account-tab {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: linear-gradient(180deg, rgba(28, 37, 50, 0), #1c2532);
  text-align: center;
  border-radius: 0 0 10px 10px;

  a {
    padding: 15px 25px;

    &.nuxt-link-exact-active {
      background: linear-gradient(
        180deg,
        rgba(34, 131, 246, 0),
        rgba(34, 131, 246, 0) 20%,
        rgba(34, 131, 246, 0.15) 60%,
        rgba(34, 131, 246, 0.4)
      );
      border-radius: 0 0 10px 10px;
    }

    img {
      height: 40px;
      width: 40px;
      object-fit: contain;
    }

    h4 {
      font-weight: 600;
      white-space: nowrap;
      color: #fff;
      padding-top: 10px;
    }
  }
}

// account tab info
.account-part {
  display: none;

  &.active {
    display: block;
  }
}
.account-tab-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  margin: 2rem 0;
  display: grid;
}

.account-dashboard-card {
  background-color: #161f2c;
  border-radius: 10px;
}

.account-dash-card-1 {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 20px;

  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
}
.account-dash-card-right-1 {
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 6px;
  }

  a {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    text-decoration: underline;
  }
}

.adc-rank {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;

  img {
    height: 80px;
    widows: 80px;
    object-fit: contain;
  }
}

.adc-rank-right {
  width: 100%;
  h4 {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    padding-bottom: 10px;

    span {
      color: #2ddc4b;
    }
  }
  a {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    text-decoration: underline;
    margin-top: 10px;
  }
}

.acb-box {
  padding: 10px;
}

.acb-box {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
}

.acb-img-box {
  position: relative;
  height: 100%;
  img {
    height: 90px;
    widows: 140px;
    position: absolute;

    &:first-of-type {
      height: 90px;
      transform: translateX(-10px);
    }
  }
}
.acb-right {
  padding: 20px 0 20px 100px;
}

.acb-right-content {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  h4 {
    font-size: 32px;
    font-weight: 700;
    color: #2ddc4b;

    &:last-of-type {
      color: #202a39;
    }
  }
}

.adc-progress-box {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 20px;
    width: 20px;
  }
}

.account-update-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
</style>
