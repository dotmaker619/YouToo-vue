<template v-slot="{ row }">
  <div>
    <div class="border-0 card-header upcoming d-none d-md-block">
      <h2 class="mb-0 text-gray">My Events</h2>
    </div>
    <div class="border-0 card-header upcoming d-md-none" style="text-align:center;">
      <h2 class="mb-0 text-gray">My Events</h2>
    </div>
    <div style="width:200px; height:40px;">
      <div style="width:50%; height:40px; float:left; border-bottom: 4px solid #2889fc; padding: 0 14px;">
        Published
      </div>
      <div style="width:50%; height:40px; float:right; padding: 0 30px;">
        <router-link to="/eventdafts">Drafts</router-link>
      </div>
    </div>
          <div class="card d-md-none">
            <div>
              <el-table
                class="table-responsive"
                header-row-class-name="d-none"
                :data="projectsPage"
              >
                <el-table-column
                  min-width="90px"
                >
                  <template v-slot="{ row }">
                    <div>
                      <a href="#">
                        <img style="width: 100%; height:auto;" alt="Image placeholder" :src="row.group_img" />
                      </a>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  min-width="190px"
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center margin_top_bottom">
                      <img :src="row.name_img" class="mr-2" />
                      <div class="media-body">
                        <span class="name mb-0 text-sm">{{ row.when_content }}</span>
                      </div>
                    </div>
                    <div class="media align-items-center margin_top_bottom">
                      <img :src="row.name_img" class="mr-2" />
                      <div class="media-body">
                        <span class="name mb-0 text-sm">{{ row.name_content }}</span>
                      </div>
                      <img
                        style="width:18px; height: 18px; margin: 0 0 0 5px !important;"
                        :src=" row.status_img "
                        class="mr-2"
                      />
                    </div>
                    <div class="media align-items-center margin_top_bottom">
                      <img
                        :src="row.where_icon2"
                        class="mr-1"
                        v-if="row.where_icon2"
                      />
                      <img :src="row.where_icon1" class="mr-2" />
                      <div class="media-body">
                        <div class="name mb-0 text-sm">{{ row.where_title }}</div>
                      </div>
                    </div>
                    <div class="media align-items-center margin_top_bottom">
                      <img :src="row.name_img" class="mr-2" />
                      <div class="media-body">
                        <span class="name mb-0 text-sm">{{ row.participants_content }}</span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>

              <div class="d-flex justify-content-between align-items-center mt-2">
                <div></div>
                <div class="d-flex justify-content-center align-items-center">
                  <base-button type="info" class="pagination_btn" @click="prevPage()">
                    <img src="img/icons/common/arrow-left.png" />
                  </base-button>
                  <base-button
                    type="info"
                    style="margin-left: .5rem"
                    @click="nextPage()"
                    class="pagination_btn"
                  >
                    <img src="img/icons/common/arrow-right.png" />
                  </base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="card d-none d-md-block">
            <div class="table-container">
              <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="d-flex justify-content-center align-items-center">
                    <base-input append-icon="fa fa-search" placeholder="Search"></base-input>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                    <label style="margin: 15px 10px 24px 0">Show</label>
                    <base-input>
                        <el-select v-model="selectShow.simple" filterable>
                          <el-option v-for="option in selectShowitem"
                                    :key="option.label"
                                    :value="option.value">
                                    <img style="width:16px; height:16px;" :src="option.img" />
                                    {{ option.label }}
                          </el-option>
                        </el-select>
                    </base-input>
                </div>
              </div>
              <el-table
                class="table-responsive table-flush"
                header-row-class-name="thead-light "
                :data="projectsPage"
              >
                <el-table-column
                  label="When"
                  min-width="140px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <img :src="row.name_img" class="mr-2" />
                      <div class="media-body">
                        <span class="name mb-0 text-sm">{{ row.when_content }}</span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Name"
                  prop="name_content"
                  min-width="140px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <img :src="row.name_img" class="mr-2" />
                      <div class="media-body">
                        <span class="name mb-0 text-sm">{{ row.name_content }}</span>
                      </div>
                      <img
                        style="width:18px; height: 18px; margin: 0 0 0 5px !important;"
                        :src=" row.status_img "
                        class="mr-2"
                      />
                    </div>
                  </template>
                </el-table-column>

                <el-table-column
                  label="Where"
                  min-width="400px"
                  prop="Where_content"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <img
                        :src="row.where_icon2"
                        class="mr-1"
                        v-if="row.where_icon2"
                      />
                      <img :src="row.where_icon1" class="mr-2" />

                      <div class="media-body">
                        <div class="name mb-0 text-sm">{{ row.where_title }}</div>
                        <div class="name mb-0 text-sm">{{ row.where_content }}</div>
                      </div>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Group" min-width="170px" prop="group_img">
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <a href="#" class="avatar rounded-circle mr-3">
                        <img style="width:100%; height:100%;" alt="Image placeholder" :src="row.group_img" />
                      </a>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column
                  label="Participants"
                  prop="participants_content"
                  min-width="240px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center participant">
                      <span class="completion mr-2">{{
                        row.participants_content
                      }}</span>
                      <div class="d-flex align-items-center ml-3 eventHandle">
                        <a class="completion mr-3" v-if="row.status !== 'completed' && row.status !== 'cancelled'">
                          <!-- <router-link to="/eventdetail"> -->
                            <img src="img/icons/common/edit.png" @click="$router.push(`/eventdetail/${row.id}`)" />
                          <!-- </router-link> -->
                        </a>
                        <a class="completion mr-3" v-if="row.status !== 'completed' && row.status !== 'cancelled'">
                          <img src="img/icons/common/delete.png" />
                        </a>
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <div class="d-flex justify-content-between align-items-center mt-2">
                <div></div>
                <div class="d-flex justify-content-center align-items-center">
                  <base-button type="info" class="pagination_btn" @click="prevPage()">
                    <img src="img/icons/common/arrow-left.png" />
                  </base-button>
                  <div>
                    <input
                      type="number"
                      class="form-control text-center"
                      style="width: 5rem"
                      v-model="currentPage"
                      @change="goPage"
                    />
                  </div>
                  <base-button
                    type="info"
                    style="margin-left: .5rem"
                    @click="nextPage()"
                    class="pagination_btn"
                  >
                    <img src="img/icons/common/arrow-right.png" />
                  </base-button>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                  <div class="mr-2">Items Per Page</div>
                  <el-select
                    class="select-danger"
                    style="width: 4rem"
                    placeholder="Single Select"
                    @change="pageSizeChanged"
                    v-model="pageSize"
                  >
                    <el-option
                      v-for="page in pageSizeList"
                      class="select-danger"
                      :value="page"
                      :label="page"
                      :key="`events-page-${page}`"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import BaseInput from "@/components/Inputs/BaseInput.vue";
import { mapGetters, mapState } from 'vuex';

export default {
  name: "light-table",
  components: {
    BaseInput,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Select.name]: Select,
    [Option.name]: Option
  },
  props: {
    itemLimit: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      currentPage: 1,
        inputs: {
          file: []
        },
        selectShowitem: [
          {
            label: 'All',
            value: 'All',
            img: "",
          },
          {
            label: 'Active',
            value: 'Active',
            img: "img/icons/common/active.png",
          },
          {
            label: 'Completed',
            value: 'Completed',
            img: "img/icons/common/completed.png",
          },
          {
            label: 'Cancelled',
            value: 'Cancelled',
            img: "img/icons/common/cancell.png",
          },
        ],
        selectShow: {
          simple: 'All',
        },
      projectsPage: [],
      pageSizeList: [5, 10, 20, 50],
      pageSize: 5
    };
  },
  methods: {
    pageSizeChanged() {
      this.currentPage = 1;
      this.goPage();
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
      console.log(this.currentPage)
      this.goPage();
    },
    nextPage() {
      if (this.currentPage < this.totalPage) this.currentPage++;
      console.log(this.currentPage)
      this.goPage();
    },
    goPage() {
      if (this.currentPage < 0) return;
      const offset = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      this.projectsPage = this.projects.slice(offset, end);
    },
    isMobile() {
      return window.innerWidth <= 576;
    }
  },
  computed: {
    // ...mapState(['projects']),
    ...mapGetters({projects: 'publishedProject'}),
    totalPage() {
      return (
        (this.projects.length -
          1 -
          ((this.projects.length - 1) % this.pageSize)) /
          this.pageSize +
        1
      );
    }
  },

  created() {
    this.goPage();
  }
};
</script>
<style lang="scss" scoped>
select {
  color: #adb5bd;
    border-radius: 5px;
    border-color: lightgrey;
    height: 46px;
    margin-bottom: 24px;
    width: 180px;
    padding-left: 6px;
    font-size: 14px;
}
.upcoming {
  padding: 1.25rem 0;
}
.eventHandle {
  display: none !important;
}
.participant:hover .eventHandle {
  display: flex !important;
}
.table-container {
  padding: 28px;
}
.pagination_btn {
  background: #e9f4ff;
  mix-blend-mode: normal;
  border-radius: 3px;
  border: none;
}
.margin_top_bottom { margin:8px 0 10px 0;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.draft_table {
  background-color: #eaedf5 !important;
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
#del_btn {
  border: 1px solid rgb(173, 172, 172);
  color: rgb(173, 172, 172);
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
