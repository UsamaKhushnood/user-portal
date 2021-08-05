<template>
  <div>
    <b-modal :id="'work-interview-modal'" size="lg" hide-footer hide-header>
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
            <div class="ui-block-title">
              <svg class="icon-title">
                <use xlink:href="@/assets/svg-sprite.svg#job-interview"></use>
              </svg>
              <span class="gft-ico-popup-title"> My Work Interview </span>
            </div>
          </div>
          <div class="modal-body modal-body-no-p">
            <form class="custom-form">
              <div class="ui-block ui-block-no-m">
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->

                  <div class="row">
                    <div class="offer-rcv-wrapper">
                      <div class="offer-rcv-map">
                        <div class="offer-rcv-logo">
                          <div class="offer-rcv-logo-img">
                            <img class="" src="@/assets/img/mencap.png" />
                          </div>
                          <div class="offer-rcv-logo-map">
                            <img class="" src="@/assets/img/map-off.png" />
                          </div>
                        </div>
                      </div>
                      <div class="offer-rcv-location-wrapper">
                        <div class="offer-rcv-location-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                          </svg>
                        </div>
                        <div class="offer-rcv-l-nadd">
                          <div class="offer-rcv-l-name">Company Name</div>
                          <div class="offer-rcv-l-address">
                            DE – Hannover,<br />30419 Hannover Lange Laube 1a
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="app-date-time-conatiner">
                      <div class="app-date-time-wrapper">
                        <div class="app-date-time-col">
                          <div class="app-date-time-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#calendar-4"></use>
                            </svg>
                          </div>
                          <span>Monday - 12.10.2012</span>
                        </div>
                        <div class="app-date-time-col">
                          <div class="app-date-time-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                            </svg>
                          </div>
                          <span>15:30 Uhr</span>
                        </div>
                      </div>
                    </div>
                    <div class="app-notify-conatiner">
                      <div class="app-notify-wrapper">
                        <div class="app-notify-col">
                          <div class="app-notify-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#warning"></use>
                            </svg>
                          </div>
                          <div class="app-notify-txt">
                            <span class="c-orange">Notification</span>
                            <span class="c-red"
                              >Please be On Time and bring a Copy of
                              Document</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="acc-den-wrapper">
                      <div class="acc-den-block">
                        <button class="acc-den-btn">Accept</button>
                        <button class="acc-den-btn denied">Denied</button>
                      </div>
                    </div>
                    <div class="col-12">
                      <textarea
                        type="text"
                        placeholder="BY Denied reason this box will appear, by accept the box will be hidden"
                        class="tsk-mlstn-fields"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <!--<button class="btn btn-primary btn-files-pop">Buy Now</button>-->
                  <div class="btn-files-chbox">
                    <input id="ih-seen" type="checkbox" />
                    <label for="ih-seen">I have seen and sent</label>
                  </div>
                  <button class="btn btn-primary btn-files-pop">Close</button>
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

