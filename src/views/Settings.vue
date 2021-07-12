<template>
<div>
    <div class="row">
        <div class="col-md-3">
            <settingSidebar/>
  
        </div>
        <div class="col-md-9">
<div class="container tab-content-parent">
    <div class="row tab-content no-bg no-shadow">
        <div id="tab-setting-1" class="col-xl-12 col-lg-12 col-md-12 col-12 tab-pane show "
        :class="[{ active: $route.hash === ''}]"
        >
           <General/>
        </div>
        <div id="tab-setting-2" class="col-xl-12 col-lg-12 col-md-12 col-12 tab-pane"
        :class="[{ active: $route.hash === '#tab-setting-2'}]"
        >
            <Security/>
        </div>
        <div id="tab-setting-3" class="col-xl-12 col-lg-12 col-md-12 col-12 tab-pane"
        :class="[{ active: $route.hash === '#tab-setting-3'}]"
        >
          <Account/>
        </div>
        <div id="tab-setting-4" class="col-xl-12 col-lg-12 col-md-12 col-12 tab-pane"
        :class="[{ active: $route.hash === '#tab-setting-4'}]"
        >
            <Preferences/>
        </div>
        <div id="tab-setting-5" class="col-xl-12 col-lg-12 col-md-12 col-12 tab-pane"
        :class="[{ active: $route.hash === '#tab-setting-5'}]"
        >
           <Notification/>
        </div>
    </div>
</div>
        </div>
    </div>
</div>

</template>
<style scoped>
.bg-white {
    background: #fff
}
</style>
<script>
import settingSidebar from '@/components/settingSidebar.vue';
import General from '@/components/settings/General.vue';
import Security from '@/components/settings/Security.vue';
import Account from '@/components/settings/Account.vue';
import Preferences from '@/components/settings/Preferences.vue';
import Notification from '@/components/settings/Notification.vue';
export default {
    components:{General,settingSidebar,Security,Account,Preferences,Notification}
}
</script>
