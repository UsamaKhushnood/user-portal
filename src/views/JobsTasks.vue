<template>
  <div id="jobs-tasks">
    <div class="container tab-content-parent">
      <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div
              class="add-j-new-tsk crsr-pntr pop-over"
              data-dismiss="modal"
              aria-label="Close"
              data-toggle="modal"
              data-target="#add-new-tsk"
            >
              <div class="add-j-new-tsk-icon">
                <svg class="">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#completed-task"
                  ></use>
                </svg>
              </div>
              <div class="add-j-new-tsk-det">
                <span class="add-j-new-tsk-title">Add new Taks</span>
                <span class="add-j-new-tsk-txt"
                  >Add improvments to your project</span
                >
              </div>
            </div>
          </div>

          <!--<div class="row job-task-cards">
  <div class="jt-card col-md-4" style="z-index: 10;">
    <div class="card-title">
      <h2>
        Contact Task
        <small>You have 14 pending tasks</small>
      </h2>
      <div class="task-count">
        14
      </div>
    </div>
    <div class="jt-card-flap flap1">
      <div class="jt-card-description">
        <ul class="jt-task-list">
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class="jt-card-flap flap2">
        <div class="jt-card-actions">
          <a class="btn" href="#">Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class="jt-card col-md-4">
    <div class="jt-card-title">
      <h2>
        Product Task
        <small>You have 101 pending tasks</small>
      </h2>
      <div class="jt-task-count">
        101
      </div>
    </div>
    <div class="jt-card-flap flap1">
      <div class="jt-card-description">
        <ul class="jt-task-list">
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class="jt-card-flap flap2">
        <div class="jt-card-actions">
          <a class="btn" href="#">Close</a>
        </div>
      </div>
    </div>
  </div>

</div>-->
          <div class="container-parent-tab ui-block">
            <div class="row">
              <div class="col col-12">
                <div class="your-profile">
                  <div class="rt-panel-h">
                    Categories
                  </div>
                </div>
                <ul class="nav nav-tabs nav-justified">
                  <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#"
                    :class="[{ active: $route.hash === '' }]"
                      >All Tasks</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                      :class="[{ active: $route.hash === '#tab-2-2' }]"
                      >In Progress</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                    :class="[{ active: $route.hash === '#tab-2-3' }]"
                      >In Hold</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                    :class="[{ active: $route.hash === '#tab-2-4' }]"
                      >In check</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-5"
                    :class="[{ active: $route.hash === '#tab-2-5' }]"
                      >In Done</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-6"
                    :class="[{ active: $route.hash === '#tab-2-6' }]"
                      >In Rejected</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ui-block">
            <div class="your-profile job-task-cards">
              <!--<div class="rt-panel-h">
            Statics
        </div>-->
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Contact Task
                  </h2>
                  <div class="jt-task-count c-green">
                    14
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Total Tasks
                  </h2>
                  <div class="jt-task-count c-green">
                    250
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Tasks in Progress
                  </h2>
                  <div class="jt-task-count c-green">
                    200
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Tasks in Hold
                  </h2>
                  <div class="jt-task-count c-red">
                    50
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Tasks in Check
                  </h2>
                  <div class="jt-task-count c-red">
                    45
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Tasks in Rejected
                  </h2>
                  <div class="jt-task-count c-red">
                    45
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jt-card">
                <div class="jt-card-title">
                  <h2>
                    Tasks in Done
                  </h2>
                  <div class="jt-task-count c-red">
                    50
                  </div>
                </div>
                <div class="jt-card-flap flap1">
                  <div class="jt-card-description">
                    <ul class="jt-task-list">
                      <li>
                        Sent Question Pending
                        <span>59%</span>
                      </li>
                      <li>
                        Sent Answer Pending
                        <span>11%</span>
                      </li>
                      <li>
                        File Attchment Pending
                        <span>100%</span>
                      </li>
                      <li>
                        Document Send Pending
                        <span>7%</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jt-card-flap flap2">
                    <div class="jt-card-actions">
                      <a class="btn" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg"
        >
          <div class="row t-container tab-pane show active" id="tab-2-1">
            <div class="col-12 tab-sec-ticket tab-not">
            
              <div class="tab-content">
                <div class="tab-pane show" :class="[{ active: $route.hash === '' }]">
                 <AllTasks/>
                </div>
              </div>
            </div>
          </div>
          <div class="row t-container tab-pane" id="tab-2-2" :class="[{ active: $route.hash === '#tab-2-2' }]">
           <NewProgress/>
          </div>
          <div class="row t-container tab-pane" id="tab-2-3" :class="[{ active: $route.hash === '#tab-2-3' }]">
          <NewHold/>
          </div>
          <div class="row t-container tab-pane" id="tab-2-4" :class="[{ active: $route.hash === '#tab-2-4' }]">
            <NewCheck/>
          </div>
          <div class="row t-container tab-pane" id="tab-2-5" :class="[{ active: $route.hash === '#tab-2-5' }]">
          <NewDone/> 
          </div>
          <div class="row t-container tab-pane" id="tab-2-6" :class="[{ active: $route.hash === '#tab-2-6' }]">
           <NewRejected/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllTasks from "@/components/job-tasks/AllTasks";
import NewProgress from "@/components/job-tasks/NewProgress";
import NewHold from "@/components/job-tasks/NewHold";
import NewDone from "@/components/job-tasks/NewDone";
import NewCheck from "@/components/job-tasks/NewCheck";
import NewRejected from "@/components/job-tasks/NewRejected";
export default {
  components:{AllTasks,NewProgress,NewHold,NewDone,NewCheck,NewRejected},
 
};
</script>
<style lang="scss"></style>
