<template>
  <div class='chart pie'></div>
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
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              {value: 400, name: '搜索引擎'},
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'}
            ]
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
