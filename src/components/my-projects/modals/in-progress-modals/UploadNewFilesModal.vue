<template>
  <div>
    <b-modal size="lg" hide-footer hide-header :id="'upload-new-file'">
      <template #default="{ close }">
        <div class="modal-content">
          <a
            class="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
            style="cursor: pointer"
          >
            <svg class="olymp-close-icon">
              <use xlink:href="#olymp-close-icon" @click="close()"></use>
            </svg>
          </a>
          <div class="ui-block">
            <div class="ui-block-title">
              <span class="stm-popup-title">
                <span>Upload Files to your Ticket</span>
              </span>
            </div>
          </div>
          <div class="modal-body modal-body-no-p">
            <form class="custom-form">
              <div class="ui-block ui-block-no-m">
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row">
                    <div class="col-12 text-center mdl-icon">
                      <div
                        class="fz-uploader upload-r-common upload-r-db"
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
                    </div>
                    <div class="col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Files Title</label>
                        <input
                          class="form-control"
                          placeholder="Title"
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
                    <div class="col-12">
                      <div class="form-group label-floating label-textarea">
                        <label class="control-label">File Description</label>
                        <textarea
                          class="form-control"
                          placeholder="File Description"
                        ></textarea>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="#alert"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container" style="overflow: hidden">
                <div class="row">
                  <button class="btn btn-primary btn-files-pop">
                    Upload and Close
                  </button>
                  <button class="btn btn-primary btn-files-pop">
                    Upload and Add New
                  </button>
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