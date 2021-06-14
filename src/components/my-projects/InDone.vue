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
            style="enable-background: new 0 0 255 255"
            xml:space="preserve"
          >
            <g>
              <g id="arrow-drop-down">
                <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
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
      <div class="tckt-t-w tckt-vwc-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-v-contract"
          v-b-modal.view-contract
        >
          View Contract
        </button>
      </div>
      <div class="tckt-t-w tckt-t-w-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-close"
        >
          Close
        </button>
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
      <div class="tckt-t-w tckt-vwc-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-v-contract"
        >
          View Contract
        </button>
      </div>
      <div class="tckt-t-w tckt-t-w-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-close"
        >
          Close
        </button>
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
      <div class="tckt-t-w tckt-vwc-btn">
        <button class="btn btn-lg btn-green">View Contract</button>
      </div>
      <div class="tckt-t-w tckt-t-w-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done"
        >
          Close
        </button>
      </div>
    </div>

    <b-modal id="view-contract" title="view-contract" size="xl">
      <div class="modal-content">
        <a
          href="#"
          class="close icon-close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <svg class="olymp-close-icon" viewBox="0 0 32 32">
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
            <div class="l-print-btn">
              <svg class="">
                <use xlink:href="#printer"></use>
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
                            <use xlink:href="#fb-emote-terrible"></use>
                          </svg>
                          <p class="fb-emote__caption">Terrible</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="bad"
                          data-progress="0.25"
                        >
                          <svg>
                            <use xlink:href="#fb-emote-bad"></use>
                          </svg>
                          <p class="fb-emote__caption">Bad</p>
                        </div>
                        <div
                          class="fb-emote s--active"
                          data-emote="okay"
                          data-progress="0.5"
                        >
                          <svg>
                            <use xlink:href="#fb-emote-okay"></use>
                          </svg>
                          <p class="fb-emote__caption">Okay</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="good"
                          data-progress="0.75"
                        >
                          <svg>
                            <use xlink:href="#fb-emote-good"></use>
                          </svg>
                          <p class="fb-emote__caption">Good</p>
                        </div>
                        <div
                          class="fb-emote"
                          data-emote="great"
                          data-progress="1"
                        >
                          <svg>
                            <use xlink:href="#fb-emote-great"></use>
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
    </b-modal>
  </div>
</template>