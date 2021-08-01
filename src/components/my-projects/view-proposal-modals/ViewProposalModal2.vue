<template>
  <div>
    <b-modal :id="'invent-freelancer-2'" size="xl" hide-footer hide-header>
      <template #default="{ close }">
        <div class="modal-content">
          <a
            href="#"
            class="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <svg class="olymp-close-icon" viewBox="0 0 32 32" @click="close()">
              <title>close-icon</title>
              <path
                d="M14.222 17.778h3.556v-3.556h-3.556v3.556zM31.084 3.429l-2.514-2.514-10.057 10.057 2.514 2.514 10.057-10.057zM0.916 28.571l2.514 2.514 10.057-10.055-2.516-2.514-10.055 10.055zM18.514 21.029l10.057 10.055 2.514-2.514-10.057-10.055-2.514 2.514zM0.916 3.431l10.057 10.055 2.516-2.514-10.059-10.057-2.514 2.516z"
              ></path>
            </svg>
          </a>
          <div class="ui-block">
            <div class="ui-block-title ui-block-title-bap block-sm-sys">
              <div class="block-sm-sys-com sm-sys-logo">
                <img src="@/assets/img/comp-name.png" />
              </div>
              <span class="block-sm-sys-com stm-popup-title">
                <font>SmartSystems GmbH</font>
                <br />
                <font class="strt-n-p">
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                  </svg>
                  DE – Niedersachsen – Hannover
                </font>
              </span>
              <div class="block-sm-sys-com review-pro">
                <div class="pro-review-r">
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                  </svg>
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                  </svg>
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                  </svg>
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                  </svg>
                  <svg class="">
                    <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                  </svg>
                </div>
                <div class="sm-sys-profile"><a href="#">Profile</a></div>
              </div>
              <div class="block-sm-sys-com sm-sys-iconz">
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#chat-4"></use>
                </svg>
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
                </svg>
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#bookmark-1"></use>
                </svg>
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#error-1"></use>
                </svg>
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
                </svg>
              </div>
              <div class="block-sm-sys-com sm-sys-apply">
                <div class="sm-sys-apply-now"><a href="#">Apply Now</a></div>
              </div>
            </div>
          </div>
          <div class="main-header main-header-user-common main-header-pop">
            <div class="content-bg-wrap bg-group"></div>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="main-header-content-left">
                    <span class="mhc-h">Job Title will be here</span>
                    <span class="">Date / Time Catgeory</span>
                    <div class="mhc-h-g">
                      Application ends:&nbsp;December 15, 2022
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 main-h-menu">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#tab-7-1"
                        :class="[{ active: $route.hash === '' }]"
                        >Our Offer
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-7-2"
                        :class="[{ active: $route.hash === '#tab-7-2' }]"
                        >Portfolio
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-7-3"
                        :class="[{ active: $route.hash === '#tab-7-3' }]"
                        >Reviews
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-7-4"
                        :class="[{ active: $route.hash === '#tab-7-4' }]"
                        >Current Projects
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-7-5"
                        :class="[{ active: $route.hash === '#tab-7-5' }]"
                        >Hire
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content tab-content-abt-pop">
            <div
              id="tab-7-1"
              :class="[{ active: $route.hash === '' }]"
              class="modal-body tab-pane modal-body-bap show "
            >
              <form class="custom-form row">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">About the Work</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 abt-t-work">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum. Stet clita
                          kasd gubergren, no sea takimata sanctus est Lorem
                          ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                          consetetur sadipscing elitr, sed diam nonumy eirmod
                          tempor invidunt ut labore et dolore magna aliquyam
                          erat, sed diam voluptua. At vero eos et accusam et
                          justo duo dolores et ea rebum. Stet clita kasd
                          gubergren, no sea takimata sanctus est Lorem ipsum
                          dolor sit amet.
                          <br /><br />

                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore eu feugiat nulla facilisis at vero eros et
                          accumsan et iusto odio dignissim qui blandit praesent
                          luptatum zzril delenit augue duis dolore te feugait
                          nulla facilisi. Lorem ipsum dolor sit amet,
                          <br /><br />

                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore eu feugiat nulla facilisis at vero eros et
                          accumsan et iusto odio dignissim qui blandit praesent
                          luptatum zzril delenit augue duis dolore te feugait
                          nulla facilisi. Lorem ipsum dolor sit amet, feugiat
                          nulla facilisis at vero eros et accumsan et iusto odio
                          dignissim qui blandit praesent luptatum zzril delenit
                          augue duis dolore te feugait nulla facilisi. Lorem
                          ipsum dolor sit amet, ...&nbsp;
                          <a href="#">(more)</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Work and budget</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 abt-t-work">
                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Houry – Fix - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt"
                                >Now – By Date - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt"
                                >Yes – No – 1 Month</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#wallet-1"></use>
                              </svg>
                              <span class="row-prop-h">Budget and Price</span>
                              <span class="row-prop-txt"
                                >Now – By Date - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#document"></use>
                              </svg>
                              <span class="row-prop-h">Contract</span>
                              <span class="row-prop-txt"
                                >Standard - Express</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title">Work requiments</span>
                        </div>
                      </div>
                      <div class="pd-req-container">
                        <a class="pd-req-col"> WebDesign </a>
                        <a class="pd-req-col"> Laravel </a>
                        <a class="pd-req-col"> Vue.js </a>
                        <a class="pd-req-col"> API </a>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title">Company Skills</span>
                        </div>
                      </div>
                      <div class="pd-req-container">
                        <a class="pd-req-col"> Responsible </a>
                        <a class="pd-req-col"> On Time </a>
                        <a class="pd-req-col"> Fullstack Developer </a>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title">Documents</span>
                        </div>
                      </div>
                      <div class="pd-fls-container">
                        <div class="pd-fls-col">
                          <div class="pd-fls-inner">
                            <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#word"></use>
                              </svg>
                            </div>
                            <div class="pd-flsi-cmn pd-flsi-cmn-detail">
                              <span class="pd-fls-title">Document Title</span>
                              <span class="pd-fls-txt"
                                >From 12.10.2020 – 2MB</span
                              >
                            </div>
                            <a class="doc-eye" href="#">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#eye-1"></use>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="pd-fls-col">
                          <div class="pd-fls-inner">
                            <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#word"></use>
                              </svg>
                            </div>
                            <div class="pd-flsi-cmn pd-flsi-cmn-detail">
                              <span class="pd-fls-title">Document Title</span>
                              <span class="pd-fls-txt"
                                >From 12.10.2020 – 2MB</span
                              >
                            </div>
                            <a class="doc-eye" href="#">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#eye-1"></use>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title">Work Tasks</span>
                        </div>
                      </div>
                      <div class="pd-tsk-container">
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title"
                            >Extra Tasks added by Company</span
                          >
                        </div>
                      </div>
                      <div class="pd-tsk-container">
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title">Milestone</span>
                        </div>
                      </div>
                      <div class="pd-tsk-container">
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">
                                Milestone for Task 1 - 2
                              </div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">
                                Milestone for Task 1 - 2
                              </div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                    mdl-bap-col
                  "
                >
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Not sure who to hire?</div>
                      <div class="ls-dets">
                        <img class="ls-brs-img" src="@/assets/img/bpart-1.png" />
                        <span class="ls-s-dets-texts">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <!-- ... end Personal Information Form  -->
            </div>
            <div id="tab-7-2" class="modal-body tab-pane modal-body-bap"
            :class="[{ active: $route.hash === '#tab-7-2' }]"
            >
              <form class="custom-form row mt-4" style="margin-left: 10px; margin-right: 10px;">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Our Portfolio</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 abt-t-work">
                          <section class="section">
                            <div class="grid">
                              <div class="item">
                                <div class="item__details">
                                  jelly-o brownie sweet
                                </div>
                              </div>
                              <div class="item item--large">
                                <div class="item__details">
                                  Muffin jelly gingerbread
                                </div>
                              </div>
                              <div class="item item--medium">
                                <div class="item__details">
                                  sesame snaps chocolate
                                </div>
                              </div>
                              <div class="item item--large">
                                <div class="item__details">Oat cake</div>
                              </div>
                              <div class="item item--full">
                                <div class="item__details">
                                  jujubes cheesecake
                                </div>
                              </div>
                              <div class="item item--medium">
                                <div class="item__details">
                                  Dragée pudding brownie
                                </div>
                              </div>
                              <div class="item item--large">
                                <div class="item__details">Oat cake</div>
                              </div>
                              <div class="item">
                                <div class="item__details">powder toffee</div>
                              </div>
                              <div class="item item--medium">
                                <div class="item__details">
                                  pudding cheesecake
                                </div>
                              </div>
                              <div class="item item--large">
                                <div class="item__details">
                                  toffee bear claw
                                </div>
                              </div>
                              <div class="item">
                                <div class="item__details">
                                  cake cookie croissant
                                </div>
                              </div>
                              <div class="item item--medium">
                                <div class="item__details">
                                  liquorice sweet roll
                                </div>
                              </div>
                              <div class="item item--medium">
                                <div class="item__details">
                                  chocolate marzipan
                                </div>
                              </div>
                              <div class="item item--large">
                                <div class="item__details">
                                  danish dessert lollipop
                                </div>
                              </div>
                              <div class="item">
                                <div class="item__details">
                                  sugar plum dragée
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                    mdl-bap-col
                  "
                >
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput-2"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review-2"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Not sure who to hire?</div>
                      <div class="ls-dets">
                        <img class="ls-brs-img" src="@/assets/img/bpart-1.png" />
                        <span class="ls-s-dets-texts">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="tab-7-3" class="modal-body tab-pane modal-body-bap"
            :class="[{ active: $route.hash === '#tab-7-3' }]"
            >
              <form class="custom-form row">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Our Reviews</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <div
                        class="
                          row
                          agr-bud-container agr-bud-container-huge
                          no-margin
                        "
                      >
                        <div class="text-center mdl-icon mlstn-container">
                          <div
                            class="ui-block-title prgs-inner-title mlstn-title"
                          >
                            <div class="tckt-ctnt-common tckt-avatar">
                              <div class="tckt-author-thumb">
                                <img
                                  alt="author"
                                  src="@/assets/img/avatar68-sm.jpg"
                                  class="avatar"
                                />
                                <span
                                  class="icon-status online"
                                  style="width: 15px; height: 15px"
                                ></span>
                              </div>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">User Name</span>
                              <span>SmartSystem</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Project Title</span>
                              <span>Create HTML Template</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Date</span>
                              <span>01.11.2020 – 31.11.2020</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Price</span>
                              <span>5000,00 €</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Company Review</span>
                              <span>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="row no-margin">
                            <div class="col col-12 mlstn-inner">
                              <div class="tckt-not-container">
                                <span class="tckt-not-txt">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua. At vero eos
                                  et accusam et justo duo dolores et ea rebum.
                                  Stet clita kasd gubergren, no sea takimata
                                  sanctus est Lorem ipsum dolor sit amet.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            text-center
                            mdl-icon
                            mlstn-container mlstn-container-small
                          "

                        >
                          <div
                            class="ui-block-title prgs-inner-title mlstn-title"
                          >
                            <div class="msltn-avt">
                              <img src="@/assets/img/mencap.png" />
                            </div>

                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Company Name</span>
                              <span>SmartSystem GmbH</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Review ID</span>
                              <span>RW-123456667</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">User Reviews</span>
                              <span>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="row no-margin">
                            <div class="col col-12 mlstn-inner">
                              <div class="tckt-not-container">
                                <span class="tckt-not-txt">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua. At vero eos
                                  et accusam et justo duo dolores et ea rebum.
                                  Stet clita kasd gubergren, no sea takimata
                                  sanctus est Lorem ipsum dolor sit amet.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          row
                          agr-bud-container agr-bud-container-huge
                          no-margin
                        "
                      >
                        <div class="text-center mdl-icon mlstn-container">
                          <div
                            class="ui-block-title prgs-inner-title mlstn-title"
                          >
                            <div class="tckt-ctnt-common tckt-avatar">
                              <div class="tckt-author-thumb">
                                <img
                                  alt="author"
                                  src="@/assets/img/avatar68-sm.jpg"
                                  class="avatar"
                                />
                                <span
                                  class="icon-status online"
                                  style="width: 15px; height: 15px"
                                ></span>
                              </div>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">User Name</span>
                              <span>SmartSystem</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Project Title</span>
                              <span>Create HTML Template</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Date</span>
                              <span>01.11.2020 – 31.11.2020</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Price</span>
                              <span>5000,00 €</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Company Review</span>
                              <span>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="row no-margin">
                            <div class="col col-12 mlstn-inner">
                              <div class="tckt-not-container">
                                <span class="tckt-not-txt">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua. At vero eos
                                  et accusam et justo duo dolores et ea rebum.
                                  Stet clita kasd gubergren, no sea takimata
                                  sanctus est Lorem ipsum dolor sit amet.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            text-center
                            mdl-icon
                            mlstn-container mlstn-container-small
                          "
                        >
                          <div
                            class="ui-block-title prgs-inner-title mlstn-title"
                          >
                            <div class="msltn-avt">
                              <img src="@/assets/img/mencap.png" />
                            </div>

                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Company Name</span>
                              <span>SmartSystem GmbH</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">Review ID</span>
                              <span>RW-123456667</span>
                            </div>
                            <div class="tckt-t-w tckt-t-w-mlstn">
                              <span class="mlstn-h">User Reviews</span>
                              <span>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                                <svg class="sw-rat-icon">
                                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="row no-margin">
                            <div class="col col-12 mlstn-inner">
                              <div class="tckt-not-container">
                                <span class="tckt-not-txt">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua. At vero eos
                                  et accusam et justo duo dolores et ea rebum.
                                  Stet clita kasd gubergren, no sea takimata
                                  sanctus est Lorem ipsum dolor sit amet.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                    mdl-bap-col
                  "
                >
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput-3"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review-3"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Not sure who to hire?</div>
                      <div class="ls-dets">
                        <img class="ls-brs-img" src="@/assets/img/bpart-1.png" />
                        <span class="ls-s-dets-texts">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="tab-7-4" class="modal-body tab-pane modal-body-bap"
            :class="[{ active: $route.hash === '#tab-7-4' }]"
            >
              <form class="custom-form row mt-4" style="margin-left: 10px; margin-right: 10px;">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Current Project</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                    mdl-bap-col
                  "
                >
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput-4"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review-4"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Not sure who to hire?</div>
                      <div class="ls-dets">
                        <img class="ls-brs-img" src="@/assets/img/bpart-1.png" />
                        <span class="ls-s-dets-texts">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="tab-7-5" class="modal-body tab-pane modal-body-bap"
            :class="[{ active: $route.hash === '#tab-7-5' }]"
            >
              <div class="custom-form row mt-4" style="margin-left: 10px; margin-right: 10px;">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Work and budget</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 abt-t-work">
                          <div class="row-prop-c-det">
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#calendar-1"></use>
                              </svg>
                              <span class="row-prop-h">Work Type</span>
                              <span class="row-prop-txt"
                                >Houry – Fix - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#rocket-ship"></use>
                              </svg>
                              <span class="row-prop-h">Work Start</span>
                              <span class="row-prop-txt"
                                >Now – By Date - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
                              </svg>
                              <span class="row-prop-h">Warranty</span>
                              <span class="row-prop-txt"
                                >Yes – No – 1 Month</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#wallet-1"></use>
                              </svg>
                              <span class="row-prop-h">Budget and Price</span>
                              <span class="row-prop-txt"
                                >Now – By Date - Agreement</span
                              >
                            </div>
                            <div class="row-prop-inner-col row-prop-content">
                              <svg class="olymp-close-icon">
                                <use xlink:href="@/assets/svg-sprite.svg#document"></use>
                              </svg>
                              <span class="row-prop-h">Contract</span>
                              <span class="row-prop-txt"
                                >Standard - Express</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title cmn-title-no-p">
                        <div class="abt-project abt-project-no-p">
                          <span class="abt-title">Milestone</span>
                        </div>
                        <div class="new-edit">
                          <span
                            class="new-edit-btn pop-over"
                            data-toggle="modal"
                            data-target="#create-milestone"
                            >New Milestone</span
                          >
                          <span class="new-edit-btn">Edit Milestone</span>
                        </div>
                      </div>
                      <div class="pd-tsk-container">
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">
                                Milestone for Task 1 - 2
                              </div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">
                                Milestone for Task 1 - 2
                              </div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title cmn-title-no-p">
                        <div class="abt-project abt-project-no-p">
                          <span class="abt-title">Tasks</span>
                        </div>
                        <div class="new-edit">
                          <span class="new-edit-btn">New Tasks</span>
                          <span class="new-edit-btn">Edit Tasks</span>
                        </div>
                      </div>
                      <div class="pd-tsk-container">
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">1. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">3. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pd-tsk-col">
                          <div class="pd-tsk-inner">
                            <div class="pd-tski-cmn pd-tski-cmn-icon">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                              </svg>
                            </div>
                            <div class="pd-tski-cmn pd-tski-cmn-detail">
                              <div class="pd-tsk-title">4. Task Title</div>
                              <div class="pd-tsk-detail">
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Task ID</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">1233232312</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Created</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">01.10.2020</span>
                                </div>
                                <div class="pd-tsk-row">
                                  <span class="pd-tsk-tag">Milestone</span>
                                  <span class="pd-tsk-scolon">:</span>
                                  <span class="pd-tsk-assign">500,00 $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                    mdl-bap-col
                  "
                >
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput-5"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review-5"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="fas fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i
                            ><i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mdl-bap-col">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Policy and Terms</h6>
                    </div>
                    <div class="col-12">
                      <div class="row term_container">
                        <div class="col-lg-12 col-xl-6 left-term">
                          <span class="term-h">AGB</span>
                          <div class="term-txt">
                            1.1&thinsp;Diese Allgemeinen Geschäftsbedingungen
                            (nachfolgend "AGB") der OW networks GmbH
                            (nachfolgend "Lizenzgeber"), gelten für alle
                            Verträge über die Lieferung von nicht auf einem
                            körperlichen Datenträger befindlichen Daten, die in
                            digitaler Form hergestellt und bereitgestellt werden
                            (digitale Inhalte), die ein Verbraucher oder
                            Unternehmer (nachfolgend "Lizenznehmer") mit dem
                            Lizenzgeber hinsichtlich der vom Lizenzgeber in
                            seinem Online-Shop dargestellten digitalen Inhalte
                            abschließt. Hiermit wird der Einbeziehung von
                            eigenen Bedingungen des Lizenznehmers widersprochen,
                            es sei denn, es ist etwas anderes vereinbart.
                            <br /><br />
                            1.2&thinsp;Vertragsgegenstand ist die Überlassung
                            der vom Lizenzgeber angebotenen digitalen Inhalte an
                            den Lizenznehmer in elektronischer Form unter
                            Einräumung bestimmter, in diesen AGB genauer
                            geregelten Nutzungsrechte.
                            <br /><br />
                            1.3&thinsp;Verbraucher im Sinne dieser AGB ist jede
                            natürliche Person, die ein Rechtsgeschäft zu Zwecken
                            abschließt, die überwiegend weder ihrer gewerblichen
                            noch ihrer selbständigen beruflichen Tätigkeit
                            zugerechnet werden können. Unternehmer im Sinne
                            dieser AGB ist eine natürliche oder juristische
                            Person oder eine rechtsfähige Personengesellschaft,
                            die bei Abschluss eines Rechtsgeschäfts in Ausübung
                            ihrer gewerblichen oder selbständigen beruflichen
                            Tätigkeit handelt.
                          </div>
                          <div class="term-check">
                            <input id="agb" type="checkbox" />
                            <label for="agb">
                              Ich habe die
                              <a href="#"
                                >Allgemeine Geschäftsbedingungen (AGB)</a
                              >
                              gelesen.
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-12 col-xl-6 right-term">
                          <span class="term-h">Widerrufsbelehrung</span>
                          <div class="term-txt">
                            Verbrauchern steht grundsätzlich ein Widerrufsrecht
                            zu. Nähere Informationen zum Widerrufsrecht ergeben
                            sich aus der Widerrufsbelehrung des Lizenzgebers.
                          </div>
                          <div class="term-check">
                            <input id="wider" type="checkbox" />
                            <label for="wider">
                              Ich habe die
                              <a href="#">Widerrufsbelehrung</a> gelesen.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col col-12 text-center">
                    <div class="btn-p-pop">
                      <span class="txt-p-pop"
                        >Bitte beachten Sie unsere
                        <a href="#">Datenschutzerklarung</a></span
                      >
                      <button
                        class="
                          btn btn-primary btn-lg
                          full-width
                          c-form-btn
                          btn-custom-primary
                        "
                        v-b-modal="'hire-now-modal'"
                      >
                        Hire Now
                      </button>
                      <HireNowModal></HireNowModal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<style scoped>
/* .ui-block {
    margin-left: 5px;
    margin-right: 5px;
} */
.mlstn-container-small {
    width: 92.75%;
}
.term-check {
    margin-left: 10px;
}
</style>

<script>
import HireNowModal from "@/components/my-projects/view-proposal-modals/hire-now-modals/HireNowModal";
export default {
    components: {
        HireNowModal
    }
}
</script>