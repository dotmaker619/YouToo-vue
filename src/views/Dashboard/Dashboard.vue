<template>
  <div>
    <div>
      <div class="px-3 pt-4">
        <div class="row px-3" :class="{ 'card-wrapper': !isMobile }">
          <div class="col-xl-4 col-sm-12">
            <card class="d-flex" style="background-color: #006FF3">
              <div
                class="position-absolute mt--4"
                style="width: 40%; right: 1rem;"
              >
                <img
                  class="img-fluid"
                  src="img/icons/cards/Ellipse_dup.png"
                  alt="Image placeholder"
                />
              </div>
              <div>
                <div
                  class="text-white"
                  style="font-size: 70px; line-height: 1.1"
                >
                  25
                </div>
                <div class="text-white">
                  Scheduled events
                </div>
              </div>
            </card>
          </div>
          <div class="col-xl-4 col-sm-12 mt-xs-2">
            <card class="d-flex" type="primary">
              <div
                class="position-absolute mt--4"
                style="width: 40%; right: 1rem;"
              >
                <img
                  class="img-fluid"
                  src="img/icons/cards/Ellipse_dup.png"
                  alt="Image placeholder"
                />
              </div>
              <div>
                <div
                  class="text-white"
                  style="font-size: 70px; line-height: 1.1"
                >
                  340
                </div>
                <div class="text-white">
                  Participants
                </div>
              </div>
            </card>
          </div>
          <div class="col-xl-4 col-sm-12 mt-xs-2">
            <card class="d-flex" style="background-color: #52A1FF; margin-bottom: 15px;">
              <div
                class="position-absolute mt--4"
                style="width: 40%; right: 1rem;"
              >
                <img
                  class="img-fluid"
                  src="img/icons/cards/Ellipse_dup.png"
                  alt="Image placeholder"
                />
              </div>
              <div>
                <div
                  class="text-white"
                  style="font-size: 70px; line-height: 1.1"
                >
                  $12,903
                </div>
                <div class="text-white">
                  Finances
                </div>
              </div>
              <div class="row mt-2 d-none d-md-block">
                <div class="col-3" style="float: left;">
                  <doughnut-chart
                    :height="80"
                    :width="80"
                    :chart-data="doughnutChart.chartData"
                    :extra-options="doughnutChart.extraOptions"
                  >
                  </doughnut-chart>
                </div>
                <div
                  class="col-9 d-flex flex-column justify-content-end text-white"
                  style="float: right; margin-top:15px;"
                >
                  <div class="d-flex align-items-center">
                    <div class="position-relative bg-white card-index"></div>
                    <div class="ml-2">Tickets</div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="position-relative bg-primary card-index"></div>
                    <div class="ml-2">Donations</div>
                  </div>
                </div>
              </div>
              <div class="row mt-2 d-md-none">
                <div class="col-4">
                  <doughnut-chart
                    :height="80"
                    :width="80"
                    :chart-data="doughnutChart.chartData"
                    :extra-options="doughnutChart.extraOptions"
                  >
                  </doughnut-chart>
                </div>
                <div
                  class="col-8 d-flex flex-column justify-content-end text-white margin-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="position-relative bg-white card-index"></div>
                    <div class="ml-2">Tickets</div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="position-relative bg-primary card-index"></div>
                    <div class="ml-2">Donations</div>
                  </div>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <light-table></light-table>
    </div>
  </div>
</template>
<script>
import * as chartConfigs from "@/components/Charts/config";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import LightTable from "./LightTable";
import { Charts } from "@/components/Charts/config";

function randomScalingFactor() {
  return Math.round(Math.random() * 100);
}

export default {
  components: {
    LightTable,
    DoughnutChart
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
            }
          ],
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        extraOptions: chartConfigs.blueChartOptions
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29]
            }
          ]
        },
        extraOptions: chartConfigs.blueChartOptions
      },
      doughnutChart: {
        chartData: {
          labels: ["Danger", "Warning", "Success", "Primary", "Info"],
          datasets: [
            {
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ],
              backgroundColor: [
                Charts.colors.theme["danger"],
                Charts.colors.theme["warning"],
                Charts.colors.theme["success"],
                Charts.colors.theme["primary"],
                Charts.colors.theme["info"]
              ],
              label: "Dataset 1"
            }
          ]
        },
        extraOptions: {
          responsive: true,
          legend: {
            position: "top"
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      }
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 576;
    }
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  }
};
</script>
<style lang="scss">
.card-wrapper {
  .card {
    height: 90%;
  }
}
.card-index {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  box-shadow: 1px 2px 2px #33333333;
}
.el-table,
.el-table__append-wrapper,
.el-table__body-wrapper {
  overflow: visible !important;
}
.el-table__body,
.el-table__footer {
  border-spacing: 0 10px;
}
.el-table__row {
  box-shadow: 0px 2px 8px rgba(29, 63, 104, 0.1) !important;
  border-radius: 5px !important;
}
.el-table__body {
  width: auto !important;
}
.el-table__header {
  width: auto !important;
}
.el-table__header-wrapper {
  box-shadow: 0px 2px 8px rgba(29, 63, 104, 0.1);
  border-radius: 5px;
}
.copyright a {
  color: #909db1;
}
.nav-link {
  color: #2889fc !important;
}
.margin-bottom {
  margin-bottom: 15px;
}
.el-table .el-table__header-wrapper thead th .cell {
  min-height: 70px;
  font-size: 16px;
}
.table thead th,
.el-table thead th {
  text-transform: inherit;
}
</style>
