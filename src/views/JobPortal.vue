<template>
    <div id="jobs-portal">
        <div class="container tab-content-parent">
    <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="container-parent-tab ui-block">
    <div class="row">
        <div class="col col-12">
            <div class="your-profile">
                <div class="rt-panel-h">
                    Search Employee
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#"
                    :class="[{ active: $route.hash === '' }]"
                    >Seach a Job</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                    :class="[{ active: $route.hash === '#tab-2-2' }]"
                    >Work Requested</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                    :class="[{ active: $route.hash === '#tab-2-3' }]"
                    >View Document Request</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                    :class="[{ active: $route.hash === '#tab-2-4' }]"
                    >Employee Interview</a>
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
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1" :class="[{ active: $route.hash === '' }]">
             <SearchJob/>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
import SearchJob from'@/components/my-projects/SearchJob';
export default {
    components:{
        SearchJob}
   
}
</script>
<style lang="scss">
    
</style>