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
      <div class="tab-pane show active">
        <div class="task-content-row" v-for="(warranty, warrantyIndex) in warranties" :key="warrantyIndex">
          <div class="task-content ticket-prgs-common">
            <div class="task-ctnt-common task-icon">
              <img src="@/assets/img/mencap.png" class="no-radius" />
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ warranty.username }}</span>
              <span>
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
              </span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Project Title</span>
              <span>{{ warranty.title }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Warranty</span>
              <span class="c-green">{{ warranty.warranty }}</span>
            </div>
            <div
              class="
                task-ctnt-common task-det
                text-center
                task-icon-com
                pop-over
                crsr-pntr
              "
              data-toggle="modal"
              data-target="#rel-done-req-pdf"
              v-b-modal="'service-warranty-pdf-modal' + warrantyIndex"
            >
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#file"></use>
              </svg>
            </div>
            <ServiceWarrantyPDFModal :index="warrantyIndex"></ServiceWarrantyPDFModal>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ServiceWarrantyPDFModal from "./modals/service-warranty-modals/ServiceWarrantyPDFModal.vue"
export default {
    components: { ServiceWarrantyPDFModal },
    data(){
        return {
            warranties: [
                {
                    username: "User Name",
                    title: "Look for Full Time Work",
                    warranty: "Valid 01.01.2021"
                },
                {
                    username: "User Name",
                    title: "Look for Full Time Work",
                    warranty: "Valid 01.01.2021"
                },
            ]
        }
    }
}
</script>