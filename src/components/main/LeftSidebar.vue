<template>
  <div id="main-left-sidebar" class="col-md-1">

    <div class="fixed-sidebar">
      <div class="fixed-sidebar-left sidebar--small" id="sidebar-left">
        <router-link tag="a" to="/dashboard" class="logo">
          <div class="img-wrap">
            <img src="@/assets/img/service-logo.png" alt="Service" />
          </div>
        </router-link>
        <div class="mCustomScrollbar frnt" data-mcs-theme="dark">
          <ul class="left-menu">
            <li class="current">
              <router-link to="/dashboard" tag="a">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#dashboard"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link to="/my-projects" tag="a">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#post-it-1"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/job-tasks">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#task"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/buy-services">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#discount"></use>
                </svg>
              </router-link>
            </li>

            <li>
              <router-link tag="a" to="/job-portal">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#job-seeker"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/payments">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#payment-method"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/warranty">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#secure"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/appointment">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#job-interview"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/reviews">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#rating"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/support-help">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#support"></use>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/reports">
                <svg class="icon">
                  <use xlink:href="@/assets/svg-sprite.svg#warning"></use>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
  .mCustomScrollbar {
    overflow: scroll;
}
</style>
