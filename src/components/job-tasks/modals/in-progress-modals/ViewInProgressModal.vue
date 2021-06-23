<template>
  <div>
    <b-modal
      :id="'view-in-progress' + taskIndex"
      size="xl"
      hide-header
      hide-footer
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
            <div class="ui-block-title my-ctrt">
              <div class="my-ctrt-project">
                <span class="my-ctrt-title">Task Details</span>
              </div>
            </div>
          </div>
          <div class="modal-body tab-pane modal-body-bap show active">
            <form class="custom-form row">
              <div class="col-xl-12 col-12">
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="pt-mlstn-container">
                      <div class="pt-mlstn-col no-b">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Jobs Title</span>
                          <span>Project ID : Category – SubCatgeory</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det text-center">
                          <span class="pt-mlstn-h">Tasks</span>
                          <span class="c-green"
                            ><font class="c-red">4</font> / 3</span
                          >
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det text-center">
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-green">In Progress</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="task-content-row task-content-rwc">
                        <div class="task-content ticket-prgs-common no-border">
                          <div class="tckt-t-w task-icon">
                            <img src="@/assets/img/mencap.png" />
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="stm-cont-h">Company Name</span>
                            <span>Project ID : Category – SubCatgeory</span>
                          </div>
                          <div class="task-ctnt-common task-det text-center">
                            <span class="stm-cont-h">Employee</span>
                            <span>Employee Name</span>
                          </div>
                          <div class="task-ctnt-common task-det text-center">
                            <span class="stm-cont-h">Work Start</span>
                            <span>12.12.2020 – 19:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="task-view-c">
                      <div class="task-view-c-inner">
                        <div class="task-view-c-header">
                          <div class="pt-mlstn-common tsk-vw-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#completed-task"></use>
                            </svg>
                          </div>
                          <div class="pt-mlstn-common pt-mlstn-det">
                            <span class="pt-mlstn-h">Task Title</span>
                            <span class="">Project ID</span>
                          </div>
                          <div class="pt-mlstn-common pt-mlstn-det">
                            <span class="pt-mlstn-h">Doing by</span>
                            <span class="">Employee Name</span>
                          </div>
                          <div class="pt-mlstn-common pt-mlstn-det">
                            <span class="pt-mlstn-h">Status</span>
                            <span class="c-blue">Started</span>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="tsk-title-vw">Task Title</div>
                        </div>
                        <div class="col-12">
                          <div class="tsk-desc-vw">Task Description</div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="tsk-pop-issue-vw-wrap no-border">
                              <div class="tsk-pop-issue-vw">
                                <div class="tsk-pop-issue-vw-img">
                                  <img src="@/assets/img/issue-img.png" />
                                </div>
                                <div class="tsk-pop-issue-det">
                                  <span>Admin Section</span>
                                  <span>Popup issue not done</span>
                                </div>
                              </div>
                              <div class="tsk-pop-issue-vw">
                                <div class="tsk-pop-issue-vw-img">
                                  <img src="@/assets/img/issue-img.png" />
                                </div>
                                <div class="tsk-pop-issue-det">
                                  <span>Admin Section</span>
                                  <span>Popup issue not done</span>
                                </div>
                              </div>
                              <div class="tsk-pop-issue-vw">
                                <div class="tsk-pop-issue-vw-img">
                                  <img src="@/assets/img/issue-img.png" />
                                </div>
                                <div class="tsk-pop-issue-det">
                                  <span>Admin Section</span>
                                  <span>Popup issue not done</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- ... end Personal Information Form  -->
          </div>
          <div class="col-12 btn-files-container btn-fls-wrp ofh">
            <div class="row">
              <button class="btn btn-primary btn-files-pop">Close</button>
            </div>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["taskIndex"]
};
</script>