<template>
  <div>
    <div class="dashboard overview">
      <AdminHeader />

      <div class="dashboard__content halfscreen-width">
        <div class="overview__transaction--header bottom-margin">
          <div class="overview__transaction--h2 header-label capitalize">
            Create a loan item to display to {{ userid && userprofile ? userprofile.details.firstname : 'clients' }}
          </div>
        </div>

        <div class="input-area fullbody grid">
          <div class="input-area fullbody">
            <label class="smlabel">Name</label>
            <div class="input">
              <input
                placeholder="Choose what to name this loan"
                type="text"
                v-model="name"
              />
            </div>
          </div>

          <div class="input-area fullbody">
            <label class="smlabel">Minimum account balance</label>
            <div class="input">
              <input
                placeholder="Minimum account balance to be elligible"
                type="text"
                v-model="minimumaccountbalance"
              />
            </div>
          </div>
        </div>

        <div class="input-area fullbody">
          <label class="smlabel">Choose a percentage of repayment for this loan</label>
          <div class="input">
            <input
              type="text"
              placeholder="eg 0.4, 0.05, 1, 1.7 etc be accurate or it won't display"
              v-model="percentagepayment"
            />
          </div>
        </div>

        <div class="input-area fullbody">
          <label class="smlabel">Describe this loan</label>
          <div class="input">
            <textarea
              placeholder="description for this loan"
              v-model="description"
            ></textarea>
          </div>
        </div>

        <div class="input-area fullbody">
          <label class="smlabel">Requirement</label>
          <div class="input">
            <textarea
              placeholder="Requirement descriptions"
              v-model="requirement"
            ></textarea>
          </div>
        </div>

        <div class="input-area fullbody">
          <label class="smlabel">Requirements</label>
          <div class="input">
            <textarea
              placeholder="Requirements should be comma seperated"
              v-model="requirements"
            ></textarea>
          </div>
        </div>

        <div class="overview__withddep">
          <button
            class="button orange-btn fontweight-3 half-flex-space loanbtn curved"
            v-if="allowsubmit"
            @click="submit"
          >
            Submit
          </button>

          <button
            class="button orange-btn-faint fontweight-3 half-flex-space loanbtn curved"
            v-if="!allowsubmit"
          >
            Submit
          </button>
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
      name: "",
      minimumaccountbalance: "",
      percentagepayment: "",
      description: "",
      requirement: "",
      requirements: "",
      foruser: null
    };
  },
  mixins: [global],
  methods: {
    submit() {
      const {
        name,
        minimumaccountbalance,
        percentagepayment,
        description,
        requirement,
        requirements,
        foruser,
      } = this;

      const requirementsarray = requirements.split(", ");

      this.toggleverbiage(`Adding new loan item`);
      this.onspinner();

      this.createloanitem({
        name,
        minimumaccountbalance,
        percentagepayment,
        description,
        requirement,
        requirements: requirementsarray,
        foruser
      }).then(() => {
        this.toggleverbiage(null);
        this.offspinner();
        this.toadminroute(`admin/dashboard`);
      });
    },
  },
  computed: {
    userid() {
      let userid = this.$route.query.user;

      if (userid) {
        return userid;
      } else {
        return null;
      }
    },
    allowsubmit() {
      const {
        name,
        minimumaccountbalance,
        percentagepayment,
        description,
        requirement,
        requirements,
      } = this;

      if (
        name.length &&
        minimumaccountbalance.length &&
        percentagepayment.length &&
        description.length &&
        requirement.length &&
        requirements.length
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    if (this.userid) {
        this.foruser = this.userid;
        this.getuser(this.userid);
    }
  }
};
</script>
