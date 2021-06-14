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
                    >All Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                    :class="[{ active: $route.hash === '#tab-2-2' }]"
                    >Job Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                    :class="[{ active: $route.hash === '#tab-2-3' }]"
                    >Project Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                    :class="[{ active: $route.hash === '#tab-2-4' }]"
                    >Services Reviews</a>
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
            <span class="ststc-h">Total Reviews</span>
            <span class="c-green">100</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Services Reviews</span>
            <span class="c-green">25</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Project Reviews</span>
            <span class="c-green">75</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show active" id="tab-2-1" :class="[{ active: $route.hash === '' }]">
              <AllReviews/>
            </div>
            
        </div>
    </div>
</div> 
    </div>
</template>
<script>
import AllReviews from'@/components/reviews/AllReviews.vue';
export default {
    components:{AllReviews}
    
}
</script>
<style lang="scss">
    
</style>