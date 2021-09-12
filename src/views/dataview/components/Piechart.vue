<template>
  <div id="mypiechart" class="piecontainer"></div>
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
    //!首屏
    this.initEchart();
  },
  methods: {
    initEchart() {
      this.$nextTick(() => {
        this.echart = echarts.init(document.getElementById("mypiechart"));
        this.echart.setOption(this.option());
      });
    },
    option() {
      let option = {
        title: {
          text: "饼图",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            // emphasis: {
            //   itemStyle: {
            //     shadowBlur: 10,
            //     shadowOffsetX: 0,
            //     shadowColor: "rgba(0, 0, 0, 0.5)",
            //   },
            // },
          },
        ],
      };
      return option;
    },
  },
};
</script>

<style lang="less" scoped>
.piecontainer {
  width: 100%;
  height: 500px;
  margin-top: 30px;
}
</style>