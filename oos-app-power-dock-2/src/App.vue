<template>
  <div class="">
      <header class="navbar">
        <section class="navbar-section">
        Power Dock 2: Battery Level Monitory
        </section>
        <button type="button" name="button"
          @click="addOne"
        >Add One</button>
      </header>

      <div class="container">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Current Level</div>
          </div>
          <div class="card-body batteryInfo">
            <div class="columns">
              <BatteryIcon class="column col-xs-6" :volt="currentVoltage"/>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Level History</div>
          </div>
          <div class="card-body">
            <LineChart title="Battery Level Since Boot"
              :data="data"
            />
          </div>
        </div>
      </div>
  </div>
</template>
<script>

import BatteryIcon from '@/components/BatteryIcon'
import LineChart from '@/components/LineChart'

export default {
  name: 'App',
  components: {
    BatteryIcon,
    LineChart
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    addOne () {
      var now = new Date()
      var volt = (Math.random()) + 3.5
      this.data.push({time: now.toLocaleTimeString(), voltage: volt})
      console.log(this.data)
    }
  },
  mounted () {
    /* eslint-disable no-new */
    for (var i = 0; i < 24 * 60 / 10; i++) {
      this.addOne()
    }
  },
  computed: {
    currentVoltage () {
      if (this.data.length > 0) {
        return this.data[this.data.length - 1].voltage.toFixed(2)
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
html, body {
    height: 100% !important;
    height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: white;
}
.lg-num {
  font-weight: bold;
  font-size: 2em;
  color: #3498db;
}

.navbar {
  padding: 10px;
  width: 100%;
  background: #1abc9c;
}

.nav-title {
  color: white;
  font-weight: bold;
  font-family: sans-serif;
}

.batteryInfo {
  /* display: flex; */
  /* flex-direction: row; */
}

.card {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  color: white;
  font-weight: bold;
}
</style>
