<template>
  <div class="popup-overlay">
    <div class="addnotification popup">
      <div class="apply relativeposition">
        <span class="sidex" @click="togglenotform">
          <svg class="feature__icon">
            <use xlink:href="@/assets/imgs/sprite.svg#icon-x-altx-alt"></use>
          </svg>
        </span>
        <div class="apply__content">
          <div class="apply__form" v-if="!general">
            <div class="overview__transaction--header bottom-margin">
              <div class="overview__transaction--h2 header-label capitalize">
                {{
                  `Add a Notification to ${userprofile.details.firstname} ${userprofile.details.lastname}'s Profile`
                }}
              </div>
            </div>

            <div class="input-area">
              <label class="smlabel">Notification Topic</label>
              <label
                class="smlabel tinylabel fontweight-5"
                :class="{
                  fonterror: authError === 'this input should contain just numbers',
                }"
              >
              </label>
              <div class="input">
                <input :placeholder="`Topic`" v-model="label" />
              </div>
            </div>

            <div class="input-area">
              <label class="smlabel">Notification Content</label>
              <label
                class="smlabel tinylabel fontweight-5"
                :class="{
                  fonterror: authError === 'this input should contain just numbers',
                }"
              >
              </label>
              <div class="input">
                <textarea :placeholder="`Content`" v-model="description"></textarea>
              </div>
            </div>

            <div class="overview__withddep">
              <button
                class="button orange-btn fontweight-3 half-flex-space curved"
                @click="callcreatenotification"
              >
                Add Notification
              </button>
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
  mixins: [global],
  props: ["user", "togglenotform"],
  data() {
    return {
      label: "",
      description: "",
    };
  },
  methods: {
    callcreatenotification() {
      const { label, description, userid } = this;

      const notification = {
        user: userid,
        label,
        description,
        type: "notification",
      };

      this.toggleverbiage("Creating notification");
      this.onspinner();
      this.createnotification(notification).then(() => {
        this.toggleverbiage(null);
        this.offspinner();

        if (this.user) {
          this.togglenotform();
          this.getusernotifications(this.user);
        }
      });
    },
  },
  computed: {
    userid() {
      return this.$route.params.user;
    },
  },
};
</script>
