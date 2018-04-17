<template lang="html">
  <div class="container">
    <img class="batteryImage" src="/static/img/battery.svg">
    <div class="levelText">
      {{volt}}V
    </div>
  </div>
</template>

<script>
export default {
  name: 'BatteryIcon',
  props: {
    volt: String
  }
}
</script>

<style lang="css">
.container {
  height: 100%;
  width: 100%;
}

.batteryImage {
  width: 150px;
}

.levelText {
  color: #2ecc71;
  position: relative;
  top: -25px;
  font-weight: bold;
}
</style>
