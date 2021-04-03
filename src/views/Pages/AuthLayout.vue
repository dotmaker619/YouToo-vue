<template>
  <div>
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <router-link class="navbar-brand" to="/">
          <img src="img/brand/white.png">
        </router-link>
      </div>

     <template>
       <div class="navbar-collapse-header">
         <div class="row">
           <div class="col-6 collapse-brand">
             <router-link to="/">
               <img src="img/brand/green.png">
             </router-link>
           </div>
           <div class="col-6 collapse-close">
             <button type="button" class="navbar-toggler" @click="showMenu = false">
               <span></span>
               <span></span>
             </button>
           </div>
         </div>
       </div>

       <ul class="navbar-nav mr-auto">
         <li class="nav-item">
           <router-link to="/dashboard" class="nav-link">
             <span class="nav-link-inner--text">Dashboard</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link to="/pricing" class="nav-link">
             <span class="nav-link-inner--text">Pricing</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link to="/login" class="nav-link">
             <span class="nav-link-inner--text">Login</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link to="/register" class="nav-link">
             <span class="nav-link-inner--text">Register</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link to="/lock" class="nav-link">
             <span class="nav-link-inner--text">Lock</span>
           </router-link>
         </li>
       </ul>
       <hr class="d-lg-none">
       <ul class="navbar-nav align-items-lg-center ml-lg-auto">
         <li class="nav-item">
           <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank"
              data-toggle="tooltip" data-original-title="Like us on Facebook">
             <i class="fab fa-facebook-square"></i>
             <span class="nav-link-inner--text d-lg-none">Facebook</span>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank"
              data-toggle="tooltip" data-original-title="Follow us on Instagram">
             <i class="fab fa-instagram"></i>
             <span class="nav-link-inner--text d-lg-none">Instagram</span>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" data-toggle="tooltip"
              data-original-title="Follow us on Twitter">
             <i class="fab fa-twitter-square"></i>
             <span class="nav-link-inner--text d-lg-none">Twitter</span>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial" target="_blank"
              data-toggle="tooltip" data-original-title="Star us on Github">
             <i class="fab fa-github"></i>
             <span class="nav-link-inner--text d-lg-none">Github</span>
           </a>
         </li>
         <li class="nav-item d-none d-lg-block ml-lg-4">
           <a href="https://www.creative-tim.com/product/vue-argon-dashboard-pro" target="_blank"
              class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <i class="fas fa-shopping-cart mr-2"></i>
              </span>
             <span class="nav-link-inner--text">Purchase now</span>
           </a>
         </li>
       </ul>
     </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>

    <footer class="py-5" id="footer-main">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{year}} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a> &
              <a href="https://www.binarcode.com" class="font-weight-bold ml-1" target="_blank">Binar Code</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a href="https://www.creative-tim.com" class="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">About Us</a>
              </li>
              <li class="nav-item">
                <a href="http://blog.creative-tim.com" class="nav-link" target="_blank">Blog</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank">License</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import { BaseNav } from '@/components';
  import { ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      BaseNav,
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
      toggleNavbar() {
        document.body.classList.toggle('nav-open');
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
      setBackgroundColor() {
        document.body.classList.add('bg-default');
      },
      removeBackgroundColor() {
        document.body.classList.remove('bg-default');
      },
      updateBackground() {
        if (!this.$route.meta.noBodyBackground) {
          this.setBackgroundColor();
        } else {
          this.removeBackgroundColor()
        }
      }
    },
    beforeDestroy() {
      this.removeBackgroundColor();
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
          this.updateBackground()
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

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }
</style>
