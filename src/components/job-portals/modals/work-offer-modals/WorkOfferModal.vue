<template>
  <div>
    <b-modal :id="'work-offer-modal'" size="xl" hide-footer hide-header>
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
            <div
              class="
                ui-block-title ui-block-title-bap
                block-jb-comp block-sp-bt
              "
            >
              <div class="block-jb-comp-col block-jb-comp-logo">
                <img src="@/assets/img/mencap.png" />
              </div>

              <div class="block-jb-comp-col block-jb-comp-iconz">
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="tab-content tab-content-abt-pop">
            <div class="modal-body tab-pane modal-body-bap show active">
              <form class="custom-form row">
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">About The Job</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 job-prop-det">
                          Konica Minolta bietet als IT Service Provider mit
                          seinem umfassenden Portfolio Lösungen, die heute und
                          in Zukunft die Individualisierung und Digitalisierung
                          der Arbeitswelt unterstützen. Dabei bietet das
                          Unternehmen umfassende Beratung, Hard- und
                          Softwarelösungen sowie Dienstleistungen und Support
                          für individuelle, leistungsfähige Gesamtlösungen. Als
                          starker Partner für den Produktions- und
                          Industriedruckmarkt umfasst das Hardware-Portfolio
                          Drucksysteme für kleine und mittlere Volumen sowie
                          Unternehmensberatung und Software für diesen Bereich.
                          In einem multikulturellen Umfeld mit europaweit mehr
                          als 10.300 Mitarbeitern agiert Konica Minolta mit
                          unabhängigen Distributoren und Fachhändlern in 80
                          Ländern.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="ui-block-title">
                      <h6 class="title">Our offer</h6>
                    </div>
                    <div class="ui-block-content ui-block-padd">
                      <!-- Personal Information Form  -->
                      <div class="row">
                        <div class="col-12 job-prop-det">
                          <ul>
                            <li>
                              Zentraler 2nd Level Support für Konica Minolta
                              Lösungen und Services im Bereich Infrastrukturen
                              und Applikationen für Vertrags- und
                              Nichtvertragskunden
                            </li>
                            <li>
                              Verantwortung für Incident Management und Request
                              Management im 2nd Level
                            </li>
                            <li>
                              Support im Soft- und Hardwarebereich sowie
                              Betreuung unserer Kunden in IT-relevanten
                              Fragestellungen im Rahmen unseres 2nd Level
                              Supports
                            </li>
                          </ul>
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
                  <div class="pane-common-inner">
                    <div class="task-content-row">
                      <div class="cmn-title">
                        <div class="abt-project">
                          <span class="abt-title"
                            >Attach your File for Interview</span
                          >
                        </div>
                        <div
                          class="cmn-title-ad-upld pop-over crsr-pntr"
                          data-toggle="modal"
                          data-target="#upload-files-work"
                        >
                          + Add more Fields
                        </div>
                      </div>
                      <div class="pd-fls-container">
                        <div class="row upload-r upload-r-u-up upload-r-u-pp">
                          <div
                            class="fz-uploader upload-r-common"
                            style="position: relative"
                            data-fz-uploader-type="image"
                            data-fz-uploader="demo"
                          >
                            <div
                              class="pop-over crsr-pntr"
                              data-toggle="modal"
                              data-target="#upload-files-work"
                              style="
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                right: 0;
                                left: 0;
                                z-index: 99999;
                                background-color: transparent;
                              "
                            ></div>
                            <div class="fz-upload-slots">
                              <div class="fz-upload-slot">
                                <div class="fz-upload-slot__placeholder">
                                  <div
                                    class="fz-upload-slot__placeholder__icon"
                                  ></div>
                                  <div
                                    class="fz-upload-slot__placeholder__text"
                                  >
                                    Upload image
                                  </div>
                                </div>
                                <input
                                  type="file"
                                  name="demo"
                                  accept="image/jpg,image/png,image/jpeg"
                                />
                                <div class="fz-upload-slot__preview-grp">
                                  <div class="fz-upload-slot__preview-wrapper">
                                    <img src="#" alt="Image Preview" />
                                  </div>
                                  <button class="fz-upload-slot__rm-img">
                                    <div
                                      class="fz-upload-slot__rm-img__icon"
                                    ></div>
                                  </button>
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
                    <div class="com-work-detail-wrapper">
                      <div class="com-work-detail-common com-work-detail-img">
                        <img src="@/assets/img/mencap.png" />
                      </div>
                      <div class="com-work-detail-common">
                        <img src="@/assets/img/map-off.png" />
                      </div>
                      <div class="com-work-detail-common">
                        <span><b>Company Name</b></span>
                        <span>DE – Hannover,</span>
                        <span>30419 Hannover , Lange Laube 1a</span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-block">
                    <div class="your-profile">
                      <div class="rt-panel-h">Reviews</div>
                      <div class="rating-review rating-review-pad">
                        <div class="w-100">
                          <input
                            type="text"
                            readonly=""
                            id="starsInput-job-prop"
                            class="starsInput"
                          />
                          <div
                            class="review"
                            id="review-job-prop"
                            style="color: rgb(252, 215, 3)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                        <span class="rat-abt"></span>
                      </div>
                      <div class="reviews-all-wrapper">
                        <div class="reviews-all-txt">
                          Lorem ipsum dolor amet.
                        </div>
                        <div class="reviews-all-user">
                          <span></span>
                          <div
                            class="review review-user"
                            id="review-job-prop"
                            style="color: rgb(46, 52, 64)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                      </div>
                      <div class="reviews-all-wrapper">
                        <div class="reviews-all-txt">
                          Lorem ipsum dolor amet.
                        </div>
                        <div class="reviews-all-user">
                          <span></span>
                          <div
                            class="review review-user"
                            id="review-job-prop"
                            style="color: rgb(46, 52, 64)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                          </div>
                        </div>
                      </div>
                      <div class="reviews-all-wrapper">
                        <div class="reviews-all-txt">
                          Lorem ipsum dolor amet.
                        </div>
                        <div class="reviews-all-user">
                          <span></span>
                          <div
                            class="review review-user"
                            id="review-job-prop"
                            style="color: rgb(46, 52, 64)"
                            rating="true"
                          >
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="fas fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
                            <i class="far fa-star" style="cursor: pointer"></i>
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
        </div>
      </template>
    </b-modal>
  </div>
</template>

