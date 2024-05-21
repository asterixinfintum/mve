<template>
  <div class="documentdisplay" @click.stop="closedocs">
    <div class="documentdisplay__body">
      <div
        @click.stop="opendoc"
        class="documentdisplay__body--opendoc"
        v-for="file in files"
        :key="file._id"
      >
      <a :href="`${returnURL()}/${file.path}`" target="_blank"  rel="noopener noreferrer">{{ `${returnURL()}/${file.path}` }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  data() {
    return {
      files: [],
    };
  },
  props: ["userid", "closedocs"],
  mixins: [global],
  mounted() {
    this.getDocuments();
  },
  methods: {
    async getDocuments() {
      this.files = await this.getuserdocs(this.userid);
    },
    opendoc() {},
    returnURL() {
      function getCurrentPageDomain() {
        if (process.client) {
          // Check if the code is running on the client side
          const currentURL = window.location.href;
          const url = new URL(currentURL);
          return url.protocol + "//" + "api." + url.hostname;
        } else {
          // Handle server-side rendering (optional)
          return ""; // You can return a default value or handle it differently for SSR
        }
      }

      let BASE = getCurrentPageDomain();

      if (BASE.includes("localhost")) {
        BASE = `http://localhost:8081`;
      } else {
        BASE = getCurrentPageDomain();
      }

      return BASE;
    },
  },
};
</script>

<style lang="scss" scoped>
.documentdisplay {
  position: fixed;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #000;
  padding: 10rem;
  padding-top: 3rem;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: flex;
  justify-content: center;

  &__body {
    background: #fff;

    min-height: #{scaleValue(100)};
    width: #{scaleValue(900)};

    &--opendoc {
      color: $primary-orange;
      padding: #{scaleValue(20)};
      margin-bottom: #{scaleValue(20)};
      cursor: pointer;
    }
  }
}
</style>
