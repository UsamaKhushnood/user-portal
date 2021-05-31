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
                    Categories
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#"
                     :class="[{ active: $route.hash === '' }]"
                    >Project Warranty</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                     :class="[{ active: $route.hash === '#tab-2-2' }]">Services Warranty</a>
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
            <span class="ststc-h">Project Warranty Open</span>
            <span class="c-green">100</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Project Warranty Expired</span>
            <span class="c-red">25</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Service Warranty Open</span>
            <span class="c-green">5</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Job Warranty Expired</span>
            <span class="c-red">45</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1"  :class="[{ active: $route.hash === '' }]">
               <ProjectWarranty/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2"  :class="[{ active: $route.hash === '#tab-2-2' }]">
              <ServicesWarranty/>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
import ProjectWarranty from '@/components/my-projects/ProjectWarranty.vue';
import ServicesWarranty from '@/components/my-projects/ServicesWarranty.vue';
export default {
    components:{ProjectWarranty,ServicesWarranty}
  
}
</script>
<style lang="scss">
    
</style>