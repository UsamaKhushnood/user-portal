<template>
  <div id="secondary-header">
    <div class="main-header main-header-user-common main-header-dbrd bg-group">
      <div class="container">
        <div class="row">
          <div class="col col-lg-5 m-auto col-md-5 col-sm-12 col-12">
            <div class="main-header-content-left">
              <span class="mhc-h">
                <h1>{{ currentRouteName }}</h1>
              </span>
              <span class="">Monday 12.10.2020 - 19:30 - GE -Hannover</span>
            </div>
          </div>
          <div
            class="
              col col-lg-7
              m-auto
              col-md-7 col-sm-12 col-12
              main-header-content-right-container
              setting-bann-user
              m-h-c-r-c-user
            "
          >
            <div class="setting-bann-p">
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div
                    class="main-header-content-right-inner crsr-pntr"
                    data-toggle="modal"
                    data-target="#bepart-popup"
                  >
                    <img
                      src="@/assets/img/service-logo.png"
                      alt="Banner Logo"
                    />
                    <div class="mhc-RRcontent" v-b-modal="'be-partner'">
                      <span class="mhc-rc-h">Be Partner</span>
                      <span class="">Add your Company</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div class="main-header-content-right-inner">
                    <svg class="icon">
                      <use xlink:href="@/assets/svg-sprite.svg#medal"></use>
                    </svg>
                    <div class="mhc-RRcontent">
                      <span class="mhc-rc-h">Eat &amp; Drink</span>
                      <span class="">www.yamiyami.de</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div
                    class="main-header-content-right-inner crsr-pntr"
                    data-toggle="modal"
                    data-target="#post-popup"
                  >
                    <svg class="icon">
                      <use
                        xlink:href="@/assets/svg-sprite.svg#sticky-notes"
                      ></use>
                    </svg>
                    <div class="mhc-RRcontent" v-b-modal="'post-project'">
                      <span class="mhc-rc-h">Post a Project</span>
                      <span class="">realisiere dein Projekt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="main-header-content-left2 main-header-content-left-setting"
            >
              <svg class="icon">
                <use xlink:href="@/assets/svg-sprite.svg#warning"></use>
              </svg>
              <div class="mhc-Rcontent">
                <span class="mhc-rc-nc"
                  >This will be here our Notifications Center for our
                  Customer</span
                >
                <span class="">realisiere dein Projekt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container container-parent-tab parent-tab-dashboard"
      v-show="$route.name === 'Dashboard'"
    >
      <div class="row">
        <div class="col col-12">
          <ul class="nav nav-tabs nav-justified">
            <li class="nav-item">
              <a
                class="nav-link active no-border"
                data-toggle="tab"
                href="#tab-2-1"
                >Welcome Username</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <b-modal id="be-partner" size="xl" hide-footer hide-header>
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
        </div>
        <div class="ui-block">
          <div class="ui-block-title ui-block-title-bap">
            <span class="stm-popup-title">
              <svg class="icon" id="partner-header">
                <use xlink:href="@/assets/svg-sprite.svg#puzzle"></use>
              </svg>
              <span>
                <font>Became Partner</font>
                <br />
                <font class="strt-n-p">Add your company here</font>
              </span>
            </span>
          </div>
        </div>
        <div class="modal-body modal-body-bap partner-padding">
          <form class="custom-form row">
            <div
              class="
                col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                mdl-bap-col
              "
            >
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/bpart-1.png" />
                  <span class="ls-s-dets-com ls-dets-bp"
                    >Incrase your Income</span
                  >
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/bpart-2.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Get more Clients</span>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/bpart-3.png" />
                  <span class="ls-s-dets-com ls-dets-bp"
                    >Owen Profile Page</span
                  >
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/bpart-4.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Up to Date</span>
                </div>
              </div>
            </div>
            <div
              class="
                col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12
                mdl-bap-col
              "
            >
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Company Info</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r upload-r-u-up upload-r-u-pp">
                    <div
                      class="fz-uploader upload-r-common"
                      data-fz-uploader-type="image"
                      data-fz-uploader="demo"
                    >
                      <div class="fz-upload-slots">
                        <div class="fz-upload-slot">
                          <div class="fz-upload-slot__placeholder">
                            <div
                              class="fz-upload-slot__placeholder__icon"
                            ></div>
                            <div class="fz-upload-slot__placeholder__text">
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
                              <div class="fz-upload-slot__rm-img__icon"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="upload-r-sup-container">
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner-cat">
                          <div class="form-group label-floating is-empty">
                            <label class="control-label">Company Name</label>
                            <input
                              class="form-control"
                              placeholder="Company Name"
                              type="text"
                            />
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#department"
                                ></use>
                              </svg>
                            </div>
                            <span class="material-input"></span
                            ><span class="material-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner-cat">
                          <div class="form-group label-floating is-empty">
                            <label class="control-label">Company Type</label>
                            <input
                              class="form-control"
                              placeholder="Company Type"
                              type="text"
                            />
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#paragraph"
                                ></use>
                              </svg>
                            </div>
                            <span class="material-input"></span
                            ><span class="material-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner-cat">
                          <div class="form-group label-floating">
                            <label class="control-label">Select Catgeory</label>
                            <select class="form-control">
                              <option>Select Catgeory</option>
                              <option>Catgeory 1</option>
                              <option>Catgeory 2</option>
                            </select>
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#add-1"
                                ></use>
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
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner-cat">
                          <div class="form-group label-floating">
                            <label class="control-label">Select Catgeory</label>
                            <select class="form-control">
                              <option>Select Catgeory</option>
                              <option>Catgeory 1</option>
                              <option>Catgeory 2</option>
                            </select>
                            <div class="form-icon">
                              <svg class="v-rating-svg">
                                <use
                                  xlink:href="@/assets/svg-sprite.svg#list-3"
                                ></use>
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Our Services</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <!-- <div
                    id="option_clones1"
                    class="row upload-r cat-add-rem-r option_clones"
                    style="display: none"
                  >
                    <div class="cat-add-rem-common cat-add-rem-cont">
                      <div class="category-add-remove">
                        <div class="form-group label-floating">
                          <label class="control-label">Select Catgeory</label>
                          <select
                            id="options_values2"
                            class="form-control values1"
                            name="options_values[]"
                          >
                            <option>Select Catgeory</option>
                            <option>Catgeory 1</option>
                            <option>Catgeory 2</option>
                          </select>
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#add-1"
                              ></use>
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
                      <div class="category-add-remove">
                        <div class="form-group label-floating">
                          <label class="control-label"
                            >Select Subcatgeory</label
                          >
                          <select
                            id="options_valuess2"
                            class="form-control valuess1"
                            name="options_valuess[]"
                          >
                            <option>Select Subcatgeory</option>
                            <option>Subcatgeory 1</option>
                            <option>Subcatgeory 1</option>
                          </select>
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#list-3"
                              ></use>
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
                    <div
                      id="closes1"
                      class="
                        cat-add-rem-common cat-add-rem-trigger
                        close_options
                      "
                      data-id="option_clones1"
                      data-dismiss="alert"
                      aria-label="close"
                    >
                      <img src="@/assets/img/cross.png" />
                    </div>
                  </div> -->
                  <div
                    :id="'option_clones_' + serviceIndex"
                    class="row upload-r cat-add-rem-r option_clones"
                    style="flex-wrap: nowrap"
                    v-for="(service, serviceIndex) in services"
                    :key="serviceIndex"
                  >
                    <div class="cat-add-rem-common cat-add-rem-cont">
                      <div class="category-add-remove">
                        <div class="form-group label-floating">
                          <label class="control-label">Select Catgeory</label>
                          <select
                            id="options_values2"
                            class="form-control values1"
                            name="options_values[]"
                            v-model="service.selectedCategories"
                          >
                            <option
                              v-for="(
                                category, categoryIndex
                              ) in service.categories"
                              :key="categoryIndex"
                              :value="category.value"
                            >
                              {{ category.text }}
                            </option>
                          </select>
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#add-1"
                              ></use>
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
                      <div class="category-add-remove">
                        <div class="form-group label-floating">
                          <label class="control-label"
                            >Select Subcatgeory</label
                          >
                          <select
                            id="options_valuess2"
                            class="form-control valuess1"
                            name="options_valuess[]"
                            v-model="service.selectedSubCategories"
                          >
                            <option
                              v-for="(
                                subCategory, subIndex
                              ) in service.subCategories"
                              :key="subIndex"
                              :value="subCategory.value"
                            >
                              {{ subCategory.text }}
                            </option>
                          </select>
                          <div class="form-icon">
                            <svg class="v-rating-svg">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#list-3"
                              ></use>
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
                    <div
                      class="cat-add-rem-common cat-add-rem-trigger add_options"
                      @click="addService()"
                      style="cursor: pointer; width: 50px"
                    >
                      <img src="@/assets/img/plus.png" />
                    </div>
                    <div
                      class="cat-add-rem-common cat-add-rem-trigger add_options"
                      v-show="services.length > 1"
                      @click="removeService(index)"
                      style="cursor: pointer; width: 50px"
                    >
                      <img src="@/assets/img/cross.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Our Service Area</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Country</label>
                        <input
                          class="form-control"
                          placeholder="Country"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#worldwide"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">District</label>
                        <input
                          class="form-control"
                          placeholder="District"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#location-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">City</label>
                        <input
                          class="form-control"
                          placeholder="City"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#map"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Phone</label>
                        <input
                          class="form-control"
                          placeholder="Phone"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#worldwide"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Web</label>
                        <input
                          class="form-control"
                          placeholder="Web"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#location-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">E-mail</label>
                        <input
                          class="form-control"
                          placeholder="E-mail"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#email-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Registration</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">UMST</label>
                        <input
                          class="form-control"
                          placeholder="UMST"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#paragraph"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">ST-NT</label>
                        <input
                          class="form-control"
                          placeholder="ST-NT"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#paragraph"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">HRB</label>
                        <input
                          class="form-control"
                          placeholder="HRB"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#paragraph"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Owner Info</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select Nationality</label>
                        <select class="form-control">
                          <option>Select Nationality</option>
                          <option>Nationality 1</option>
                          <option>Nationality 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#flag"
                            ></use>
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
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select Salutation</label>
                        <select class="form-control">
                          <option>Select Salutation</option>
                          <option>Salutation 1</option>
                          <option>Salutation 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#sex"></use>
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
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select Title</label>
                        <select class="form-control">
                          <option>Select Title</option>
                          <option>Title 1</option>
                          <option>Title 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#award"
                            ></use>
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
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Name</label>
                        <input
                          class="form-control"
                          placeholder="Name"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#alert"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Lastname</label>
                        <input
                          class="form-control"
                          placeholder="Lastname"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#alert"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">E-mail</label>
                        <input
                          class="form-control"
                          placeholder="E-mail"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#email-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
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
                  <div class="row term_container" id="partner-policy">
                    <div class="col-lg-12 col-xl-6 left-term">
                      <span class="term-h">AGB</span>
                      <div class="term-txt">
                        1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                        "AGB") der OW networks GmbH (nachfolgend "Lizenzgeber"),
                        gelten für alle Verträge über die Lieferung von nicht
                        auf einem körperlichen Datenträger befindlichen Daten,
                        die in digitaler Form hergestellt und bereitgestellt
                        werden (digitale Inhalte), die ein Verbraucher oder
                        Unternehmer (nachfolgend "Lizenznehmer") mit dem
                        Lizenzgeber hinsichtlich der vom Lizenzgeber in seinem
                        Online-Shop dargestellten digitalen Inhalte abschließt.
                        Hiermit wird der Einbeziehung von eigenen Bedingungen
                        des Lizenznehmers widersprochen, es sei denn, es ist
                        etwas anderes vereinbart.
                        <br /><br />
                        1.2 Vertragsgegenstand ist die Überlassung der vom
                        Lizenzgeber angebotenen digitalen Inhalte an den
                        Lizenznehmer in elektronischer Form unter Einräumung
                        bestimmter, in diesen AGB genauer geregelten
                        Nutzungsrechte.
                        <br /><br />
                        1.3 Verbraucher im Sinne dieser AGB ist jede natürliche
                        Person, die ein Rechtsgeschäft zu Zwecken abschließt,
                        die überwiegend weder ihrer gewerblichen noch ihrer
                        selbständigen beruflichen Tätigkeit zugerechnet werden
                        können. Unternehmer im Sinne dieser AGB ist eine
                        natürliche oder juristische Person oder eine
                        rechtsfähige Personengesellschaft, die bei Abschluss
                        eines Rechtsgeschäfts in Ausübung ihrer gewerblichen
                        oder selbständigen beruflichen Tätigkeit handelt.
                      </div>
                      <div class="term-check">
                        <input id="agb" type="checkbox" />
                        <label for="agb">
                          Ich habe die
                          <a href="#">Allgemeine Geschäftsbedingungen (AGB)</a>
                          gelesen.
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-12 col-xl-6 right-term">
                      <span class="term-h">Widerrufsbelehrung</span>
                      <div class="term-txt">
                        Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.
                        Nähere Informationen zum Widerrufsrecht ergeben sich aus
                        der Widerrufsbelehrung des Lizenzgebers.
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
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- ... end Personal Information Form  -->
        </div>
      </template>
    </b-modal>
    <b-modal id="post-project" size="xl" hide-footer hide-header>
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
        </div>

        <div class="ui-block">
          <div class="ui-block-title ui-block-title-bap">
            <span class="stm-popup-title">
              <svg class="icon" id="partner-header">
                <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
              </svg>
              <span>
                <font>Post new Project</font>
                <br />
                <font class="strt-n-p">Start new Project </font>
              </span>
            </span>
          </div>
        </div>
        <div class="modal-body modal-body-bap project-padding">
          <form class="custom-form row">
            <div
              class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mdl-bap-col"
            >
              <div class="container-parent-tab ui-block">
                <div class="row">
                  <div class="col col-12">
                    <div class="your-profile">
                      <div class="rt-panel-h">Categories</div>
                    </div>
                    <ul class="nav nav-tabs nav-justified">
                      <li class="nav-item">
                        <a class="nav-link">Select Catgeories</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Select Service Area</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Project Description</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Upload Project Files</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Add Project Task</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Select inquire Type</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Select Contract Type</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Work Start and Delivery</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Set Budget</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <span class="ls-dets-com ls-dets-secure">Secure</span>
                  <img class="ls-sec-img" src="@/assets/img/lp-1.png" />
                  <span class="ls-dets-com ls-dets-s-secure">100% Secure</span>
                  <span class="ls-dets-com ls-dets-jd"
                    >Job is Done and money back</span
                  >
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/lp-2.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Browser Profile</span>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/lp-3.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Chat System</span>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/lp-4.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Save Money</span>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/lp-5.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Follow your Work</span>
                </div>
              </div>
              <div class="ui-block">
                <div class="ls-dets">
                  <img class="ls-brs-img" src="@/assets/img/lp-6.png" />
                  <span class="ls-s-dets-com ls-dets-bp">Get it done</span>
                </div>
              </div>
            </div>
            <div
              class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 mdl-bap-col"
            >
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Select Project Category</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select Catgeory</label>
                        <select class="form-control">
                          <option>Select Catgeory</option>
                          <option>Catgeory 1</option>
                          <option>Catgeory 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#add-1"
                            ></use>
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
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select Subcatgeory</label>
                        <select class="form-control">
                          <option>Select Subcatgeory</option>
                          <option>Subcatgeory 1</option>
                          <option>Subcatgeory 1</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#list-3"
                            ></use>
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
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Select Service Area</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Country</label>
                        <input
                          class="form-control"
                          placeholder="Country"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#worldwide"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">District</label>
                        <input
                          class="form-control"
                          placeholder="District"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#location-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">City</label>
                        <input
                          class="form-control"
                          placeholder="City"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#map"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Project Descriptions</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r">
                    <div class="col-lg-7 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Project Title</label>
                        <input
                          class="form-control"
                          placeholder="Project Title"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#header"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Date &amp; Time</label>
                        <input
                          class="form-control"
                          placeholder="Date &amp; Time"
                          type="text"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#calendar-5"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div
                        class="
                          form-group
                          label-floating
                          form-group-textare
                          is-empty
                        "
                      >
                        <textarea
                          class="form-control"
                          placeholder="Project Description..."
                        ></textarea>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div
                  class="ui-block-title uld-fl"
                  data-toggle="modal"
                  data-target="#uld-fl"
                >
                  <h6 class="title">Upload Project Files</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row upload-r upload-r-u-up upload-r-u-pp">
                    <div
                      class="fz-uploader upload-r-common"
                      data-fz-uploader-type="image"
                      data-fz-uploader="demo"
                      v-b-modal="'upload-image-modal'"
                    >
                      <div class="fz-upload-slots">
                        <div class="fz-upload-slot">
                          <div class="fz-upload-slot__placeholder">
                            <div
                              class="fz-upload-slot__placeholder__icon"
                            ></div>
                            <div class="fz-upload-slot__placeholder__text">
                              Upload image
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="upload-r-sup-container">
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use xlink:href="#file"></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Add Project Tasks</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->

                  <div
                    :id="'option_clone_' + taskIndex"
                    class="form-group option_clone"
                    style="width: 100%"
                    v-for="(projectTask, taskIndex) in projectTasks"
                    :key="taskIndex"
                  >
                    <div class="col-lg-10 col-md-9 col-sm-9 col-9 no-padding">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Add New Task</label>
                        <input
                          type="text"
                          class="form-control job_post_textfield value1"
                          placeholder="Enter Option"
                          v-model="projectTask.value"
                        />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use
                              xlink:href="@/assets/svg-sprite.svg#clipboard-1"
                            ></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div
                      class="pl-2"
                      id="AddProject"
                      @click="addProjectTask()"
                      style="cursor: pointer"
                    >
                      <img src="@/assets/img/plus.png" width="35px" />
                    </div>
                    <div
                      class="px-2"
                      id="CloseProject"
                      v-show="projectTasks.length > 1"
                      @click="removeProjectTask(index)"
                      style="cursor: pointer"
                    >
                      <img src="@/assets/img/cross.png" width="35px" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block ui-block-tab">
                <div class="ui-block-title">
                  <h6 class="title">Select inquire Type</h6>
                </div>
                <div class="ui-block-content ui-block-padd ui-block-pad-b">
                  <ul class="row nav-tabs">
                    <li class="col-md-12 col-lg-4">
                      <a
                        class="iqy-main-tab active"
                        data-toggle="tab"
                        href="#tab-1-1"
                        >Assigments</a
                      >
                    </li>
                    <li class="col-md-12 col-lg-4">
                      <a class="iqy-main-tab" data-toggle="tab" href="#tab-1-2"
                        >Cost Estimate</a
                      >
                    </li>
                    <li class="col-md-12 col-lg-4">
                      <a class="iqy-main-tab" data-toggle="tab" href="#tab-1-3"
                        >Offers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="tab-content tab-content-tab-b" id="inquire-tab">
                  <div class="col-12">
                    <div
                      class="tab-pane tab-pane-common show active"
                      id="tab-1-1"
                    >
                      <ul class="row nav-tabs">
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab active"
                            data-toggle="tab"
                            href="#tab-1-4"
                            >Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-5"
                            >Not Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-6"
                            >Both</a
                          >
                        </li>
                      </ul>
                      <div
                        class="tab-pane tab-pane-det show active"
                        id="tab-1-4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius. Nulla eu elit tortor.
                        Phasellus aliquam urna sit amet lorem pharetra,
                        ullamcorper consectetur tellus gravida. Etiam mauris
                        augue, elementum ut varius non, vehicula porta nisl.
                        Curabitur faucibus odio vitae quam feugiat, finibus
                        pulvinar magna ultrices. In in fringilla enim, sit amet
                        vulputate massa. Quisque viverra odio faucibus,
                        consectetur sem et, auctor lacus.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales.
                      </div>
                    </div>
                    <div class="tab-pane tab-pane-common" id="tab-1-2">
                      <ul class="row nav-tabs">
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab active"
                            data-toggle="tab"
                            href="#tab-1-7"
                            >Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-8"
                            >Not Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-9"
                            >Both</a
                          >
                        </li>
                      </ul>
                      <div
                        class="tab-pane tab-pane-det show active"
                        id="tab-1-7"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius. Nulla eu elit tortor.
                        Phasellus aliquam urna sit amet lorem pharetra,
                        ullamcorper consectetur tellus gravida. Etiam mauris
                        augue, elementum ut varius non, vehicula porta nisl.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis.
                      </div>
                    </div>
                    <div class="tab-pane tab-pane-common" id="tab-1-3">
                      <ul class="row nav-tabs">
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab active"
                            data-toggle="tab"
                            href="#tab-1-10"
                            >Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-11"
                            >Not Binding</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-12"
                            >Both</a
                          >
                        </li>
                      </ul>
                      <div
                        class="tab-pane tab-pane-det show active"
                        id="tab-1-10"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius. Nulla eu elit tortor.
                        Phasellus aliquam urna sit amet lorem pharetra,
                        ullamcorper consectetur tellus gravida. Etiam mauris
                        augue, elementum ut varius non, vehicula porta nisl.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-11">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block ui-block-tab">
                <div class="ui-block-title">
                  <h6 class="title">Select Contract Type</h6>
                </div>
                <div class="tab-content tab-content-tab-p-b" id="padding">
                  <div class="col-12">
                    <div class="tab-pane tab-pane-common show active">
                      <ul class="row nav-tabs">
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab active"
                            data-toggle="tab"
                            href="#tab-1-13"
                            >Standard Contract</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-14"
                            >Express Contract</a
                          >
                        </li>
                        <li class="col-md-12 col-lg-4 no-padding">
                          <a
                            class="iqy-inner-tab"
                            data-toggle="tab"
                            href="#tab-1-15"
                            >On Time</a
                          >
                        </li>
                      </ul>
                      <div
                        class="tab-pane tab-pane-det show active"
                        id="tab-1-13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius. Nulla eu elit tortor.
                        Phasellus aliquam urna sit amet lorem pharetra,
                        ullamcorper consectetur tellus gravida. Etiam mauris
                        augue, elementum ut varius non, vehicula porta nisl.
                        Curabitur faucibus odio vitae quam feugiat, finibus
                        pulvinar magna ultrices. In in fringilla enim, sit amet
                        vulputate massa. Quisque viverra odio faucibus,
                        consectetur sem et, auctor lacus.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales. Etiam vitae leo id metus fermentum vehicula.
                        Aliquam sodales malesuada nisi id ullamcorper. Mauris
                        quis nulla eros. Aliquam tincidunt magna sed mi
                        convallis, in aliquet odio varius.
                      </div>
                      <div class="tab-pane tab-pane-det" id="tab-1-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non sodales sapien, aliquet maximus ante.
                        Nulla orci ipsum, malesuada vitae lacinia id, tincidunt
                        sed felis. Phasellus volutpat dapibus ante sit amet
                        sodales.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block ui-block-tab">
                <div class="ui-block-title">
                  <h6 class="title">Work Start and Delivery</h6>
                </div>
                <div class="tab-content tab-content-tab-p-b" id="padding">
                  <div class="col-12 w-strt-del-cont">
                    <h6 class="title">Work Start:</h6>
                    <div class="w-strt-del w-strt-del-dct">
                      <ul class="row w-strt-del-row">
                        <li class="col-sm-12 col-lg-4">
                          <a class="strt-del-btn active" href="#"
                            >By Agreement</a
                          >
                        </li>
                        <li class="col-sm-12 col-lg-4">
                          <a
                            class="strt-del-btn"
                            data-toggle="tab"
                            href="#tab-1-2"
                            >Start Now</a
                          >
                        </li>
                        <li class="col-sm-12 col-lg-4">
                          <a
                            class="strt-del-btn"
                            data-toggle="tab"
                            href="#tab-1-3"
                            >By Date</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-content tab-content-tab-p-b tb-ctnt-snd"
                  id="padding"
                >
                  <div class="col-12 w-strt-del-cont">
                    <h6 class="title">Work Delivery:</h6>
                    <div class="w-strt-del w-strt-del-dry">
                      <ul class="row w-strt-del-row">
                        <li class="col-sm-12 col-lg-4">
                          <a class="strt-del-btn active" href="#"
                            >By Agreement</a
                          >
                        </li>
                        <li class="col-sm-12 col-lg-4">
                          <a
                            class="strt-del-btn"
                            data-toggle="tab"
                            href="#tab-1-2"
                            >Start Now</a
                          >
                        </li>
                        <li class="col-sm-12 col-lg-4">
                          <a
                            class="strt-del-btn"
                            data-toggle="tab"
                            href="#tab-1-3"
                            >By Date</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block ui-block-tab">
                <div class="ui-block-title">
                  <h6 class="title">Set Budget</h6>
                </div>
                <div class="ui-block-content ui-block-padd">
                  <div class="row">
                    <div class="col-12">
                      <div class="set-budget-row active">
                        <span class="label-com">By Agreement</span>
                      </div>
                      <div class="set-budget-row">
                        <span class="label-com">Budget Fix</span>
                        <div class="sb-inputs">
                          <div class="sb-inputs-inner">
                            <input
                              class="input-ctrl"
                              placeholder=""
                              type="text"
                              value="5000,00"
                            />
                            <span class="sb-symbol">$</span>
                          </div>
                        </div>
                      </div>
                      <div class="set-budget-row">
                        <span class="label-com">Budget Hourly</span>
                        <div class="sb-inputs">
                          <div class="sb-inputs-inner">
                            <input
                              class="input-ctrl"
                              placeholder="Type Total Hours"
                              type="text"
                            />
                            <span class="sb-symbol">$</span>
                          </div>
                          <div class="sb-inputs-inner">
                            <input
                              class="input-ctrl"
                              placeholder="Hour Price"
                              type="text"
                            />
                            <span class="sb-symbol">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Policy and Terms</h6>
                </div>
                <div class="col-12" id="padding">
                  <div class="row term_container">
                    <div class="col-lg-12 col-xl-6 left-term">
                      <span class="term-h">AGB</span>
                      <div class="term-txt">
                        1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                        "AGB") der OW networks GmbH (nachfolgend "Lizenzgeber"),
                        gelten für alle Verträge über die Lieferung von nicht
                        auf einem körperlichen Datenträger befindlichen Daten,
                        die in digitaler Form hergestellt und bereitgestellt
                        werden (digitale Inhalte), die ein Verbraucher oder
                        Unternehmer (nachfolgend "Lizenznehmer") mit dem
                        Lizenzgeber hinsichtlich der vom Lizenzgeber in seinem
                        Online-Shop dargestellten digitalen Inhalte abschließt.
                        Hiermit wird der Einbeziehung von eigenen Bedingungen
                        des Lizenznehmers widersprochen, es sei denn, es ist
                        etwas anderes vereinbart.
                        <br /><br />
                        1.2 Vertragsgegenstand ist die Überlassung der vom
                        Lizenzgeber angebotenen digitalen Inhalte an den
                        Lizenznehmer in elektronischer Form unter Einräumung
                        bestimmter, in diesen AGB genauer geregelten
                        Nutzungsrechte.
                        <br /><br />
                        1.3 Verbraucher im Sinne dieser AGB ist jede natürliche
                        Person, die ein Rechtsgeschäft zu Zwecken abschließt,
                        die überwiegend weder ihrer gewerblichen noch ihrer
                        selbständigen beruflichen Tätigkeit zugerechnet werden
                        können. Unternehmer im Sinne dieser AGB ist eine
                        natürliche oder juristische Person oder eine
                        rechtsfähige Personengesellschaft, die bei Abschluss
                        eines Rechtsgeschäfts in Ausübung ihrer gewerblichen
                        oder selbständigen beruflichen Tätigkeit handelt.
                      </div>
                      <div class="term-check">
                        <input id="agb" type="checkbox" />
                        <label for="agb">
                          Ich habe die
                          <a href="#">Allgemeine Geschäftsbedingungen (AGB)</a>
                          gelesen.
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-12 col-xl-6 right-term">
                      <span class="term-h">Widerrufsbelehrung</span>
                      <div class="term-txt">
                        Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.
                        Nähere Informationen zum Widerrufsrecht ergeben sich aus
                        der Widerrufsbelehrung des Lizenzgebers.
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
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- ... end Personal Information Form  -->
        </div>
      </template>
    </b-modal>
    <b-modal id="upload-image-modal" size="md" hide-footer hide-header>
      <template #default="{ close }">
        <div
          class="modal-content"
          style="width: 600px !important; position: absolute; left: -30px"
        >
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
          <div class="container pt-2 headerClass">
            <p>Upload Project Files</p>
          </div>
          <div class="container pt-3 pb-3 uploadImage">
            <div class="row upload-r upload-r-u-up upload-r-u-pp">
              <div
                class="fz-uploader upload-r-common"
                data-fz-uploader-type="image"
                data-fz-uploader="demo"
              >
                <div class="fz-upload-slots">
                  <div class="fz-upload-slot">
                    <div class="fz-upload-slot__placeholder">
                      <div class="fz-upload-slot__placeholder__icon"></div>
                      <div class="fz-upload-slot__placeholder__text">
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
                        <div class="fz-upload-slot__rm-img__icon"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="upload-r-sup-container">
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use xlink:href="#file"></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group-uld upload-r-common">
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use
                                xlink:href="@/assets/svg-sprite.svg#file"
                              ></use>
                            </svg>
                          </div>
                          <div class="doc-det">
                            <span class="doc-title">Document Title</span>
                            <span class="doc-txt">From 12.10.2020 – 2MB</span>
                          </div>
                        </div>
                      </div>
                    </div> -->
            </div>
          </div>
          <div class="container">
            <div class="mb-3">
              <input
                type="text"
                class="form-control pt-3 pb-3"
                placeholder="Files Title"
              />
            </div>
            <div class="mb-4">
              <textarea
                class="form-control"
                id="upload-image"
                rows="5"
                placeholder="Text Field for describe the issue"
              ></textarea>
            </div>
          </div>
          <div class="container footerClass px-0">
            <a class="uploadAndClose text-center"> Upload and Close </a>
            <a class="uploadAndAddNew text-center"> Upload and Add New </a>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectTasks: [{ value: "" }],
      services: [
        {
          categories: [
            {
              value: 1,
              text: "Category 1",
            },
            {
              value: 2,
              text: "Category 2",
            },
          ],
          selectedCategories: null,
          subCategories: [
            {
              value: 1,
              text: "Sub Category 1",
            },
            {
              value: 2,
              text: "Sub Category 2",
            },
          ],
          selectedSubCategories: null,
        },
      ],
    };
  },
  methods: {
    addProjectTask() {
      this.projectTasks.push({ value: "" });
    },
    removeProjectTask(index) {
      this.projectTasks.splice(index, 1);
    },
    addService() {
      this.services.push({
        categories: [
          {
            value: 1,
            text: "Category 1",
            
          },
          {
            value: 2,
            text: "Category 2",
          },
        ],
        selectedCategories: null,
        subCategories: [
          {
            value: 1,
            text: "Category 1",
          },
          {
            value: 2,
            text: "Category 2",
          },
        ],
        selectedSubCategories: null,
      });
    },
    removeService(index) {
      this.services.splice(index, 1);
    },
  },

  name: "PageHeader",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
select {
  background-color: #fff !important;
}
.headerClass {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  color: gray;
}
.headerClass p {
  font-size: 20px;
}
.uploadImage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerClass {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-bottom: none;
  padding: 0;
}
.footerClass a.uploadAndClose {
  padding: 15px 30px !important;
  border-right: 1px solid #ddd;
  width: 300px;
  font-size: 20px;
  color: gray;
}

.footerClass a.uploadAndAddNew {
  padding: 15px 30px !important;
  width: 300px;
  font-size: 20px;
  text-decoration: none;
  color: gray;
}
</style>
