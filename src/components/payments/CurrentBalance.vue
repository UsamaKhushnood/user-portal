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
      <div class="tab-pane show active stm-fnc">
        <div class="task-content-row flow-h">
          <div class="task-content ticket-prgs-common border-0">
            <div class="tckt-t-w task-icon">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
              </svg>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Total Balance</span>
              <span class="c-blue">1000,00 €</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Used</span>
              <span class="c-red">500,00 €</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Remain</span>
              <span class="c-green">500,00 €</span>
            </div>
          </div>
        </div>

        <div class="agr-bud-container">
          <div class="text-center mdl-icon mlstn-container">
            <div class="ui-block-title prgs-inner-title mlstn-title">
              <div class="msltn-avt">
                <img src="@/assets/img/mencap.png" />
              </div>
              <div class="tckt-t-w text-left">
                <span>Project Title</span>
              </div>
              <div class="tckt-t-w text-right">
                <span>Project ID</span>
              </div>
            </div>
            <div class="row">
              <div class="col col-12 mlstn-inner">
                <div class="task-content">
                  <div class="task-ctnt-common task-icon">
                    <svg class="">
                      <use xlink:href="@/assets/svg-sprite.svg#alert"></use>
                    </svg>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Budget</span>
                    <span class="c-green">1000,00 €</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">In Escrow</span>
                    <span class="c-green">200,00 €</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Ready Paid</span>
                    <span class="c-green">350,00 €</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Remain</span>
                    <span class="c-green">450,00 €</span>
                  </div>
                  <div class="task-ctnt-common task-det">
                    <span class="mlstn-h">Total Paid</span>
                    <span class="c-green">350,00 €</span>
                  </div>
                  <div
                    class="task-ctnt-common task-icon pop-over crsr-pntr"
                    data-toggle="modal"
                    data-target="#doc-pdf"
                    v-b-modal="'my-purchase'+ 0"
                  >
                    <svg class="">
                      <use xlink:href="@/assets/svg-sprite.svg#file"></use>
                    </svg>
                  </div>
                  <MyPurchaseModal purchasedIndex="0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import MyPurchaseModal from '@/components/buy-services/modals/MyPurchaseModal.vue'
export default {
components: {MyPurchaseModal},
  data() {
    return {
      payments: [
        {
          title: "Project Title",
          status: "Active",
          id: 6754,
          Budget: "1000,00 €",
          Escrow: "200,00 €",
          Ready: "300,00 €",
          Remain: "10,00 €",
          Total: "4000,00 €",
        },
        {
          title: "Project Title",
          status: "In Hold",
          id: 6754,
          Budget: "1000,00 €",
          Escrow: "200,00 €",
          Ready: "300,00 €",
          Remain: "10,00 €",
          Total: "4000,00 €",
        },
      ],
    };
  },
};
</script>