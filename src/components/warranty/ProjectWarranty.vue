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
        <div
          class="task-content-row"
          v-for="(valid, validindex) in warranty"
          :key="validindex"
        >
          <div class="task-content ticket-prgs-common">
            <div class="task-ctnt-common task-icon">
              <img :src="valid.companyImg" class="no-radius" />
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ valid.companyName }}</span>
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
              <span class="stm-cont-h">{{ valid.title }}</span>
              <span>{{ valid.jobTime }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Warranty</span>
              <span class="c-green">Valid {{ valid.warr }}</span>
            </div>
            <div
              class="
                task-ctnt-common task-det
                text-right
                task-icon-com task-ctnt-dot
              "
              v-b-modal="'project-warranty-pdf-modal' + validindex"
            >
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#more"></use>
              </svg>
            </div>
          </div>
          <ProjectWarrantyPDFModal :index="validindex"></ProjectWarrantyPDFModal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectWarrantyPDFModal from "./modals/project-warranty-modals/ProjectWarrantyPDFModal.vue"
export default {
    components: { ProjectWarrantyPDFModal },
  data() {
    return {
      warranty: [
        {
          companyImg: require("@/assets/img/mencap.png"),
          companyName: "Company Name",
          title: "Project Title",
          jobTime: "Look for Full Time Work",
          warr: "01.01.2021",
        },
        {
          companyImg: require("@/assets/img/mencap.png"),
          companyName: "Company Name",
          title: "Project Title",
          jobTime: "Look for Half Time Work",
          warr: "04.01.2021",
        },
      ],
    };
  },
};
</script>