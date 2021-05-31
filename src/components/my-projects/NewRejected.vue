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
                    data-target="#tsk-v-in-reject"
                  >
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">1. Task Title</span>
                        <span>Job Title</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Submit Time</span>
                        <span>Date and Time</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Status</span>
                        <span class="c-red">Rejected</span>
                      </div>
                      <div
                        class="task-ctnt-common task-det text-center tsk-more-det"
                      >
                        <a href="#">More Details</a>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span class="text-center"
                        >Rejected Reason: Work not completed</span
                      >
                    </div>
                  </div>
                  <div
                    class="task-content-row crsr-pntr pop-over"
                    data-dismiss="modal"
                    aria-label="Close"
                    data-toggle="modal"
                    data-target="#tsk-v-in-reject"
                  >
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">1. Task Title</span>
                        <span>Job Title</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Submit Time</span>
                        <span>Date and Time</span>
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span class="stm-cont-h">Status</span>
                        <span class="c-red">Rejected</span>
                      </div>
                      <div
                        class="task-ctnt-common task-det text-center tsk-more-det"
                      >
                        <a href="#">More Details</a>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span class="text-center"
                        >Rejected Reason: Work not completed</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>