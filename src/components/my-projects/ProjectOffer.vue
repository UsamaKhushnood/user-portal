<template>
  <div>
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
    <div
      class="task-content-row"
      v-for="(job, jobIndex) in jobsListing"
      :key="jobIndex"
    >
      <div
        class="task-content ticket-prgs-common border-0"
        @click="move('/my-projects/' + jobIndex)"
      >
        <div class="tckt-t-w task-icon">
          <svg class="icon">
            <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
          </svg>
        </div>
        <div class="task-ctnt-common task-det">
          <span class="stm-cont-h"> {{ job.title }} </span>
          <span>Project ID : {{ job.ProjectId }} – {{ job.dateTime }}</span>
        </div>
        <div class="task-ctnt-common task-det">
          <span class="stm-cont-h">Proposals</span>
          <span> {{ job.proposals }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobsListing: [
        {
          title: "Job ",
          ProjectId: 7854,
          Category: "category",
          dateTime: "12/10/2021",
          proposals: 54,
        },
        {
          title: "Job title",
          ProjectId: 123,
          Category: "category",
          dateTime: "12/10/2021",
          proposals: 32,
        },
        {
          title: "Job title",
          ProjectId: 123,
          Category: "category",
          dateTime: "12/10/2021",
          proposals: 15,
        },
        {
          title: "Job title",
          ProjectId: 123,
          Category: "category",
          dateTime: "12/10/2021",
          proposals: 105,
        },
      ],
    };
  },
  methods: {
    move(to) {
      this.$router.push({ path: to });
    },
  },
};
</script>
<style lang="scss" scoped>

.task-content.ticket-prgs-common.border-0 {
    cursor: pointer;
}

</style>
