<template>
    <div class="col-12 tab-sec-ticket tab-not">
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
              <div class="tab-content">
                <div class="tab-pane show active">
                  <div
                    class="task-content-row crsr-pntr pop-over"
                    data-dismiss="modal"
                    aria-label="Close"
                    data-toggle="modal"
                    data-target="#tsk-v-in-check"
                    v-b-modal="'view-in-done' + taskIndex"
                    v-for="(task, taskIndex) in tasks" :key="taskIndex"
                  >
                    <div class="task-content ticket-prgs-common no-border">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">{{ taskIndex }}. {{ task.title }}</span>
                        <span>{{ task.projectTitle }}</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Status</span>
                        <span class="c-green">{{ task.status }}</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Started Date</span>
                        <span>{{ task.startedDate }}</span>
                      </div>
                      <div
                        class="task-ctnt-common task-det text-center tsk-more-det"
                      >
                        <a href="#">More Details</a>
                      </div>
                    </div>

                    <ViewInDoneModal :taskIndex="taskIndex"></ViewInDoneModal>
                  </div>
                  

                </div>
              </div>
            </div>
</template>

<script>
import ViewInDoneModal from "./modals/in-done-modals/ViewInDoneModal"
export default {
  components : { ViewInDoneModal },
  data(){
    return {
      tasks: [
        {
          title: "Task Title",
          projectTitle: "Project Title",
          status: "In Check",
          startedDate: "12.12.2020 – 20:00"
        },
                {
          title: "Task Title",
          projectTitle: "Project Title",
          status: "In Check",
          startedDate: "12.12.2020 – 20:00"
        }
      ]
    }
  }
}
</script>