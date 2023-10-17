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
                      `Edit this Transaction by ${userprofile.details.firstname} ${userprofile.details.lastname}`
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
                    <input :placeholder="`Amount`" v-model="amount" />
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
                    <input :placeholder="`Type`" v-model="type" />
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
                  <label class="smlabel capitalize">Status</label>
                  <label
                    class="smlabel tinylabel fontweight-5"
                    :class="{
                      fonterror: authError === 'this input should contain just numbers',
                    }"
                  >
                  </label>
                  <div class="input">
                    <input :placeholder="`Status`" v-model="status" />
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
                  <button class="button orange-btn fontweight-3 half-flex-space">
                    Update
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
    };
  },
  mixins: [global],
  computed: {
    userid() {
      return this.$route.params.edit;
    },
  },
  mounted() {
    this.getuser(this.userid);
  },
};
</script>
