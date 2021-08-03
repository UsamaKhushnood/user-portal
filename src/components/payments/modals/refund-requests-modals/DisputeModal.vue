<template>
  <div>
    <b-modal
      :id="'refund-request-dispute-refund-modal' + index"
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
          <div class="ui-block">
            <div class="ui-block-title">
              <span class="gft-ico-popup-title"> Milestone in Dispute </span>
            </div>
          </div>
          <div class="modal-body modal-body-no-p">
            <form class="custom-form">
              <div class="ui-block ui-block-no-m">
                <div class="ui-block-content ui-block-padd">
                  <!-- Personal Information Form  -->
                  <div class="row">
                    <div class="col-12">
                      <div class="pay-release-content-wrap">
                        <div class="ui-block prc-disp-block">
                          <div class="your-profile">
                            <div class="project-payment-img">
                              <img src="@/assets/img/t-image.png" />
                            </div>
                            <div class="payment-pro-ttl">Project Title</div>
                            <div class="payment-pro-id">Project Id</div>
                            <div class="payment-pro-tsk-mlstn">
                              <div class="payment-pro-tsk-col">
                                <span>Tasks</span>
                                <span class="c-green"
                                  ><font class="c-red">4 </font> / 3</span
                                >
                              </div>
                              <div class="payment-pro-mlstn-col">
                                <span>Milestone</span>
                                <span class="c-green"
                                  ><font class="c-red">3 </font> / 2</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <span><b>The Milestone is in Dispute</b></span>
                        <span class="c-red">Dispute Reason</span>
                        <br /><br />
                        <span class="c-red"><b>Ticket ID</b></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <button class="btn btn-primary btn-files-pop">Close</button>
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
  props: ["index"],
};
</script>
