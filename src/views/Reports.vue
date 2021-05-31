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
                    System Reports
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#"
                    :class="[{ active: $route.hash === '' }]"
                    >Portals Alerts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                    :class="[{ active: $route.hash === '#tab-2-2' }]"
                    >Account Alert</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                    :class="[{ active: $route.hash === '#tab-2-3' }]"
                    >Sending Reports</a>
                </li>
            </ul>
        </div>
    </div>
</div>

  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1" :class="[{ active: $route.hash === '' }]">
               <PortalsAlerts/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2" :class="[{ active: $route.hash === '#tab-2-2' }]">
                <AccountAlerts/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3" :class="[{ active: $route.hash === '#tab-2-3' }]">
               <SendingReports/>
            </div>
            
        </div>
    </div>
</div>
    </div>
</template>
<script>
import PortalsAlerts from "@/components/my-projects/PortalsAlerts.vue";
import AccountAlerts from "@/components/my-projects/AccountAlerts.vue";
import SendingReports from "@/components/my-projects/SendingReports.vue";
export default {
    components:{PortalsAlerts,AccountAlerts,SendingReports}
    
}
</script>
<style lang="scss">
    
</style>