<template>
  <div>
    <b-modal
      :id="'denied-new-appointment-modal'"
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
                  <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-6">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Select Date</label>
                        <input class="form-control" placeholder="Select Date" />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#calendar-4"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-6">
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Select Time</label>
                        <input class="form-control" placeholder="Select Time" />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#clock-1"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div
                        class="
                          form-group
                          label-floating label-textarea
                          is-empty
                        "
                      >
                        <label class="control-label">Reason</label>
                        <textarea
                          class="form-control"
                          placeholder="Reason why Denied the Interview"
                        ></textarea>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 btn-files-container">
                <div class="row">
                  <button class="btn btn-primary btn-files-pop">Sent</button>
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
