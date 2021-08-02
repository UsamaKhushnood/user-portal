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
        <div class="stm-table-common">
          <div class="stm-table-row-common stm-table-heading">
            <div class="stm-table-cell-common">#</div>
            <div class="stm-table-cell-common">Date</div>
            <div class="stm-table-cell-common">Trans ID</div>
            <div class="stm-table-cell-common">Type</div>
            <div class="stm-table-cell-common">Title</div>
            <div class="stm-table-cell-common">Amount</div>
            <div class="stm-table-cell-common">Options</div>
          </div>
          <div
            class="stm-table-row-common"
            v-for="(transaction, transactionIndex) in transactions"
            :key="transactionIndex"
            v-b-modal="'transaction-pdf-modal' + transactionIndex"
          >
            <div class="stm-table-cell-common">{{ transactionIndex }}</div>
            <div class="stm-table-cell-common">{{ transaction.date }}</div>
            <div class="stm-table-cell-common">{{ transaction.transId }}</div>
            <div class="stm-table-cell-common">{{ transaction.type }}</div>
            <div class="stm-table-cell-common">{{ transaction.title }}</div>
            <div class="stm-table-cell-common">{{ transaction.amount }}</div>
            <div class="stm-table-cell-common">{{ transaction.options }}</div>
          <PDFModal :index="transactionIndex"></PDFModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PDFModal from "./modals/transaction-modals/PDFModal.vue"
export default {
  components: { PDFModal },
  data() {
    return {
      transactions: [
        {
          date: "10.10.2020",
          transId: "ID132343",
          type: "Project",
          title: "Build HTML Website",
          amount: "250,00 €",
          options: "PDF",
        },
        {
          date: "10.10.2020",
          transId: "ID132343",
          type: "Project",
          title: "Build HTML Website",
          amount: "250,00 €",
          options: "PDF",
        },
        {
          date: "10.10.2020",
          transId: "ID132343",
          type: "Project",
          title: "Build HTML Website",
          amount: "250,00 €",
          options: "PDF",
        },
        {
          date: "10.10.2020",
          transId: "ID132343",
          type: "Project",
          title: "Build HTML Website",
          amount: "250,00 €",
          options: "PDF",
        },
        {
          date: "10.10.2020",
          transId: "ID132343",
          type: "Project",
          title: "Build HTML Website",
          amount: "250,00 €",
          options: "PDF",
        },
      ],
    };
  },
};
</script>