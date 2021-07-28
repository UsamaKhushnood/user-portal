<template>
  <div>
    <b-modal
      :id="'view-disputed-job' + job"
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
                <span class="my-ctrt-title">Project Title will be here</span>
                <span class="my-ctrt-desc" >Date / Time Catgeory</span>
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
          <div class="modal-body tab-pane modal-body-bap show active">
            <form class="custom-form row l-print-form">
              <div class="l-print-btn" style="width: 65px;">
                <svg class="">
                  <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
                </svg>
              </div>
              <div class="col-12">
                <div class="ui-block pro-status-block">
                  <div class="row">
                    <div class="col-8">
                      <div class="pro-status bg-red text-center">
                        <span>Dispute Reason</span>
                      </div>
                    </div>
                    <div class="col-2 tckt-dpt-btn">
                      <button class="btn btn-lg btn-green in-d-dpt-btn">
                        Ticket ID
                      </button>
                    </div>
                    <div class="col-2 tckt-dpt-btn">
                      <button class="btn btn-lg btn-green in-d-dpt-btn">
                        In Dispute
                      </button>
                    </div>
                  </div>
                </div>

                <div class="ui-block pro-contract-block">
                  <div class="pro-contract">
                    <div class="pro-contract-img">
                      <img src="@/assets/img/t-image.png" />
                    </div>
                    <div class="pro-contract-user-company">
                      <div class="pro-contract-h">Contract between</div>
                      <div class="pro-contract-det-container">
                        <div class="pro-contract-det-inner">
                          <span class="pro-contract-det-h">User Deatils</span>
                          <span class="pro-contract-det-txt"
                            >Username Lastname</span
                          >
                          <span class="pro-contract-det-txt">User ID</span>
                        </div>
                        <div class="pro-contract-det-inner">
                          <span class="pro-contract-det-h"
                            >Company Details</span
                          >
                          <span class="pro-contract-det-txt">Company Name</span>
                          <span class="pro-contract-det-txt">Company ID</span>
                        </div>
                      </div>
                    </div>
                    <div class="pro-contract-img">
                      <img src="@/assets/img/mencap.png" />
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Budget</span>
                      </div>
                    </div>
                    <div class="pd-budget-container">
                      <div class="pd-budget-col pro-contract-budget">
                        <span>Hourly</span>
                        <span>Total Hours : 100</span>
                        <span>Hourly Rate : 10 €</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner pane-separate">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Warranty type</span>
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span class="text-center">Yes – 3 month</span>
                      </div>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Contract Type</span>
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span class="text-center">Express</span>
                      </div>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Work Start - Delivery</span>
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span><font>Start</font> : 01.12.2020</span
                        ><span><font>Delivery</font> : 01.02.2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Project Requiements</span>
                      </div>
                    </div>
                    <div class="pd-req-container">
                      <a class="pd-req-col"> WebDesign </a>
                      <a class="pd-req-col"> Laravel </a>
                      <a class="pd-req-col"> Vue.js </a>
                      <a class="pd-req-col"> API </a>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Project Files</span>
                      </div>
                    </div>
                    <div class="pd-fls-container">
                      <div class="pd-fls-col">
                        <div class="pd-fls-inner">
                          <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#word"></use>
                            </svg>
                          </div>
                          <div class="pd-flsi-cmn pd-flsi-cmn-detail">
                            <span class="pd-fls-title">Document Title</span>
                            <span class="pd-fls-txt"
                              >From 12.10.2020 – 2MB</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="pd-fls-col">
                        <div class="pd-fls-inner">
                          <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#word"></use>
                            </svg>
                          </div>
                          <div class="pd-flsi-cmn pd-flsi-cmn-detail">
                            <span class="pd-fls-title">Document Title</span>
                            <span class="pd-fls-txt"
                              >From 12.10.2020 – 2MB</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="pd-fls-col">
                        <div class="pd-fls-inner">
                          <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#word"></use>
                            </svg>
                          </div>
                          <div class="pd-flsi-cmn pd-flsi-cmn-detail">
                            <span class="pd-fls-title">Document Title</span>
                            <span class="pd-fls-txt"
                              >From 12.10.2020 – 2MB</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Project Tasks</span>
                      </div>
                    </div>
                    <div class="pd-tsk-container">
                      <div class="pd-tsk-col">
                        <div class="pd-tsk-inner">
                          <div class="pd-tski-cmn pd-tski-cmn-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                            </svg>
                          </div>
                          <div class="pd-tski-cmn pd-tski-cmn-detail">
                            <div class="pd-tsk-title">1. Task Title</div>
                            <div class="pd-tsk-detail">
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Task ID</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">1233232312</span>
                              </div>
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Created</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">01.10.2020</span>
                              </div>
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Milestone</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">500,00 $</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pd-tsk-col">
                        <div class="pd-tsk-inner">
                          <div class="pd-tski-cmn pd-tski-cmn-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                            </svg>
                          </div>
                          <div class="pd-tski-cmn pd-tski-cmn-detail">
                            <div class="pd-tsk-title">1. Task Title</div>
                            <div class="pd-tsk-detail">
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Task ID</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">1233232312</span>
                              </div>
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Created</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">01.10.2020</span>
                              </div>
                              <div class="pd-tsk-row">
                                <span class="pd-tsk-tag">Milestone</span>
                                <span class="pd-tsk-scolon">:</span>
                                <span class="pd-tsk-assign">500,00 $</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Project Milestones</span>
                      </div>
                    </div>
                    <div class="pt-mlstn-container">
                      <div class="pt-mlstn-col">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#calendar-2"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Ticket ID</span>
                          <span class="c-green">1000,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">In Escrow</span>
                          <span class="c-green">200,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Ready Paid</span>
                          <span class="c-green">350,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Remain</span>
                          <span class="c-green">450,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Total Paid</span>
                          <span class="c-green">350,00 €</span>
                        </div>
                      </div>
                    </div>
                    <div class="pt-mlstn-container pt-mlstn-request-container">
                      <div class="pt-mlstn-col pt-mlstn-request-col">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Title</span>
                          <span class="">Task 1 Done</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Date</span>
                          <span class="">12.10.2020</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Amount</span>
                          <span class="">350,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Status</span>
                          <span class="c-green">Done</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                          </svg>
                        </div>
                      </div>
                      <div class="pt-mlstn-col pt-mlstn-request-col">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Title</span>
                          <span class="">Task 1 Done</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Date</span>
                          <span class="">12.10.2020</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Amount</span>
                          <span class="">350,00 €</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Request Status</span>
                          <span class="c-green">Done</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner pane-separate">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title"
                          >Policy and Terms signed by User</span
                        >
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span class="text-center">11.12.2020 – 19:30</span>
                      </div>
                    </div>
                  </div>
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title"
                          >Policy and Terms signed by Company</span
                        >
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span><font>Start</font> : 01.12.2020</span
                        ><span><font>Delivery</font> : 01.02.2020</span>
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

<script>
export default {
  props: ["job"]
};
</script>