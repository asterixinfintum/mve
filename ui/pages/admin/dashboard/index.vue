<template>
  <div>
    <div class="dashboard overview">
      <AdminHeader />

      <div class="dashboard__search">
        <div class="dashboard__search--input">
          <input placeholder="Find a user" v-model="searchterm" />
        </div>
      </div>

      <div class="dashboard__content">
        <div class="dashboard__list">
          <div class="dashboard__listitem dashboard__listitem--headerarea">
            <div class="dashboard__listitem--subject">
              <span>FULL NAME </span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>EMAIL</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>PHONENUMBER</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>ACCOUNT TYPE</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span> BALANCE </span>
            </div>
            <div class="dashboard__listitem--subject">
              <span> SAVINGS TOTAL </span>
            </div>
            <div class="dashboard__listitem--subject">
              <span> LOANS TOTAL </span>
            </div>
            <div class="dashboard__listitem--subject">
              <span> INVESTMENTS TOTAL </span>
            </div>
            <div class="dashboard__listitem--subject btns"></div>
          </div>
        </div>

        <div class="dashboard__list">
          <div
            class="dashboard__listitem dashboard__listitem--item"
            v-for="user in userslist"
            @click="toadminroute(`admin/dashboard/user/${user.details._id}`)"
          >
            <div class="dashboard__listitem--subject">
              <span>{{
                limitTextLength(`${user.details.firstname} ${user.details.lastname}`, 25)
              }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>{{ limitTextLength(user.details.email, 17) }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>{{ user.details.phonenumber }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>{{ user.account.type }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>${{ user.account.balance }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>${{ user.account.savingsaggregate }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span>${{ user.account.loansaggregate }}</span>
            </div>
            <div class="dashboard__listitem--subject">
              <span></span>
            </div>
            <div class="dashboard__listitem--subject btns"></div>
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
  data() {
    return {
      searchterm: "",
      userslist: []
    };
  },
  watch: {
    users(newval, oldval) {
      this.userslist = newval;
    },
    searchterm(newval, oldval) {
      const { users } = this;

      if (users.length) {
        const searchTerm = this.searchterm.trim().toLowerCase()
        const filtered = users.filter(
          (user) =>
            user.details.firstname.trim().toLowerCase().includes(searchTerm) ||
            user.details.lastname.trim().toLowerCase().includes(searchTerm) ||
            user.details.email.trim().toLowerCase().includes(searchTerm)
        );

        this.userslist = filtered;
      }
    },
  },
};
</script>
