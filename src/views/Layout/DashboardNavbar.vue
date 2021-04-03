<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
  >
    <!-- Search form -->
    <div class="navbar-search mr-sm-3">
      {{ routeName }}
    </div>

    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div class="pr-3 sidenav-toggler" @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        class="nav-item"
        tag="li"
        title-classes="nav-link"
        title-tag="a"
        icon="ni ni-bell-55"
        menu-classes="dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
      >
        <template>
          <!-- Dropdown header -->
          <div class="px-3 py-3">
            <h6 class="text-sm text-muted m-0">
              You have <strong class="text-primary">13</strong> notifications.
            </h6>
          </div>
          <!-- List group -->
          <div class="list-group list-group-flush">
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-1.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Slava Nisman</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    Let's meet at Starbucks at 11:30. Wdyt?
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-2.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Slava Nisman</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    A new issue has been reported for Argon.
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-3.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Slava Nisman</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>5 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-4.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Slava Nisman</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    Let's meet at Starbucks at 11:30. Wdyt?
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-5.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Slava Nisman</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    A new issue has been reported for Argon.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <!-- View all -->
          <a
            href="#!"
            class="dropdown-item text-center text-primary font-weight-bold py-3"
            >View all</a
          >
        </template>
      </base-dropdown>

      <a
        href="#"
        class="nav-link pr-0 my--3 py-3"
        :class="{ 'border-left': !isMobile }"
        @click.prevent
        slot="title-container"
      >
        <div class="media align-items-center">
          <span class="avatar avatar-sm rounded-circle">
            <img alt="Image placeholder" src="img/theme/team-4.jpg" />
          </span>
          <div class="media-body ml-2 d-none d-lg-block">
            <div class="mb-0 text-sm font-weight-bold" style="min-width: 7rem;">
              Slava Nisman
            </div>
          </div>
        </div>
      </a>
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <template>
          <a href="#!" class="dropdown-item">
            <img src="img/icons/common/account.png" class="ni ni-single-02 " />
            <span class="ml-3">Account</span>
          </a>
          <a href="#!" class="dropdown-item">
            <img
              src="img/icons/common/signout.png"
              class="ni ni-settings-gear-65"
            />
            <span class="ml-3">Sign Out</span>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { BaseNav } from "@/components";

export default {
  components: {
    BaseNav
  },
  props: {
    type: {
      type: String,
      default: "default", // default|light
      description:
        "Look of the dashboard navbar. Default (Green) or light (gray)"
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isMobile() {
      console.log(window.innerWidth < 576);
      return window.innerWidth < 576;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ""
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(true);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
