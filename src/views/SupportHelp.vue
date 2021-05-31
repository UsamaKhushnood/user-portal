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
                    Category
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#"
                    :class="[{ active: $route.hash === '' }]" 
                    >Create ticket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                    :class="[{ active: $route.hash === '#tab-2-2' }]" >Ticket in Progress</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                    :class="[{ active: $route.hash === '#tab-2-3' }]" 
                    >Solved Ticket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4" :class="[{ active: $route.hash === '#tab-2-4' }]"
                     >Closed Tickets</a>
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
            <span class="ststc-h">Total Tickets</span>
            <span class="c-green">100</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Tickets in Progress</span>
            <span class="c-green">25</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Solved Tickets</span>
            <span class="c-red">5</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Closed Tickets</span>
            <span class="c-red">45</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1" :class="[{ active: $route.hash === '' }]" >
               <CreateTicket/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2" :class="[{ active: $route.hash === '#tab-2-2' }]" >
                <TicketProgress/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3" :class="[{ active: $route.hash === '#tab-2-3' }]" >
                <SolvedTicket/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4" :class="[{ active: $route.hash === '#tab-2-4' }]" >
                <ClosedTickets/>
            </div>
            
        </div>
    </div>
</div>
    </div>
</template>
<script>
import CreateTicket from "@/components/my-projects/CreateTicket.vue";
import TicketProgress from "@/components/my-projects/TicketProgress.vue";
import SolvedTicket from "@/components/my-projects/SolvedTicket.vue";
import ClosedTickets from "@/components/my-projects/ClosedTickets.vue";
export default {
    components:{CreateTicket,TicketProgress,SolvedTicket,ClosedTickets}
    
}
</script>
<style lang="scss">
    
</style>