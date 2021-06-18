<template>
  <div id="my-projects">
    <div class="container tab-content-parent">
      <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="container-parent-tab ui-block">
            <div class="row">
              <div class="tabs"></div>

              <div class="col col-12">
                <div class="your-profile">
                  <div class="rt-panel-h">
                    Categories
                  </div>
                </div>
                <ul class="nav nav-tabs nav-justified">
                  <li class="nav-item">
                    <a class="nav-link"  data-toggle="tab" href="#"
                    :class="[{ active: $route.hash === ''}]"
                      >Project Offers</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                    :class="[{ active: $route.hash === '#tab-2-2' }]"
                      >My Contracts</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3" 
                    :class="[{ active: $route.hash === '#tab-2-3' }]"
                      >In Progress</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                    :class="[{ active: $route.hash === '#tab-2-4' }]"
                      >In Done</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-5f"
                    :class="[{ active: $route.hash === '#tab-2-5f' }]"
                      >In Faild</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-5"
                    :class="[{ active: $route.hash === '#tab-2-5' }]"
                      >In Dispute</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-6"
                    :class="[{ active: $route.hash === '#tab-2-6' }]"
                      >In Canceled</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ui-block">
            <div class="your-profile">
              <div class="rt-panel-h">
                Statics
              </div>
              <div class="ststc">
                <span class="ststc-h">Total Added Jobs</span>
                <span class="c-green">30</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Jobs totaly done</span>
                <span class="c-green">25</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Jobs Failed total</span>
                <span class="c-red">5</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Hiring Total</span>
                <span class="c-red">45</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg"
        >
          <div class="row t-container tab-pane show active" id="tab-2-1">
            <div class="col-12 tab-sec-ticket tab-not">
              <!-- jobs -->

              <div class="tab-content">
                <div
                  class="tab-pane  "
                  :class="[{ active: $route.hash === '' }]"
                >
                  <ProjectOffer> </ProjectOffer>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row t-container tab-pane "
           :class="[{ active: $route.hash === '#tab-2-2' }]" 
            id="tab-2-2"
          >
           <MyContract/>
          </div>
          <div
            class="row t-container tab-pane"
            :class="[{ active: $route.hash === '#tab-2-3' }]"
            id="tab-2-3"
          >
           <InProgress/>
          </div>
          <div
            class="row t-container tab-pane"
            :class="[{ active: $route.hash === '#tab-2-4' }]"
            id="tab-2-4"
          >
          <InDone/>
          </div>
          <div
            class="row t-container tab-pane"
            :class="[{ active: $route.hash === '#tab-2-5f' }]"
            id="tab-2-5f"
          >
          <InFaild/>
          </div>
          <div
            class="row t-container tab-pane"
            :class="[{ active: $route.hash === '#tab-2-5' }]"
            id="tab-2-5"
          >
           <InDispute/>
          </div>
          <div
            class="row t-container tab-pane"
            :class="[{ active: $route.hash === '#tab-2-6' }]"
            id="tab-2-6"
          >
            <InCanceled/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectOffer from "@/components/my-projects/ProjectOffer.vue";
import MyContract from "@/components/my-projects/MyContract.vue";
import InProgress from "@/components/my-projects/InProgress.vue";
import InDone from "@/components/my-projects/InDone.vue";
import InFaild from "@/components/my-projects/InFaild.vue";
import InDispute from "@/components/my-projects/InDispute.vue";
import InCanceled from "@/components/my-projects/InCanceled.vue";

export default {
  components: { ProjectOffer,MyContract,InProgress,InDone,InFaild,InDispute,InCanceled, ProjectOffer },
};
</script>
<style lang="scss"></style>
