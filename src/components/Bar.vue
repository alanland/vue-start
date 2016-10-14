<template>
  <div class='chart'></div>
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

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
</script>

<style lang='stylus'>
  .chart {
    width: 200px
    height: 200px
  }
</style>
