<template>
  <div class="wrapper">
    <modal :show.sync="modals.eventEditmodal">
      <div class="card">
          <img class="d-none d-md-block" style="width:100%; height:320px;" src="img/theme/img-1-1000x900.jpg"/>
          <img class="d-md-none" style="width:100%; height: 210px;" src="img/theme/img-1-1000x900.jpg"/>
          <i class="fa fa-times d-none d-md-block" 
             style="position: absolute; 
                    color:white; 
                    margin:10px 0 0 520px;" 
             @click="modals.eventEditmodal = false"></i>
          <i class="fa fa-times d-md-none" 
             style="position: absolute; 
                    color:white; 
                    margin:10px 0 0 90vw;" 
             @click="modals.eventEditmodal = false"></i>
          <base-button round class="btn-plus btn-icon-only d-none d-md-block" 
                             style="position: absolute; 
                                    margin:260px 0 0 470px;" 
                             @click="modals2.eventEditmodal = true,modals.eventEditmodal = false">
              <span class="btn-inner--icon"><i class="fa fa-pen"></i></span>
          </base-button>
          <base-button round class="btn-plus btn-icon-only d-md-none" 
                             style="position: absolute; 
                                    margin:150px 0 0 82vw;" 
                             @click="modals2.eventEditmodal = true,modals.eventEditmodal = false">
              <span class="btn-inner--icon"><i class="fa fa-pen"></i></span>
          </base-button>
          <div class="card-body">
              <form>
                  <div class="form-group row">
                    <label class="col-md-1 col-form-label form-control-label" style="padding: 11px 0 11px 0 !important">Title:</label>
                    <div class="col-md-11 col-11">
                      <base-input placeholder="Title" name="title" v-model="model.title"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label" style="padding-top: 12px !important"><img style="width:16px; height:16px;" src="img/icons/common/clock.png" /></label>
                    <label class="col-md-2 col-4 col-form-label form-control-label no_padding_lr">Recurrence:</label>
                    <div class="col-md-4 col-6">
                      <base-input>
                        <el-select v-model="selects.simple" filterable>
                          <el-option v-for="option in selectOptions"
                                    :key="option.label"
                                    :label="option.label"
                                    :value="option.value">
                          </el-option>
                        </el-select>
                      </base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label" style="padding-top: 12px !important"></label>
                    <label class="col-md-1 col-4 col-form-label form-control-label no_padding_lr" style="padding-top: 10px !important">Day:</label>
                    <div class="col-md-4 col-6">
                      <base-input>
                        <el-select v-model="selects2.simple" filterable>
                          <el-option v-for="option in selectOptions2"
                                    :key="option.label"
                                    :label="option.label"
                                    :value="option.value">
                          </el-option>
                        </el-select>
                      </base-input>
                    </div>
                    <div class="d-md-none col-1"></div>
                    <label class="col-md-1 col-4 col-form-label form-control-label no_padding_lr" style="padding-top: 10px !important;">Time:</label>
                    <div class="col-md-4 col-6">
                      <base-input type="time" name="time" id="example-time-input" v-model="model.time" value=""/>
                    </div>
                  </div>
                  <div class="form-group row" style="margin-bottom: 10px;">
                    <label class="col-md-1 col-1 col-form-label form-control-label" style="padding-top:5px !important;"><img style="width:18px; height:16px;" src="img/icons/common/eye.png" /></label>
                    <div class="col-md-4 col-10 noPaddingRight">
                      <base-button icon style="background-color: white; color: #8898aa; border-color: #8898aa;">
                        <span class="btn-inner--icon"><img style="width:18px; height:18px;" src="img/icons/common/zoom.png" /></span>
                        <span class="btn-inner--text">Zoom</span>
                      </base-button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:16px; height:16px;" src="img/icons/common/place.png" /></label>
                    <div class="col-md-11 col-10">
                      <base-input placeholder="Location" name="location" v-model="model.location"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label" style="margin-left: 0px;"><img style="width:16px; height:16px;" src="img/icons/common/user.png" /></label>
                    <label class="col-md-2 col-2 col-form-label form-control-label no_padding_lr">Quorum</label>
                    <div class="col-md-3 col-3">
                      <base-input placeholder="Quorum" name="quorum" v-model="model.quorum"></base-input>
                    </div>
                    <label class="col-md-2 col-2 col-form-label form-control-label" style="padding:11px 0 !important;">Capacity</label>
                    <div class="col-md-3 col-3">
                      <base-input placeholder="Capacity" naem="capacity" v-model="model.capacity"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:19px; height:16px;" src="img/icons/common/money.png" /></label>
                    <div class="col-md-5 col-8">
                      <base-input placeholder="Price" name="price" v-model="model.price"></base-input>
                    </div>
                    <div class="col-md-3 col-2">
                      <base-button round class="btn-plus btn-icon-only">
                        <span class="btn-inner--icon"><i class="fa fa-plus"></i></span>
                      </base-button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:19px; height:16px;" src="img/icons/common/hamburger.png" /></label>
                    <div class="col-md-11 col-10"><html-editor></html-editor></div>
                  </div>
              </form>
          </div>
      </div>
      <template slot="footer">
          <base-button type="link" class="ml-auto" @click="modals.eventEditmodal = false">Cancel
          </base-button>
          <base-button type="primary">Save to drafts</base-button>
          <base-button type="primary">Publish</base-button>
      </template>
    </modal>
    <modal :show.sync="modals2.eventEditmodal">
      <div class="card">
          <img style="width:100%; height:150px;" src="img/theme/photo_change.PNG"/>
           <i class="fa fa-times d-none d-md-block" style="position: absolute; color:white; margin:10px 0 0 520px;" @click="modals2.eventEditmodal = false"></i>
           <i class="fa fa-times d-md-none" style="position: absolute; color:white; margin:10px 0 0 90vw;" @click="modals2.eventEditmodal = false"></i>
           <p style="position: absolute; color:white; font-size: 22px; margin:90px 0 0 25px;">Change an event photo</p>
          <div class="card-body">
            <form>
            <div class="form-group row" style="padding-bottom: 20px !important;">
              <p style="color: black; font-size: 13px;">Upload your own photo</p>
              <p style="margin-top: -15px;">Choose or drag-and-drop GIF / JPG / PNG or other images, max file size 6MB</p>
              <div class="col-md-6"></div>
              <div class="col-md-6 col-12" style="padding: 0 !important;">
                  <base-button type="primary" style="width:100%; padding: 4px 20px;">Upload photo</base-button>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-5 col-5 border"></div>
              <div class="col-md-2 col-2"></div>
              <div class="col-md-5 col-5 border"></div>
            </div>
            <div class="form-group row">
              <div class="col-md-5 col-5"></div>
              <div class="col-md-2 col-2" style="text-align:center; margin-top: -25px;">or</div>
              <div class="col-md-5 col-5"></div>
            </div>
            <div class="form-group row">
              <p style="color: black; font-size: 13px;">Select a photo from our gallery</p>
            </div>
            <div class="form-group row">
              <div class="col-md-4 col-4 img profile-local-image" v-for="image in localGallery" :key="image.no">
                <a href="#">
                  <img style="width:100%; height:auto;" :src="image.img"/>
                </a>
              </div>
            </div>
            </form>
          </div>
        </div>
      <template slot="footer">
          <base-button type="link" class="ml-auto" @click="modals2.eventEditmodal = false">Cancel
          </base-button>
          <base-button type="primary">Save Photos</base-button>
      </template>
    </modal>
    <notifications></notifications>
    <side-bar>
      <div class="mx-3">
        <base-button class="create-button-main d-flex justify-content-between" block type="primary" @click="subCreateShow = !subCreateShow">
          <i class="fa fa-plus"></i> <div class="text-center" style="width: 100%">Create</div>
        </base-button>        
        <template v-if="subCreateShow" >
          <div class="d-flex-column create-submenu pt-2">
            <div class='text-center pb-2'>
              <a @click="modals.eventEditmodal = true">Event</a>
            </div>
            <div class='text-center pb-2'>
              <router-link to="/create-group">Group</router-link>
            </div>
            <div class='text-center pb-2'>
              <router-link to="/create-member">Member</router-link>
            </div>
          </div>
        </template>
      </div>
      <div class="mx-3 mb-3 d-flex justify-content-center">
        <base-button class="create-button-hidden px-2 py-2" type="primary" @click="subCreateShow = !subCreateShow">
          <i class="fa fa-plus"></i>
        </base-button>
      </div>
      <div class="px-3 group-toggle mb-3">
        <div class="d-flex justify-content-between px-2">
          <div class="text-primary">My groups</div>
          <div class="d-flex align-items-center">
            <el-tooltip placement="top-start">
              <div slot="content">Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit.<br> Quisque eleifend sollicitudin<br> elit eget sollicitudin.</div>
              <i class="fa fa-question-circle mr-2 btn-tooltip"></i>
            </el-tooltip>
            <div role='button' class="d-flex align-items-center justify-content-center circular-icon primary-icon"  
                @click="() => { showGroupSetting = !showGroupSetting}">
              <template v-if="showGroupSetting">
                <i class="ni ni-bold-up"></i>
              </template>
              <template v-else>
                <i class="ni ni-bold-down"></i>
              </template>
            </div>
          </div>  
        </div>
        <template v-if="showGroupSetting">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <div class="mt-3 p-1 sidebar-setting">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <base-checkbox v-model="setting.grand_canyon" >
                Hiking in Grand Canyon
              </base-checkbox>
              <i class="fas fa-pen"></i>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <base-checkbox v-model="setting.biker_group">
                The Best Biker Group
              </base-checkbox>
              <i class="fas fa-pen"></i>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <base-checkbox v-model="setting.diving_club">
                Diving club
              </base-checkbox>
              <i class="fas fa-pen"></i>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <base-checkbox v-model="setting.team_building">
                Nisman Team Building
              </base-checkbox>
              <i class="fas fa-pen"></i>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <base-checkbox v-model="setting.club_guys">
                My yachting club guys
              </base-checkbox>
              <i class="fas fa-pen"></i>
            </div>
          </div>
        </fade-transition>
        </template>
      </div>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'fa fa-tachometer-alt text-default',
            path: '/dashboard'
          }"
        >
        </sidebar-item>
        <sidebar-item 
          :link="{
            name: 'Events',
            icon: 'ni ni-calendar-grid-58 text-default',
            path: '/events'
          }">
        </sidebar-item>
      
        <sidebar-item
          :link="{
            name: 'Conversation',
            icon: 'fa fa-comments text-default',
            path: '/conversation',
            comming: true
          }">
        </sidebar-item>
       <sidebar-item
          :link="{
            name: 'Members',
            icon: 'fa fa-users text-default',
            path: '/members'
          }">
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Groups',
            icon: 'fa fa-layer-group text-default',
            path: '/groups'
          }">
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Reports',
            icon: 'ni ni-map-big text-default',
            path: '/reports',
            comming: true
          }">
        </sidebar-item>
      </template>

  
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import Modal from "@/components/Modal.vue";
  import { Select, Option } from "element-ui";
  import BaseInput from "@/components/Inputs/BaseInput.vue";
  import HtmlEditor from '@/components/Inputs/HtmlEditor'
  import { mapGetters, mapState } from 'vuex';

  
  export default {
    components: {
      Modal,
      DashboardNavbar,
      ContentFooter,
      FadeTransition,
      BaseInput,
      HtmlEditor,
      [Select.name]: Select,
      [Option.name]: Option
    },
    data () {
      return (
        {
          subCreateShow: false,
          showGroupSetting: true,
          setting: {
            grand_canyon: true, 
            biker_group: true, 
            diving_club: false, 
            team_building: true, 
            club_guys: true
          },
           model: {
            title: '',
            time: '',
            location: '',
            quorum: '',
            capacity: '',
            price: '',
            time: '',
          },
          modals: {
            eventEditmodal: false
          },
          modals2: {
              eventEditmodal: false
          },
          localGallery: [
          {
            no: '1',
            img: "img/theme/team-1.jpg",
          },
          {
            no: '2',
            img: "img/theme/team-2.jpg",
          },
          {
            no: '3',
            img: "img/theme/team-3.jpg",
          },
          {
            no: '4',
            img: "img/theme/team-4.jpg",
          },
          {
            no: '5',
            img: "img/theme/team-5.jpg",
          },
          {
            no: '6',
            img: "img/theme/angular.jpg",
          },
          {
            no: '7',
            img: "img/theme/bootstrap.jpg",
          },
          {
            no: '8',
            img: "img/theme/react.jpg",
          },
          {
            no: '9',
            img: "img/theme/sketch.jpg",
          },
          ],
          selects: {
            simple: 'Weekly',
          },
          selects2: {
            simple: 'Monday',
          },
        }
      )
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    },
    computed: {
    ...mapState(['selectOptions', 'selectOptions2']),
  },
  };
</script>
<style lang="scss">
.main-content {
  background: white !important;
}
.create-submenu {
  background: #E9F4FF; 
  width: 87%; 
  position: absolute; 
  z-index: 21; 
  border-bottom-left-radius: 5px; 
  border-bottom-right-radius: 5px; 
  box-shadow: 1px 3px 3px #55555533;
}

.g-sidenav-hidden:not(.g-sidenav-show), .g-sidenav-hide {
  .sidebar-setting, .create-submenu, .group-toggle {
    display: none;
  }

  .create-button-main {
    display: none !important;
  }
  
  .create-button-hidden {
    display: block !important;
    width: 40px;
  }
}

.g-sidenav-show {
  
  .create-button-hidden {
    display: none !important;
  }
}

.circular-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;    
    border: 1px solid #909DB1;
    color: #909DB1;
}

.circular-icon.primary-icon {
    background: #2889FC;
    color: white;
    border: none !important;
}

.table .thead-light th, .el-table .thead-light th {
  background-color: #E9F4FF!important;
}

.card-body {
  padding-bottom: 0 !important;
  padding-top: 30px !important;
  margin-bottom:10px !important;
}
.form-group {
  margin: 0 0 12px 0!important;
}
.btn-plus {
    color: #5e72e4;
    background-color: #e6eff9;
    border-color: #e6eff9;
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
p {
  font-size: 12px;
}
.border {
  border-bottom: 1px solid rgb(129, 123, 123) !important;
}
.no_padding_lr {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 15px !important;
}
.img {
  padding: 6px !important;
}
.col-md-11 {
  padding-right: 0 !important;
}
.noPaddingRight {
  padding-right: 0 !important;
}
.profile-local-image {
    img {
        border-radius: 5px;
        border: 3px solid rgb(195, 222, 245);
        transform: translate(0%, 0%) scale(1);

        &:hover {
            transform: translate(0%, 0%) scale(1.03);
        }
    }
}

</style>
