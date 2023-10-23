<template>
  <div class="empty">
    <div>
        <p>You have no {{ item }} to show at the moment...</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['item']
};
</script>

<style lang="scss">
.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: #{scaleValue(18)};
    margin-top: #{scaleValue(80)};
    color: $darker-blue;
}
</style>
