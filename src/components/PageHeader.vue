<template>
  <div id="secondary-header">
    <div
      class="main-header main-header-user-common main-header-dbrd bg-group"
    >
      <div class="container ">
        <div class="row">
          <div class="col col-lg-5 m-auto col-md-5 col-sm-12 col-12">
            <div class="main-header-content-left">
              <span class="mhc-h">
                <h1> {{currentRouteName}} </h1> 
              </span>
              <span class="">Monday 12.10.2020 - 19:30 - GE -Hannover</span>
            </div>
          </div>
          <div
            class="col col-lg-7 m-auto col-md-7 col-sm-12 col-12 main-header-content-right-container setting-bann-user m-h-c-r-c-user"
          >
            <div class="setting-bann-p">
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div
                    class="main-header-content-right-inner crsr-pntr"
                    data-toggle="modal"
                    data-target="#bepart-popup"
                  >
                    <img
                      src="@/assets/img/service-logo.png"
                      alt="Banner Logo"
                    />
                    <div class="mhc-RRcontent">
                      <span class="mhc-rc-h">Be Partner</span>
                      <span class="">Add your Company</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div class="main-header-content-right-inner">
                    <svg class="icon">
                      <use xlink:href="#medal"></use>
                    </svg>
                    <div class="mhc-RRcontent">
                      <span class="mhc-rc-h">Eat &amp; Drink</span>
                      <span class="">www.yamiyami.de</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-header-content-right">
                <div class="main-header-content-right-common">
                  <div
                    class="main-header-content-right-inner crsr-pntr"
                    data-toggle="modal"
                    data-target="#post-popup"
                  >
                    <svg class="icon">
                      <use xlink:href="#sticky-notes"></use>
                    </svg>
                    <div class="mhc-RRcontent">
                      <span class="mhc-rc-h">Post a Project</span>
                      <span class="">realisiere dein Projekt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="main-header-content-left2 main-header-content-left-setting"
            >
              <svg class="icon">
                <use xlink:href="#warning"></use>
              </svg>
              <div class="mhc-Rcontent">
                <span class="mhc-rc-nc"
                  >This will be here our Notifications Center for our
                  Customer</span
                >
                <span class="">realisiere dein Projekt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-parent-tab parent-tab-dashboard" v-show="$route.name === 'Dashboard'">
    <div class="row">
        <div class="col col-12">
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link active no-border" data-toggle="tab" href="#tab-2-1">Welcome Username</a>
                </li>
            </ul>
        </div>
    </div>
</div>
  </div>
</template>
<script>
export default {
  name: "PageHeader",
    computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss"></style>
