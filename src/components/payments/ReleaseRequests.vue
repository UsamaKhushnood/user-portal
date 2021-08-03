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
        <div
          class="agr-bud-container"
          v-for="(x, xIndex) in requests"
          :key="xIndex"
        >
          <div class="text-center mdl-icon mlstn-container">
            <div class="ui-block-title prgs-inner-title mlstn-title">
              <div class="msltn-avt">
                <img src="@/assets/img/t-image.png" class="radius-50" />
              </div>
              <div class="tckt-t-w text-left">
                <span>{{ x.title }}</span>
              </div>
              <div class="tckt-t-w task-new">
                <span class="c-orange">{{ x.status }}</span>
              </div>
              <div class="tckt-t-w text-right text-right">
                <span>Project ID</span>
              </div>
            </div>
            <div class="row">
              <div class="col col-12 mlstn-inner">
                <div class="task-content">
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Request ID</span>
                    <span class="c-green">RQ12345678</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Date and Time</span>
                    <span class="c-green">12.10.2020 – 18:00</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Request Title</span>
                    <span class="c-green">Task 2 Done</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Request Amount</span>
                    <span class="c-green">200,00 €</span>
                  </div>
                  <div class="task-ctnt-common task-det pay-tsk-rel-link">
                    <a
                      href="#"
                      class="pop-over crsr-pntr"
                      data-toggle="modal"
                      data-target="#oepn-model  "
                      v-if="x.status == 'open'"
                      v-b-modal="'release-request-release-now-modal' + xIndex"
                    >
                      Release Now
                    </a>
                    <ReleaseNowModal :index="xIndex"></ReleaseNowModal>
                    <div
                      class="tckt-t-w task-icon pop-over crsr-pntr"
                      data-toggle="modal"
                      data-target="#doc-pdf-paid"
                      v-if="x.status == 'paid'"
                      v-b-modal="'release-request-pdf-modal' + xIndex"
                    >
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                      </svg>
                    </div>
                    <PDFModal :index="xIndex"></PDFModal>
                    <div
                      class="
                        task-ctnt-common task-det
                        text-center
                        task-icon-com
                        pop-over
                        crsr-pntr
                      "
                      data-toggle="modal"
                      data-target="#mlstn-in-dispute"
                      v-if="x.status == 'dispute'"
                      v-b-modal="'release-request-dispute-modal' + xIndex"
                    >
                      <svg class="">
                        <use xlink:href="@/assets/svg-sprite.svg#support"></use>
                      </svg>
                    </div>
                    <DisputeModal :index="xIndex"></DisputeModal>
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
import ReleaseNowModal from "./modals/release-requests-modals/ReleaseNowModal.vue";
import PDFModal from "./modals/release-requests-modals/PDFModal.vue";
import DisputeModal from "./modals/release-requests-modals/DisputeModal.vue";

export default {
    components: { ReleaseNowModal, PDFModal, DisputeModal },
  data() {
    return {
      requests: [
        {
          title: "Project Title",
          status: "open",
          projectId: "1",
          dateAndTime: "12.10.2020 – 18:00",
          requestTitle: "Task 2 Done",
          requestAmount: "200,00 €",
        },
        {
          title: "Project Title",
          status: "paid",
          projectId: "2",
          dateAndTime: "12.10.2020 – 18:00",
          requestTitle: "Task 2 Done",
          requestAmount: "200,00 €",
        },
        {
          title: "Project Title",
          status: "dispute",
          projectId: "3",
          dateAndTime: "12.10.2020 – 18:00",
          requestTitle: "Task 2 Done",
          requestAmount: "200,00 €",
        },
      ],
    };
  },
};
</script>