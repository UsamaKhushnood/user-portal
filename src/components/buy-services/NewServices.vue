<template>
  <div class="col-12 tab-sec-ticket tab-not">
    <div class="filter-common">
      <div class="filter-inner-comon"><span>Filter</span></div>
      <div class="filter-inner-comon">
        <input type="text" placeholder="Search..." />
      </div>
      <div class="filter-inner-comon">
        <select>
          <option>Sort by</option>
          <option>Sort 1</option>
          <option>Sort 2</option>
          <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="255px"
            height="255px"
            viewBox="0 0 255 255"
            style="enable-background: new 0 0 255 255"
            xml:space="preserve"
          >
            <g>
              <g id="arrow-drop-down">
                <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
      </div>
    </div>
    <div class="t-container b-serv-col">
      <div
        class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
        v-for="(product, productIndex) in products"
        :key="productIndex"
      >
        <div class="b-s-container">
          <img
            class="b-s-img"
            :src="product.coverImg"
            data-toggle="modal"
            data-target="#offer-time"
          />
          <div class="b-s-provider">
            <img class="b-s-p-img" :src="product.userImg" />
            <div class="b-s-desig">
              <span class="b-s-desig-h">{{ product.title }}</span>
              <span class="c-orange">{{ product.rank }}</span>
            </div>
          </div>
          <div class="b-s-det">
            {{ product.description }}
          </div>
          <div class="b-s-review">
            <svg class="">
              <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
            </svg>
            <svg class="">
              <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
            </svg>
            <svg class="">
              <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
            </svg>
            <svg class="">
              <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
            </svg>
            <svg class="">
              <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
            </svg>
          </div>
          <div class="b-s-fav">
            <i class="fa fa-heart"></i>
            <span class="b-s-prc">{{ product.price }}</span>
          </div>
          <div class="b-s-btn-com">
            <a
              class="pop-over crsr-pntr"
              data-toggle="modal"
              data-target="#payment-buy"
              v-b-modal="'buy-now-modal' + productIndex"
              >Buy Now
              <BuyNowModal :productIndex="productIndex"></BuyNowModal>
            </a>
            <a
              class="pop-over crsr-pntr"
              data-toggle="modal"
              data-target="#send-gift"
              v-b-modal="'send-as-gift-modal' + productIndex"
              >Send as Gift
              <SendAsGiftModal :productIndex="productIndex"></SendAsGiftModal>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BuyNowModal from "./modals/buy-services-modals/BuyNowModal";
import SendAsGiftModal from "./modals/buy-services-modals/SendAsGiftModal";
export default {
  components: { BuyNowModal, SendAsGiftModal },
  data() {
    return {
      products: [
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
        {
          coverImg: require("@/assets/img/choose-photo3.jpg"),
          userImg: require("@/assets/img/choose-photo3.jpg"),
          title: "Awesome Villa",
          rank: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$ 35.99",
        },
      ],
    };
  },
};
</script>