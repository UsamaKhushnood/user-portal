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
                    <a class="nav-link active" data-toggle="tab" href="#tab-2-1"
                    
                >New Job Interview</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                   
                    >Service Appointment</a>
 </li>
                        <li class="nav-item"><a class="nav-link ps-5" data-toggle="tab" href="#tab-2-3"
                        
                        >New Appointment</a></li>
                        <li class="nav-item"><a class="nav-link ps-5" data-toggle="tab" href="#tab-2-4"
                        
                        >Accepted Appointment</a></li>
                        <li class="nav-item"><a class="nav-link ps-5" data-toggle="tab" href="#tab-2-5"
                        
                        >Denied Appointment</a></li>
                        <li class="nav-item"><a class="nav-link ps-5" data-toggle="tab" href="#tab-2-6"
                       
                        >Canceled Appointment</a></li>

               
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
            <div class="row t-container tab-pane show active" id="tab-2-1">
                <NewJob/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2">
                <ServiceAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3">
                <NewAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4">
                <AcceptedAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-5"> 
                <DeniedAppointment/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-6">
               <CancelledAppointment/>
            </div>
        </div>
    </div>
</div>
    </div>
</template> 
<script>
import NewJob from '@/components/appointment/NewJob.vue';
import ServiceAppointment from '@/components/appointment/ServiceAppointment.vue';
import NewAppointment from '@/components/appointment/NewAppointment.vue';
import AcceptedAppointment from '@/components/appointment/AcceptedAppointment.vue';
import DeniedAppointment from '@/components/appointment/DeniedAppointment.vue';
import CancelledAppointment from '@/components/appointment/CancelledAppointment.vue';
export default {
    components:{NewJob,ServiceAppointment,NewAppointment,AcceptedAppointment,DeniedAppointment,CancelledAppointment}
}
</script>
