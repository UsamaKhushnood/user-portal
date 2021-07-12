<template>
    <div class="pane-common-inner">
                <div class="task-content-row pay-method-wrap">
                    <div class="cmn-title">
                        <div class="abt-project">
                            <span class="abt-title">Payment Methode</span>
                        </div>
                        <div class="cmn-title-ad-upld pop-over crsr-pntr" v-b-modal="'add-payment'">+ Add Payment</div>
                    </div>
                    <div class="ui-block-content ui-block-padd wndw-popup">
                        <!-- Personal Information Form  -->
                        <div class="paypal-wrapper">
                            <div class="paypal-img"><img src="@/assets/img/paypal.jpg"></div>
                            <div class="paypal-det">
                                <span class="paypal-title">Current Billing Methode</span>
                                <span>info@***********.de</span>
                            </div>
                            <div class="paypal-trigger">
                                <div class="opt-trigger-menu">
                                    <a id="trigger-1" class="optTrigger">
                                        <svg class="">
                                            <use xlink:href="#more"></use>
                                        </svg>
                                    </a>
                                    <div id="Menutrigger-1" class="optMenu">
                                        <span class="optOptions">Options</span>
                                        <a class="optLink" href="#">
                                            <span class="optMenuTitle">Set the Project as Private</span>
                                            <span class="optMenuText">Only Invented Freelancer can bid</span>
                                        </a>
                                        <a class="optLink" href="#">
                                            <span class="optMenuTitle">Repost The Project</span>
                                            <span class="optMenuText">This Job will be closed</span>
                                        </a>
                                        <a class="optLink" href="#">
                                            <span class="optMenuTitle">Remove this Project</span>
                                            <span class="optMenuText">Project will be removed</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <b-modal id="add-payment" hide-footer title="Payment Method">
                    <div class="modal-body modal-body-no-p">
                <form class="custom-form">
                    <div class="ui-block ui-block-no-m">
                        <div class="ui-block-content ui-block-padd">
                            <!-- Personal Information Form  -->
                            <div class="row pay-mtd-row">
                                <div class="col-lg-6 col-md-6 col-12 r-bdr" @click="isActive = true">
                                    <div class="pay-method-btns p-mtd-trigger p-mtd-trigger-1" :class="{'active' : isActive}"><img src="@/assets/img/paypal-pay.png"></div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12" @click="isActive = false">
                                    <div class="pay-method-btns p-mtd-trigger p-mtd-trigger-2 " :class="{'active' : !isActive}"><img src="@/assets/img/credit-card.png"></div>
                                </div>
                            </div>
                            <div class="row p-mtd-sth p-mtd-sth-1">
                                <div class="col-12 " v-if="isActive">
                                    <span class="rdrt-txt">You'll be redirected to Paypal to link a verified account.</span>
                                    <div>
                                        <button class="btn btn-primary btn-lg full-width set-form-btn ppl-btn">Pay with PayPal<div class="ripple-container"></div></button>
                                    </div>
                                </div>
                                <div class="col-12 " v-else>
                                    <span class="rdrt-txt">this is odne</span>
                                    <div>
                                        <button class="btn btn-primary btn-lg full-width set-form-btn ppl-btn">Pay with PayPal<div class="ripple-container"></div></button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </form>
                <!-- ... end Personal Information Form  -->
            </div>
                </b-modal>
            </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true
        }
    }
}
</script>