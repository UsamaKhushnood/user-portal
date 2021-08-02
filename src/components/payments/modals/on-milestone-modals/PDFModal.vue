<template>
  <div>
    <b-modal :id="'pdf-modal' + index" size="xl" hide-footer hide-header>
      <template #default="{ close }">
        <div class="modal-content">
          <a
            href="#"
            class="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <svg class="olymp-close-icon" viewBox="0 0 32 32" @click="close()">
              <title>close-icon</title>
              <path
                d="M14.222 17.778h3.556v-3.556h-3.556v3.556zM31.084 3.429l-2.514-2.514-10.057 10.057 2.514 2.514 10.057-10.057zM0.916 28.571l2.514 2.514 10.057-10.055-2.516-2.514-10.055 10.055zM18.514 21.029l10.057 10.055 2.514-2.514-10.057-10.055-2.514 2.514zM0.916 3.431l10.057 10.055 2.516-2.514-10.059-10.057-2.514 2.516z"
              ></path>
            </svg>
          </a>
          <div class="ui-block ivc-ttl px-0" style="display: flex;">
            <div class="ui-block-title invoice-ttl-wrapper">
              <div class="invoice-ttl-col">
                <span class="invoice-ttl-txt">Invoice for Clients / User</span>
              </div>
              <div class="invoice-ttl-col">
                <span class="invoice-ttl-txt">Invoce ID</span>
              </div>
            </div>
            <a href="#" class="btn btn-lg btn-green invoice-ttl-print-btn">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#printer"></use>
              </svg>
            </a>
          </div>
          <div class="modal-body tab-pane modal-body-bap show active">
            <form class="custom-form row">
              <div class="col-12">
                <div class="ui-block pro-contract-block">
                  <div class="sevice-logo">
                    <img src="@/assets/img/logo.png" />
                  </div>
                  <div class="inv-user-det-wrapper">
                    <div class="inv-user-det">
                      <span class="inv-user-ttl">Username</span>
                      <span class="inv-user-sc-col inv-user-sc-col-bg"
                        >Company</span
                      >
                      <span class="inv-user-sc-col">Shop Name</span>
                    </div>
                    <div class="inv-user-det">
                      <span class="inv-user-ttl">User Address</span>
                      <span class="inv-user-sc-col inv-user-sc-col-bg"
                        >Invoice No.</span
                      >
                      <span class="inv-user-sc-col">Yami-10001</span>
                    </div>
                    <div class="inv-user-det">
                      <span class="inv-user-ttl">City and ZipCode</span>
                      <span class="inv-user-sc-col inv-user-sc-col-bg"
                        >Date - Time</span
                      >
                      <span class="inv-user-sc-col">31.11.2017 – 00:00</span>
                    </div>
                    <div class="inv-user-det">
                      <span class="inv-user-ttl"></span>
                      <span class="inv-user-sc-col inv-user-sc-col-bg"
                        >Invoice For</span
                      >
                      <span class="inv-user-sc-col"
                        ><b>Purchse Services</b></span
                      >
                    </div>
                    <div class="inv-user-det">
                      <span class="inv-user-ttl"></span>
                      <span class="inv-user-sc-col inv-user-sc-col-bg"
                        >Status</span
                      >
                      <span class="inv-user-sc-col"><b>Paid / PayPal</b></span>
                    </div>
                  </div>
                  <div class="inv-user-tbl">
                    <div class="inv-user-tbl-r inv-user-tbl-r-title">
                      <span class="inv-user-tbl-c">Title</span>
                      <span class="inv-user-tbl-c">Invoice ID</span>
                      <span class="inv-user-tbl-c">User ID</span>
                      <span class="inv-user-tbl-c">Date</span>
                    </div>
                    <div class="inv-user-tbl-r">
                      <span class="inv-user-tbl-c">Purchse Services</span>
                      <span class="inv-user-tbl-c">YIID-12254554545</span>
                      <span class="inv-user-tbl-c">UID-24545</span>
                      <span class="inv-user-tbl-c">31.10.2020</span>
                    </div>
                  </div>
                  <div class="inv-main-heading">Invoice</div>
                  <div class="inv-rec-tbl">
                    <div class="inv-rec-tbl-r inv-rec-tbl-r-title">
                      <span class="inv-rec-tbl-c">Amount</span>
                      <span class="inv-rec-tbl-c">Service</span>
                      <span class="inv-rec-tbl-c">Description</span>
                      <span class="inv-rec-tbl-c">Price</span>
                    </div>
                    <div class="inv-rec-tbl-r">
                      <span class="inv-rec-tbl-c">1</span>
                      <span class="inv-rec-tbl-c">Buy Services</span>
                      <span class="inv-rec-tbl-c">Service Title</span>
                      <span class="inv-rec-tbl-c">19,99 €</span>
                    </div>
                    <div class="inv-rec-tbl-r inv-rec-tbl-bdr">
                      <span class="inv-rec-tbl-c"></span>
                      <span class="inv-rec-tbl-c"></span>
                      <span class="inv-rec-tbl-c">Service ID</span>
                      <span class="inv-rec-tbl-c"></span>
                    </div>
                    <div class="inv-rec-tbl-r">
                      <span class="inv-rec-tbl-c">1</span>
                      <span class="inv-rec-tbl-c">Discount</span>
                      <span class="inv-rec-tbl-c">-10 %</span>
                      <span class="inv-rec-tbl-c">- 1,99 €</span>
                    </div>
                  </div>
                  <div class="inv-all-pay-wrapper">
                    <div class="inv-all-pay-col inv-all-pay-col-notify">
                      <span>Notification!!</span>
                      <span>This Invoice is ready Paid!!</span>
                    </div>
                    <div class="inv-all-pay-col inv-all-pay-col-pay">
                      <div class="inv-all-pay-col-pay-row">
                        <span>Subtotal</span>
                        <span>18,00 €</span>
                      </div>
                      <div class="inv-all-pay-col-pay-row">
                        <span>Total Net</span>
                        <span>15,13 €</span>
                      </div>
                      <div
                        class="inv-all-pay-col-pay-row inv-all-pay-col-pay-lit"
                      >
                        <span>Tax 19 %</span>
                        <span>+ 2,87 €</span>
                      </div>
                      <div
                        class="inv-all-pay-col-pay-row inv-all-pay-col-pay-bl"
                      >
                        <span>Total to Pay</span>
                        <span>18,00 €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- ... end Personal Information Form  -->
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["index"],
};
</script>
