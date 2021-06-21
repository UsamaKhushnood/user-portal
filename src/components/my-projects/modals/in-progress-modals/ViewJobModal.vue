<template>
  <div>
    <b-modal
      :id="'job-view' + jobIndex"
      :title="'this is modal' + jobIndex"
      size="xl"
      hide-footer
      hide-header
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
                <span class="my-ctrt-desc">Date / Time Catgeory</span>
              </div>
              <div class="my-ctrt-project">
                <span class="my-ctrt-title">Contract ID</span>
                <span class="my-ctrt-desc">IDewdedwewde</span>
              </div>
              <div class="my-ctrt-project">
                <svg class="">
                  <use xlink:href="#printer"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="modal-body tab-pane modal-body-bap show active">
            <form class="custom-form row">
              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="container-parent-tab ui-block">
                  <div class="row">
                    <div class="col col-12">
                      <div class="your-profile">
                        <div class="rt-panel-h">Categories</div>
                      </div>
                      <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                          <a class="nav-link">Project Offers</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">My Contracts</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">In Progress</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">In Done</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">In Dispute</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">In Canceled</a>
                        </li>
                      </ul>
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
                    <div class="in-pro-container">
                      <a class="in-pro-col"> WebDesign </a>
                      <a class="in-pro-col"> Laravel </a>
                      <a class="in-pro-col"> Vue.js </a>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Work Start - Delivery</span>
                      </div>
                    </div>
                    <div class="pd-inq-container">
                      <div class="pd-inq-txt">
                        <span><font>Start</font> : 01.12.2020</span>
                        <span><font>Delivery</font> : 01.02.2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
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
                </div>
                <div class="pane-common-inner">
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
                </div>
                <div class="pane-common-inner">
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
                </div>
                <div class="pane-common-inner">
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
                        <span><font>Start</font> : 01.12.2020</span>
                        <span><font>Delivery</font> : 01.02.2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="follow-work-container">
                      <div class="follow-work">
                        <img src="@/assets/img/follow-work-icon.png" />
                      </div>
                      <div class="follow-work-det">
                        <span>Follow the Work</span>
                        <span>Download our Desktop App now</span>
                      </div>
                      <div class="window-dnld-btn">
                        <div class="win-img">
                          <img src="@/assets/img/window.png" />
                        </div>
                        <div class="win-text">WIN 64 / 86 Bit</div>
                        <div class="win-download">
                          <img src="@/assets/img/download.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="ui-block pro-status-block">
                  <div class="pro-status-in-pro c-green">
                    <span>Project Status</span>
                    <span>In Progress</span>
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
                <div class="pane-common-inner">
                  <div class="task-content-row">
                    <div class="cmn-title">
                      <div class="abt-project">
                        <span class="abt-title">Project Files</span>
                      </div>
                      <div
                        class="cmn-title-ad-upld pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#upload-files"
                        v-b-modal="'upload-new-file'"
                      >
                        + Upload new Files
                        <UploadNewFilesModal></UploadNewFilesModal>
                      </div>
                    </div>
                    <div class="pd-fls-container">
                      <div class="pd-fls-col">
                        <div class="pd-fls-inner">
                          <div class="pd-flsi-cmn pd-flsi-cmn-icon">
                            <svg class="">
                              <use xlink:href="#word"></use>
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
                              <use xlink:href="#word"></use>
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
                              <use xlink:href="#word"></use>
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
                      <div
                        class="cmn-title-ad-upld pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#add-task"
                        v-b-modal="'add-new-task'"
                      >
                        + Add new Task
                        <AddNewTask></AddNewTask>
                      </div>
                    </div>
                    <div class="pt-mlstn-container">
                      <div class="pt-mlstn-col">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#task"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Jobs Title</span>
                          <span>{{ jobIndex }} : {{category}} – {{ sub_category }}</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det text-center">
                          <span class="pt-mlstn-h">Tasks</span>
                          <span class="c-green"
                            >{{ task }}</span
                          >
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det text-center">
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-green">In Progress</span>
                        </div>
                        <div
                          class="
                            pt-mlstn-common pt-mlstn-pgrs-50 pt-mlstn-det
                            text-center
                          "
                        >
                          <!-- Progress bar 1 -->
                          <div
                            class="progress progress-50 mx-auto"
                            data-value="25"
                          >
                            <span class="progress-left">
                              <span class="progress-bar border-red"></span>
                            </span>
                            <span class="progress-right">
                              <span
                                class="progress-bar border-red"
                                style="transform: rotate(90deg)"
                              ></span>
                            </span>
                            <div
                              class="
                                progress-value
                                w-100
                                h-100
                                rounded-circle
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <div class="h2 font-weight-bold">
                                25<sup class="small">%</sup>
                              </div>
                            </div>
                          </div>
                          <!-- END -->
                        </div>
                      </div>
                    </div>
                    <div
                      class="pt-mlstn-container pt-mlstn-request-container"
                    >
                      <div
                        class="
                          pt-mlstn-col pt-mlstn-request-col pt-mlstn-align-col
                          no-b
                        "
                        v-for="(projectTask, projectTaskIndex) in projectTasks"
                      :key="projectTaskIndex"
                      >
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#completed-task"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Task Title</span>
                          <span class="">{{ projectTask.taskTitle }}</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Doing by</span>
                          <span class="">{{ projectTask.doingBy }}</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-green">{{ projectTask.status }}</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Action</span>
                          <span class="c-green">{{ projectTask.action }}</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-view">
                          <a
                            href="#"
                            class="pop-over crsr-pntr"
                            data-toggle="modal"
                            data-target="#task-view"
                            v-b-modal="'view-task' + projectTaskIndex"
                            >View
                            <ViewNewTask :projectTaskIndex="projectTaskIndex"
                            :jobIndex="jobIndex" :category="category"
                            :sub_category="sub_category"
                            :task="task"></ViewNewTask>
                            </a
                          >
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
                      <div
                        class="cmn-title-ad-upld pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#add-milestone"
                        v-b-modal="'add-new-milestone'"
                      >
                        + Add new Milestone
                        <AddNewMilestoneModal></AddNewMilestoneModal>
                      </div>
                    </div>
                    <div class="pt-mlstn-container">
                      <div class="pt-mlstn-col">
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#calendar-2"></use>
                          </svg>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-det">
                          <span class="pt-mlstn-h">Budget</span>
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
                      <div
                        class="
                          pt-mlstn-col pt-mlstn-request-col pt-mlstn-align-col
                          no-b
                        "
                      >
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#payment-method"></use>
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
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-red">Open</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-view">
                          <a href="#">Release Now</a>
                        </div>
                      </div>
                      <div
                        class="
                          pt-mlstn-col pt-mlstn-request-col pt-mlstn-align-col
                          no-b
                        "
                      >
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#payment-method"></use>
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
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-red">Dispute</span>
                        </div>
                        <div class="pt-mlstn-common pt-mlstn-view">
                          <a href="#">View</a>
                        </div>
                      </div>
                      <div
                        class="
                          pt-mlstn-col pt-mlstn-request-col pt-mlstn-align-col
                          no-b
                        "
                      >
                        <div class="pt-mlstn-common pt-mlstn-icon">
                          <svg class="">
                            <use xlink:href="#payment-method"></use>
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
                          <span class="pt-mlstn-h">Status</span>
                          <span class="c-red">Dispute</span>
                        </div>
                        <div
                          class="pt-mlstn-common pt-mlstn-icon pt-mlstn-icon-sm"
                        >
                          <svg class="">
                            <use xlink:href="#file"></use>
                          </svg>
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
      </template>
    </b-modal>
  </div>
</template>
<script>
import UploadNewFilesModal from "./UploadNewFilesModal";
import AddNewTask from "./AddNewTask";
import ViewNewTask from "./ViewNewTask";
import AddNewMilestoneModal from "./AddNewMilestoneModal"
export default {
  components: { UploadNewFilesModal, AddNewTask, ViewNewTask, AddNewMilestoneModal },
  props: ["jobIndex",
          "category",
          "sub_category",
          "task"
  ],
  data(){
    return{
      projectTasks: [
        {
          taskTitle: 'Project Title',
          doingBy: 'Employee Name',
          status: 'Done',
          action: 'Need to check'
        },
                {
          taskTitle: 'Project Title',
          doingBy: 'Employee Name',
          status: 'In Stop',
          action: 'Need to check'
        },
                {
          taskTitle: 'Project Title',
          doingBy: 'Employee Name',
          status: 'In Pause',
          action: 'Need to check'
        }
      ]
    }
  }
};
</script>