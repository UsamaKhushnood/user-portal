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
    <div class="tab-content">
      <div class="tab-pane show active">
        <div
          class="task-content-row"
          data-dismiss="modal"
          aria-label="Close"
          data-toggle="modal"
          data-target="#tsk-v-gift"
          v-b-modal="'my-gift' + giftIndex"
          v-for="(gift, giftIndex) in gifts"
          :key="giftIndex"
        >
          <div class="task-content ticket-prgs-common">
            <div class="tckt-t-w task-icon">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#gift-box"></use>
              </svg>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ giftIndex }}: Purchase ID</span>
              <span>{{ gift.purchaseId }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Purchase Title</span>
              <span>{{ gift.title }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Date</span>
              <span>{{ gift.purchaseDate }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Sent By</span>
              <span>{{ gift.sentBy }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Status</span>
              <span class="c-green">{{ gift.status }}</span>
            </div>
            <div class="task-ctnt-common task-det text-center task-icon-com">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#download-1"></use>
              </svg>
            </div>
          </div>
            <MyGiftsModal :giftIndex="giftIndex"></MyGiftsModal>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import MyGiftsModal from './modals/MyGiftsModal'
export default {
  components:{MyGiftsModal},
  data() {
    return {
      gifts: [
        {
          purchaseId: "123445566",
          title: "Car Service for Free",
          purchaseDate: "Date and Time",
          sentBy: "Username",
          status: "Valid",
        },
        {
          purchaseId: "123445566",
          title: "Car Service for Free",
          purchaseDate: "Date and Time",
          sentBy: "ServiceBieter",
          status: "Valid",
        },
      ],
    };
  },
};
</script>
