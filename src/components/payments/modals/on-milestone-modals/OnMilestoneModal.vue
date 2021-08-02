<template>
  <div>
    <b-modal :id="'on-milestone-modal'" size="xl" hide-footer hide-header>
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
          <div class="ui-block ivc-ttl">
            <div class="ui-block-title invoice-ttl-wrapper">
              <div class="invoice-ttl-col">
                <span class="invoice-ttl-txt">&nbsp;</span>
              </div>
            </div>
            <a href="#" class="btn btn-lg btn-green invoice-ttl-print-btn">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
              </svg>
            </a>
          </div>
          <div class="modal-body tab-pane modal-body-bap show active">
            <form class="custom-form row">
              <div
                class="
                  col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
                  mdl-bap-col
                "
              >
                <div class="ui-block">
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
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div
                  class="agr-bud-container agr-bud-on-mlstn pop-over crsr-pntr"
                  data-toggle="modal"
                  data-target="#on-mlstn"
                >
                  <div class="text-center mdl-icon mlstn-container">
                    <div class="ui-block-title prgs-inner-title mlstn-title">
                      <div class="msltn-avt">
                        <img src="@/assets/img/mencap.png" />
                      </div>
                      <div class="tckt-t-w text-left">
                        <span>Project Title</span>
                      </div>
                      <div class="tckt-t-w task-new">
                        <span class="c-green">Active</span>
                      </div>
                      <div class="tckt-t-w text-right">
                        <span>Project ID</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col col-12 mlstn-inner">
                        <div class="task-content">
                          <div class="task-ctnt-common task-icon">
                            <svg class="">
                              <use xlink:href="@/assets/svg-sprite.svg#calendar-2"></use>
                            </svg>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="mlstn-h">Budget</span>
                            <span class="c-green">1000,00 €</span>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="mlstn-h">In Escrow</span>
                            <span class="c-green">200,00 €</span>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="mlstn-h">Ready Paid</span>
                            <span class="c-green">350,00 €</span>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="mlstn-h">Remain</span>
                            <span class="c-green">450,00 €</span>
                          </div>
                          <div class="task-ctnt-common task-det">
                            <span class="mlstn-h">Total Paid</span>
                            <span class="c-green">350,00 €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter-common">
                  <div class="filter-inner-comon"><span>Filter</span></div>
                  <div class="filter-inner-comon">
                    <input type="text" placeholder="Search..." />
                  </div>
                  <div class="filter-inner-comon">
                    <select>
                      <option>Sort by</option>
                      <option>Sort 1</option>
                      <option>Sort 2</option>
                      <option>Sort 3</option>
                    </select>
                    <div class="srt-dd-active">
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
                        <g></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="task-content-row flow-h" v-for="(request, requestIndex) in requests" :key="requestIndex">
                  <div class="task-content ticket-prgs-common border-0">
                    <div class="tckt-t-w task-icon">
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                      </svg>
                    </div>
                    <div class="task-ctnt-common task-det">
                      <span class="stm-cont-h">Request Title</span>
                      <span>{{ request.title }}</span>
                    </div>
                    <div class="task-ctnt-common task-det">
                      <span class="stm-cont-h">Request Date</span>
                      <span>{{ request.date }}</span>
                    </div>
                    <div class="task-ctnt-common task-det">
                      <span class="stm-cont-h">Request Amount</span>
                      <span>{{ request.amount }}</span>
                    </div>
                    <div class="task-ctnt-common task-det">
                      <span class="stm-cont-h">Status</span>
                      <span>{{ request.status }}</span>
                    </div>
                    <div class="task-ctnt-common task-det pay-tsk-rel-link">
                      <a
                        href="#"
                        class="pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#release-payment"
                        v-if="request.status == 'open'"
                        v-b-modal="'release-now-modal' + requestIndex"
                        >Release Now</a
                      >
                      <ReleaseNowModal :index="requestIndex"></ReleaseNowModal>
                      <a
                        href="#"
                        class="pop-over crsr-pntr"
                        data-toggle="modal"
                        data-target="#release-payment"
                        v-if="request.status == 'dispute'"
                        v-b-modal="'view-modal' + requestIndex"
                        >View</a
                      >
                      <ViewModal :index="requestIndex"></ViewModal>
                      <div
                      class="tckt-t-w task-icon pop-over crsr-pntr"
                      data-toggle="modal"
                      data-target="#doc-pdf-paid"
                      v-if="request.status == 'paid'"
                      v-b-modal="'pdf-modal' + requestIndex"
                    >
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                      </svg>
                    </div>
                    <PDFModal :index="requestIndex"></PDFModal>
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
import ReleaseNowModal from "./ReleaseNowModal.vue"
import ViewModal from "./ViewModal.vue"
import PDFModal from "./PDFModal.vue"
export default {
    components: { ReleaseNowModal, ViewModal, PDFModal },
    data(){
        return {
            requests: [
                {
                    title: "Task 1 Done",
                    date: "12.10.2020",
                    amount: "350,00 €",
                    status: "open",
                },
                {
                    title: "Task 1 Done",
                    date: "12.10.2020",
                    amount: "350,00 €",
                    status: "dispute",
                },
                {
                    title: "Task 1 Done",
                    date: "12.10.2020",
                    amount: "350,00 €",
                    status: "paid",
                },
            ]
        }
    }
}
</script>
