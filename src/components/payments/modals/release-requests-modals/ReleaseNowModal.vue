<template>
  <div>
    <b-modal :id="'release-now-modal' + index" size="lg" hide-footer hide-header>
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
              <span class="gft-ico-popup-title"> Release the Payment </span>
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
                        <span>Confirm the release of the Payment for the</span>
                        <span><b>Company Name</b></span>
                        <div class="pay-rel-com-logo">
                          <img src="@/assets/img/mencap.png" />
                        </div>
                        <span>Project Title will be here</span>
                        <span><b>250,00 €</b></span>
                        <span class="p-ensure">
                          Please ensure that you are satisfied with work and
                          what the „company Name „ has deliver.
                        </span>
                        <span
                          ><b>Payment cant be returned after released</b></span
                        >
                        <div>
                          <div class="btn-files-chbox">
                            <input id="ih-seen" type="checkbox" />
                            <label for="ih-seen"
                              >Im willing to release the Payment</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <button class="btn btn-primary btn-files-pop">
                    Release Now
                  </button>

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
    props: ['index']
}
</script>
