<template>
  <div id="main-app-container">
    <div class="row">
      <TheHeader />
      <LeftSidebar style="width: 70px; padding: 0 " />
      <div class="col-md-10 page-content">
        <PageHeader> </PageHeader>
        <router-view></router-view>
      </div>
      <RightSidebar style="width: 70px; padding: 0 " />
    </div>
  </div>
</template>
<script>
import PageHeader from "../PageHeader.vue";
import RightSidebar from "./RightSidebar.vue";
import LeftSidebar from "./LeftSidebar.vue";
import TheHeader from "./TheHeader.vue";
export default {
  components: { TheHeader, LeftSidebar, RightSidebar, PageHeader },
};
</script>
<style>
.page-content {
  width: calc(100% - 140px) !important;
  min-height: calc(100vh - 70px);
  margin-top: 70px !important;
  padding-bottom: 100px;  
  background-color: #edf2f6;
}
</style>
