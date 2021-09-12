<template>
  <div id="myLineId" class="lineContainer"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      echart: null,
    };
  },
  mounted() {
    this.initEchart(); //首屏渲染
  },
  methods: {
    initEchart() {
      this.$nextTick(() => {
        this.echart = echarts.init(document.getElementById("myLineId"));
        this.echart.setOption(this.option());
      });
    },
    option() {
      let option = {
        title: {
          text: "折线图",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["搜索引擎", "搜索引擎1", "搜索引擎2"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            name: "搜索引擎",
            stack: "总量",
            areaStyle: {},
          },
          {
            data: [320, 232, 101, 934, 1290, 1330, 1320],
            type: "line",
            stack: "总量",
            name: "搜索引擎1",
            areaStyle: {},
          },
          {
            data: [420, 232, 401, 334, 290, 330, 320],
            type: "line",
            stack: "总量",
            name: "搜索引擎2",
            areaStyle: {},
          },
        ],
      };
      return option;
    },
  },
};
</script>

<style>
.lineContainer {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}
</style>