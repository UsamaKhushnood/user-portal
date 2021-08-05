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
          v-for="(ticket, ticketIndex) in tickets"
          :key="ticketIndex"
          v-b-modal="'closed-ticket-modal' + ticketIndex"
        >
          <div class="task-content ticket-prgs-common">
            <div class="tckt-t-w task-icon">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#warning-2"></use>
              </svg>
            </div>
            <div class="task-ctnt-common task-det">
              <span>Ticket ID: {{ ticketIndex }}</span>
            </div>
            <div class="task-ctnt-common task-det text-center">
              <span>{{ ticket.title }}</span>
            </div>
            <div class="task-ctnt-common task-det text-center">
              <span>{{ ticket.dateAndTime }}</span>
            </div>
            <div class="task-ctnt-common task-det text-center tsk-more-det">
              <a href="#">More</a>
            </div>
            <div class="task-ctnt-common task-det text-center task-icon-com">
              <svg class="">
                <use xlink:href="@/assets/svg-sprite.svg#checked"></use>
              </svg>
            </div>
          </div>
          <ClosedTicketModal :index="ticketIndex"></ClosedTicketModal>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import ClosedTicketModal from "./modals/closed-ticket-modals/ClosedTicketModal.vue";
export default {
  components: { ClosedTicketModal },
  data() {
    return {
      tickets: [
        {
          title: "Project Title",
          dateAndTime: "Date and Time",
        },
        {
          title: "Project Title",
          dateAndTime: "Date and Time",
        },
      ],
    };
  },
};
</script>