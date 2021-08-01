<template>
  <div>
    <b-modal
      hide-footer
      hide-header
      size="xl"
      :id="'company-info' + productIndex"
    >
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
            <div class="ui-block-title common-ig-title">
              <div class="common-ig-company">
                <img src="@/assets/img/pila.png" alt="company" />
              </div>
              <div class="tckt-t-w">
                <span><b>Company Name</b></span>
                <span>GmbH , Since 2019</span>
              </div>
            </div>
          </div>

          <div
            class="
              modal-body
              tab-pane
              modal-body-bap
              off-wrap-con-mod
              show
              active
            "
          >
            <form class="custom-form">
              <div class="col-md-12 col-xl-12 col-12 off-wrap-container">
                <div class="row">
                  <div class="col-md-8 col-xl-8 col-sm-12 pad-r-off">
                    <div class="pane-common-inner b-right-pane" id="padding">
                      <div class="pt-mlstn-container no-border">
                        <div class="pt-mlstn-col no-b">
                          <div class="pt-mlstn-common pt-mlstn-det">
                            <span class="pt-mlstn-h">Offer Title</span>
                            <span>Company Name</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="main-offer-wrapper">
                          <img src="@/assets/img/offer-main-img.png" />
                        </div>
                      </div>
                      <div class="col-12 main-offer-thumb-wrap">
                        <div class="main-offer-thumb">
                          <img src="@/assets/img/offer-main-img-thumb-1.png" />
                        </div>
                        <div class="main-offer-thumb">
                          <img src="@/assets/img/offer-main-img-thumb-2.png" />
                        </div>
                        <div class="main-offer-thumb">
                          <img src="@/assets/img/offer-main-img-thumb-3.png" />
                        </div>
                        <div class="main-offer-thumb">
                          <img src="@/assets/img/offer-main-img-thumb-4.png" />
                        </div>
                      </div>
                      <div class="col-12 offer-det-wrapper">
                        <span class="offer-det-heading">Was Du bekomsst</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras sit amet nunc tristique, tempor lorem eu,
                          tempor est. Nullam vestibulum mollis augue, ac euismod
                          elit interdum nec. Nulla suscipit massa ac fringilla
                          faucibus. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras sit amet nunc tristique, tempor
                          lorem eu, tempor est. Nullam vestibulum mollis augue,
                          ac euismod elit interdum nec. Nulla suscipit massa ac
                          fringilla faucibus.
                        </p>
                        <ul>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                          <li>Cras sit amet nunc tristique.</li>
                          <li>
                            Nullam vestibulum mollis augue, ac euismod elit
                            interdum nec.
                          </li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <p class="offer-det-txt">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-xl-4 col-sm-12 pad-scol-off">
                    <div class="ui-block-title common-name-title">
                      <div class="common-name-company">
                        <img src="@/assets/img/pila.png" alt="company" />
                      </div>
                      <div class="tckt-t-w">
                        <span><b>Company Name</b></span>
                        <span>GmbH , Since 2019</span>
                      </div>
                    </div>
                    <div class="fav-count-wrapper">
                      <div class="fav-count-col">
                        <svg class="v-rating-svg">
                          <use xlink:href="@/assets/svg-sprite.svg#eye-1"></use>
                        </svg>
                        <span>2.222,99</span>
                      </div>
                      <div class="fav-count-col">
                        <svg class="v-rating-svg">
                          <use xlink:href="@/assets/svg-sprite.svg#star"></use>
                        </svg>
                        <span>117</span>
                      </div>
                      <div class="fav-count-col">
                        <svg class="v-rating-svg">
                          <use
                            xlink:href="@/assets/svg-sprite.svg#shopping-bag-1"
                          ></use>
                        </svg>
                        <span>250</span>
                      </div>
                    </div>
                    <div class="select-offer-wrapper">
                      <span class="select-offer-title">Select a Offer</span>
                      <div class="comp-offer-cont">
                        <div class="comp-offer-t">
                          <span>1 x 60 Min.</span>
                          <span>Lomi-Lomi-Nui Massage</span>
                        </div>
                        <span class="comp-offer-td"
                          >Hinweis: Je Sitzung 30 Min, gesamt 4 Sitzungen</span
                        >
                        <div class="comp-offer-price">
                          <span class="comp-offer-p-o"><s>120,00€</s></span>
                          <span class="comp-offer-p-r">90,90€</span>
                        </div>
                      </div>
                      <div class="comp-offer-cont">
                        <div class="comp-offer-t">
                          <span>1 x 60 Min.</span>
                          <span>Lomi-Lomi-Nui Massage</span>
                        </div>
                        <span class="comp-offer-td"
                          >Hinweis: Je Sitzung 30 Min, gesamt 4 Sitzungen</span
                        >
                        <div class="comp-offer-price">
                          <span class="comp-offer-p-o"><s>120,00€</s></span>
                          <span class="comp-offer-p-r">90,90€</span>
                        </div>
                      </div>
                      <div class="comp-offer-cont">
                        <div class="comp-offer-t">
                          <span>1 x 60 Min.</span>
                          <span>Lomi-Lomi-Nui Massage</span>
                        </div>
                        <span class="comp-offer-td"
                          >Hinweis: Je Sitzung 30 Min, gesamt 4 Sitzungen</span
                        >
                        <div class="comp-offer-price">
                          <span class="comp-offer-p-o"><s>120,00€</s></span>
                          <span class="comp-offer-p-r">90,90€</span>
                        </div>
                      </div>
                    </div>
                    <div class="gift-cons-wrapper">
                      <div class="gift-cons-col">
                        <svg class="v-rating-svg">
                          <use xlink:href="@/assets/svg-sprite.svg#team"></use>
                        </svg>
                      </div>
                      <div class="gift-cons-col">
                        <svg class="v-rating-svg">
                          <use
                            xlink:href="@/assets/svg-sprite.svg#gift-box"
                          ></use>
                        </svg>
                      </div>
                      <div class="gift-cons-col">
                        <svg class="v-rating-svg">
                          <use
                            xlink:href="@/assets/svg-sprite.svg#cart-1"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="offer-appoint-wrapper">
                      <div class="offer-appoint-title">
                        <span class="offer-appoint-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#cart-1"
                            ></use>
                          </svg>
                        </span>
                        <span class="offer-appoint-txt"
                          >This Offer need Appointment</span
                        >
                      </div>
                      <div class="offer-row-dt">
                        <div
                          class="col-sm-12 col-md-6 col-lg-6 offer-row-dt-col"
                        >
                          <div class="form-group label-floating is-empty">
                            <label class="control-label">Select Date</label>
                            <input
                              class="form-control"
                              placeholder="Select Date"
                            />
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#calendar-4"
                                ></use>
                              </svg>
                            </div>
                            <span class="material-input"></span>
                          </div>
                        </div>
                        <div
                          class="col-sm-12 col-md-6 col-lg-6 offer-row-dt-col"
                        >
                          <div class="form-group label-floating is-empty">
                            <label class="control-label">Select Time</label>
                            <input
                              class="form-control"
                              placeholder="Select Time"
                            />
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#clock-1"
                                ></use>
                              </svg>
                            </div>
                            <span class="material-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="offer-row-dt-det-wrapper">
                        <span><b>Dienstag</b></span>
                        <span><b>07:00-20:00</b></span>
                        <span>Mittwoch</span>
                        <span>07:00-20:00</span>
                        <span>Mittwoch</span>
                        <span>07:00-20:00</span>
                        <span>Mittwoch</span>
                        <span>07:00-20:00</span>
                        <span>Mittwoch</span>
                        <span>07:00-20:00</span>
                        <span>Mittwoch</span>
                        <span>07:00-20:00</span>
                      </div>
                    </div>
                    <div class="offer-comp-wrapper">
                      <div class="offer-comp-map">
                        <div class="offer-comp-logo">
                          <div class="offer-comp-logo-img">
                            <img class="" src="@/assets/img/mencap.png" />
                          </div>
                          <div class="offer-comp-logo-map">
                            <img class="" src="@/assets/img/map-off.png" />
                          </div>
                        </div>
                      </div>
                      <div class="offer-comp-location-wrapper">
                        <div class="offer-comp-location-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#location-1"
                            ></use>
                          </svg>
                        </div>
                        <div class="offer-comp-l-nadd">
                          <div class="offer-comp-l-name">Company Name</div>
                          <div class="offer-comp-l-address">
                            DE – Hannover, 30419 Hannover Lange Laube 1a
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="offer-comment-wrapper">
                      <div class="offer-cmnt-profile">
                        <div class="offer-cmnt-pavatar">G</div>
                        <div class="offer-cmnt-pdet">
                          <div class="offer-cmnt-pname">Guest</div>
                          <div class="offer-cmnt-pcdet">
                            <div class="offer-cmnt-pcmnt">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#star"
                                ></use>
                              </svg>
                              <span>1 Bewertungen</span>
                            </div>
                            <div class="offer-cmnt-pcmnt">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#chat-2"
                                ></use>
                              </svg>
                              <span>1 Bewertungen</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="offer-date-rate">
                        <div class="offer-date-rating">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                        </div>
                        <div class="offer-date-dt">November 10, 2021</div>
                      </div>
                      <div class="offer-main-comment">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras sit amet nunc tristique, tempor lorem eu, tempor
                        est.
                      </div>
                      <div class="offer-like">
                        <div class="offer-like-box">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#alert"
                            ></use>
                          </svg>
                          <span>Like</span>
                        </div>
                      </div>
                    </div>
                    <div class="offer-comment-wrapper">
                      <div class="offer-cmnt-profile">
                        <div class="offer-cmnt-pavatar">G</div>
                        <div class="offer-cmnt-pdet">
                          <div class="offer-cmnt-pname">Guest</div>
                          <div class="offer-cmnt-pcdet">
                            <div class="offer-cmnt-pcmnt">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#star"
                                ></use>
                              </svg>
                              <span>1 Bewertungen</span>
                            </div>
                            <div class="offer-cmnt-pcmnt">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#chat-2"
                                ></use>
                              </svg>
                              <span>1 Bewertungen</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="offer-date-rate">
                        <div class="offer-date-rating">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#star"
                            ></use>
                          </svg>
                        </div>
                        <div class="offer-date-dt">November 10, 2021</div>
                      </div>
                      <div class="offer-main-comment">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras sit amet nunc tristique, tempor lorem eu, tempor
                        est.
                      </div>
                      <div class="offer-like">
                        <div class="offer-like-box">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#alert"
                            ></use>
                          </svg>
                          <span>Like</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- ... end Personal Information Form  -->
          </div>
        </div>
      </template></b-modal
    >
  </div>
</template>
       
<script>
export default {
  props: ["productIndex"],
};
</script>