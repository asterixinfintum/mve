<template>
  <div>
    <div class="dashboard overview">
      <AdminHeader />

      <div class="dashboard__content" v-if="userprofile">
        <div class="content-body">
          <div class="apply">
            <div class="apply__content">
              <div class="apply__form">
                <div class="overview__transaction--header bottom-margin">
                  <div class="overview__transaction--h2 header-label capitalize">
                    {{
                      `Create a transaction for ${userprofile.details.firstname} ${userprofile.details.lastname}`
                    }}
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel">Amount</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input
                      :placeholder="`Amount`"
                      v-model="amount"
                      @input="validateNumberAmount"
                    />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Type</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input
                      :placeholder="`'deposit', 'withdrawal', 'transfer'`"
                      v-model="type"
                    />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Country</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input :placeholder="`Country`" v-model="country" />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Bank</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input :placeholder="`Bank`" v-model="bank" />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Destination Account</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input :placeholder="`Account`" v-model="destinationaccount" />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Status</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input
                      :placeholder="`'success', 'pending', 'failed', 'in review'`"
                      v-model="status"
                    />
                  </div>
                </div>

                <div class="input-area">
                  <label class="smlabel capitalize">Date</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input :placeholder="`Date`" v-model="date" />
                  </div>
                </div>

                <div class="overview__withddep">
                  <button
                    class="button orange-btn fontweight-3 half-flex-space"
                    @click="createtransaction"
                  >
                    Create
                  </button>
                </div>
              </div>
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
      amount: "",
      type: "",
      status: "",
      date: "",
      country: "",
      bank: "",
      destinationaccount: "",
    };
  },
  mixins: [global],
  methods: {
    validateNumberAmount() {
      const { customSplitByDot, removePeriodAndCommas } = this;
      const formattedNumber = this.amount
        .replace(/[^1234567890.]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const characters = removePeriodAndCommas(customSplitByDot(formattedNumber));

      return (this.amount = characters);
    },
    createtransaction() {
      const { amount, type, status, date, country, bank, destinationaccount } = this;

      this.toggleverbiage(`Updating ${this.userprofile.details.firstname}'s profile`);
      this.onspinner();
      this.createusertransaction({
        amount,
        type,
        status,
        date,
        country,
        bank,
        destinationaccount,
        user: this.userid,
      }).then(() => {
        this.toggleverbiage(null);
        this.offspinner();
        this.toadminroute(`admin/dashboard/user/${this.userid}`);
      });
    },
  },
  computed: {
    userid() {
      return this.$route.query.user;
    },
  },
  mounted() {
    this.getuser(this.userid);
  },
};
</script>
