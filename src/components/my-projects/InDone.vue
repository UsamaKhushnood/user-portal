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
    <div class="task-content ticket-prgs-common"
    v-for="(job, projectIndex) in jobsList" :key="projectIndex">
      <div class="prgs-avt">
        <img src="@/assets/img/t-image.png" /><img
          class="prgs-avtflg"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div class="tckt-t-w">
        <span><b>{{ job.title }}</b></span>
        <span>Project ID: {{ projectIndex }}</span>
      </div>
      <div class="tckt-t-w">
        <span><b>Tasks</b></span>
        <span class="c-green">{{ job.task }}</span>
      </div>
      <div class="tckt-t-w">
        <span><b>Milestone</b></span>
        <span class="c-green">{{ job.milestone }}</span>
      </div>
      <div class="tckt-t-w tckt-vwc-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-v-contract"
          v-b-modal="'view-contract' + projectIndex"
        >
          View Contract
          <ViewContractModal :job="projectIndex"></ViewContractModal>
        </button>
      </div>
      <div class="tckt-t-w tckt-t-w-btn">
        <button
          class="btn btn-lg btn-green pop-over"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#in-done-close"
        >
          Close
        </button>
      </div>
    </div>
  
    

    
  </div>
</template>
<script>
import ViewContractModal from "./modals/in-done-modals/ViewContractModal"
export default {
  components: { ViewContractModal },
  data(){
    return {
      jobsList: [
    {
      title: "Jobs Title",
      task: "4/3",
      milestone: "3/2"
    },
    {
      title: "Jobs Title",
      task: "4/3",
      milestone: "3/2"
    },
    {
      title: "Jobs Title",
      task: "4/3",
      milestone: "3/2"
    }
  ]

    }
  }
  
  
}
</script>