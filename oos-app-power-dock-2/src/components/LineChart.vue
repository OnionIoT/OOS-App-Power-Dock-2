<template lang="html">
  <div class="">
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
// import 'moment/min/moment-with-locales.min.js'
// import Moment from 'moment/min/moment.min.js'
import Chart from 'chart.js/dist/Chart.min.js'
export default {
  name: 'LineChart',
  components: {
    // Moment
  },
  data () {
    return {
      batteryChart: null
      // data: []
    }
  },
  props: {
    title: String,
    data: Array
  },
  mounted () {
    this.batteryChart = new Chart(document.getElementById('line-chart'), {
      type: 'line',
      data: {
        labels: this.getLabels,
        datasets: [{
          borderColor: '#2ecc71',
          data: this.getData,
          // hidden: true,
          label: 'Battery'
        }]
      },
      options: {}
    })
  },
  computed: {
    getLabels () {
      var label = []
      for (var i = 0; i < this.data.length; i++) {
        label.push(this.data[i].time)
      }
      return label
    },
    getData () {
      var data = []
      for (var i = 0; i < this.data.length; i++) {
        data.push(this.data[i].percent)
      }
      return data
    }
  },
  watch: {
    'data': function (val, oldVal) {
      console.log('on data change')
      var chart = this.batteryChart
      chart.data.labels = this.getLabels
      chart.data.datasets[0].data = this.getData
      chart.update()
    }
  }
}
</script>

<style lang="css">
</style>
