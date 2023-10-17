<template>
  <div>
    <div class="overview">
      <UserHeader />

      <div class="white-background content-body" v-if="loan">
        <div class="apply">
          <div class="apply__content">
            <div class="apply__form">
              <div class="overview__transaction--header">
                <div class="overview__transaction--h2 header-label bottom-margin">
                  Apply for {{ loan.name }}
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
                  This input should contain just numbers
                </label>
                <div class="input">
                  <input placeholder="Amount" v-model="amount" />
                </div>
              </div>

              <div class="input-area">
                <label class="smlabel">When do you hope to repay this loan</label>
                <label
                  class="smlabel tinylabel fontweight-5"
                  :class="{
                    fonterror: authError === 'this input should contain just numbers',
                  }"
                >
                </label>
                <div class="input">
                  <input
                    placeholder="Potential repayment deadline in words"
                    v-model="deadline"
                  />
                </div>
              </div>

              <div class="input-area">
                <label class="smlabel">Reason for this loan</label>
                <div class="input">
                  <textarea
                    placeholder="Please give a detailed description for why you want this loan"
                    v-model="reason"
                  ></textarea>
                </div>
              </div>

              <div class="overview__withddep">
                <button
                  class="button orange-btn fontweight-3 half-flex-space"
                  v-if="allowapply"
                  @click="apply"
                >
                  Apply
                </button>
                <button
                  class="button orange-btn-faint fontweight-3 half-flex-space"
                  v-if="!allowapply"
                >
                  Apply
                </button>
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
      reason: "",
      deadline: "",
    };
  },
  mixins: [global],
  methods: {
    apply() {
      const { amount, reason, deadline } = this;

      const loan = {
        amount,
        reason,
        deadline,
        type: this.loan._id,
      };

      this.toggleverbiage("Processing");
      this.onspinner();
      this.applyforloan(loan)
        .then(() => {
          this.toggleverbiage(null);
          this.offspinner();
          this.setdonemsg(`Your loan request has been submitted`);
        })
        .catch((error) => {});
    },
  },
  computed: {
    allowapply() {
      const { amount, reason, deadline } = this;

      if (amount.length && reason.length && deadline.length) {
        return true;
      }

      return false;
    },
    loan() {
      const loanid = this.$route.params.loan;

      if (this.loans.length) {
        const loan = this.loans.find((loan) => loan._id === loanid);

        return loan;
      } else {
        return null;
      }
    },
  },
};
</script>
