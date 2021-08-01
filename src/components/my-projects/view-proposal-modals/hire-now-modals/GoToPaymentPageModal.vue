<template>
  <div>
    <b-modal
      :id="'go-to-payment-page-modal' + productIndex"
      size="xl"
      hide-header
      hide-footer
    >
      <template #default="{ close }">
        <div class="modal-content">
          <a
            class="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
            style="cursor: pointer"
          >
            <svg class="olymp-close-icon" viewBox="0 0 32 32" @click="close()">
              <title>close-icon</title>
              <path
                d="M14.222 17.778h3.556v-3.556h-3.556v3.556zM31.084 3.429l-2.514-2.514-10.057 10.057 2.514 2.514 10.057-10.057zM0.916 28.571l2.514 2.514 10.057-10.055-2.516-2.514-10.055 10.055zM18.514 21.029l10.057 10.055 2.514-2.514-10.057-10.055-2.514 2.514zM0.916 3.431l10.057 10.055 2.516-2.514-10.059-10.057-2.514 2.516z"
              ></path>
            </svg>
          </a>
          <!--<div class="ui-block">
                <div class="ui-block-title title-create">
                    <h6 class="title">Create Milestone</h6>
                </div>
            </div>-->

          <div class="modal-body modal-body-bap bg-white">
            <form class="custom-form tab-content no-bg no-shadow">
              <div class="shop-wrapper">
                <!--Header-->
                <div class="cart-container is-payment">
                  <div class="cart-header">
                    <div class="header-inner">
                      <h2 id="checkout-step-title">Payment</h2>
                      <div class="header-actions">
                        <!--<div class="buttons"> <a href="ecommerce-checkout.html" class="button is-light"> <span class="icon is-small"> <i data-feather="arrow-left"></i> </span> <span>Back</span> </a> <a href="ecommerce-products.html" class="button is-solid primary-button raised is-hidden">View Order</a> </div>-->
                      </div>
                    </div>
                  </div>
                </div>

                <!--Container-->
                <div id="payment-container" class="checkout-container">
                  <!--Left Side-->
                  <div class="left">
                    <div class="left-header">
                      <div class="header-inner">
                        <img
                          class="avatar"
                          src="@/assets/img/store.svg"
                          alt="image"
                        />
                        <div class="separator"></div>
                        <div class="title-wrap">
                          <h3 class="payment-title">Pay your order</h3>
                          <p class="payment-subtitle">
                            Enter your credit card information
                          </p>
                        </div>
                      </div>
                      <div class="header-coupon">
                        <div class="field is-grouped">
                          <div class="control">
                            <input
                              type="text"
                              class="input"
                              placeholder="Gift card or discount code"
                            />
                          </div>
                          <div class="control">
                            <button
                              class="button is-solid primary-button raised"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="header-foot">
                        <span class="label">Total</span>
                        <span class="amount" data-currency="USD">$216.92</span>
                      </div>
                    </div>
                    <div class="left-body"></div>
                  </div>

                  <!--Right Side-->
                  <div class="right">
                    <div class="payment-form">
                      <div
                        id="checkout-contact-section"
                        class="form-section has-margin-bottom"
                      >
                        <div class="form-section-header">
                          <h3>Contact Information</h3>
                        </div>
                        <div class="field">
                          <label for="card-element">Email Address</label>
                          <div class="control">
                            <input
                              class="input"
                              placeholder="Enter your email address"
                              name="checkout_email"
                              autofocus=""
                            />
                          </div>
                        </div>
                      </div>
                      <div id="checkout-payment-section" class="form-section">
                        <div class="form-section-header">
                          <h3>Payment Information</h3>
                        </div>
                        <div class="field">
                          <label for="card-element">Name on card</label>
                          <div class="control">
                            <input
                              class="input"
                              placeholder="Enter the name on the credit card"
                              name="checkout_name"
                            />
                          </div>
                        </div>
                        <div class="field">
                          <label for="card-element">Credit or debit card</label>
                          <div class="control">
                            <div
                              id="card-element"
                              class="StripeElement StripeElement--empty"
                            >
                              <div
                                class="__PrivateStripeElement"
                                style="
                                  margin: 0px !important;
                                  padding: 0px !important;
                                  border: none !important;
                                  display: block !important;
                                  background: transparent !important;
                                  position: relative !important;
                                  opacity: 1 !important;
                                "
                              >
                                <iframe
                                  name="__privateStripeFrame8225"
                                  frameborder="0"
                                  allowtransparency="true"
                                  scrolling="no"
                                  allow="payment *"
                                  src="https://js.stripe.com/v3/elements-inner-card-a8872469132fed8f0be9564cb6d419b1.html#wait=false&amp;style[base][iconColor]=%23fff&amp;style[base][fontSize]=14px&amp;style[base][color]=%23fff&amp;style[base][::placeholder][color]=%236f809e&amp;rtl=false&amp;componentName=card&amp;keyMode=test&amp;apiKey=pk_test_6pRNASCoBOKtIshFeQd4XMUh&amp;referrer=http%3A%2F%2Flocalhost%2Fuser%2Fbuy-services.php&amp;controllerId=__privateStripeController8221"
                                  title="Secure card payment input frame"
                                  style="
                                    border: none !important;
                                    margin: 0px !important;
                                    padding: 0px !important;
                                    width: 1px !important;
                                    min-width: 100% !important;
                                    overflow: hidden !important;
                                    display: block !important;
                                    user-select: none !important;
                                    will-change: transform !important;
                                    height: 16.8px;
                                  "
                                ></iframe
                                ><input
                                  class="__PrivateStripeElement-input"
                                  aria-hidden="true"
                                  aria-label=" "
                                  autocomplete="false"
                                  maxlength="1"
                                  style="
                                    border: none !important;
                                    display: block !important;
                                    position: absolute !important;
                                    height: 1px !important;
                                    top: -1px !important;
                                    left: 0px !important;
                                    padding: 0px !important;
                                    margin: 0px !important;
                                    width: 100% !important;
                                    opacity: 0 !important;
                                    background: transparent !important;
                                    pointer-events: none !important;
                                    font-size: 16px !important;
                                  "
                                />
                              </div>
                            </div>

                            <!-- Used to display Element errors -->
                            <div id="card-errors" role="alert"></div>
                          </div>
                        </div>
                        <div class="field">
                          <label>Country</label>
                          <div class="control has-icons-left">
                            <div class="select">
                              <select>
                                <option></option>
                                <option selected="">
                                  United States of America
                                </option>
                                <option>Belgium</option>
                                <option>Brazil</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Mexico</option>
                                <option>Spain</option>
                                <option>England</option>
                                <option>Luxembourg</option>
                              </select>
                            </div>
                            <div class="icon is-small is-left">
                              <svg class="">
                                <use xlink:href="@/assets/svg-sprite.svg#worldwide"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="field is-disclaimer">
                        <p>
                          By clicking on 'Submit Payment', you confirm that you
                          fully agree to our
                          <a href="#">Terms Of Service</a> and to our
                          <a href="#">Customer's Policy</a>.
                        </p>
                      </div>
                      <div class="field is-button">
                        <div class="buttons has-addons">
                          <button
                            id="payment-button"
                            type="button"
                            class="button is-solid primary-button"
                            v-b-modal="'confirm-payment-modal' + productIndex"
                          >
                            Confirm Payment
                          </button>
                          <button
                            type="button"
                            class="button is-solid primary-button"
                          >
                            $216.92
                          </button>
                          <ConfirmPaymentModal
                            :productIndex="productIndex"
                          ></ConfirmPaymentModal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="confirmation-container"
                  class="checkout-container is-hidden"
                >
                  <div class="confirmation-box">
                    <svg
                      id="successAnimation"
                      class="animated"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                    >
                      <path
                        id="successAnimationResult"
                        fill="#D8D8D8"
                        d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
                      ></path>
                      <circle
                        id="successAnimationCircle"
                        cx="35"
                        cy="35"
                        r="24"
                        stroke="#979797"
                        stroke-width="2"
                        stroke-linecap="round"
                        fill="transparent"
                      ></circle>
                      <polyline
                        id="successAnimationCheck"
                        stroke="#979797"
                        stroke-width="2"
                        points="23 34 34 43 47 27"
                        fill="transparent"
                      ></polyline>
                    </svg>
                    <h3>Your payment was successful.</h3>
                    <p>
                      Thank you for your purchase. We will immediatly start
                      preparing your order and ship it to you.
                    </p>
                    <div class="order-summary">
                      <h4>Order Summary</h4>
                      <div class="order-line">
                        <div class="item"><span>Transaction ID</span></div>
                        <div class="amount"><span>#45894</span></div>
                      </div>
                      <div class="order-line">
                        <div class="item"><span>Subtotal</span></div>
                        <div class="amount">
                          <span data-currency="USD">$201.92</span>
                        </div>
                      </div>
                      <div class="order-line">
                        <div class="item"><span>Shipping</span></div>
                        <div class="amount">
                          <span data-currency="USD">$15.00</span>
                        </div>
                      </div>
                      <div class="order-line">
                        <div class="item"><span>Taxes</span></div>
                        <div class="amount">
                          <span data-currency="USD">$8.92</span>
                        </div>
                      </div>
                      <div class="order-line">
                        <div class="item is-total"><span>Total</span></div>
                        <div class="amount is-total">
                          <span data-currency="USD">$216.92</span>
                        </div>
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
import ConfirmPaymentModal from "./ConfirmPaymentModal";
export default {
  components: { ConfirmPaymentModal },
  props: ["productIndex"],
};
</script>