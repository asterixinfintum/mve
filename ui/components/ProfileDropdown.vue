<template>
  <div class="profiledropdown">
    <div class="profiledropdown__item">
      <div class="profiledropdown__item--svg">
        <svg>
          <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
        </svg>
      </div>
      <div class="profiledropdown__item--text">Your savings</div>
    </div>
    <div class="profiledropdown__item">
      <div class="profiledropdown__item--svg">
        <svg>
          <use xlink:href="@/assets/imgs/sprite.svg#icon-clock"></use>
        </svg>
      </div>
      <div class="profiledropdown__item--text">Transactions</div>
    </div>
    <div class="profiledropdown__item" @click="toroute('yourloans')">
      <div class="profiledropdown__item--svg">
        <svg>
          <use xlink:href="@/assets/imgs/sprite.svg#icon-banknote"></use>
        </svg>
      </div>
      <div class="profiledropdown__item--text">Your loans</div>
    </div>
    <div class="profiledropdown__item" @click="toroute('yourinvestments')">
      <div class="profiledropdown__item--svg">
        <svg>
          <use xlink:href="@/assets/imgs/sprite.svg#icon-flow-merge"></use>
        </svg>
      </div>
      <div class="profiledropdown__item--text">Your investments</div>
    </div>
    <div class="profiledropdown__item" @click="triggerlogout">
      <div class="profiledropdown__item--svg">
        <svg>
          <use xlink:href="@/assets/imgs/sprite.svg#icon-key"></use>
        </svg>
      </div>
      <div class="profiledropdown__item--text">Logout</div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  mixins: [global],
  methods: {
    triggerlogout() {
      this.onspinner();
      this.logout()
        .then(() =>{
          this.offspinner();
          this.$router.push('/');
        })
    },
  },
};
</script>

<style lang="scss">
.profiledropdown {
  position: absolute;
  top: #{scaleValue(30)};
  right: 0;
  width: #{scaleValue(300)};
  background: $font-white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  opacity: 1 !important;
  overflow: scroll;
  overflow-x: hidden;

  border-radius: #{scaleValue(10)};

  &__item {
    padding: #{scaleValue(15)} #{scaleValue(15)};
    border-bottom: 1px solid rgba($font-black, 0.4);
    font-size: #{scaleValue(13)};
    transition: all 0.5s ease;
    display: flex;

    &:last-child {
      border: none;
    }

    &--svg {
      fill: rgba($font-black, 0.4);
      height: #{scaleValue(20)};
      width: #{scaleValue(20)};
    }

    &:hover {
      background: rgba($font-black, 0.1);
    }
  }
}
</style>
