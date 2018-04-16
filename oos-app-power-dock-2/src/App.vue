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
              <BatteryIcon class="column col-xs-6" :percent="currentPercent"/>
              <div class="column col-xs-6">
                <span class="text-gray">Time left:</span>
                <div>
                  <span class="lg-num">{{timeLeft.h}}</span> h <span class="lg-num">{{timeLeft.m}}</span> m
                </div>
                <br>
                <span class="text-gray">Voltage:</span>
                <div class="">
                  <span class="lg-num">{{currentVoltage}}</span>v
                </div>
              </div>
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

      var percent = this.interpolate(volt)
      this.data.push({time: now.toLocaleTimeString(), voltage: volt, percent: percent})
      console.log(this.data)
    },
    interpolate (voltage) {
      var lookup = [
        {p: 100, v: 4.2},
        {p: 90, v: 4.13},
        {p: 80, v: 4.06},
        {p: 70, v: 3.99},
        {p: 60, v: 3.92},
        {p: 50, v: 3.85},
        {p: 40, v: 3.78},
        {p: 30, v: 3.71},
        {p: 20, v: 3.64},
        {p: 10, v: 3.57},
        {p: 0, v: 3.5}
      ]
      var result = 0
      for (var i = 0; i < lookup.length; i++) {
        console.log(lookup[i].v , voltage)
        if (lookup[i].v < voltage) {
          result = lookup[i].p
          break
        }
      }
      return result
      // console.log(result)
    }
  },
  mounted () {
    /* eslint-disable no-new */
    for (var i = 0; i < 24*60/10; i++) {
      this.addOne()
    }

  },
  computed: {
    timeLeft () {
      return {
        h: 3,
        m: 25
      }
    },
    currentVoltage () {
      if (this.data.length > 0) {
        return this.data[this.data.length - 1].voltage.toFixed(2)
      } else {
        return 0
      }
    },
    currentPercent () {
      if (this.data.length > 0) {
        var val = this.data[this.data.length - 1].percent
        val = val.toFixed()
        return val
      } else {
        return '0'
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
