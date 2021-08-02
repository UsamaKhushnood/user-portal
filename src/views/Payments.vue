<template>
  <div>
    <div class="container tab-content-parent">
      <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="container-parent-tab ui-block">
            <div class="row">
              <div class="col col-12">
                <div class="your-profile">
                  <div class="rt-panel-h">Categories</div>
                </div>
                <ul class="nav nav-tabs nav-justified">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tab-2-1"
                      >My Current Balance</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2"
                      >On Milestone</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3"
                      >Release Requests</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4"
                      >Refund Requests</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-5"
                      >Transactions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ui-block">
            <div class="your-profile">
              <div class="rt-panel-h">Statics</div>
              <div class="ststc">
                <span class="ststc-h">Budget Total</span>
                <span class="c-green">5000,00 €</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">In Escrow total</span>
                <span class="c-blue">3500,00 €</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Total Paid</span>
                <span class="c-orange">1000,00 €</span>
              </div>
              <div class="ststc">
                <span class="ststc-h">Payment Remain</span>
                <span class="c-red">500,00 €</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12
            tab-content tab-content-nbg
          "
        >
          <div class="row t-container tab-pane show active" id="tab-2-1">
           <CurrentBalance />
          </div>
          <div class="row t-container tab-pane show" id="tab-2-2">
            <OnMilestone />
          </div>
          <div
            class="row t-container tab-pane"
            id="tab-2-3"
            :class="[{ active: $route.hash === '#tab-2-2' }]"
          >
            <ReleaseRequests />
          </div>
          <div
            class="row t-container tab-pane"
            id="tab-2-4"
            :class="[{ active: $route.hash === '#tab-2-3' }]"
          >
            <RefundRequests />
          </div>
          <div
            class="row t-container tab-pane"
            id="tab-2-5"
            :class="[{ active: $route.hash === '#tab-2-4' }]"
          >
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OnMilestone from "@/components/payments/OnMilestone.vue";
import ReleaseRequests from "@/components/payments/ReleaseRequests.vue";
import RefundRequests from "@/components/payments/RefundRequests.vue";
import CurrentBalance from "@/components/payments/CurrentBalance.vue";
import Transaction from "@/components/payments/Transaction.vue";
export default {
  components: { OnMilestone, ReleaseRequests, RefundRequests, CurrentBalance, Transaction },
};
</script>
<style lang="scss">
</style>