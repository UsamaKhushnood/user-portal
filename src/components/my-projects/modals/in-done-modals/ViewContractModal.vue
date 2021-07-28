<template>
    <div>
        
            <b-modal :id="'view-contract' + job" title="view-contract" size="xl"
            hide-header
            hide-footer>
            <template #default="{ close }">
      <div class="modal-content">
        <a
          class="close icon-close"
          data-dismiss="modal"
          aria-label="Close"
          style="cursor: pointer"
        >
          <svg class="olymp-close-icon" viewBox="0 0 32 32" @click="close()">
            <title>close-icon</title>
            <path
              d="M14.222 17.778h3.556v-3.556h-3.556v3.556zM31.084 3.429l-2.514-2.514-10.057 10.057 2.514 2.514 10.057-10.057zM0.916 28.571l2.514 2.514 10.057-10.055-2.516-2.514-10.055 10.055zM18.514 21.029l10.057 10.055 2.514-2.514-10.057-10.055-2.514 2.514zM0.916 3.431l10.057 10.055 2.516-2.514-10.059-10.057-2.514 2.516z"
            ></path>
          </svg>
        </a>
        <div class="ui-block">
          <div class="ui-block-title my-ctrt">
            <div class="my-ctrt-project">
              <span class="my-ctrt-title">Project Title will be here</span>
              <span class="my-ctrt-desc">Date / Time Catgeory</span>
            </div>
            <div class="my-ctrt-project">
              <span class="my-ctrt-title">Contract ID</span>
              <span class="my-ctrt-desc">IDewdedwewde</span>
            </div>
            <div class="my-ctrt-project">
              <a
                href="http://ihannoveraner.de/service-user/project-description.php"
                class="btn btn-lg btn-green in-d-pdetail-btn"
                >Project Details</a
              >
            </div>
          </div>
        </div>
        <div class="modal-body tab-pane modal-body-bap show active">
          <form class="custom-form row l-print-form">
            <div class="l-print-btn" style="width: 65px;">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
              </svg>
            </div>
            <div class="col-12">
              <div class="ui-block pro-contract-block">
                <div class="pro-contract">
                  <div class="pro-contract-img">
                    <img src="@/assets/img/t-image.png" />
                  </div>
                  <div class="pro-contract-user-company">
                    <div class="pro-contract-h">Contract between</div>
                    <div class="pro-contract-det-container">
                      <div class="pro-contract-det-inner">
                        <span class="pro-contract-det-h">User Deatils</span>
                        <span class="pro-contract-det-txt"
                          >Username Lastname</span
                        >
                        <span class="pro-contract-det-txt">User ID</span>
                      </div>
                      <div class="pro-contract-det-inner">
                        <span class="pro-contract-det-h">Company Details</span>
                        <span class="pro-contract-det-txt">Company Name</span>
                        <span class="pro-contract-det-txt">Company ID</span>
                      </div>
                    </div>
                  </div>
                  <div class="pro-contract-img">
                    <img src="@/assets/img/mencap.png" />
                  </div>
                </div>
              </div>
              <div class="pane-common-inner">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title">Work Start and Deliver</span>
                    </div>
                  </div>
                  <div class="pd-budget-container pd-work-std">
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Work Started: &nbsp;&nbsp; 01.12.2020</span>
                    </div>
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Work Deliverd: &nbsp;&nbsp; 15.02.2020</span>
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
                  <div class="pd-budget-container pd-work-std">
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Total Task: &nbsp;&nbsp; 10</span>
                    </div>
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Task Done: &nbsp;&nbsp; 10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pane-common-inner pane-separate">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title">Planed Budget</span>
                    </div>
                  </div>
                  <div class="pd-inq-container">
                    <div class="pd-inq-txt l-txt-f">
                      <span><font>Hours Planed:</font> 100</span>
                      <span><font>Hourly Rate:</font> 10 € Per Hour</span>
                      <span><font>Total Budget.:</font> 1000 €</span>
                    </div>
                  </div>
                </div>
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title">Paid Budget</span>
                    </div>
                  </div>
                  <div class="pd-inq-container">
                    <div class="pd-inq-txt l-txt-f">
                      <span><font>Hours Planed:</font> 150</span>
                      <span><font>Hourly Rate:</font> 10 € Per Hour</span>
                      <span><font>Total Budget.:</font> 1500 €</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pane-common-inner">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title">Waranty</span>
                    </div>
                  </div>
                  <div class="pd-budget-container pd-work-std">
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Work Started: &nbsp;&nbsp; 15.02.2020</span>
                    </div>
                    <div class="pd-budget-col pro-contract-budget">
                      <span>Work Deliverd: &nbsp;&nbsp; 15.05.2020</span>
                    </div>
                  </div>
                  <div class="pd-budget-container pd-work-std">
                    <div class="pd-budget-col pro-contract-budget">
                      <span class="bd-wang"
                        >Waranty is for the Work and Tasks what the Company
                        Deliverd</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="pane-common-inner">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title">Work</span>
                    </div>
                  </div>
                  <div class="pd-req-container">
                    <a class="pd-req-col"> Why close the Project </a>
                    <a class="pd-req-col pd-req-col-bg">
                      <b>On Escrow: &nbsp;&nbsp; 2345,50 €</b>
                    </a>
                    <a class="pd-req-col"> Pay the Company </a>
                  </div>
                </div>
              </div>
              <div class="pane-common-inner pane-separate">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title"
                        >Leave feedback for the Company
                        <sup class="c-red">*</sup></span
                      >
                    </div>
                  </div>
                  <div class="pd-inq-container rating-fc-cont">
                    <div class="rating-fc">
                      <span>Skills</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-1"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-1"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-fc">
                      <span>Work Quality</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-2"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-2"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-fc">
                      <span>Availability</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-3"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-3"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-fc">
                      <span>Communication</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-4"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-4"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-fc">
                      <span>Cooperation</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-5"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-5"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-fc">
                      <span>Reliability</span>
                      <div class="review-sec">
                        <input
                          type="text"
                          readonly=""
                          id="starsInput-c-feed-6"
                          class="starsInput-c-feed"
                        />
                        <div
                          id="review-c-feed-6"
                          class="review-c-feed"
                          rating="true"
                          style="color: rgb(252, 215, 3)"
                        >
                          <i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="fas fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i
                          ><i class="far fa-star" style="cursor: pointer"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title"
                        >Leave a Public Feedback for other Clients
                        <sup class="c-red">*</sup></span
                      >
                    </div>
                  </div>
                  <div class="pd-inq-container test-fld-container">
                    <textarea
                      class="test-fld"
                      type="text"
                      placeholder="Test Field"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="pane-common-inner">
                <div class="task-content-row">
                  <div class="cmn-title">
                    <div class="abt-project">
                      <span class="abt-title"
                        >Would your recommand this Company to others</span
                      >
                    </div>
                  </div>
                  <div class="pd-req-container">
                    <svg class="fb-emotes-svg" style="display: none">
                      <symbol
                        id="fb-emote-terrible"
                        data-emote="terrible"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="fb-emote__eye fb-emote__eye--left"
                          d="M32,25 l10,10 a10,10 0 0,1 -20,0 a10,10 0 0,1 10,-10"
                        ></path>
                        <path
                          class="fb-emote__eye fb-emote__eye--right"
                          d="M58,35 l10,-10 a10,10 0 0,1 0,20 a10,10 0 0,1 -10,-10"
                        ></path>
                        <path
                          class="fb-emote__smile"
                          d="M30,68 q20,-13 40,0 M30,68 q20,-13 40,0"
                        ></path>
                      </symbol>
                      <symbol
                        id="fb-emote-bad"
                        data-emote="bad"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="fb-emote__eye fb-emote__eye--left"
                          d="M22,35 l10,-10 a10,10 0 0,1 0,20 a10,10 0 0,1 -10,-10"
                        ></path>
                        <path
                          class="fb-emote__eye fb-emote__eye--right"
                          d="M68,25 l10,10 a10,10 0 0,1 -20,0 a10,10 0 0,1 10,-10"
                        ></path>
                        <path
                          class="fb-emote__smile"
                          d="M30,68 q20,-10 40,0 M30,68 q20,-10 40,0"
                        ></path>
                      </symbol>
                      <symbol id="fb-emote-okay" viewBox="0 0 100 100">
                        <path
                          class="fb-emote__eye fb-emote__eye--left"
                          d="M32,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__eye fb-emote__eye--right"
                          d="M68,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__smile"
                          d="M35,73 q20,-4 35,-8 M35,73 q20,-4 35,-8"
                        ></path>
                      </symbol>
                      <symbol id="fb-emote-good" viewBox="0 0 100 100">
                        <path
                          class="fb-emote__eye fb-emote__eye--left"
                          d="M32,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__eye fb-emote__eye--right"
                          d="M68,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__smile"
                          d="M30,68 q20,10 40,0 M30,68 q20,10 40,0"
                        ></path>
                      </symbol>
                      <symbol id="fb-emote-great" viewBox="0 0 100 100">
                        <path
                          class="fb-emote__eye fb-emote__eye--left"
                          d="M32,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__eye fb-emote__eye--right"
                          d="M68,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                        ></path>
                        <path
                          class="fb-emote__smile"
                          d="M30,68 q20,15 40,0 M30,68 q20,0 40,0"
                        ></path>
                      </symbol>
                    </svg>

                    <div class="fb-cont">
                      <div class="fb-cont__inner">
                        <div
                          class="fb-emote"
                          data-emote="terrible"
                          data-progress="0"
                        >
                          <svg>
                            <use xlink:href="@/assets/svg-sprite.svg#fb-emote-terrible"></use>
                          </svg>
                          <p class="fb-emote__caption">Terrible</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="bad"
                          data-progress="0.25"
                        >
                          <svg>
                            <use xlink:href="@/assets/svg-sprite.svg#fb-emote-bad"></use>
                          </svg>
                          <p class="fb-emote__caption">Bad</p>
                        </div>
                        <div
                          class="fb-emote s--active"
                          data-emote="okay"
                          data-progress="0.5"
                        >
                          <svg>
                            <use xlink:href="@/assets/svg-sprite.svg#fb-emote-okay"></use>
                          </svg>
                          <p class="fb-emote__caption">Okay</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="good"
                          data-progress="0.75"
                        >
                          <svg>
                            <use xlink:href="@/assets/svg-sprite.svg#fb-emote-good"></use>
                          </svg>
                          <p class="fb-emote__caption">Good</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="great"
                          data-progress="1"
                        >
                          <svg>
                            <use xlink:href="@/assets/svg-sprite.svg#fb-emote-great"></use>
                          </svg>
                          <p class="fb-emote__caption">Great</p>
                        </div>
                        <div class="fb-cont__drag-cont">
                          <div class="fb-active-emote">
                            <svg viewBox="0 0 100 100">
                              <path
                                class="
                                  fb-active-emote__eye
                                  fb-active-emote__eye--left
                                "
                                d="M32,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                              ></path>
                              <path
                                class="
                                  fb-active-emote__eye
                                  fb-active-emote__eye--right
                                "
                                d="M68,25 a10,10 0 0,1 0,20 a10,10 0 0,1 0,-20"
                              ></path>
                              <path
                                class="fb-active-emote__smile"
                                d="M35,73 q20,-4 35,-8 M35,73 q20,-4 35,-8"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block pro-status-block">
                <div class="row">
                  <div class="col-10">
                    <button
                      class="
                        btn btn-lg btn-green
                        in-d-close-btn in-d-close-job-btn
                        pop-over
                      "
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target="#success-done"
                    >
                      Close the Job now
                    </button>
                  </div>
                  <div class="col-2 tckt-t-w-btn">
                    <button
                      class="
                        btn btn-lg btn-green
                        in-d-close-btn in-d-cancelled-job-btn
                      "
                    >
                      cancelled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <!-- ... end Personal Information Form  -->
        </div>
      </div>
    
            </template>
    </b-modal>
        
    </div>
</template>

<script>
export default {
  props: ["job"]
  
}
</script>