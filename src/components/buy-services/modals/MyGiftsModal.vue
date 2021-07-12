<template>
  <div>
    <b-modal :id="'my-gift' + giftIndex"  size="lg" hide-footer hide-header>
      <template #default="{ close }">
        <div class="modal-content">
          <a
            href="#"
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
            <div class="ui-block-title">
              <svg class="icon-title">
                <use xlink:href="#gift-box"></use>
              </svg>
              <span class="gft-ico-popup-title">
                Received Gifts
              </span>
            </div>
          </div>
          <div class="modal-body modal-body-no-p">
            <form class="custom-form">
              <div class="ui-block ui-block-no-m">
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row">
                    <div class="col-12">
                      <div class="add-data-person">
                        <div class="add-data-svg">
                          <svg class="v-rating-svg">
                            <use xlink:href="#alert-1"></use>
                          </svg>
                        </div>
                        <div class="add-data-txt text-center">
                          You receive a new Gifts , Please used on Time
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="add-data-person">
                        <div class="add-data-svg">
                          <svg class="v-rating-svg">
                            <use xlink:href="#list-2"></use>
                          </svg>
                        </div>
                        <div class="add-data-txt text-center">
                          The Service is <font class="c-red">EXPIRED</font>
                        </div>
                      </div>
                    </div>
                    <div class="service-dsv-wrapper">
                      <div class="service-dsv-col service-dsv-col-img">
                        <img src="img/dsv.png" />
                      </div>
                      <div class="service-dsv-col">
                        <div class="service-dsv-col-row">
                          <div class="service-dsv-txt service-dsv-title">
                            <span>
                              <b>Service Title</b><br />
                              Offer Title will be here
                            </span>
                            <span>
                              <b>Date</b><br />
                              Purchase date
                            </span>
                          </div>
                          <div
                            class="service-dsv-txt service-dsv-txt-spacer"
                          ></div>
                          <div class="service-dsv-txt service-dsv-title">
                            <span>
                              <b>Sent by</b><br />
                              Validity
                            </span>
                            <span>
                              <b>Username</b><br />
                              2 Weeks
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-6">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Select Date</label>
                        <input class="form-control" placeholder="Select Date" />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="#calendar-4"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-6">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Select Time</label>
                        <input class="form-control" placeholder="Select Time" />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="#clock-1"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="offer-rcv-wrapper">
                      <div class="offer-rcv-map">
                        <div class="offer-rcv-logo">
                          <div class="offer-rcv-logo-img">
                            <img class="" src="img/mencap.png" />
                          </div>
                          <div class="offer-rcv-logo-map">
                            <img class="" src="img/map-off.png" />
                          </div>
                        </div>
                      </div>
                      <div class="offer-rcv-location-wrapper">
                        <div class="offer-rcv-location-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="#location-1"></use>
                          </svg>
                        </div>
                        <div class="offer-rcv-l-nadd">
                          <div class="offer-rcv-l-name">Company Name</div>
                          <div class="offer-rcv-l-address">
                            DE – Hannover, 30419 Hannover Lange Laube 1a
                          </div>
                        </div>
                      </div>
                      <div class="gft-rcv-ot-wrapper">
                        <div class="gft-rcv-ot-title">
                          <svg class="">
                            <use xlink:href="#clock-1"></use>
                          </svg>
                          <span>Opening Time</span>
                        </div>
                      </div>
                      <div class="gft-week-time-wrapper">
                        <div class="gft-week-time-row">
                          <div class="gft-week-time-cell">Monday</div>
                          <div class="gft-week-time-cell">Teusday</div>
                          <div class="gft-week-time-cell">Wednesday</div>
                          <div class="gft-week-time-cell">Thursday</div>
                          <div class="gft-week-time-cell">Friday</div>
                          <div class="gft-week-time-cell">Saturday</div>
                          <div class="gft-week-time-cell">Sunday</div>
                        </div>
                        <div class="gft-week-time-row">
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">-</div>
                        </div>
                        <div class="gft-week-time-row">
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">10:00</div>
                          <div class="gft-week-time-cell">-</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <!--<button class="btn btn-primary btn-files-pop">Buy Now</button>-->
                  <div class="btn-files-chbox">
                    <input id="ih-seen" type="checkbox" />
                    <label for="ih-seen">I have seen</label>
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
<script>
export default {
  props: ["giftIndex"],
};
</script>
