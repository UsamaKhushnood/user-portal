<template>
  <div>
    <b-modal
      :id="'service-appointment-modal' + index"
      size="lg"
      hide-footer
      hide-header
    >
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
          <div class="ui-block border-0 radius-0">
            <div class="ui-block-title app-ttl-wrapper">
              <div class="app-ttl-col">
                <span class="app-ttl-txt">Work Interview</span>
              </div>
              <div class="app-ttl-col">
                <span class="app-ttl-txt">Job ID</span>
              </div>
            </div>
          </div>
          <div class="modal-body modal-body-no-p">
            <form class="custom-form">
              <div class="ui-block ui-block-no-m">
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="comp-det-wi-wrapper">
                    <div class="comp-det-wi-img">
                      <img src="@/assets/img/mencap.png" />
                    </div>
                    <div class="comp-det-container">
                      <div class="comp-det-title-rating">
                        <span class="">Mencap GmbH</span>
                        <div>
                          <svg class="sw-rat-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                          </svg>
                          <svg class="sw-rat-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                          </svg>
                          <svg class="sw-rat-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                          </svg>
                          <svg class="sw-rat-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                          </svg>
                          <svg class="sw-rat-icon">
                            <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                          </svg>
                        </div>
                      </div>
                      <div class="comp-det-all">Memeber since</div>
                      <div class="comp-det-all">GE – 30159 Hannover</div>
                      <div class="comp-det-all">Address</div>
                    </div>
                  </div>

                  <div class="task-content-row">
                    <div class="task-content ticket-prgs-common">
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Job Title</span>
                        <span>Look for Full Time Work</span>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Interview type</span>
                        <span>Online / Office</span>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Date</span>
                        <span class="c-red">12.12.2020</span>
                      </div>
                      <div class="task-ctnt-common task-det">
                        <span class="stm-cont-h">Time</span>
                        <span class="c-red">12:30</span>
                      </div>
                    </div>
                    <div class="stm-abt-tckt c-red">
                      <span>Notification will be show here</span>
                    </div>
                  </div>
                  <div class="comp-det-follow-work-wrapper">
                    <div class="comp-det-follow-work-col">
                      <div class="comp-det-follow-work-icon">
                        <img src="@/assets/img/follow-work-icon.png" />
                      </div>
                      <div class="comp-det-follow-work-txt">
                        <span><b>Follow the Work</b></span>
                        <span>Download our Desktop App now</span>
                      </div>
                    </div>
                    <div class="comp-det-follow-work-col">
                      <div class="comp-det-follow-work-icon">
                        <img src="@/assets/img/window.png" />
                      </div>
                      <div class="comp-det-follow-work-txt">
                        <span class="text-center">WIN 64 / 86 Bit</span>
                      </div>
                      <div
                        class="
                          comp-det-follow-work-icon
                          comp-det-follow-work-icon-download
                        "
                      >
                        <img src="@/assets/img/download.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <button class="btn btn-primary btn-files-pop">
                    Accept the Interview
                  </button>
                  <span
                    class="btn btn-primary btn-files-pop pop-over crsr-pntr"
                    data-toggle="modal"
                    data-target="#appoint-new-denied"
                    v-b-modal="'denied-service-appointment-modal'"
                    >Denied the Interview</span
                  >
                  <DeniedServiceAppointmentModal></DeniedServiceAppointmentModal>
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
import DeniedServiceAppointmentModal from "./DeniedServiceAppointmentModal.vue"
export default {
  components: { DeniedServiceAppointmentModal },
  props: ["index"],
};
</script>
