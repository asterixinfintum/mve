<template>
  <div>
    <div class="overview" @click="closedrops">
      <UserHeader
        :notifsbodstate="opennotificationsbody"
        :opennotifsbod="opennotifications"
        :openprofilebod="openprofiledrop"
        :profilebod="profilebody"
      />

      <div class="side-photo lowerz">
        <figure>
          <img src="@/assets/imgs/savingspagephoto.png" />
        </figure>
      </div>

      <div class="overview__content white-background content-body">
        <div class="padding-top-bottom"></div>
        <div class="overview__transaction--header">
          <div class="overview__transaction--h2 header-label">
            Start a savings plan
          </div>
        </div>

        <div class="padding-top-bottom"></div>

        <div class="popup-overlay lowerz" v-if="current">
          <div class="displaycard__applyform savings">
            <div class="overview__transaction--header">
              <div
                class="overview__transaction--h2 header-label displaycard__applyform--header"
              >
                Start {{ current.name }}
              </div>
            </div>
            <div class="padding-top-bottom"></div>

            <div class="displaycard__formbody">
              <div class="overview__transaction--header">
                <div
                  class="overview__transaction--h2 header-label displaycard__applyform--header fontweight-4 orange"
                >
                  Choose Savings plan
                </div>
              </div>

              <div class="displaycard__balance">
                <span class="balancelabel">Minimum balance required:</span>
                <span class="balance darkerblue" v-if="account"
                  >${{ formatNumber(current.minimumaccountbalance, 20) }}</span
                >
              </div>

              <div class="displaycard__balance">
                <span class="balancelabel">Your balance:</span>
                <span class="balance" v-if="account"
                  >${{ formatNumber(account.balance, 20) }}</span
                >
              </div>

              <div class="padding-top-bottom"></div>

              <div class="input-area">
                <label
                  class="smlabel"
                  :class="{
                    fonterror: inputerror,
                  }"
                  >Amount to begin with</label
                >
                <div class="input">
                  <input
                    placeholder="Amount"
                    v-model="amount"
                    @input="validateNumberInputTo"
                  />
                </div>
              </div>

              <div class="displaycard__amounts">
                <div class="displaycard__amount">
                  <div class="displaycard__amount--maximum">
                    <span class="label">minimum deposit:</span>
                    <span class="key orange"
                      >${{ formatNumber(current.minimumdeposit, 15) }}</span
                    >
                  </div>
                  <label>Tax</label>
                  <p class="displaycard__formslider--value">
                    ${{ formatNumber(tax, 30) }}
                  </p>
                </div>

                <div class="displaycard__amount">
                  <div class="displaycard__amount--maximum">
                    <span class="label">compounding:</span>
                    <span class="key darkerblue">{{
                      formatNumber(current.compoundingfrequency, 15)
                    }}</span>
                  </div>
                  <label>Total</label>
                  <p class="displaycard__formslider--value">
                    ${{ formatNumber(totaldeposit, 30) }}
                  </p>
                </div>
              </div>

              <div>
                <div class="padding-top-bottom"></div>
                <button
                  class="button curved tinylabel white orange-btn-faint"
                  v-if="!allowreview"
                >
                  Review
                </button>
                <button
                  class="button curved tinylabel white orange-btn"
                  @click="review"
                  v-if="allowreview"
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-reverse-column highz relativeposition halfscreen-width-2">
          <div
            v-for="{
              name,
              description,
              requirements,
              minimumaccountbalance,
              minimumdeposit,
              compoundingfrequency,
              contributionplan,
              term,
              _id,
            } in savingsplans"
          >
            <div v-if="compoundingfrequency">
              <SavingsItemCard
                :name="name"
                :description="description"
                :requirements="requirements"
                :minimumaccountbalance="minimumaccountbalance"
                :minimumdeposit="minimumdeposit"
                :compoundingfrequency="compoundingfrequency"
                :contributionplan="contributionplan"
                :term="term"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  data() {
    return {
      current: null,
      amount: 0,
      reviewchoice: false,
      submitting: false,
      submissiondone: false,
    };
  },
  mixins: [global],
  watch: {
    savingsplans(newval, oldval) {
      if (newval.length) {
        this.callsetcurrent(newval);
      }
    },
  },
  computed: {
    allowreview() {
      return false;
    },
    tax() {
      return '0'
    },
    totaldeposit() {
      return '0'
    }
  },
  mounted() {
    if (this.savingsplans.length) {
      this.callsetcurrent(this.savingsplans);
    }
  },
  methods: {
    validateNumberInputTo() {
      const { customSplitByDot, removePeriodAndCommas } = this;
      const formattedNumber = this.amount
        .replace(/[^1234567890.]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const characters = removePeriodAndCommas(customSplitByDot(formattedNumber));

      return (this.amount = characters);
    },
    callsetcurrent(arr) {
      const {
        name,
        description,
        requirements,
        minimumaccountbalance,
        minimumdeposit,
        compoundingfrequency,
        contributionplan,
        term,
        _id,
      } = arr[arr.length - 1];
      this.setcurrent({
        name,
        description,
        requirements,
        minimumaccountbalance,
        minimumdeposit,
        compoundingfrequency,
        contributionplan,
        term,
        _id,
      });
    },
    setcurrent({
      name,
      description,
      requirements,
      minimumaccountbalance,
      minimumdeposit,
      compoundingfrequency,
      contributionplan,
      term,
      _id,
    }) {
      this.current = {
        name,
        description,
        requirements,
        minimumaccountbalance,
        minimumdeposit,
        compoundingfrequency,
        contributionplan,
        term,
        _id,
      };
    },
  },
};
</script>
