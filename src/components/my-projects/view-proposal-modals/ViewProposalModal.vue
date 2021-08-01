<template>
  <div>
    <b-modal :id="'invent-freelancer'" size="xl" hide-footer hide-header>
      <template #default="{ close }">
        <div class="modal-content" style="padding: 20px;">
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
          <div class="ui-block container">
            <div class="ui-block-title ui-block-title-bap">
              <span class="stm-popup-title">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#warning"></use>
                </svg>
                <span>
                  <font>Invent Freelancer</font>
                  <br />
                  <font class="strt-n-p">Get more quote</font>
                </span>
              </span>
            </div>
          </div>
          <div class="modal-body modal-body-bap">
            <form class="custom-form row">
              <div class="col-12 mdl-bap-col">
                <div class="ui-block">
                  <div class="ui-block-content ui-block-padd">
                    <!-- Personal Information Form  -->
                    <div class="row upload-r upload-r-border">
                      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="form-group label-floating">
                          <label class="control-label">Country</label>
                          <input
                            class="form-control"
                            type="text"
                            value="Germany"
                          />
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                            </svg>
                          </div>
                          <span class="material-input"></span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="form-group label-floating">
                          <label class="control-label">Type Subcatgeory</label>
                          <input
                            class="form-control"
                            value="HTML , JAVA"
                            type="text"
                          />
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#list-3"></use>
                            </svg>
                          </div>
                          <span class="material-input"></span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="form-group label-floating">
                          <label class="control-label">Type Subcatgeory</label>
                          <input
                            class="form-control"
                            value="HTML , JAVA"
                            type="text"
                          />
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#list-3"></use>
                            </svg>
                          </div>
                          <span class="material-input"></span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="form-group label-floating">
                          <label class="control-label"
                            >Select Company Type</label
                          >
                          <select class="form-control">
                            <option>Standard, Partner</option>
                            <option>Standard, Partner 1</option>
                            <option>Standard, Partner 2</option>
                          </select>
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use xlink:href="@/assets/svg-sprite.svg#list-3"></use>
                            </svg>
                          </div>
                          <div class="select-dd-active">
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
                            </svg>
                          </div>
                          <span class="material-input"></span>
                        </div>
                      </div>
                    </div>
                    <div class="row upload-r search-upd">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Search Company</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Search Company"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#department"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span
                        ><span class="material-input"></span>
                      </div>
                      <div class="search-btn">
                        <i class="fa fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 mdl-bap-col"
              >
                <div class="ui-block upd-c-block">
                  <div class="upd-company">
                    <span class="tag-c-common">Recommand</span>
                    <div class="img-c-common">
                      <img class="img-c-common-img" src="@/assets/img/mencap.png" />
                    </div>
                    <div class="com-review">
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
                    <span class="upd-com-name"
                      >Company Name <sup>GmbH</sup></span
                    >
                    <div class="company-location">
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                      </svg>
                      <span>DE - 30159 Hannover</span>
                    </div>
                    <div class="invented-btn"><a href="#">Invented</a></div>
                    <div class="upd-com-det">
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#chat-4"></use>
                        </svg>
                        <span>2.432</span>
                      </div>
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#back-in-time"></use>
                        </svg>
                        <span>345 hr</span>
                      </div>
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                        </svg>
                        <span>123</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui-block upd-c-block">
                  <div class="upd-company">
                    <span class="tag-c-common">Recommand</span>
                    <div class="img-c-common">
                      <img class="img-c-common-img" src="@/assets/img/mencap.png" />
                    </div>
                    <div class="com-review">
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
                    <span class="upd-com-name"
                      >Company Name <sup>GmbH</sup></span
                    >
                    <div class="company-location">
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                      </svg>
                      <span>DE - 30159 Hannover</span>
                    </div>
                    <div class="invented-btn"><a href="#">Invented</a></div>
                    <div class="upd-com-det">
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#chat-4"></use>
                        </svg>
                        <span>2.432</span>
                      </div>
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#back-in-time"></use>
                        </svg>
                        <span>345 hr</span>
                      </div>
                      <div class="upd-com-det-inner">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                        </svg>
                        <span>123</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 mdl-bap-col"
              >
                <div class="ui-block upd-c-block">
                  <div class="upd-company-right">
                    <span class="tag-c-common">Recommand</span>
                    <div class="upd-cmpe-detail">
                      <div class="upd-cmpe-detail-col upd-cmpe-detail-col-img">
                        <img class="" src="@/assets/img/mencap.png" />
                      </div>
                      <div class="upd-cmpe-detail-col">
                        <span class="upd-com-name-r">Company Name</span>
                        <div class="com-review-r">
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
                      </div>
                      <div class="upd-cmpe-detail-col upd-cmpe-detail-col-inv">
                        <div class="invented-btn-inv">
                          <a href="#">Invented</a>
                        </div>
                        <div class="upd-hourly-col">
                          <span class="upd-hourly">25,00 €</span>
                          <span class="upd-hourly-tag">Hourly Rate</span>
                        </div>
                      </div>
                    </div>
                    <div class="upd-com-det-r">
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                        </svg>
                        <span>GE</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                        </svg>
                        <span>Hannover</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#chat-4"></use>
                        </svg>
                        <span>1.342</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#back-in-time"></use>
                        </svg>
                        <span>3.456 Hours</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                        </svg>
                        <span>550 Jobs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui-block upd-c-block">
                  <div class="upd-company-right">
                    <span class="tag-c-common tag-c-partner">Partner</span>
                    <div class="upd-cmpe-detail">
                      <div class="upd-cmpe-detail-col upd-cmpe-detail-col-img">
                        <img class="" src="@/assets/img/fre-avatar.png" />
                      </div>
                      <div class="upd-cmpe-detail-col">
                        <span class="upd-com-name-r">Freelancer Name</span>
                        <div class="com-review-r">
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
                      </div>
                      <div class="upd-cmpe-detail-col upd-cmpe-detail-col-inv">
                        <div class="invented-btn-inv btn-inv-inactive">
                          <a href="#">Invented</a>
                        </div>
                        <div class="upd-hourly-col">
                          <span class="upd-hourly">25,00 €</span>
                          <span class="upd-hourly-tag">Hourly Rate</span>
                        </div>
                      </div>
                    </div>

                    <div class="upd-com-det-r">
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                        </svg>
                        <span>GE</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#location-1"></use>
                        </svg>
                        <span>Hannover</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#chat-4"></use>
                        </svg>
                        <span>1.342</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#back-in-time"></use>
                        </svg>
                        <span>3.456 Hours</span>
                      </div>
                      <div class="upd-com-det-inner-r">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#verify"></use>
                        </svg>
                        <span>550 Jobs</span>
                      </div>
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

<style scoped>
.ui-block {
    margin-left: 5px;
    margin-right: 5px;
}
</style>