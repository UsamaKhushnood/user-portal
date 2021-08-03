<template>
  <div>
    <b-modal :id="'refund-request-awaiting-modal' + index" size="lg" hide-footer hide-header>
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
              <span class="stm-popup-title">
                <span>Create Refund Request</span>
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
                      <div class="form-group label-floating is-empty">
                        <label class="control-label">Refund Title</label>
                        <input class="form-control" placeholder="Title Here" />
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#header"></use>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Select the Project</label>
                        <select class="form-control">
                          <option>Select the Project</option>
                          <option>Project 1</option>
                          <option>Project 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#list-3"></use>
                          </svg>
                        </div>
                        <div class="select-dd-active">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="255px"
                            height="255px"
                            viewBox="0 0 255 255"
                            style="enable-background: new 0 0 255 255"
                            xml:space="preserve"
                          >
                            <g>
                              <g id="arrow-drop-down">
                                <polygon
                                  points="0,63.75 127.5,191.25 255,63.75   "
                                ></polygon>
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </div>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group label-floating">
                        <label class="control-label"
                          >Select the Milestone</label
                        >
                        <select class="form-control">
                          <option>Select the Milestone</option>
                          <option>Milestone 1</option>
                          <option>Milestone 2</option>
                        </select>
                        <div class="form-icon">
                          <svg class="v-rating-svg">
                            <use xlink:href="@/assets/svg-sprite.svg#list-3"></use>
                          </svg>
                        </div>
                        <div class="select-dd-active">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="255px"
                            height="255px"
                            viewBox="0 0 255 255"
                            style="enable-background: new 0 0 255 255"
                            xml:space="preserve"
                          >
                            <g>
                              <g id="arrow-drop-down">
                                <polygon
                                  points="0,63.75 127.5,191.25 255,63.75   "
                                ></polygon>
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
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
                        <label class="control-label">Desribe the Issue</label>
                        <textarea
                          class="form-control"
                          placeholder="Desribe the Issue"
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
                  <button
                    class="btn btn-primary btn-files-pop pop-over crsr-pntr"
                    data-toggle="modal"
                    data-target="#refund-request-sent"
                  >
                    Sent Refund Request
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
  props: ["index"],
};
</script>
