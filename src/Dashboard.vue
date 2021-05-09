<template>
  <div id="main-dashboard">
    <div class="container tab-content-parent">
    <div class="row">
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card card-stats card-stats-user dbrd-f-cols">
                <div class="card-header-user">
                    <div class="card-icon grey-blue">
                        <svg class="icon">
                            <use xlink:href="#task-1"></use>
                        </svg>
                    </div>
                    <div class="co-panel-h">
                        Tasks Status
                    </div>
                </div>
                <div class="ui-block-content wndw-popup ui-block-padd">
                    <div class="tsk-status-counter-wrap">
                        <div class="tsk-status-counter">
                            <span class="tsk-status-title">Total Tasks</span>
                            <span class="tsk-status-number c-blue">20</span>
                        </div>
                        <div class="tsk-status-counter">
                            <span class="tsk-status-title">In Progress</span>
                            <span class="tsk-status-number c-yellow">5</span>
                        </div>
                        <div class="tsk-status-counter">
                            <span class="tsk-status-title">In Hold</span>
                            <span class="tsk-status-number c-orange">4</span>
                        </div>
                        <div class="tsk-status-counter">
                            <span class="tsk-status-title">In Check</span>
                            <span class="tsk-status-number c-blue">4</span>
                        </div>
                        <div class="tsk-status-counter">
                            <span class="tsk-status-title">In Done</span>
                            <span class="tsk-status-number c-green">6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row tpa-status">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="dbrd-cols">
                        <div class="card card-stats card-stats-user">
                            <div class="card-header-user">
                                <div class="card-icon bg-red">
                                    <svg class="icon">
                                        <use xlink:href="#alert"></use>
                                    </svg>
                                </div>
                                <div class="co-panel-h">
                                    Ticket Status
                                </div>
                            </div>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Answer</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Progress</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Solved</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Closed</span>
                            <span class="c-green">5</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="dbrd-cols">
                        <div class="card card-stats card-stats-user">
                            <div class="card-header-user">
                                <div class="card-icon bg-green">
                                    <svg class="icon">
                                        <use xlink:href="#cash-payment"></use>
                                    </svg>
                                </div>
                                <div class="co-panel-h">
                                    Payment Status
                                </div>
                            </div>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Answer</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Progress</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Solved</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Closed</span>
                            <span class="c-green">5</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="dbrd-cols">
                        <div class="card card-stats card-stats-user">
                            <div class="card-header-user">
                                <div class="card-icon bg-orange">
                                    <svg class="icon">
                                        <use xlink:href="#calendar-3"></use>
                                    </svg>
                                </div>
                                <div class="co-panel-h">
                                    Appointments
                                </div>
                            </div>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Answer</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Progress</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Solved</span>
                            <span class="c-green">5</span>
                        </div>
                        <div class="ststc">
                            <span class="ststc-h">Closed</span>
                            <span class="c-green">5</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card card-stats card-stats-user dbrd-f-cols">
                <div class="card-header-user">
                    <div class="card-icon bg-green">
                        <svg class="icon">
                            <use xlink:href="@/assets/svg-sprite.svg/#alert"></use>
                        </svg>
                    </div>
                    <div class="co-panel-h">
                        Info / Notification fds
                    </div>
                </div>
                <div class="info-not">
                    <div class="info-not-txt">
                        <span class="ststc-h">Add Billing Methode</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Upload your Image</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Say somthing about you</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Closed</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Upload your Image</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Say somthing about you</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Closed</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="info-not-txt">
                        <span class="ststc-h">Closed</span>
                        <span class="info-not-icon">
                            <svg class="icon">
                                <use xlink:href="#alert"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row tpa-status-static">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card card-stats card-stats-user dbrd-f-cols">
                <div class="card-header-user">
                    <div class="card-icon bg-blue">
                        <svg class="icon">
                            <use xlink:href="#notes"></use>
                        </svg>
                    </div>
                    <div class="co-panel-h">
                        Project Status
                    </div>
                </div>
                <div class="ststc">
                    <span class="ststc-h">Answer</span>
                    <span class="c-green">5</span>
                </div>
                <div class="ststc">
                    <span class="ststc-h">Progress</span>
                    <span class="c-green">5</span>
                </div>
                <div class="ststc">
                    <span class="ststc-h">Solved</span>
                    <span class="c-green">5</span>
                </div>
                <div class="ststc">
                    <span class="ststc-h">Closed</span>
                    <span class="c-green">5</span>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card card-stats card-stats-user dbrd-f-cols">
                <div class="card-header-user">
                    <div class="card-icon bg-blue">
                        <svg class="icon">
                            <use xlink:href="#task-1"></use>
                        </svg>
                    </div>
                    <div class="co-panel-h">
                        Statics
                    </div>
                </div>
                <div class="ui-block-content wndw-popup ui-block-padd">
                    <div class="tsk-status-counter-wrap">
                        <p><br><br><br><br><br></p>
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

};
</script>
<style></style>
