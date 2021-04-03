<template>
  <div class="main-content d-flex justify-content-center align-items-center">
    <zoom-center-transition
      :duration="pageTransitionDuration"
      mode="out-in"
    >
      <div class="page-content m-3">
        <div class="row">
          <div class="col-md-4">
            <div class="logo-content" style="height: 100%;">
              <div class="logo-description mx-4 text-center pt-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </zoom-center-transition>
  </div>
</template>
<script>
  import { ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      ZoomCenterTransition
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        pageTransitionDuration: 200,
        year: new Date().getFullYear(),
        pageClass: 'login-page'
      };
    },
    computed: {
      title() {
        return `${this.$route.name} Page`;
      }
    },
    methods: {
      
    },
    beforeRouteUpdate(to, from, next) {
      // Close the mobile menu first then transition to next page
      if (this.showMenu) {
        this.closeMenu();
        setTimeout(() => {
          next();
        }, this.menuTransitionDuration);
      } else {
        next();
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler: function () {
          // this.updateBackground()
        }
      }
    }
  };
</script>
<style lang="scss">
  $scaleSize: 0.8;
  @keyframes zoomIn8 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    100% {
      opacity: 1;
    }
  }

  .main-content {
    background: #E9EDF5;
    min-height: 100vh;
    .page-content {
      width: 760px;
      /* border: 1px solid green;  */
      border-radius: 8px;
      background: white;
      box-shadow: 2px 3px 5px #33333355;
      .logo-content{
        background-image: url('/img/theme/login-bg.png');
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        width: 100%;
        
        .logo-description {
          color: white;
          font-size: 14px;
        }
      }
      .btn-wrapper {
        .btn {
          font-size: 20px;
        }
      }
      .login-btn {
        font-size: 20px;
      }
    }
  }

  .main-content .zoomIn {
    animation-name: zoomIn8;
  }

  @keyframes zoomOut8 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  @media only screen and (min-width: 601px) {
    .page-content {
      .logo-content {
        border-radius: 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .page-content {
      .logo-content {
        min-height: 200px;
        border-radius: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      .logo-description {
        display: none;
      }
    }
  }

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }
</style>
