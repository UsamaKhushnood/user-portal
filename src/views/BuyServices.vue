<template>
    <div id="buy-services">
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
                    <a class="nav-link " data-toggle="tab" href="#tab-2-1"
                    :class="[{ active: $route.hash === '' }]"
                    >Buy Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                     :class="[{ active: $route.hash === '#tab-2-2' }]"
                     >My Pruchase</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                     :class="[{ active: $route.hash === '#tab-2-3' }]"
                    >My Gifts</a>
                    <ul>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-4"
                         :class="[{ active: $route.hash === '#tab-2-4' }]"
                         >Received</a></li>
                        <li><a class="nav-link" data-toggle="tab" href="#tab-2-5"
                         :class="[{ active: $route.hash === '#tab-2-5' }]"
                        >Sent</a></li>
                    </ul>
                    <!--<div class="side-nav-arrow">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                            <g>
                                <g id="arrow-drop-down">
                                    <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                                </g>
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </div>-->
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-6">My Appointments</a>
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
            <span class="ststc-h">Total Purchase</span>
            <span class="c-green">30</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Tasks Used</span>
            <span class="c-green">30</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Send as Gift</span>
            <span class="c-blue">3</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Received as Gift</span>
            <span class="c-blue">5</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show " id="tab-2-1" :class="[{ active: $route.hash === '' }]">
               <NewServices/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2" :class="[{ active: $route.hash === '#tab-2-2' }]">
               <MyPurchase/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3"  :class="[{ active: $route.hash === '#tab-2-3' }]">
                <MyGifts/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4"  :class="[{ active: $route.hash === '#tab-2-4' }]">
               <Recieved/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-5"  :class="[{ active: $route.hash === '#tab-2-5' }]">
                <Sent/>
            </div>
            <div class="row t-container tab-pane" id="tab-2-6"  :class="[{ active: $route.hash === '#tab-2-6' }]">
                <MyAppointments/>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script> 
import NewServices from '@/components/buy-services/NewServices';
import MyPurchase from '@/components/buy-services/MyPurchase';
import MyGifts from '@/components/buy-services/MyGifts';
import Recieved from '@/components/buy-services/Recieved';
import Sent from '@/components/buy-services/Sent';
import MyAppointments from "@/components/buy-services/MyAppointments";

export default {
    components: { NewServices,
    MyPurchase,
    MyGifts,
    Recieved,
    Sent,
    MyAppointments },
    

    
}
</script>
<style lang="scss">
    
</style>