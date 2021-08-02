<template>
  <div id="view-project">
    <div class="container tab-content-parent">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div class="your-profile">
              <div
                class="rt-panel-h inv-rt-panel-h crsr-pntr"
                data-toggle="modal"
                data-target="#invent-freelancer"
              >
                <div class="inv-flc">
                  <span>
                    <svg class="">
                      <use xlink:href="@/assets/svg-sprite.svg#warning"></use>
                    </svg>
                  </span>
                  <div class="inv-det" v-b-modal="'invent-freelancer'">
                    <span class="inv-det-h">Invent Freelancer</span>
                    <span class="inv-det-txt">Get more quote</span>
                  </div>
                  <ViewProposalModal></ViewProposalModal>
                </div>
              </div>
            </div>
          </div>
          <div class="container-parent-tab ui-block">
            <div class="row">
              <div class="col col-12">
                <div class="your-profile">
                  <div class="rt-panel-h">Categories</div>
                </div>
                <ul class="nav nav-tabs nav-justified">
                  <li class="nav-item">
                    <a class="nav-link active">Project Proposals</a>
                    <ul class="sub-menu">
                      <li class="active">
                        <span class="c-red">15</span
                        ><a
                          href="#"
                          >New Proposals</a
                        >
                      </li>
                      <li>
                        <span class="c-red">2</span><a href="#">Remember</a>
                      </li>
                      <li>
                        <span class="c-red">1</span><a href="#">Rejected</a>
                      </li>
                      <li>
                        <span class="c-red">4</span><a href="#">Messaged</a>
                      </li>
                      <li>
                        <span class="c-red">2</span><a href="#">Reported</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="http://ihannoveraner.de/service-user/project-description.php"
                      >Project Description</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Project Tasks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Project Files</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Project Requiemnts</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Project Budget</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ui-block">
            <div class="your-profile">
              <div class="rt-panel-h">Overview</div>
              <div class="ststc ststc-left">
                <span class="ststc-h">Post Date and Time</span>
                <span>12.10.2012 – 19:30</span>
              </div>
              <div class="ststc ststc-left">
                <span class="ststc-h">Total View</span>
                <span>400 views</span>
              </div>
              <div class="ststc ststc-left">
                <span class="ststc-h">Project expired in</span>
                <span>5 days , 10 Hours , 30 min</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12
            tab-content tab-content-nbg
          "
        >
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
              <div class="row">
                <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div
                    class="pane-common-inner pop-over crsr-pntr"
                    data-toggle="modal"
                    data-target="#smart-system"
                    v-b-modal="'invent-freelancer-2'"
                  >
                    <div class="task-content-row">
                      <div class="no-prop">
                        <div class="no-prop-img">
                          <img src="@/assets/img/no-proposal.png" />
                        </div>
                        <span class="no-prop-y">No Proposals yet</span>
                        <span class="no-prop-inv"
                          >Invent Freelancer to your Project</span
                        >
                      </div>
                    </div>
                  </div>
                  <ViewProposalModal2></ViewProposalModal2>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="row-prop-container">
                        <div class="row-prop-tags row-prop-std">Recommand</div>
                        <div class="row-prop-tags row-prop-nhre c-red">
                          New here
                        </div>
                        <div class="row-prop-inner-col row-prop-img">
                          <img
                            src="@/assets/img/mencap.png"
                            class="no-radius"
                          />
                        </div>
                        <div
                          class="row-prop-inner-col row-prop-content-container"
                        >
                          <div class="row-prop-c-name">
                            <span>Company Name</span>
                          </div>
                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt">Now</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Fix – Hourly - Week</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt">Yes – 3 Weeks</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <span class="row-prop-h row-prop-h-g"
                                >250,00 €</span
                              >
                              <span class="row-prop-txt"
                                >Hourly – 10 € hr.</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-prop-detail">
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                          </svg>
                          <span class="row-prop-dl-txt">GE</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">Hannover</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#bubble-speak"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Hours</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Jobs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="row-prop-container">
                        <div class="row-prop-tags row-prop-sctd">Selected</div>
                        <div class="row-prop-inner-col row-prop-img">
                          <img
                            src="@/assets/img/fl-user.png"
                            class="no-radius"
                          />
                        </div>
                        <div
                          class="row-prop-inner-col row-prop-content-container"
                        >
                          <div class="row-prop-c-name">
                            <span>Freelancer Name</span>
                            <div class="row-prop-rating-container">
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                            </div>
                          </div>

                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt">Now</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Fix – Hourly - Week</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt">Yes – 3 Weeks</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <span class="row-prop-h row-prop-h-g"
                                >250,00 €</span
                              >
                              <span class="row-prop-txt"
                                >Hourly – 10 € hr.</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-prop-detail">
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                          </svg>
                          <span class="row-prop-dl-txt">GE</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">Hannover</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#bubble-speak"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Hours</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Jobs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="row-prop-container">
                        <div class="row-prop-tags row-prop-rcd">Recommand</div>
                        <div class="row-prop-inner-col row-prop-img">
                          <img
                            src="@/assets/img/mencap.png"
                            class="no-radius"
                          />
                        </div>
                        <div
                          class="row-prop-inner-col row-prop-content-container"
                        >
                          <div class="row-prop-c-name">
                            <span>Company Name</span>
                            <div class="row-prop-rating-container">
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt">Now</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Fix – Hourly - Week</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt">Yes – 3 Weeks</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <span class="row-prop-h row-prop-h-g"
                                >250,00 €</span
                              >
                              <span class="row-prop-txt"
                                >Hourly – 10 € hr.</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-prop-detail">
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                          </svg>
                          <span class="row-prop-dl-txt">GE</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">Hannover</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#bubble-speak"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Hours</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Jobs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="row-prop-container">
                        <div class="row-prop-tags row-prop-ptr">Partner</div>
                        <div class="row-prop-inner-col row-prop-img">
                          <img
                            src="@/assets/img/fl-user.png"
                            class="no-radius"
                          />
                        </div>
                        <div
                          class="row-prop-inner-col row-prop-content-container"
                        >
                          <div class="row-prop-c-name">
                            <span>Freelancer Name</span>
                            <div class="row-prop-rating-container">
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                              <svg class="row-prop-rating-svg">
                                <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                              </svg>
                            </div>
                          </div>

                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt">Now</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Fix – Hourly - Week</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt">Yes – 3 Weeks</span>
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <span class="row-prop-h row-prop-h-g"
                                >250,00 €</span
                              >
                              <span class="row-prop-txt"
                                >Hourly – 10 € hr.</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-prop-detail">
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                          </svg>
                          <span class="row-prop-dl-txt">GE</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">Hannover</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#bubble-speak"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Hours</span>
                        </div>
                        <div class="row-prop-dl-col">
                          <svg class="row-prop-dl-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                          </svg>
                          <span class="row-prop-dl-txt">0 Jobs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 col-props
                  "
                >
                  <div class="ui-block">
                    <div class="ls-dets">
                      <img class="ls-brs-img" src="@/assets/img/v-prop-1.png" />
                      <span class="ls-s-dets-com ls-dets-bp"
                        >View all Proposals</span
                      >
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="ls-dets">
                      <img class="ls-brs-img" src="@/assets/img/v-prop-2.png" />
                      <span class="ls-s-dets-com ls-dets-bp"
                        >Clear all requiements</span
                      >
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="ls-dets">
                      <img class="ls-brs-img" src="@/assets/img/v-prop-3.png" />
                      <span class="ls-s-dets-com ls-dets-bp"
                        >Select the right Company</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-2">
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
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Status</b></span>
                  <span class="c-green">Open</span>
                </div>
              </div>
              <div class="tab-content">
                <div class="tab-pane show active">
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="prgs-avt">
                        <img src="@/assets/img/t-image.png" /><img
                          class="prgs-avtflg"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Jobs Title</b></span>
                        <span>Project ID</span>
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Tasks</b></span>
                        <span class="c-green"
                          ><font class="c-red">4</font> / 3</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Milestone</b></span>
                        <span class="c-green"
                          ><font class="c-red">3</font> / 2</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Status</b></span>
                        <span class="c-orange">In Hold</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Ticket ID: 1234556</span>
                      <span>Ticket Reason: Work not completed</span>
                      <span>Claimed by: Company</span>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="prgs-avt">
                        <img src="@/assets/img/t-image.png" /><img
                          class="prgs-avtflg"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Jobs Title</b></span>
                        <span>Project ID</span>
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Tasks</b></span>
                        <span class="c-green"
                          ><font class="c-red">4</font> / 3</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Milestone</b></span>
                        <span class="c-green"
                          ><font class="c-red">3</font> / 2</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Status</b></span>
                        <span class="c-red">Canceled</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Ticket ID: 1234556</span>
                      <span>Ticket Reason: Work not completed</span>
                      <span>Claimed by: User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-3">
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
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID : Category – SubCatgeory</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
              </div>
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID : Category – SubCatgeory</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
              </div>
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID : Category – SubCatgeory</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-4">
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
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
                <div class="tckt-t-w tckt-t-w-btn">
                  <button class="btn btn-lg btn-green">Close</button>
                </div>
              </div>
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
                <div class="tckt-t-w tckt-t-w-btn">
                  <button class="btn btn-lg btn-green">Close</button>
                </div>
              </div>
              <div class="task-content ticket-prgs-common">
                <div class="prgs-avt">
                  <img src="@/assets/img/t-image.png" /><img
                    class="prgs-avtflg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="tckt-t-w">
                  <span><b>Jobs Title</b></span>
                  <span>Project ID</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Tasks</b></span>
                  <span class="c-green"><font class="c-red">4</font> / 3</span>
                </div>
                <div class="tckt-t-w">
                  <span><b>Milestone</b></span>
                  <span class="c-green"><font class="c-red">3</font> / 2</span>
                </div>
                <div class="tckt-t-w tckt-t-w-btn">
                  <button class="btn btn-lg btn-green">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-5">
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
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="prgs-avt">
                        <img src="@/assets/img/t-image.png" /><img
                          class="prgs-avtflg"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Jobs Title</b></span>
                        <span>Project ID</span>
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Tasks</b></span>
                        <span class="c-green"
                          ><font class="c-red">4</font> / 3</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Milestone</b></span>
                        <span class="c-green"
                          ><font class="c-red">3</font> / 2</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Status</b></span>
                        <span class="c-green">Open</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Ticket ID: 1234556</span>
                      <span>Ticket Reason: Work not completed</span>
                      <span>Claimed by: Company</span>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="prgs-avt">
                        <img src="@/assets/img/t-image.png" /><img
                          class="prgs-avtflg"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Jobs Title</b></span>
                        <span>Project ID</span>
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Tasks</b></span>
                        <span class="c-green"
                          ><font class="c-red">4</font> / 3</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Milestone</b></span>
                        <span class="c-green"
                          ><font class="c-red">3</font> / 2</span
                        >
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Status</b></span>
                        <span class="c-green">Open</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Ticket ID: 1234556</span>
                      <span>Ticket Reason: Work not completed</span>
                      <span>Claimed by: User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-6">
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
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span><b>Jobs Title</b></span>
                        <span
                          >Project ID : Category – SubCatgeory Date and
                          Time</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span><b>Proposals</b></span>
                        <span class="c-green">15</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Reason: Job was added by Mistakes</span>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="tckt-t-w task-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                        </svg>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span><b>Jobs Title</b></span>
                        <span
                          >Project ID : Category – SubCatgeory Date and
                          Time</span
                        >
                      </div>
                      <div class="task-ctnt-common task-det text-center">
                        <span><b>Proposals</b></span>
                        <span class="c-green">15</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Reason: Job was added by Mistakes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>



<script>
import ViewProposalModal from "@/components/my-projects/view-proposal-modals/ViewProposalModal";
import ViewProposalModal2 from "@/components/my-projects/view-proposal-modals/ViewProposalModal2";
export default {
  components: { ViewProposalModal, ViewProposalModal2 }
}
</script>