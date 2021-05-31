<template>
    <div>
        <div class="container tab-content-parent">
    <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="container-parent-tab ui-block">
    <div class="row">
        <div class="col col-12">
            <div class="your-profile">
                <div class="rt-panel-h">
                    Job Appointments
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#"
                :class="[{ active: $route.hash === '' }]"    
                >New Job Interview</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                   
                    >Service Appointment</a>
                    <ul>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-2"
                        :class="[{ active: $route.hash === '#tab-2-2' }]"
                        >New Appointment</a></li>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-3"
                        :class="[{ active: $route.hash === '#tab-2-3' }]"
                        >Accepted Appointment</a></li>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-4"
                        :class="[{ active: $route.hash === '#tab-2-4' }]"
                        >Denied Appointment</a></li>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-5"
                        :class="[{ active: $route.hash === '#tab-2-5' }]"
                        >Canceled Appointment</a></li>
                    </ul>
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
            <span class="ststc-h">Job Interview Open</span>
            <span class="c-green">100</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Job Interview Expired</span>
            <span class="c-red">25</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Service Interview Open</span>
            <span class="c-green">5</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Job Interview Expired</span>
            <span class="c-red">45</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1" :class="[{ active: $route.hash === '' }]">
                <NewJob/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2" :class="[{ active: $route.hash === '#tab-2-2' }]">
                <NewAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3" :class="[{ active: $route.hash === '#tab-2-3' }]">
                <AcceptedAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4" :class="[{ active: $route.hash === '#tab-2-4' }]"> 
                <DeniedAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-5" :class="[{ active: $route.hash === '#tab-2-5' }]">
               <CancelledAppointment/>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
import NewJob from '@/components/my-projects/NewJob.vue';
import NewAppointment from '@/components/my-projects/NewAppointment.vue';
import AcceptedAppointment from '@/components/my-projects/AcceptedAppointment.vue';
import DeniedAppointment from '@/components/my-projects/DeniedAppointment.vue';
import CancelledAppointment from '@/components/my-projects/CancelledAppointment.vue';
export default {
    components:{NewJob,NewAppointment,AcceptedAppointment,DeniedAppointment,CancelledAppointment}
   

}
</script>
<style lang="scss">
    
</style>