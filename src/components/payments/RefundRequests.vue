<template>
  <div class="col-12 tab-sec-ticket tab-not">
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
                <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
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
    <div class="tab-content">
      <div class="tab-pane show active stm-fnc" id="tab-1-2">
        <div class="row agr-bud-container" v-for="(request, requestIndex) in requests" :key="requestIndex">
          <div class="text-center mdl-icon mlstn-container">
            <div class="ui-block-title prgs-inner-title mlstn-title">
              <div class="msltn-avt">
                <img src="@/assets/img/t-image.png" class="radius-50" />
              </div>
              <div class="tckt-t-w text-left">
                <span>{{ request.title }}</span>
              </div>
              <div class="tckt-t-w task-new">
                <span class="c-green">{{ request.status }}</span>
              </div>
              <div class="tckt-t-w text-right text-right">
                <span>Project ID: {{ request.projectId }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col col-12 mlstn-inner">
                <div class="task-content">
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Refund ID</span>
                    <span class="c-green">RQ{{ requestIndex }}</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Date and Time</span>
                    <span class="c-green">{{ request.dateAndTime }}</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Refund Title</span>
                    <span class="c-green">{{ request.refundTitle }}</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Refund Amount</span>
                    <span class="c-green">{{ request.refundAmount }}</span>
                  </div>
                  <div class="task-ctnt-common task-det pay-tsk-rel-link">
                    <a
                      href="#"
                      class="pop-over crsr-pntr"
                      data-toggle="modal"
                      data-target="#oepn-model  "
                      v-if="request.status == 'awaiting'"
                      v-b-modal="'refund-request-awaiting-modal' + requestIndex"
                    >
                      Awaiting
                    </a>
                    <AwaitingModal :index="requestIndex"></AwaitingModal>
                    <div
                      class="tckt-t-w task-icon pop-over crsr-pntr"
                      data-toggle="modal"
                      data-target="#doc-pdf-paid"
                      v-if="request.status == 'done'"
                      v-b-modal="'refund-request-pdf-modal' + requestIndex"
                    >
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                      </svg>
                    </div>
                    <PDFModal :index="requestIndex"></PDFModal>
                    <div
                      class="
                        task-ctnt-common task-det
                        text-center
                        task-icon-com
                        pop-over
                        crsr-pntr
                      "
                      
                      v-if="request.status == 'dispute'"
                      v-b-modal="'refund-request-dispute-refund-modal' + requestIndex"
                    >
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#support"></use>
                      </svg>
                    </div>
                    <DisputeModal :index="requestIndex"></DisputeModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import AwaitingModal from "./modals/refund-requests-modals/AwaitingModal.vue"
import PDFModal from "./modals/refund-requests-modals/PDFModal.vue"
import DisputeModal from "./modals/refund-requests-modals/DisputeModal.vue"
export default {
    components: { AwaitingModal, PDFModal, DisputeModal },
    data(){
        return {
            requests: [
                {
                    title: "Project Title",
                    status: "awaiting",
                    projectId: '1',
                    dateAndTime: "12.10.2020 – 18:00",
                    refundTitle: "Task 2 Done",
                    refundAmount: "200,00 €"
                },
                {
                    title: "Project Title",
                    status: "done",
                    projectId: '1',
                    dateAndTime: "12.10.2020 – 18:00",
                    refundTitle: "Task 2 Done",
                    refundAmount: "200,00 €"
                },
                {
                    title: "Project Title",
                    status: "dispute",
                    projectId: '1',
                    dateAndTime: "12.10.2020 – 18:00",
                    refundTitle: "Task 2 Done",
                    refundAmount: "200,00 €"
                },
            ]
        }
    }
}
</script>