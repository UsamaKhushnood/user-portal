<template>
  <div>
    <b-modal id="addNewTaskModal" size="xl" hide-header hide-footer>
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
                  >Project Details
                  <div class="ripple-container"></div
                ></a>
              </div>
            </div>
          </div>
          <div class=" tab-pane modal-body-bap show active">

              <form class="custom-form row no-margin">
                <div class="col-12">
                  <div class="pro-select-wrapper">
                    <div class="pro-select">
                      <div class="pro-select-icon">
                        <svg class="">
                          <use xlink:href="@/assets/svg-sprite.svg#alarm"></use>
                        </svg>
                      </div>
                      <div class="pro-select-txt">
                        Select the Project u want add Task:
                      </div>
                    </div>
                  </div>
                  <div class="row pro-swth-wrapper">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="pro-swth-cols">
                        <div class="card card-stats card-stats-user">
                          <div class="card-header-user">
                            <div class="card-icon bg-lite-grey">
                              <svg class="icon">
                                <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                              </svg>
                            </div>
                            <div
                              class="button-pro-swth r-pro-swth"
                              id="button-1"
                            >
                              <input
                                type="checkbox"
                                class="checkbox-pro-swth"
                              />
                              <div class="knobs-pro-swth"></div>
                              <div class="layer-pro-swth"></div>
                            </div>
                            <div class="pro-swth-ttl">Project Title</div>
                            <div class="pro-swth-txt">Project ID</div>
                            <div class="pro-swth-ttl-tsk">
                              <span class="pro-swth-ttl-total">Total Task</span>
                              <span class="c-green"
                                ><font class="c-red">4</font> / 3</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="pro-swth-cols">
                        <div class="card card-stats card-stats-user">
                          <div class="card-header-user">
                            <div class="card-icon bg-lite-grey">
                              <svg class="icon">
                                <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                              </svg>
                            </div>
                            <div
                              class="button-pro-swth r-pro-swth"
                              id="button-1"
                            >
                              <input
                                type="checkbox"
                                class="checkbox-pro-swth"
                              />
                              <div class="knobs-pro-swth"></div>
                              <div class="layer-pro-swth"></div>
                            </div>
                            <div class="pro-swth-ttl">Project Title</div>
                            <div class="pro-swth-txt">Project ID</div>
                            <div class="pro-swth-ttl-tsk">
                              <span class="pro-swth-ttl-total">Total Task</span>
                              <span class="c-green"
                                ><font class="c-red">4</font> / 3</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="pro-swth-cols">
                        <div class="card card-stats card-stats-user">
                          <div class="card-header-user">
                            <div class="card-icon bg-lite-grey">
                              <svg class="icon">
                                <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                              </svg>
                            </div>
                            <div
                              class="button-pro-swth r-pro-swth"
                              id="button-1"
                            >
                              <input
                                type="checkbox"
                                class="checkbox-pro-swth"
                              />
                              <div class="knobs-pro-swth"></div>
                              <div class="layer-pro-swth"></div>
                            </div>
                            <div class="pro-swth-ttl">Project Title</div>
                            <div class="pro-swth-txt">Project ID</div>
                            <div class="pro-swth-ttl-tsk">
                              <span class="pro-swth-ttl-total">Total Task</span>
                              <span class="c-green"
                                ><font class="c-red">4</font> / 3</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row tsk-mlstn-wrapper">
                    <div class="col-sm-12 col-md-6 col-12 tsk-mlstn-col">
                      <input
                        type="text"
                        placeholder="Task Title"
                        class="tsk-mlstn-fields"
                      />
                      <textarea
                        type="text"
                        placeholder="Task Description"
                        class="tsk-mlstn-fields"
                      ></textarea>
                    </div>
                    <div class="col-sm-12 col-md-6 col-12 tsk-mlstn-col">
                      <div class="tsk-mlstn-col-create">
                        <span class="tsk-mlstn-title"
                          >Create a Milestone for the Task</span
                        >
                        <div class="active-mlstn">
                          <span>Active Milestone</span>
                          <span>
                            <div
                              class="button-pro-swth r-pro-swth"
                              id="button-1"
                            >
                              <input
                                type="checkbox"
                                class="checkbox-pro-swth"
                              />
                              <div class="knobs-pro-swth"></div>
                              <div class="layer-pro-swth"></div>
                            </div>
                          </span>
                        </div>
                        <div class="add-mlstn-amount">
                          <div class="add-mlstn-amount-inner">
                            <input
                              type="text"
                              placeholder="Task Title"
                              class="tsk-mlstn-fields"
                            />
                            <span class="add-mlstn-price">€</span>
                          </div>
                        </div>
                        <div class="pd-done-front">
                          <a class="pd-req-col"> Paid After Done </a>
                          <a class="pd-req-col"> Paid Upfront </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="row upload-r upload-r-u-up upload-r-u-pp"
                    style="
                      margin-top: 15px;
                      padding-bottom: 15px;
                      border-bottom: 1px solid #e6ecf5;
                    "
                  >
                    <div
                      class="fz-uploader upload-r-common"
                      style="position: relative"
                      data-fz-uploader-type="image"
                      data-fz-uploader="demo"
                    >
                      <div
                        class="pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#upload-filess"
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
                        <div class="doc-inner">
                          <div class="doc-file-svg">
                            <svg class="doc-file-icon">
                              <use xlink:href="@/assets/svg-sprite.svg#file"></use>
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
                              <use xlink:href="@/assets/svg-sprite.svg#file"></use>
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
                              <use xlink:href="@/assets/svg-sprite.svg#file"></use>
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
                              <use xlink:href="@/assets/svg-sprite.svg#file"></use>
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
                  <div class="col-12 btn-files-container">
                    <div class="row">
                      <button class="btn btn-primary btn-files-pop">
                        Add The Task
                      </button>
                      <button class="btn btn-primary btn-files-pop">
                        Cancle
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <!-- ... end Personal Information Form  -->

            <!-- ... end Personal Information Form  -->
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["job"],
};
</script>