<template>
  <div>
    <b-modal size="lg" hide-footer hide-header :id="'add-new-task'">
      <div class="modal-content">
        <a
          href="#"
          class="close icon-close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <svg class="olymp-close-icon">
            <use xlink:href="#olymp-close-icon"></use>
          </svg>
        </a>
        <div class="ui-block">
          <div class="ui-block-title">
            <span class="stm-popup-title">
              <span>Create New Task</span>
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
                    <div class="form-group label-floating">
                      <label class="control-label">Task Title</label>
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
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group label-floating no-margin">
                      <label class="control-label">Start Date</label>
                      <input
                        class="form-control"
                        placeholder="Start Date"
                        type="text"
                      />
                      <div class="form-icon">
                        <svg class="v-rating-svg">
                          <use xlink:href="#calendar-4"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group label-floating no-margin">
                      <label class="control-label">Delivery Date</label>
                      <input
                        class="form-control"
                        placeholder="Delivery Date"
                        type="text"
                      />
                      <div class="form-icon">
                        <svg class="v-rating-svg">
                          <use xlink:href="#calendar-4"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group label-floating label-textarea mt-4">
                      <label class="control-label">Task Descr.</label>
                      <textarea
                        class="form-control"
                        placeholder="Task Descr."
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
                <div class="row">
                  <div class="col-12">
                    <div
                      id="option_clone-task1"
                      class="form-group clone-common option_clone-task"
                      style="display: none; width: 100%"
                    >
                      <div class="task-img-input">
                        <div class="upload-task-file">
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
                        <div class="task-input-wrapper">
                          <div class="form-group label-floating">
                            <input
                              type="text"
                              class="
                                form-control
                                job_post_textfield
                                value-task1
                              "
                              name="options_value-task[]"
                              id="options_value-task"
                              placeholder="Image Title"
                            />
                          </div>
                          <div class="form-group label-floating">
                            <input
                              type="text"
                              class="
                                form-control
                                job_post_textfield
                                value-tasks1
                              "
                              name="options_value-tasks[]"
                              id="options_value-tasks1"
                              placeholder="Image Desc"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          task-add-rem-wrapper
                          cat-add-rem-common cat-add-rem-trigger
                          close_option-task
                        "
                        id="close-task1"
                        data-dismiss="alert"
                        aria-label="close-task"
                        data-id="option_clone-task1"
                      >
                        <img src="@/assets/img/cross.png" />
                      </div>
                    </div>
                    <div
                      id="option_clone-task2"
                      class="form-group clone-common option_clone-task"
                      style="width: 100%"
                    >
                      <div class="task-img-input">
                        <div class="upload-task-file">
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
                        <div class="task-input-wrapper">
                          <div class="form-group label-floating">
                            <input
                              type="text"
                              class="
                                form-control
                                job_post_textfield
                                value-task1
                              "
                              name="options_value-task[]"
                              id="options_value-task"
                              placeholder="Image Title"
                            />
                          </div>
                          <div class="form-group label-floating">
                            <input
                              type="text"
                              class="
                                form-control
                                job_post_textfield
                                value-tasks1
                              "
                              name="options_value-tasks[]"
                              id="options_value-tasks1"
                              placeholder="Image Desc"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          task-add-rem-wrapper
                          cat-add-rem-common cat-add-rem-trigger
                          add_option-task
                        "
                      >
                        <img src="@/assets/img/plus.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 btn-files-container" style="overflow: hidden">
              <div class="row">
                <button class="btn btn-primary btn-files-pop">
                  Create and Close
                </button>
                <button class="btn btn-primary btn-files-pop">
                  Create and Add New
                </button>
              </div>
            </div>
          </form>
          <!-- ... end Personal Information Form  -->
        </div>
      </div>
    </b-modal>
  </div>
</template>