<template>
  <div>
    <div class="container-fluid">
      <light-table></light-table>
    </div>
  </div>
</template>
<script>
import LightTable from "./LightTable";

function randomScalingFactor() {
  return Math.round(Math.random() * 100);
}

export default {
  components: {
    LightTable,
  },
  data() {
    return {
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 576;
    }
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
