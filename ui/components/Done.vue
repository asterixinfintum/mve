<template>
  <div class="popup-overlay" v-if="donemsg">
    <div class="popup">
      <div>
        <div class="overview__transaction--header">
          <div class="overview__transaction--h2 header-label bottom-margin black">
            {{ donemsg }}
          </div>
        </div>

        <button class="button orange-btn fontweight-3 half-flex-space" @click="okay">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  mixins: [global],
  methods: {
    okay() {
      const { user } = this;
      this.setdonemsg(null);
      this.$router.push(`/overview/${user}`);
    },
  }
};
</script>
