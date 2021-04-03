<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </div>
      </div>
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card title="Total traffic"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-active-40">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card title="Total traffic"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="ni ni-money-coins">

            <template slot="footer">
              <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row starter-page">
        Sample page
      </div>
    </div>
  </div>
</template>
<script>
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/Cards/StatsCard';

  export default {
    name: 'starter-page',
    components: {
      StatsCard,
      RouteBreadCrumb
    },
    data() {
      return {};
    }
  };
</script>
<style>
  .starter-page {
    min-height: calc(100vh - 380px);
  }
</style>
