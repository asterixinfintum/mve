<template>
  <div>
    <div class="overview" @click="closedrops">
      <UserHeader
        :notifsbodstate="opennotificationsbody"
        :opennotifsbod="opennotifications"
        :openprofilebod="openprofiledrop"
        :profilebod="profilebody"
      />

      <div v-if="createcontactformopen">
        <CreateContactForm
          :open="opencreatecontactform"
          :close="closecreatecontactform"
        />
      </div>

      <div v-if="confirmationmsg">
        <Confirm
          :subject="comfimationsbj"
          :msg="confirmationmsg"
          :confirmationfunc="submittransfer"
          :transferdetails="{
            nameofbnk,
            country,
            accountno,
            amounttosend,
          }"
        />
      </div>

      <div class="overview__content" v-if="account && client">
        <div class="overview__body boxshadowbox">
          <div class="overview__left white-background boxshadowbox">
            <div class="overview__card">
              <div class="overview__savingbottom--head">
                <div class="overview__transaction--header">
                  <div class="overview__transaction--h2 header-label">My Cards</div>
                </div>

                <span class="svgspan faint cursorpointer" v-if="cardview === 'visa'">
                  <label
                    class="smlabel orange fontweight-5"
                    @click.stop="togglecardview('master')"
                    >View Master Card</label
                  >
                </span>
                <span class="svgspan faint cursorpointer" v-if="cardview === 'master'">
                  <label
                    class="smlabel orange fontweight-5"
                    @click.stop="togglecardview('visa')"
                    >View Visa Card</label
                  >
                </span>
              </div>

              <figure class="overview__card--img" v-if="cardview === 'visa'">
                <img
                  src="@/assets/imgs/cardback.jpg"
                  class="overview__card--background"
                />
                <figure class="overview__card--platformlogo">
                  <img src="@/assets/imgs/logo-nobackground.png" />
                </figure>
                <figure class="overview__card--cardlogo">
                  <img src="@/assets/imgs/visacardlogo.png" />
                </figure>
                <div class="overview__card--text">
                  <div class="overview__card--textarea">
                    <label class="name capitalize">{{
                      `${client.firstname} ${client.lastname}`
                    }}</label>
                    <label class="date">{{ cards[0].expiry }}</label>
                  </div>
                  <div class="overview__card--textarea">
                    <label class="cardnum">{{ cards[0].digits }}</label>
                    <label></label>
                  </div>
                </div>
              </figure>

              <figure class="overview__card--img" v-if="cardview === 'master'">
                <img
                  src="@/assets/imgs/cardback.jpg"
                  class="overview__card--background"
                />
                <figure class="overview__card--platformlogo">
                  <img src="@/assets/imgs/logo-nobackground.png" />
                </figure>
                <figure class="overview__card--cardlogo">
                  <img src="@/assets/imgs/mastercardlogo.png" />
                </figure>
                <div class="overview__card--text">
                  <div class="overview__card--textarea">
                    <label class="name capitalize">{{
                      `${client.firstname} ${client.lastname}`
                    }}</label>
                    <label class="date">{{ cards[1].expiry }}</label>
                  </div>
                  <div class="overview__card--textarea">
                    <label class="cardnum">{{ cards[1].digits }}</label>
                    <label></label>
                  </div>
                </div>
              </figure>
            </div>

            <div class="overview__yourfunds">
              <div class="overview__yourfunds--header">
                <label class="overview__savingbottom--label smlabel black"
                  >Your funds</label
                >
                <span class="svgspan faint">
                  <label class="smlabel orange fontweight-5">Detail</label>
                </span>
              </div>

              <div class="overview__yourfunds--subject">
                <h2 class="orange fontweight-6">${{ account.balance }}</h2>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div class="overview__savings">
              <div class="overview__savingstop">
                <div class="overview__savingstop--card">
                  <label class="smlabel">Currency</label>
                  <span class="normblack">USD/US Dollar</span>
                </div>

                <div class="overview__savingstop--card">
                  <label class="smlabel">Account plan</label>
                  <span class="normblack orange">{{ account.type }}</span>
                </div>

                <div class="overview__savingstop--card" v-if="cardview === 'visa'">
                  <label class="smlabel">Visa card Cvv</label>
                  <span class="normblack">{{ cards[0].cvv }}</span>
                </div>
                <div class="overview__savingstop--card" v-if="cardview === 'master'">
                  <label class="smlabel">Master card Cvv</label>
                  <span class="normblack">{{ cards[1].cvv }}</span>
                </div>
              </div>

              <div class="overview__savingbottom">
                <div class="overview__savingbottom--head">
                  <div class="overview__savingbottom--headarea">
                    <span class="svgspan orange smmargin-right">
                      <svg class="feature__icon">
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
                      </svg>
                    </span>
                    <label class="overview__savingbottom--label smlabel"
                      >Savings Target Reached</label
                    >
                  </div>
                  <div class="overview__savingbottom--headarea">
                    <span class="svgspan faint">
                      <svg class="feature__icon">
                        <use
                          xlink:href="@/assets/imgs/sprite.svg#icon-more-horizontal"
                        ></use>
                      </svg>
                    </span>
                  </div>
                </div>
                <!--<div class="overview__savingbottom--progress">
                  <div class="overview__savingbottom--progresscolor"></div>
                </div>-->
                <div class="overview__savingbottom--spent">
                  <span class="fontweight-5">${{ account.savingsaggregate }}</span>
                  <span class="normblack fontweight-4">saved to</span>
                  <span class="orange fontweight-5"
                    >${{ account.savingsaggregatetarget }}</span
                  >
                </div>
              </div>
            </div>

            <div class="overview__finsum">
              <div class="overview__finsumcard">
                <span class="overview__savingsplan--headersvg">
                  <svg class="feature__icon">
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
                  </svg>
                </span>
                <label class="tinylabel">Loans</label>
                <span class="normblack fontweight-5">${{ account.loansaggregate }}</span>
              </div>

              <div class="overview__finsumcard">
                <span class="overview__savingsplan--headersvg">
                  <svg class="feature__icon">
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-coin-dollar"></use>
                  </svg>
                </span>
                <label class="tinylabel">Investments</label>
                <span class="normblack fontweight-5"
                  >${{ account.investmentgrowth }}</span
                >
              </div>

              <div class="overview__finsumcard">
                <span class="overview__savingsplan--headersvg">
                  <svg class="feature__icon">
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-banknote"></use>
                  </svg>
                </span>
                <label class="tinylabel">Income</label>
                <span class="normblack fontweight-5">${{ account.income }}</span>
              </div>
            </div>

            <!--<div class="overview__withddep">
              <button class="button orange-btn-faint fontweight-3 half-flex-space">
                Withdraw
              </button>
              <button class="button orange-btn fontweight-3 half-flex-space">
                Deposit
              </button>
            </div>-->
          </div>

          <div class="overview__right">
            <div class="overview__rightbottom">
              <!--<div class="overview__transaction white-background">
                                <Graphs />
                            </div>-->

              <div class="overview__transaction white-background">
                <div class="overview__transaction--header">
                  <div class="overview__transaction--h2 header-label">Transactions</div>
                </div>

                <div v-if="!clienttransactions.length">
                  <Empty :item="'Transactions'" />
                </div>

                <div class="overview__transaction--list" v-if="clienttransactions.length">
                  <div class="overview__transaction--list-header header-area">
                    <label class="smlabel">Type</label>
                    <label class="smlabel">Date</label>
                    <label class="smlabel">Status</label>
                    <label class="smlabel">Amount</label>
                  </div>

                  <div
                    class="overview__transaction--list-item item-area"
                    v-for="clienttransaction in returnSpecifiedArrLength(
                      clienttransactions,
                      3
                    )"
                  >
                    <span class="subject fontweight-5 capitalise">{{
                      clienttransaction.type
                    }}</span>
                    <span class="date smlabel">{{
                      formatDate(clienttransaction.date)
                    }}</span>
                    <span class="status">
                      <label class="success">{{ clienttransaction.status }}</label>
                    </span>
                    <span class="amount fontweight-5"
                      >${{ formatNumber(clienttransaction.amount, 5) }}</span
                    >
                  </div>

                  <div class="overview__withddep center">
                    <button
                      class="button orange-btn fontweight-3 half-flex-space"
                      @click="toroute('transactions/all')"
                    >
                      View all
                    </button>
                  </div>
                </div>
              </div>

              <div class="overview__transaction white-background">
                <div class="overview__savingbottom--head">
                  <div class="overview__transaction--header">
                    <div class="overview__transaction--h2 header-label">
                      Money transfer
                    </div>
                  </div>

                  <span class="svgspan faint">
                    <svg class="feature__icon">
                      <use
                        xlink:href="@/assets/imgs/sprite.svg#icon-more-horizontal"
                      ></use>
                    </svg>
                  </span>
                </div>

                <div class="overview__transfer">
                  <div class="input-area">
                    <label class="smlabel">Destination Bank</label>
                    <label
                      class="smlabel tinylabel fontweight-5"
                      v-if="nameofbnkerror"
                      :class="{
                        fonterror: nameofbnkerror,
                      }"
                    >
                      should contain only letters
                    </label>
                    <div class="input">
                      <input placeholder="Name of Bank" v-model="nameofbnk" />
                    </div>
                  </div>
                  <div class="input-area">
                    <label class="smlabel">Destination Country</label>
                    <label
                      class="smlabel tinylabel fontweight-5"
                      v-if="countryerror"
                      :class="{
                        fonterror: countryerror,
                      }"
                    >
                      should contain only letters
                    </label>
                    <div class="input">
                      <input placeholder="Country" v-model="country" />
                    </div>
                  </div>
                  <div class="input-area">
                    <label class="smlabel">Account number</label>
                    <div class="input">
                      <input placeholder="Recipient account no" v-model="accountno" />
                    </div>
                  </div>
                  <div class="input-area">
                    <label class="smlabel">Amount to send</label>
                    <label
                      class="smlabel tinylabel fontweight-5"
                      v-if="amounttosenderror"
                      :class="{
                        fonterror: amounttosenderror,
                      }"
                    >
                      should contain only contain numbers
                    </label>
                    <div class="input">
                      <input placeholder="Amount" v-model="amounttosend" />
                    </div>
                  </div>

                  <div class="overview__withddep">
                    <!--<button
                      class="button orange-btn-faint fontweight-3 half-flex-space"
                      v-if="!allowsubmit"
                    >
                      Save as draft
                    </button>-->
                    <button
                      class="button orange-btn fontweight-3 half-flex-space"
                      v-if="allowsubmit"
                    >
                      Save as draft
                    </button>
                    <button
                      class="button orange-btn-faint fontweight-3 half-flex-space"
                      v-if="!allowsubmit"
                    >
                      Send money
                    </button>
                    <button
                      class="button orange-btn fontweight-3 half-flex-space"
                      v-if="allowsubmit"
                      @click="
                        openconfirmation(
                          `transfer`,
                          `Confirm transfer of $${amounttosend}`
                        )
                      "
                    >
                      Send money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="no-margin">
            <div class="overview__rightbottom">
              <div class="overview__transaction white-background quickcontacts">
                <div class="overview__savingbottom--head">
                  <div class="overview__transaction--header">
                    <div class="overview__transaction--h2 header-label">
                      Quick contacts
                    </div>
                  </div>
                </div>

                <div class="overview__quickcontacts">
                  <div
                    class="overview__quickcontacts--contact"
                    v-for="quickcontact in quickcontacts"
                  >
                    <figure class="overview__quickcontacts--add">
                      <svg class="feature__icon">
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-user"></use>
                      </svg>
                    </figure>
                    <label class="smlabel capitalize">{{
                      quickcontact.contactname
                    }}</label>
                  </div>

                  <div
                    class="overview__quickcontacts--add"
                    @click="opencreatecontactform"
                  >
                    <svg class="feature__icon">
                      <use xlink:href="@/assets/imgs/sprite.svg#icon-plus"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="overview__transaction white-background">
                <div class="overview__savingbottom--head">
                  <div class="overview__transaction--header">
                    <div class="overview__transaction--h2 header-label">
                      Savings plans
                    </div>
                  </div>

                  <span class="svgspan faint">
                    <label class="smlabel orange fontweight-5">View all</label>
                  </span>
                </div>

                <div class="overview__savingsplans">
                  <!--<div class="overview__savingsplan">
                    <div class="overview__savingsplan--header">
                      <span class="overview__savingsplan--headersvg">
                        <svg class="feature__icon">
                          <use xlink:href="@/assets/imgs/sprite.svg#icon-pig"></use>
                        </svg>
                      </span>

                      <div class="overview__savingsplan--headertext">
                        <h3>Savings Plan Name</h3>
                        <label class="smlabel">Monthly saving $3000</label>
                      </div>
                    </div>

                    <div class="overview__withddep">
                      <button
                        class="button orange-btn-faint fontweight-3 half-flex-space"
                      >
                        Close
                      </button>
                      <button class="button orange-btn fontweight-3 half-flex-space">
                        Join
                      </button>
                    </div>
                  </div>

                  <div class="overview__savingsplan">
                    <div class="overview__savingsplan--header">
                      <span class="overview__savingsplan--headersvg">
                        <svg class="feature__icon">
                          <use xlink:href="@/assets/imgs/sprite.svg#icon-pig"></use>
                        </svg>
                      </span>

                      <div class="overview__savingsplan--headertext">
                        <h3>Savings Plan Name</h3>
                        <label class="smlabel">Monthly saving $3000</label>
                      </div>
                    </div>

                    <div class="overview__withddep">
                      <button
                        class="button orange-btn-faint fontweight-3 half-flex-space"
                      >
                        Close
                      </button>
                      <button class="button orange-btn fontweight-3 half-flex-space">
                        Join
                      </button>
                    </div>
                  </div>

                  <div class="overview__savingsplan">
                    <div class="overview__savingsplan--header">
                      <span class="overview__savingsplan--headersvg">
                        <svg class="feature__icon">
                          <use xlink:href="@/assets/imgs/sprite.svg#icon-pig"></use>
                        </svg>
                      </span>

                      <div class="overview__savingsplan--headertext">
                        <h3>Savings Plan Name</h3>
                        <label class="smlabel">Monthly saving $3000</label>
                      </div>
                    </div>

                    <div class="overview__withddep">
                      <button
                        class="button orange-btn-faint fontweight-3 half-flex-space"
                      >
                        Close
                      </button>
                      <button class="button orange-btn fontweight-3 half-flex-space">
                        Join
                      </button>
                    </div>
                  </div>-->
                  <div v-if="account">
                    <div v-if="!account.savings.length">
                      <Empty :item="'Savings'" />
                    </div>
                  </div>
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
      nameofbnk: "",
      country: "",
      accountno: "",
      amounttosend: "",
      nameofbnkerror: false,
      countryerror: false,
      accountnoerror: false,
      amounttosenderror: false,
      cardview: "visa",
      createcontactformopen: false,
    };
  },
  mixins: [global],
  computed: {
    allowsubmit() {
      const {
        nameofbnk,
        country,
        accountno,
        amounttosend,
        nameofbnkerror,
        countryerror,
        accountnoerror,
        amounttosenderror,
      } = this;

      if (nameofbnk.length && country.length && accountno.length && amounttosend.length) {
        if (!nameofbnkerror && !countryerror && !accountnoerror && !amounttosenderror) {
          return true;
        }

        return false;
      }

      return false;
    },
  },
  mounted() {
    this.getcontacts();
  },
  watch: {
    nameofbnk(newval, oldval) {
      const { isOnlyLetters } = this;

      if (isOnlyLetters(newval)) {
        return (this.nameofbnkerror = false);
      }

      return (this.nameofbnkerror = true);
    },
    country(newval, oldval) {
      const { isOnlyLetters } = this;

      if (isOnlyLetters(newval)) {
        return (this.countryerror = false);
      }

      return (this.countryerror = true);
    },
    amounttosend(newval, oldval) {
      const { isOnlyNumbers } = this;

      if (isOnlyNumbers(newval)) {
        return (this.amounttosenderror = false);
      }

      return (this.amounttosenderror = true);
    },
  },
  methods: {
    opencreatecontactform() {
      this.createcontactformopen = true;
    },
    closecreatecontactform() {
      this.createcontactformopen = false;
    },
    togglecardview(cardview) {
      this.cardview = cardview;
    },
    submittransfer() {
      const { nameofbnk, country, accountno, amounttosend } = this;

      this.closeconfirmation();
      this.toggleverbiage(`Processing transfer of $${amounttosend} to ${accountno}`);
      this.onspinner();
      this.createtransfer({ nameofbnk, country, accountno, amounttosend })
        .then(() => {
          this.toggleverbiage(null);
          this.offspinner();
          this.clearinputs();
        })
        .catch((error) => {});
    },
  },
};
</script>
