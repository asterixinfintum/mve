<template>
  <div>
    <div class="usersavings" :class="{ overviewone }">
      <div class="usersavings__top">
        <div class="usersavings__top--left">
          <span>
            <svg class="feature__icon">
              <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet"></use>
            </svg>
          </span>
        </div>
        <div class="usersavings__top--right">
          <h2 class="capitalize">{{ nameofsavingsplan }}</h2>
          <h3 class="capitalize">Plan: ({{ savingsplanname }})</h3>
        </div>
      </div>
      <div class="usersavings__bottom">
        <div class="usersavings__bottom--left">
          <span>${{ formatNumber(amount) }}</span>
        </div>
        <div class="usersavings__bottom--right">
          <span>target:</span>
          <span>${{ formatNumber(target) }}</span>
        </div>
      </div>

      <div class="usersavings__progress">
        <div class="usersavings__progress--background"></div>
        <div class="usersavings__progress--color"></div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global";

export default {
  props: ["target", "amount", "nameofsavingsplan", "savingsplanname", "overviewone"],
  mixins: [global],
};
</script>

<style lang="scss">
.usersavings {
  border: 2px solid rgba($primary-orange, 0.1);
  border-radius: #{scaleValue(10)};
  margin-bottom: #{scaleValue(20)};
  width: #{scaleValue(500)};
  padding: #{scaleValue(30)};

  &.overviewone {
    width: 100%
  }

  &__top {
    display: flex;
    margin-bottom: #{scaleValue(55)};

    &--left {
      margin-right: #{scaleValue(30)};

      & span {
        display: flex;
        background: rgba($primary-orange, 0.1);
        justify-content: center;
        align-items: center;
        border-radius: #{scaleValue(5)};
        height: #{scaleValue(60)};
        width: #{scaleValue(60)};

        & svg {
          height: #{scaleValue(30)};
          width: #{scaleValue(30)};
          fill: $primary-orange;
        }
      }
    }

    &--right {

      & h2 {
        font-weight: 500;
        font-size: #{scaleValue(16)};
        margin-bottom: #{scaleValue(10)};
        color: $darker-blue;
      }

      & h3 {
        font-weight: 500;
        font-size: #{scaleValue(12)};
        opacity: 0.8;
        color: $button-blue;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    color: $font-black;

    &--left {
      font-weight: 500;
    }

    &--right {
      font-weight: 500;
      color: rgba($font-black, 0.5);
    }
  }

  &__progress {
    width: 100%;
    height: #{scaleValue(5)};
    border-radius: 3rem;
    overflow: hidden;
    position: relative;
    margin-top: #{scaleValue(20)};

    &--background {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba($primary-orange, 0.1);
    }

    &--color {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: rgba($primary-orange, 1);
    }
  }
}
</style>
