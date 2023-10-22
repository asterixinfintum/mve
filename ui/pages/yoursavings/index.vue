<template>
  <div>
    <div class="overview" @click="closedrops">
      <UserHeader
        :notifsbodstate="opennotificationsbody"
        :opennotifsbod="opennotifications"
        :openprofilebod="openprofiledrop"
        :profilebod="profilebody"
      />

      <div class="overview__content white-background content-body">
        <div class="padding-top-bottom"></div>
        <div class="overview__transaction--header">
          <div class="overview__transaction--h2 header-label">Your savings plans</div>
        </div>

        <div class="padding-top-bottom"></div>

        <div class="flex-reverse-column relativeposition halfscreen-width-2">
          <div
            class="displaycard__userlistcard displaycard__review"
            v-for="savingsplan in usersavingsplans"
          >
            <div class="displaycard__review--header">
              <div class="displaycard__review--headerleft">
                <figure class="displaycard__review--logo">
                  <img src="@/assets/imgs/logo-nobackground.png" />
                </figure>
                <p class="displaycard__review--now capitalize darkerblue">
                  ${{ formatNumber(savingsplan.usersaving.amount, 20) }}
                </p>
              </div>

              <div class="">
                <h2 class="displaycard__name loan">{{ savingsplan.savingsplanname }}</h2>
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
  mixins: [global],
};
</script>
