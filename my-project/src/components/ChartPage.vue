<template>
  <div>
    <div >charts page</div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'

export default {
  name: "ChartPage",
  data:function (){
    return {
      option:{
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  methods:{
    InitEcharts:function (){
      var myChart = Echarts.init(document.getElementById('main'));
      myChart.setOption(this.option);
    }
  },
  mounted: function () {
    this.InitEcharts();
  }
}
</script>

<style scoped>

</style>