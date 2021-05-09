<template >
    <div id="jobs-tasks">
        <div class="container tab-content-parent">
    <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="ui-block">
    <div class="add-j-new-tsk crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#add-new-tsk">
        <div class="add-j-new-tsk-icon">
            <svg class="">
                <use xlink:href="#completed-task"></use>
            </svg>
        </div>
        <div class="add-j-new-tsk-det">
            <span class="add-j-new-tsk-title">Add new Taks</span>
            <span class="add-j-new-tsk-txt">Add improvments to your project</span>
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
                    <a class="nav-link active" data-toggle="tab" href="#tab-2-1">All Tasks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2">In Progress</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3">In Hold</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4">In check</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-5">In Done</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-6">In Rejected</a>
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
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show active" id="tab-2-1">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">Jobs Title</span>
                                        <span>Project ID : Category – SubCatgeory	Date and Time</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Tasks</span>
                                        <span class="c-green"><font class="c-red">5</font> / 3</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-green">In Progress</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <div class="progress progress-50 mx-auto" data-value="25">
                                            <span class="progress-left">
                                                <span class="progress-bar border-red"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar border-red" style="transform: rotate(90deg);"></span>
                                            </span>
                                            <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div class="h2 font-weight-bold">25<sup class="small">%</sup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 t-c-row-all-r-c">
                                    <div class="task-content-row task-content-row-all-r">
                                        <div class="task-content ticket-prgs-common">
                                            <div class="tckt-t-w task-icon">
                                                <svg class="">
                                                    <use xlink:href="#task"></use>
                                                </svg>
                                            </div>
                                            <div class="task-ctnt-common task-det">
                                                <span class="stm-cont-h">1. Task Title</span>
                                                <span>Job Title</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Status</span>
                                                <span class="c-blue">In Waiting</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center tsk-more-det">
                                                <a href="#">More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-content-row task-content-row-all-r">
                                        <div class="task-content ticket-prgs-common">
                                            <div class="tckt-t-w task-icon">
                                                <svg class="">
                                                    <use xlink:href="#task"></use>
                                                </svg>
                                            </div>
                                            <div class="task-ctnt-common task-det">
                                                <span class="stm-cont-h">1. Task Title</span>
                                                <span>Job Title</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Status</span>
                                                <span class="c-red">In Hold</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Last Update</span>
                                                <span>12.10.2020 – 19:00</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center tsk-more-det">
                                                <a href="#">More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-content-row task-content-row-all-r">
                                        <div class="task-content ticket-prgs-common">
                                            <div class="tckt-t-w task-icon">
                                                <svg class="">
                                                    <use xlink:href="#task"></use>
                                                </svg>
                                            </div>
                                            <div class="task-ctnt-common task-det">
                                                <span class="stm-cont-h">1. Task Title</span>
                                                <span>Job Title</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Status</span>
                                                <span class="c-orange">In Check</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Last Update</span>
                                                <span>12.10.2020 – 19:00</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center tsk-more-det">
                                                <a href="#">More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-content-row task-content-row-all-r">
                                        <div class="task-content ticket-prgs-common">
                                            <div class="tckt-t-w task-icon">
                                                <svg class="">
                                                    <use xlink:href="#task"></use>
                                                </svg>
                                            </div>
                                            <div class="task-ctnt-common task-det">
                                                <span class="stm-cont-h">1. Task Title</span>
                                                <span>Job Title</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Status</span>
                                                <span class="c-green">In Done</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center">
                                                <span class="stm-cont-h">Last Update</span>
                                                <span>12.10.2020 – 19:00</span>
                                            </div>
                                            <div class="task-ctnt-common task-det text-center tsk-more-det">
                                                <a href="#">More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="task-content-row">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">Jobs Title</span>
                                        <span>Project ID : Category – SubCatgeory	Date and Time</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Tasks</span>
                                        <span class="c-green"><font class="c-red">5</font> / 3</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-orange">In Hold</span>
                                    </div>
                                </div>				  
                                <div class="stm-abt-tckt c-red">				  
                                    <span>Ticket ID:  1234556</span>
                                    <span>Ticket Reason: Work not completed</span>
                                    <span>Claimed by: User</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-progress">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-blue">Started</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-progress">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-blue">Started</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-hold">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project  Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-red">In Hold</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Last Update</span>
                                        <span>12.12.2020 – 19:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                                <div class="stm-abt-tckt c-red">				  
                                    <span class="text-center">Reason: Work not completed</span>
                                </div>
                            </div>
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-hold">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project  Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-red">In Hold</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Last Update</span>
                                        <span>12.12.2020 – 19:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                                <div class="stm-abt-tckt c-red">				  
                                    <span class="text-center">Reason: Work not completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-check">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-green">In Check</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-check">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-green">In Check</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-5">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-done">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-green">In Done</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-done">
                                <div class="task-content ticket-prgs-common no-border">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Project Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-green">In Done</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Started Date</span>
                                        <span>12.12.2020 – 20:00</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <div class="row t-container tab-pane" id="tab-2-6">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">
                        <div class="tab-pane show active">
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-reject">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Job Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Submit Time</span>
                                        <span>Date and Time</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-red">Rejected</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                                <div class="stm-abt-tckt c-red">				  
                                    <span class="text-center">Rejected Reason: Work not completed</span>
                                </div>
                            </div>
                            <div class="task-content-row crsr-pntr pop-over" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#tsk-v-in-reject">
                                <div class="task-content ticket-prgs-common">
                                    <div class="tckt-t-w task-icon">
                                        <svg class="">
                                            <use xlink:href="#task"></use>
                                        </svg>
                                    </div>
                                    <div class="task-ctnt-common task-det">
                                        <span class="stm-cont-h">1. Task Title</span>
                                        <span>Job Title</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Submit Time</span>
                                        <span>Date and Time</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center">
                                        <span class="stm-cont-h">Status</span>
                                        <span class="c-red">Rejected</span>
                                    </div>
                                    <div class="task-ctnt-common task-det text-center tsk-more-det">
                                        <a href="#">More Details</a>
                                    </div>
                                </div>
                                <div class="stm-abt-tckt c-red">				  
                                    <span class="text-center">Rejected Reason: Work not completed</span>
                                </div>
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
export default {
    
}
</script>
<style lang="scss">
    
</style>