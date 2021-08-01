<template>
  <div>
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Owner Info</h6>
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
              <img src="@/assets/img/mencap.png" />
            </div>
          </div>
          <div class="upload-r-sup-container">
            <div class="form-group-uld upload-r-common">
              <div class="doc-inner-cat">
                <div class="form-group label-floating is-empty">
                  <label class="control-label">Name</label>
                  <input class="form-control" placeholder="Name" type="text" />
                  <div class="form-icon">
                    <svg class="v-rating-svg">
                      <use xlink:href="#alert"></use>
                    </svg>
                  </div>
                  <span class="material-input"></span>
                </div>
              </div>
            </div>
            <div class="form-group-uld upload-r-common">
              <div class="doc-inner-cat">
                <div class="form-group label-floating is-empty">
                  <label class="control-label">Lastname</label>
                  <input
                    class="form-control"
                    placeholder="Company Type"
                    type="text"
                  />
                  <div class="form-icon">
                    <svg class="v-rating-svg">
                      <use xlink:href="#alert"></use>
                    </svg>
                  </div>
                  <span class="material-input"></span>
                </div>
              </div>
            </div>
            <div class="form-group-uld upload-r-common">
              <div class="doc-inner-cat">
                <div class="form-group label-floating">
                  <label class="control-label">Select Salutation</label>
                  <select class="form-control">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div class="form-icon">
                    <svg class="v-rating-svg">
                      <use xlink:href="#sex"></use>
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
                  <span class="material-input"></span
                  ><span class="material-input"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Conatct info</h6>
      </div>
      <div class="ui-block-content ui-block-padd wndw-popup">
        <!-- Personal Information Form  -->
        <div class="row upload-r custom-form">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating is-empty">
              <label class="control-label">E-Mail</label>
              <input
                class="form-control"
                placeholder="biden@whitehouse.com"
                type="text"
              />
              <div class="form-icon">
                <svg class="v-rating-svg">
                  <use xlink:href="#mail"></use>
                </svg>
              </div>
              <span class="material-input"></span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating is-empty">
              <label class="control-label">E-Mail</label>
              <input
                class="form-control"
                placeholder="biden@whitehouse.com"
                type="text"
              />
              <div class="form-icon">
                <svg class="v-rating-svg">
                  <use xlink:href="#mail"></use>
                </svg>
              </div>
              <span class="material-input"></span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating is-empty">
              <label class="control-label">Phone</label>
              <input class="form-control" placeholder="Phone" type="text" />
              <div class="form-icon">
                <svg class="v-rating-svg">
                  <use xlink:href="#smartphone"></use>
                </svg>
              </div>
              <span class="material-input"></span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating is-empty">
              <label class="control-label">Phone</label>
              <input class="form-control" placeholder="Phone" type="text" />
              <div class="form-icon">
                <svg class="v-rating-svg">
                  <use xlink:href="#smartphone"></use>
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
        <h6 class="title">Account Status</h6>
      </div>
      <div class="ui-block-content ui-block-padd wndw-popup">
        <!-- Personal Information Form  -->
        <div class="row upload-r custom-form">
          <div class="col-12"><br /><br /><br /><br /><br /><br /></div>
        </div>
      </div>
    </div>
  </div>
</template>