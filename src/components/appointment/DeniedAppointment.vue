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
          v-for="(appointment, appointmentIndex) in appointments"
          :key="appointmentIndex"
          v-b-modal="'denied-appointment-modal' + appointmentIndex"
        >
          <div class="task-content ticket-prgs-common">
            <div class="task-ctnt-common task-icon">
              <img src="@/assets/img/t-image.png" />
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ appointment.username }}</span>
              <span>
                <svg class="sw-rat-icon">
                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                </svg>
                <svg class="sw-rat-icon">
                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                </svg>
                <svg class="sw-rat-icon">
                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                </svg>
                <svg class="sw-rat-icon">
                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                </svg>
                <svg class="sw-rat-icon">
                  <use xlink:href="@/assets/svg-sprite.svg#star-2"></use>
                </svg>
              </span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ appointment.title }}</span>
              <span>Service ID: {{ appointmentIndex }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Appointment</span>
              <span class="c-red">{{ appointment.dateAndTime }}</span>
            </div>
          </div>
          <div class="stm-abt-tckt c-red">
            <span>Notification: &nbsp; &nbsp; &nbsp; {{ appointment.notification }}</span>
            <span>Denied Reason: {{ appointment.deniedReason }}</span>
            <span class="text-right c-orange bold">{{ appointment.status }}</span>
          </div>
          <DeniedAppointmentModal :index="appointmentIndex"></DeniedAppointmentModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeniedAppointmentModal from "./modals/denied-appointment-modals/DeniedAppointmentModal.vue"
export default {
  components: { DeniedAppointmentModal },
  data() {
    return {
      appointments: [
        {
          username: "Username",
          title: "Service Title",
          dateAndTime: "12.12.2020 12:30",
          notification: "Be On Time",
          deniedReason: "Bring Copy of ID",
          status: "DENIED",
        },
        {
          username: "Username",
          title: "Service Title",
          dateAndTime: "12.12.2020 12:30",
          notification: "Be On Time",
          deniedReason: "Bring Copy of ID",
          status: "DENIED",
        },
      ],
    };
  },
};
</script>