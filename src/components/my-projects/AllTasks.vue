<template>
    <div>
           <div class="filter-common">
                <div class="filter-inner-comon"><span>Filter</span></div>
                <div class="filter-inner-comon">
                  <input type="text" placeholder="Search..." />
                </div>
                <div class="filter-inner-comon">
                  <select>
                    <option>Sort by</option>
                    <option>Sort 1</option>
                    <option>Sort 2</option>
                    <option>Sort 3</option>
                  </select>
                  <div class="srt-dd-active">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="255px"
                      height="255px"
                      viewBox="0 0 255 255"
                      style="enable-background:new 0 0 255 255;"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="arrow-drop-down">
                          <polygon
                            points="0,63.75 127.5,191.25 255,63.75   "
                          ></polygon>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                </div>
              </div>
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Jobs Title</span>
                        <span
                          >Project ID : Category – SubCatgeory Date and
                          Time</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Tasks</span>
                        <span class="c-green"
                          ><font class="c-red">5</font> / 3</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Status</span>
                        <span class="c-green">In Progress</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <div
                          class="progress progress-50 mx-auto"
                          data-value="25"
                        >
                          <span class="progress-left">
                            <span class="progress-bar border-red"></span>
                          </span>
                          <span class="progress-right">
                            <span
                              class="progress-bar border-red"
                              style="transform: rotate(90deg);"
                            ></span>
                          </span>
                          <div
                            class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"
                          >
                            <div class="h2 font-weight-bold">
                              25<sup class="small">%</sup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- loop goes here  -->

                    <div class="col-12 t-c-row-all-r-c">
                      <div
                        class="task-content-row task-content-row-all-r"
                        v-for="(task, taskIndex) in taskList"
                        :key="taskIndex"
                      >
                        <div class="task-content ticket-prgs-common">
                          <div class="tckt-t-w task-icon">
                            <svg class="">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#task"
                              ></use>
                            </svg>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="stm-cont-h"
                              >{{ taskIndex + 1 }} {{ task.title }}</span
                            >
                            <span> {{ task.jobTitle }} </span>
                          </div>
                          <div class="task-ctnt-common task-det text-center">
                            <span class="stm-cont-h">Status</span>
                            <span class="c-blue" v-if="task.status == 'In Waiting' ">{{ task.status }}</span>
                            <span class="c-orange" v-if="task.status == 'In Check' ">{{ task.status }}</span>
                            <span class="c-red" v-if="task.status == 'In Hold' ">{{ task.status }}</span>
                            <span class="c-green" v-if="task.status == 'Done' ">{{ task.status }}</span>
                          </div>
                          <div class="task-ctnt-common task-det text-center">
                            <span class="stm-cont-h">Last Update</span>
                            <span>{{ task.lastUpdated }}</span>
                          </div>
                          <div
                            class="task-ctnt-common task-det text-center tsk-more-det"
                          >
                            <a href="#">More Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Jobs Title</span>
                        <span
                          >Project ID : Category – SubCatgeory Date and
                          Time</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Tasks</span>
                        <span class="c-green"
                          ><font class="c-red">5</font> / 3</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Status</span>
                        <span class="c-orange">In Hold</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Ticket ID: 1234556</span>
                      <span>Ticket Reason: Work not completed</span>
                      <span>Claimed by: User</span>
                    </div>
                  </div>
    </div>
</template>
<script>
export default {
   data() {
    return {
      taskList: [
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "In Hold",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "In Check",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "Done",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "Done",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "In Check",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "In Waiting",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "In Hold",
          lastUpdated: "12.10.2020 – 19:00",
        },
        {
          title: "task title",
          jobTitle: "jobtitle",
          status: "Done",
          lastUpdated: "12.10.2020 – 19:00",
        },
      ],
    };
  },
}
</script>