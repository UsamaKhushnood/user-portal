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
      <div class="tab-pane show active" id="tab-1-1">
        <div
          class="task-content-row"
          v-for="(fix, fixindex) in appointment"
          :key="fixindex"
        >
          <div class="task-content ticket-prgs-common">
            <div class="task-ctnt-common task-icon">
              <img :src="fix.userImg" />
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">{{ fix.userName }}</span>
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
              <span class="stm-cont-h">{{ fix.jobTitle }}</span>
              <span>{{ fix.jobTime }}</span>
            </div>
            <div class="task-ctnt-common task-det">
              <span class="stm-cont-h">Date and Time</span>
              <span class="c-red">{{ fix.date }} {{ fix.time }}</span>
            </div>
          </div>
          <div class="stm-abt-tckt c-red">
            <span>Notification: &nbsp; &nbsp; &nbsp; Be On Time</span>
            <span>Bringe Copy of the ID</span>
            <span
              class="text-right c-green bold"
              v-if="fix.status.toUpperCase() === 'OPEN'"
              >{{ fix.status }}</span
            >
            <span
              class="text-right c-red bold"
              v-if="fix.status.toUpperCase() === 'EXPIRED'"
              >{{ fix.status.toUpperCase() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      appointment: [
        {
          userImg: require("@/assets/img/t-image.png"),
          userName: "Sam",
          jobTitle: "Web developer",
          jobTime: "Look for Full Time Work",
          date: "12.12.2020",
          time: "12:30",
          status: "OPEN",
        },
        {
          userImg: require("@/assets/img/t-image.png"),
          userName: "John",
          jobTitle: "Mobile developer",
          jobTime: "Look for Full Time Work",
          date: "12.12.2020",
          time: "12:30",
          status: "expired",
        },
      ],
    };
  },
};
</script>