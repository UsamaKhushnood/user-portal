<template>
  <div>
    <div class="row t-container tab-pane show active" id="tab-2-1">
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
                style="enable-background: new 0 0 255 255"
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
            <div class="task-content-row flow-v">
              <div class="task-content ticket-prgs-common t-dots-wrap">
                <div class="tckt-t-w task-icon">
                  <svg class="">
                    <use xlink:href="#user-1"></use>
                  </svg>
                </div>
                <div class="task-ctnt-common task-det">
                  <span class="stm-cont-h">Jobs Title</span>
                  <span>Job ID</span>
                </div>
                <div class="task-ctnt-common task-det">
                  <span class="stm-cont-h">Job Details</span>
                  <span>Fulltime, Hourly paid</span>
                </div>
                <div class="task-ctnt-common task-det">
                  <span class="stm-cont-h">Date</span>
                  <span>12.10.2020</span>
                </div>
                <div class="task-ctnt-common task-det">
                  <span class="stm-cont-h">Matches</span>
                  <span class="c-red">20</span>
                </div>

                <div
                  class="
                    task-ctnt-common task-det
                    text-right
                    task-icon-com task-ctnt-dot
                    opacity-1
                  "
                >
                  <div class="job-search-trigger">
                    <div class="job-search-trigger-menu">
                      <a
                        id="trigger-1"
                        class="jobsTrigger"
                        @click="showDropDown = !showDropDown"
                      >
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style="enable-background: new 0 0 512 512"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <circle cx="256" cy="256.198" r="39.659"></circle>
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle
                                cx="374.978"
                                cy="256.198"
                                r="39.659"
                              ></circle>
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle
                                cx="137.022"
                                cy="256.198"
                                r="39.659"
                              ></circle>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341    c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.046,216.341,216.341    S375.275,472.341,256,472.341z"
                              ></path>
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
                      </a>
                      <div
                        id="Menutrigger-1"
                        class="jobsMenu"
                        :class="{ active: showDropDown }"
                      >
                        <span class="jobstriggerOptions">Options</span>
                        <a class="jobsLink" href="#">
                          <span class="jobsMenuTitle">Edit the Job</span>
                          <span class="jobsMenuText"
                            >Only Invented Freelancer can bid</span
                          >
                        </a>
                        <a class="jobsLink" href="#">
                          <span class="jobsMenuTitle">Remove the Job</span>
                          <span class="jobsMenuText"
                            >This Job will be closed</span
                          >
                        </a>
                        <a class="jobsLink" href="#">
                          <span class="jobsMenuTitle">Set on Hold</span>
                          <span class="jobsMenuText"
                            >Project will be removed</span
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="job-srch-btm-wrapper">
                <span>Applied : <font class="c-blue">20</font></span>
                <span>Rejected : <font class="c-red">5</font></span>
                <span>Interviews : <font class="c-green">10</font></span>
                <span>declined: <font class="c-orange">5</font></span>
              </div>
              <a
                class="abs-link abs-pd-r"
                href="http://ihannoveraner.de/service-user/job-proposals.php"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      portal: [
        {
          title: "Job Tifdtle",
          id: 2345,
          time: "Fulltime",
          paid: "Hourly Paid",
          date: "12.10.2020",
          matches: "20",
        },
        {
          title: "Job Title",
          id: 6789,
          time: "Fulltime",
          paid: "Hourly Paid",
          date: "12.12.2021",
          matches: "50",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
a.jobsLink {
  transition: 0.3s all ease;
  &:hover {
    background: green;
    span {
      color: #fff;
    }
  }
}
</style>