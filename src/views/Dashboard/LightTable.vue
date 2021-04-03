<template>
  <div>
    <div class="border-0 card-header upcoming d-none d-md-block">
      <h2 class="mb-0 text-gray">Upcoming Events</h2>
    </div>
    <div class="border-0 card-header upcoming d-md-none" style="text-align:center;">
      <h2 class="mb-0 text-gray">Upcoming Events</h2>
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
            <base-button type="info" class="pagination_btn">
              <img src="img/icons/common/arrow-left.png" @click="prevPage()" />
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
                  <a class="completion mr-3">
                    <img src="img/icons/common/edit.png" />
                  </a>
                  <a class="completion mr-3">
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
            <base-button type="info" class="pagination_btn">
              <img src="img/icons/common/arrow-left.png" @click="prevPage()" />
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
export default {
  name: "light-table",
  components: {
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
      projects: [
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",
          group_img: "img/table_img/mobile (4).png",
          participants_content: "22",
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          budget: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/star.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (3).png",
          participants_content: "22",
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          budget: "$1800 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/star.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",
          where_icon2: "img/icons/common/zoom.png",
          group_img: "img/table_img/mobile (2).png",
          participants_content: "22",
          img: "img/theme/sketch.jpg",
          title: "Black Dashboard",
          budget: "$3150 USD",
          status: "delayed",
          statusType: "danger",
          completion: 72
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (1).png",
          participants_content: "22",
          img: "img/theme/react.jpg",
          title: "React Material Dashboard",
          budget: "$4400 USD",
          status: "on schedule",
          statusType: "info",
          completion: 90
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (4).png",
          participants_content: "22",
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          budget: "$2200 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (3).png",
          participants_content: "22",
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          budget: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (2).png",
          participants_content: "22",
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          budget: "$1800 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (1).png",
          participants_content: "22",
          img: "img/theme/sketch.jpg",
          title: "Black Dashboard",
          budget: "$3150 USD",
          status: "delayed",
          statusType: "danger",
          completion: 72
        },
        {
          when_content: "01.23.20     19:20",
          name_content: "Bowling",
          name_img: "img/icons/common/calendar.png",
          where_title: "Bowling Club",
          where_content: " 9625 Black Mountain Rd, Suite 315, San Diego, CA",
          where_icon1: "img/icons/common/place.png",

          group_img: "img/table_img/mobile (4).png",
          participants_content: "22",
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          budget: "$2200 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        }
      ],
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
      this.goPage();
    },
    nextPage() {
      if (this.currentPage < this.totalPage) this.currentPage++;
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
</style>
