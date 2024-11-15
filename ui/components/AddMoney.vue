<template>
  <div class="popup-overlay" @click.stop="closeAddMoney">
    <div class="popup">
      <div>
        <div class="addmoney__buttons">
          <button
            @click.stop="toggleViewNetwork('erc20')"
            :class="{ current: viewNetwork === 'erc20' }"
          >
            Ethereum ERC20
          </button>
          <button
            @click.stop="toggleViewNetwork('trc20')"
            :class="{ current: viewNetwork === 'trc20' }"
          >
            Ethereum TRC20
          </button>
          <button
            @click.stop="toggleViewNetwork('btc')"
            :class="{ current: viewNetwork === 'btc' }"
          >
            Bitcoin
          </button>
        </div>
        <div class="addmoney" v-if="viewNetwork === 'erc20'">
          <h3 class="addmoney__h3">Account ERC20 Wallet</h3>
          <div class="addmoney__address" v-if="accountErcWallet">
            <p>{{ accountErcWallet }}</p>
            <span></span>
          </div>

          <div class="addmoney__copy">
            <button class="button" :class="{ buttonIsPulsing }" @click.stop="copyToClipboard">
              Copy Address
            </button>
          </div>
        </div>

        <div class="addmoney" v-if="viewNetwork === 'trc20'">
          <h3 class="addmoney__h3">Account TRC20 Wallet</h3>
          <div class="addmoney__address" v-if="accountTRC20Wallet">
            <p>{{ accountTRC20Wallet }}</p>
            <span></span>
          </div>

          <div class="addmoney__copy">
            <button class="button" :class="{ buttonIsPulsing }" @click.stop="copyToClipboard">
              Copy Address
            </button>
          </div>
        </div>

        <div class="addmoney" v-if="viewNetwork === 'btc'">
          <h3 class="addmoney__h3">Account BTC Wallet</h3>
          <div class="addmoney__address" v-if="accountBitcoinWallet">
            <p>{{ accountBitcoinWallet }}</p>
            <span></span>
          </div>

          <div class="addmoney__copy">
            <button class="button" :class="{ buttonIsPulsing }" @click.stop="copyToClipboard">
              Copy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "toggleAddMoney",
    "accountErcWallet",
    "accountTRC20Wallet",
    "accountBitcoinWallet",
    "closeAddMoney"
  ],
  data() {
    return {
      buttonIsPulsing: false,
      viewNetwork: "erc20",
    };
  },
  methods: {
    toggleViewNetwork(viewNetwork) {
      this.viewNetwork = viewNetwork;
    },
    copyToClipboard(event) {
      event.stopPropagation();

      this.buttonIsPulsing = true;
      setTimeout(() => {
        this.buttonIsPulsing = false;
      }, 500);

      const el = document.createElement("textarea");
      el.value = this.address;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>
