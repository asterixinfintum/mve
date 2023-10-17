<template>
  <div>
    <div class="userheader">
      <div class="userheader__logoarea">
        <figure>
          <img src="@/assets/imgs/logo.png" />
        </figure>
      </div>
      <div class="userheader__menu">
        <div v-if="msgpopupopen">
          <CreateMessageUser
            :header="'Contact support'"
            :openbtn="openmsgform"
            :closebtn="closemsgform"
          />
        </div>

        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('overview'),
          }"
          @click="toroute('overview')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-dashboard"></use>
            </svg>
          </span>
          <label>Overview</label>
        </div>
        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('transactions'),
          }"
          @click="toroute('transactions/all')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-clock"></use>
            </svg>
          </span>
          <label>Transactions</label>
        </div>

        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('loans'),
          }"
          @click="toroute('loans')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-banknote"></use>
            </svg>
          </span>
          <label>Loans</label>
        </div>

        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('accountstate'),
          }"
          @click="toroute('accountstate/statements')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-flow-merge"></use>
            </svg>
          </span>
          <label>Account Statements</label>
        </div>

        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('investmentplans'),
          }"
          @click="toroute('investmentplans')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-tree"></use>
            </svg>
          </span>
          <label>Investment plans</label>
        </div>

        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('savings'),
          }"
          @click="toroute('savings')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
            </svg>
          </span>
          <label>Savings</label>
        </div>
        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('support'),
          }"
          @click="openmsgform"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-message-circle"></use>
            </svg>
          </span>
          <label>Support</label>
        </div>
        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('profile'),
          }"
          @click="toroute('profile')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-account_circle"></use>
            </svg>
          </span>
          <label>Profile</label>
        </div>
        <div
          class="userheader__menuitem"
          :class="{
            current: currnt('security'),
          }"
          @click="toroute('security')"
        >
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-shield"></use>
            </svg>
          </span>
          <label>Security</label>
        </div>
      </div>
      <div class="userheader__userarea">
        <span class="cursorpointer relativeposition" @click.stop="opennotifsbod">
          <label class="notificationbubble" v-if="unreadclientnotifs.length">{{
            unreadclientnotifs.length
          }}</label>
          <svg class="feature__icon">
            <use xlink:href="@/assets/imgs/sprite.svg#icon-bell"></use>
          </svg>
          <div class="" v-if="notifsbodstate">
            <Notifications :dropdown="true" />
          </div>
        </span>
        <!--<span class="margin-left-thirty relativeposition cursorpointer">
          <label class="notificationbubble">6</label>
          <svg class="feature__icon">
            <use xlink:href="@/assets/imgs/sprite.svg#icon-messages"></use>
          </svg>
        </span>-->
        <span class="margin-left-thirty cursorpointer">
          <svg class="feature__icon">
            <use xlink:href="@/assets/imgs/sprite.svg#icon-user"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  data() {
    return {
      current: "overview",
    };
  },
  props: ["notifsbodstate", "opennotifsbod"],
  mixins: [global],
  mounted() {
    let id = this.$route.params.overview;

    if (id) {
      this.getcurrentclient(id);
      this.getusernotifications(id);
    } else {
      id = this.$route.query.user;
      this.getcurrentclient(id);
      this.getusernotifications(id);
    }

    this.gettransfers();
    this.getloans();
    this.getinvestmentplans();
    this.getsavingsplans();
    this.getnotifications();
  },
};
</script>
