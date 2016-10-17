<template>
  <div class='chart scatter'></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'name',
    props: {
      title: 'some'
    },
    data () {
      return {
        barChartOption: {}
      }
    },
    created () {
      console.log('abc')
      console.log(this)
      console.log(this.el)
      console.log(this.name)
      console.log(this.title)
      console.log(this.barChartOption)
    },
    mounted () {
      console.log(this.$el)
      var myChart = echarts.init(this.$el)

      var data1 = []
      var data2 = []
      var data3 = []

      var random = function (max) {
        return (Math.random() * max).toFixed(3)
      }

      for (var i = 0; i < 500; i++) {
        data1.push([random(15), random(10), random(1)])
        data2.push([random(10), random(10), random(1)])
        data3.push([random(15), random(10), random(1)])
      }

      let option = {
        animation: false,
        legend: {
          data: ['scatter', 'scatter2', 'scatter3']
        },
        tooltip: {},
        xAxis: {
          type: 'value',
          min: 'dataMin',
          max: 'dataMax',
          splitLine: {
            show: true
          }
        },
        yAxis: {
          type: 'value',
          min: 'dataMin',
          max: 'dataMax',
          splitLine: {
            show: true
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
          }, {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
          }, {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
          }, {
            type: 'inside',
            yAxisIndex: [0],
            start: 29,
            end: 36
          }
        ],
        series: [
          {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.8
              }
            },
            symbolSize: function (val) {
              return val[2] * 40
            },
            data: data1
          }, {
            name: 'scatter2',
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.8
              }
            },
            symbolSize: function (val) {
              return val[2] * 40
            },
            data: data2
          }, {
            name: 'scatter3',
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.8
              }
            },
            symbolSize: function (val) {
              return val[2] * 40
            },
            data: data3
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
</script>

<style lang='stylus'>
  .chart {
    width: 400px
    height: 400px
  }
</style>
