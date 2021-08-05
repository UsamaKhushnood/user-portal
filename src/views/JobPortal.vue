<template>
  <div id="jobs-portal">
    <div class="container tab-content-parent">
      <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="container-parent-tab ui-block">
            <div class="row">
              <div class="col col-12">
                <div class="your-profile">
                  <div class="rt-panel-h">Search Employee</div>
                </div>
                <ul class="nav nav-tabs nav-justified">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tab-2-1"
                      >Seach a Job
                      <div class="ripple-container"></div
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                      >Work Offer
                      <div class="ripple-container"></div
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                      >Work Interview
                      <div class="ripple-container"></div
                    ></a>
                  </li>
    
                    <li class="nav-item ps-4">
                      <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                        >New Interview
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item ps-4">
                      <a class="nav-link" data-toggle="tab" href="#tab-2-5"
                        >Accepted
                        <div class="ripple-container"></div
                      ></a>
                    </li>
                    <li class="nav-item ps-4">
                      <a class="nav-link" data-toggle="tab" href="#tab-2-6"
                        >Rejected
                        <div class="ripple-container"></div
                      ></a>
                    </li>
     
                </ul>
              </div>
            </div>
          </div>
          <div class="ui-block">
            <div class="your-profile">
              <div class="rt-panel-h">Statics</div>
              <div class="ststc">
                <span class="ststc-h">Total Search</span>
                <span class="c-green">30</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Total Job Offers</span>
                <span class="c-green">30</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Job Requested</span>
                <span class="c-blue">3</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Document Request</span>
                <span class="c-blue">5</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Job Interview</span>
                <span class="c-blue">5</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12
            tab-content tab-content-nbg
          "
        >
          <div class="row t-container tab-pane show active" id="tab-2-1">
            <SearchJob />
          </div>
          <div class="row t-container tab-pane" id="tab-2-2">
            <WorkOffer></WorkOffer>
          </div>
          <div class="row t-container tab-pane" id="tab-2-3">
            <WorkInterview></WorkInterview>
          </div>
          <div class="row t-container tab-pane" id="tab-2-4">
            <NewInterview></NewInterview>
          </div>
          <div class="row t-container tab-pane" id="tab-2-5">
            <Accepted></Accepted>
          </div>
          <div class="row t-container tab-pane" id="tab-2-6">
            <Rejected></Rejected>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchJob from "@/components/job-portals/SearchJob";
import WorkOffer from "@/components/job-portals/WorkOffer";
import WorkInterview from "@/components/job-portals/WorkInterview";
import NewInterview from "@/components/job-portals/NewInterview";
import Accepted from "@/components/job-portals/Accepted";
import Rejected from "@/components/job-portals/Rejected";

export default {
  components: {
    SearchJob,
    WorkOffer,
    WorkInterview,
    NewInterview,
    Accepted,
    Rejected,
  },
};
</script>
<style lang="scss">
</style>