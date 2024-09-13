<template>
  <div class="popup-overlay" @click.stop="toggleInteracTransfer">
    <div class="popup">
      <div v-if="transferSuccess" class="interactransfer__transferdone">
        <h2>Transfer Successful!</h2>
        <p>Your Interac e-Transfer has been initiated.</p>
      </div>

      <form class="interactransfer" v-if="!transferSuccess" @click="childHandler">
        <figure class="interactransfer__figure">
          <img src="@/assets/imgs/interaclogo.jpg" />
        </figure>
        <div class="interactransfer__group input">
          <label class="interactransfer__label" for="security-question"
            >Security Question:</label
          >
          <input
            class="interactransfer__input input"
            type="text"
            id="security-question"
            v-model="securityQuestion"
            placeholder="Security Question"
          />
        </div>

        <div class="interactransfer__group input">
          <label class="interactransfer__label" for="security-answer"
            >Security Answer:</label
          >
          <input
            class="interactransfer__input input"
            type="text"
            id="security-answer"
            v-model="securityAnswer"
            placeholder="Security Answer"
          />
        </div>

        <div class="interactransfer__group input">
          <label class="interactransfer__label" for="email">Email Address:</label>
          <input
            class="interactransfer__input input"
            type="email"
            id="email"
            v-model="email"
            placeholder="Email Address"
          />
        </div>

        <div class="interactransfer__group input">
          <label class="interactransfer__label" for="amount">Amount in CAD:</label>
          <input
            class="interactransfer__input input"
            type="number"
            id="amount"
            v-model="amount"
            placeholder="Amount in CAD"
          />
        </div>

        <button
          v-if="allowtransfer"
          class="interactransfer__button button orange-btn"
          :class="{ loading }"
          @click.prevent="transferInterac"
          type="submit"
        >
          <span v-if="!loading">Transfer</span>

          <span v-if="loading"></span>
        </button>

        <button
          v-if="!allowtransfer"
          class="interactransfer__button button orange-btn-faint"
          :class="{}"
          type="submit"
        >
          Transfer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import requester from "@/store/requester";

export default {
  props: ["toggleInteracTransfer"],
  data() {
    return {
      securityQuestion: "",
      securityAnswer: "",
      email: "",
      amount: "",
      BASE_URL: requester.BASE,
      loading: false,
      transferSuccess: false,
    };
  },
  computed: {
    allowtransfer() {
      const { securityQuestion, isValidEmail, securityAnswer, email, amount } = this;

      if (
        securityQuestion.length &&
        securityAnswer.length &&
        email.length &&
        amount.length &&
        isValidEmail(email)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    childHandler(event) {
      event.stopPropagation();
    },
    isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    },

    async transferInterac() {
      const {
        BASE_URL,
        isValidEmail,
        securityQuestion,
        securityAnswer,
        email,
        amount,
      } = this;

      if (
        securityQuestion.length &&
        securityAnswer.length &&
        email.length &&
        amount.length &&
        isValidEmail(email)
      ) {
        try {
          const token = localStorage.getItem("873__jh6bdjklkjhghn");

          this.loading = true;

          const response = await fetch(`${BASE_URL}/client/transfer/interac`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              securityQuestion,
              securityAnswer,
              email,
              amount,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Transfer successful:", data);
            this.loading = false;
            this.transferSuccess = true;

            setTimeout(() => {
              this.transferSuccess = false;
              this.toggleInteracTransfer();
            }, 5000);
          } else {
            const errorData = await response.json();
            console.error("Transfer failed:", errorData);
            this.loading = false;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
