<template>
  <div>
    <div class="container-fluid">
      <modal :show.sync="modals.eventEditmodal">
      <div class="card">
          <img class="d-none d-md-block" style="width:100%; height:320px;" :src="model.img" />
          <img class="d-md-none" style="width:100%; height: 210px;" :src="model.img" />
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
                      <base-input type="time" id="example-time-input" name="time" v-model="model.time" value=""/>
                    </div>
                  </div>
                  <div class="form-group row" style="margin-bottom: 10px;">
                    <label class="col-md-1 col-1 col-form-label form-control-label" style="padding-top:5px !important;"><img style="width:19px; height:16px;" src="img/icons/common/eye.png" /></label>
                    <div class="col-md-4 col-10 noPaddingRight">
                      <base-button icon type="primary">
                        <span class="btn-inner--icon"><i class="fas fa-camera"></i></span>
                        <span class="btn-inner--text">Zoom</span>
                      </base-button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:16px; height:16px;" src="img/icons/common/place.png" /></label>
                    <div class="col-md-11 col-10">
                      <base-input placeholder="Place" name="location" v-model="model.location"></base-input>
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
                      <base-input placeholder="Capacity" name="capacity" v-model="model.capacity"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:19px; height:16px;" src="img/icons/common/money.png" /></label>
                    <div class="col-md-5 col-10 noPaddingRight">
                      <base-input placeholder="Price" name="price" v-model="model.price"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1"></label>
                    <div class="col-md-3 col-10 noPaddingRight">
                      <base-input placeholder="" name="basePrice" v-model="model.basePrice"></base-input>
                    </div>
                    <label class="col-1 d-md-none"></label>
                    <div class="col-md-6 col-10 noPaddingRight">
                      <base-input placeholder="" name="kids" v-model="model.kids"></base-input>
                    </div>
                    <label class="col-1 d-md-none"></label>
                    <div class="col-md-2 col-10 noPaddingRight">
                      <base-input placeholder="" name="littleKids" v-model="model.littleKids"></base-input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-1 col-1"></div>
                    <div class="col-md-11 col-3">
                      <base-button round class="btn-plus btn-icon-only">
                        <span class="btn-inner--icon"><i class="fa fa-plus"></i></span>
                      </base-button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-1 col-1 col-form-label form-control-label"><img style="width:19px; height:16px;" src="img/icons/common/hamburger.png" /></label>
                    <div class="col-md-11 col-10"><html-editor v-model=" model.content"></html-editor></div>
                  </div>
              </form>
          </div>
      </div>
      <template slot="footer">
          <base-button type="link" class="ml-auto" @click="modals.eventEditmodal = false">Cancel
          </base-button>
          <base-button type="primary">Save</base-button>
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
      <div class="card-body d-none d-md-block">
        <div class="row">
          <div class="col-md-3" style="padding-top: 10px;">
            <img style="width: 100%; height: auto;" :src="model.img" />
          </div>
          <div class="col-md-6 noPaddingleft">
            <h1>{{ model.title }}</h1>
            <div class="form-group row noBorderBottom">
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingRight" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/clock.png" /></label>
                    <div class="col-md-10 col-10 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px;">
                      <img style="width:16px; height:16px;" src="img/icons/common/calendar.png" />
                      {{ model.recurrence }}/Every {{ model.day }}&nbsp;&nbsp;&nbsp; {{ model.date }}&nbsp; {{ model.time }}
                    </div>
            </div>
            <div class="form-group row noBorderBottom" >
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingRight" style="padding-top: 5px;"><img style="width:19px; height:16px;" src="img/icons/common/eye.png" /></label>
                    <div class="col-md-5 col-10 noPaddingRight noPaddingleft">
                      <base-button icon type="primary" style="padding-left: 0px;">
                        <span class="btn-inner--icon"><i class="fas fa-camera"></i></span>
                        <span class="btn-inner--text">Join with Zoom</span>
                      </base-button>
                    </div>
                    <div class="col-md-6 col-10 noPaddingRight noPaddingRight">
                      <a style="color: #2889FC; font-size: 11px;">meet.google.com/pgp-pnc-vzg</a>
                      <img style="width: 18px; height: 18px; margin-left: 10px;" src="img/icons/common/paste.png" />
                    </div>
            </div>
                <p style="font-size: 16px; margin: 0 0 0 35px;"><b>Join by phone:</b>&nbsp;&nbsp; {{ model.phone }}</p>
            <div class="form-group row noBorderBottom">
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/place.png" /></label>
                    <div class="col-md-10 col-10 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px;">
                      <b>{{ model.club }}</b>,&nbsp;{{ model.location }}
                    </div>
                  </div>
           </div>
          <div class="col-md-3">
            <div style="width: 100%; height: 40px; margin-top: 130px; padding-left: 30px;">
            <base-button type="link" class="ml-auto" id="del_btn" @click="$router.back();">Cancel</base-button>
            <base-button type="link" class="ml-auto" id="del_btn" @click="modals.eventEditmodal = true">Edit</base-button>
            </div>
          </div>
        </div>
        
        <tabs>
          <tab-pane key="tab1">
            <template slot="title">
              Description
            </template>
            <div class="div_container">
              <div class="row" style="padding-top: 20px;">
                <div class="col-md-5">
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/user.png" /></label>
                          <div class="col-md-5 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Quorum/Capacity: 
                          </div>
                          <div class="col-md-2 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.quorum }}/{{ model.capacity }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingbottom" style="padding-top: 5px;"><img style="width:19px; height:16px;" src="img/icons/common/money.png" /></label>
                          <div class="col-md-5 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Base Price: 
                          </div>
                          <div class="col-md-2 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.basePrice }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"></label>
                          <div class="col-md-5 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Kids(7-14years): 
                          </div>
                          <div class="col-md-2 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.kids }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"></label>
                          <div class="col-md-5 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Little Kids(7-14years): 
                          </div>
                          <div class="col-md-2 col-10 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.littleKids }}
                          </div>
                  </div>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-4 col-12">
                    <card class="d-flex" style="background-color: #52A1FF; margin-bottom: 15px;">
                        
                        <div class="row">
                          <div class="col-md-1" style="padding-left: 8px !important;">
                              <div class="chartcardimgbtn">
                                <base-button icon type="primary" style="padding-left: 0px;">
                                  <span class="btn-inner--icon"><img style="width: 18px; height: 18px; margin-left: -8px;" src="img/icons/common/chartcarddollar.png" /></span>
                                </base-button>
                              </div>
                              <div class="chartcardimgbtn">
                                <base-button icon type="primary" style="padding-left: 0px;">
                                  <span class="btn-inner--icon"><img style="width: 18px; height: 18px; margin-left: -8px;" src="img/icons/common/chartcardprice.png" /></span>
                                </base-button>
                              </div>
                          </div>
                          <div class="col-md-5" style="padding: 8px 0 8px 15px;">
                              <pie-chart
                                id="pie-chart"
                                :height="100"
                                :width="100"
                                :chart-data="pieChart.chartData"
                                :extra-options="pieChart.extraOptions"
                              >
                              </pie-chart>
                          </div>
                          <div class="col-md-5" style="font-size: 12px; color: white;">
                            <p id="balance">1,234</p>
                            <div class="d-flex align-items-center">
                              <div class="position-relative card-index" v-bind:style="`background-color: ${Charts.colors.theme['danger']};`"></div>
                              <div class="ml-2">Bsic Price</div>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="position-relative card-index" v-bind:style="`background-color: ${Charts.colors.theme['info']};`"></div>
                              <div class="ml-2">Kids</div>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="position-relative bg-grey card-index" v-bind:style="`background-color: ${Charts.colors.theme['primary']};`"></div>
                              <div class="ml-2">little Kids</div>
                            </div>
                          </div>
                        </div>
                    </card>
                </div>
              </div>
             <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px; width: 30px !important"><img style="width:16px; height:16px;" src="img/icons/common/hamburger.png" /></label>
                          <div class="col-md-11 col-11 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px; margin-left: -3vw;">
                           <p class="description">{{ model.content }}</p>
                          </div>
                </div>
            </div>
           
          </tab-pane>
          <tab-pane key="tab2">
            <template slot="title">
              Participants
            </template>
            <div class="div_container">
              Coming soon...
            </div>
          </tab-pane>
          <tab-pane key="tab3">
            <template slot="title">
              Q&A
            </template>
            <div class="div_container">
              Coming soon...
            </div>
          </tab-pane>
          <tab-pane key="tab4">
            <template slot="title">
              Media
            </template>
            <div class="div_container">
              Coming soon...
            </div>
          </tab-pane>
          <tab-pane key="tab5">
            <template slot="title">
              Activity
            </template>
            <div class="div_container">
              Coming soon...
            </div>
          </tab-pane>
        </tabs>
        
      </div>
      <div class="card-body d-md-none">
        <div class="row">
          <div class="col-md-3" style="padding-top: 10px;">
            <img style="width: 100%; height: auto;" :src="model.img" />
          </div>
          <div class="col-md-6 noPaddingleft noPaddingRight">
            <h1 style="font-size: 28px; text-align: center;">{{ model.title }}</h1>
            <div class="div_container">
              <div class="row" style="padding-top: 20px;">
                <div class="col-md-5">
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px; width: 30px !important"><img style="width:16px; height:16px;" src="img/icons/common/hamburger.png" /></label>
                          <div class="col-md-11 col-11 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px;">
                           <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth. aw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/user.png" /></label>
                          <div class="col-md-5 col-8 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Quorum/Capacity: 
                          </div>
                          <div class="col-md-2 col-3 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.quorum }}/{{ model.capacity }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingbottom" style="padding-top: 5px;"><img style="width:19px; height:16px;" src="img/icons/common/money.png" /></label>
                          <div class="col-md-5 col-8 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Base Price: 
                          </div>
                          <div class="col-md-2 col-3 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.basePrice }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"></label>
                          <div class="col-md-5 col-8 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Kids(7-14years): 
                          </div>
                          <div class="col-md-2 col-3 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.kids }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom">
                          <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"></label>
                          <div class="col-md-5 col-8 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            Little Kids(7-14years): 
                          </div>
                          <div class="col-md-2 col-3 noPaddingRight" style="font-size: 14px; padding-top: 5px;">
                            {{ model.littleKids }}
                          </div>
                  </div>
                  <div class="form-group row noBorderBottom" style="padding-top: 20px;">
                    <div class="col-12">
                    <card class="d-flex" style="background-color: #52A1FF; margin-bottom: 15px;">
                        <div class="row">
                          <div class="col-1" style="padding-left: 8px !important;">
                              <div class="chartcardimgbtn">
                                <base-button icon type="primary" style="padding-left: 0px;">
                                  <span class="btn-inner--icon"><img style="width: 18px; height: 18px; margin-left: -8px;" src="img/icons/common/chartcarddollar.png" /></span>
                                </base-button>
                              </div>
                              <div class="chartcardimgbtn">
                                <base-button icon type="primary" style="padding-left: 0px;">
                                  <span class="btn-inner--icon"><img style="width: 18px; height: 18px; margin-left: -8px;" src="img/icons/common/chartcardprice.png" /></span>
                                </base-button>
                              </div>
                          </div>
                          <div class="col-5" style="padding: 8px 0 8px 15px;">
                              <pie-chart
                                id="pie-chart"
                                :height="100"
                                :width="100"
                                :chart-data="pieChart.chartData"
                                :extra-options="pieChart.extraOptions"
                              >
                              </pie-chart>
                          </div>
                          <div class="col-5" style="font-size: 12px; color: white;">
                            <p id="balance">1,234</p>
                            <div class="d-flex align-items-center">
                              <div class="position-relative bg-white card-index"></div>
                              <div class="ml-2">Bsic Price</div>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="position-relative card-index" style="background-color: #b1d5ff;"></div>
                              <div class="ml-2">Kids</div>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="position-relative bg-grey card-index" style="background-color: #83bcff;"></div>
                              <div class="ml-2">little Kids</div>
                            </div>
                          </div>
                        </div>
                    </card>
                </div>
                  </div>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-4 col-12">
                </div>
              </div>
            </div>
            <div class="div_container">
                <div class="form-group row noBorderBottom">
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingRight" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/clock.png" /></label>
                    <div class="col-md-10 col-10 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px;">
                      <img style="width:16px; height:16px;" src="img/icons/common/calendar.png" />
                      {{ model.recurrence }}/Every {{ model.day }}&nbsp;&nbsp;&nbsp;<br /> {{ model.date }}&nbsp; {{ model.time }}
                    </div>
                </div>
                <div class="form-group row noBorderBottom" >
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft noPaddingRight" style="padding-top: 5px; margin-top: 10px;"><img style="width:19px; height:16px;" src="img/icons/common/eye.png" /></label>
                    <div class="col-md-5 col-11 noPaddingRight noPaddingleft" style="margin-top: 10px;">
                      <base-button icon type="primary" style="padding-left: 0px;">
                        <span class="btn-inner--icon"><i class="fas fa-camera"></i></span>
                        <span class="btn-inner--text">Join with Zoom</span>
                      </base-button>
                    </div>
                    <div class="col-md-5 col-12 noPaddingRight noPaddingRight"> 
                      <a style="color: #2889FC; font-size: 11px;">meet.google.com/pgp-pnc-vzg</a>
                    </div>
                </div>
                <p style="font-size: 16px; margin: 0 0 0 2vw;"><b>Join by phone:</b>&nbsp;&nbsp; {{ model.phone }}</p>
                <div class="form-group row noBorderBottom">
                    <label class="col-md-1 col-1 col-form-label form-control-label noPaddingleft" style="padding-top: 5px;"><img style="width:16px; height:16px;" src="img/icons/common/place.png" /></label>
                    <div class="col-md-10 col-10 noPaddingRight noPaddingleft" style="font-size: 14px; padding-top: 5px;">
                      <b>{{ model.club }}</b>,&nbsp;{{ model.location }}
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-3">
            <div style="width: 100%; height: 40px; margin-top: 20px; padding-left: 120px;">
            <base-button type="link" class="ml-auto" id="del_btn">Cancel</base-button>
            <base-button type="link" class="ml-auto" id="del_btn" @click="modals.eventEditmodal = true">Edit</base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { Table, TableColumn, Select, Option } from "element-ui";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import BaseInput from "@/components/Inputs/BaseInput.vue";
import Modal from "@/components/Modal.vue";
import HtmlEditor from '@/components/Inputs/HtmlEditor';

import PieChart from '@/components/Charts/PieChart';
import * as chartConfigs from '@/components/Charts/config';
import { Charts } from "@/components/Charts/config";

import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
import BaseHeader from '@/components/BaseHeader';
import StatsCard from '@/components/Cards/StatsCard';
import { mapGetters, mapState } from 'vuex';

function randomScalingFactor() {
    return Math.round(Math.random() * 100);
}

export default {
  components: {
    Tabs,
    Modal,
    PieChart,
    // RouteBreadCrumb,
    TabPane,
    BaseInput,
    HtmlEditor,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  props: {
    itemLimit: {
      type: Number,
      default: 9
    }
  },
  data() {
    // console.log(this.$route.params.id);
    // console.log(this.$route.params.id);
    return {
        pieChart: {
          chartData: {
            labels: [
              'Little Kids',
              'Kids',
              'Base Price',
            ],
            datasets: [{
              data: [
                20,
                8,
                72,
              ],
              backgroundColor: [
                Charts.colors.theme['info'],
                Charts.colors.theme['primary'],
                Charts.colors.white,
              ],
              label: 'Dataset 1'
            }],
          },
          extraOptions: {
            responsive: true,
            legend: {
              position: 'top',
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        },
      model: {
          img: "img/theme/img-1-1000x900.jpg",
          title: 'Watching a movie together',
          phone: '+4(888) 113-2371',
          club: 'Bowling',
          location: '9625 Black Mountain Rd, Suite 315, San Diego, CA',
          recurrence: 'Weekly',
          day: 'Tuesday',
          date: '12/12/2020',
          time: '19:09',
          quorum: '10',
          capacity: '100',
          price: '2.34$',
          kids: '0.99$',
          littlekids: 'FREE',
          description: 'Description(age from to etc).',
          deposit: '1.99$',
          empty: '',
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
        projectsPage: [],
        pageSizeList: [5, 10, 20, 50],
        pageSize: 5,
        selectedProject: {},
        Charts
    };
  },
  computed: {
    ...mapState(['selectOptions', 'selectOptions2', 'projects']),
    isMobile() {
      return window.innerWidth <= 576;
  },
  },
  created() {
    this.selectedProject = this.$store.state.projects.filter((project) => project.id == this.$route.params.id)[0]
    // console.log()
    this.model = { 
      ...this.selectedProject,
      time: this.selectedProject.when_content.split(" ")[this.selectedProject.when_content.split(" ").length - 1],
      location: this.selectedProject.where_content,
      price: this.selectedProject.budget
      };
    this.selects.simple = this.selectedProject.recurrence
    this.selects2.simple = this.selectedProject.day
    this.pieChart.chartData.datasets = [{
              data: [
                this.selectedProject.kids.replace('$', ''),
                this.selectedProject.littleKids.replace('$', ''),
                this.selectedProject.basePrice.replace('$', ''),
              ],
              backgroundColor: [
                Charts.colors.theme['info'],
                Charts.colors.theme['primary'],
                Charts.colors.theme['danger'],
              ],
              label: 'Dataset 1'
            }]
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
#del_btn {
  border: 1px solid rgb(173, 172, 172);
  color: rgb(173, 172, 172);

  &:hover {
      border-color: #2889FC;
      color: #2889FC;
  }
}

.noPaddingRight {
  padding-right: 0 !important;
}
.noPaddingleft {
  padding-left: 0 !important;
}
.noPaddingbottom {
  padding-bottom: 0 !important;
}
.noBorderBottom {
  margin-bottom: 0 !important;
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
.div_container { width: 100%; padding: 0 15px 25px 15px; background-color: #f8f9fe; }
#balance {
  margin-bottom: 6px !important;
  font-size: 27px !important;
  color: white;
}
.chartcardimgbtn {
  width: 100%;
  height: 50%;
}
</style>
