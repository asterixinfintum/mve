<template>
  <div>
    <div class="overview">
      <UserHeader />

      <SidePopup
        :header="header"
        :text="text"
        :buttontext="buttontext"
        :current="currentloan"
        :type="'loan'"
        :btntext="'Apply'"
      />

      <div class="overview__content white-background content-body">
        <div class="overview__transaction--header">
          <div class="overview__transaction--h2 header-label">
            Apply for available loans and grants
          </div>
        </div>

        <div class="padding-top-bottom"></div>

        <div class="loans__body" v-for="{ name, requirement, description, _id } in loans">
          <div class="overview__savingsplan thick-border">
            <div class="overview__savingsplan--header alignup">
              <span class="overview__savingsplan--headersvg">
                <svg class="feature__icon">
                  <use xlink:href="@/assets/imgs/sprite.svg#icon-banknote"></use>
                </svg>
              </span>

              <div class="overview__savingsplan--headertext">
                <div class="flex-with-spacebetween">
                  <h3>{{ name }}</h3>
                </div>
                <label class="smlabel loan-text">
                  {{ requirement }}
                </label>

                <figure class="loan-img">
                  <img src="@/assets/imgs/hdassets/guyinglasses.png" />
                </figure>
              </div>
            </div>

            <div class="overview__withddep">
              <button
                class="button orange-btn fontweight-3 half-flex-space loanbtn curved"
                @click="setcurrent({ name, requirement, description, _id })"
              >
                Details
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
  data() {
    return {
      header: "",
      text: "",
      buttontext: "",
      currentloan: "",
    };
  },
  mixins: [global],
  watch: {
    loans(newval, oldval) {
      if (newval.length) {
        const { name, requirement, description, _id } = newval[0];
        this.setcurrent({ name, requirement, description, _id });
      }
    },
  },
  methods: {
    setcurrent({ name, requirement, description, _id }) {
      this.header = name;
      this.text = description;
      this.currentloan = _id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
