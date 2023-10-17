<template>
  <div>
    <div class="overview" @click="closedrops">
      <UserHeader
        :notifsbodstate="opennotificationsbody"
        :opennotifsbod="opennotifications"
        :openprofilebod="openprofiledrop"
        :profilebod="profilebody"
      />

      <div class="side-photo">
        <figure>
          <img src="@/assets/imgs/savingspagephoto.png" />
        </figure>
      </div>

      <div class="overview__content white-background content-body">
        <div class="overview__transaction--header">
          <div class="overview__transaction--h2 header-label">Join a savings plan</div>
        </div>

        <div class="padding-top-bottom"></div>

        <div
          class="loans__body"
          v-for="{ name, requirement, description, _id } in savingsplans"
        >
          <div class="overview__savingsplan overlaybackground">
            <div class="overview__savingsplan--header alignup">
              <span class="overview__savingsplan--headersvg">
                <svg class="feature__icon">
                  <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
                </svg>
              </span>

              <div class="overview__savingsplan--headertext">
                <div class="flex-with-spacebetween">
                  <h3 class="orange">{{ name }}</h3>
                  <span class="smlabel orange fontweight-5"></span>
                </div>
                <label class="smlabel white">{{ description }}</label>
              </div>
            </div>

            <div class="overview__withddep">
              <button class="button orange-btn fontweight-3 half-flex-space">
                Apply
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
};
</script>
