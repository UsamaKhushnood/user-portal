<template>
  <div
    class="ui-block popup-chat popup-chat-responsive open-chat"
    style="display: block"
  >
    <!--tabindex="-1" role="dialog" aria-labelledby="popup-chat-responsive" aria-hidden="true"-->

    <div class="modal-content">
      <div class="modal-header">
        <span class="icon-status online"></span>
        <h6 class="title">Chat</h6>
        <div class="more">
          <svg class="olymp-three-dots-icon">
            <use xlink:href="#olymp-three-dots-icon"></use>
          </svg>
          <svg class="olymp-little-delete js-chat-open">
            <use xlink:href="#olymp-little-delete"></use>
          </svg>
        </div>
      </div>
      <div class="modal-body">
        <div
          class="mCustomScrollbar ps ps--theme_default"
          data-ps-id="7e88bb74-7ed0-c91f-79dc-379a643da989"
        >
          <ul class="notification-list chat-message chat-message-field">
            <li>
              <div class="author-thumb">
                <img
                  loading="lazy"
                  src="@/assets/img/avatar14-sm.jpg"
                  alt="author"
                  class="mCS_img_loaded"
                />
              </div>
              <div class="notification-event">
                <span class="chat-message-item"
                  >Hi James! Please remember to buy the food for tomorrow! I’m
                  gonna be handling the gifts and Jake’s gonna get the
                  drinks</span
                >

                <span class="notification-date"
                  ><time class="entry-date updated" datetime="2004-07-24T18:18"
                    >Yesterday at 8:10pm</time
                  ></span
                >
              </div>
            </li>

            <li>
              <div class="author-thumb">
                <img
                  loading="lazy"
                  src="@/assets/img/author-page.jpg"
                  alt="author"
                  class="mCS_img_loaded"
                />
              </div>
              <div class="notification-event">
                <span class="chat-message-item">Don’t worry Mathilda!</span>
                <span class="chat-message-item"
                  >I already bought everything</span
                >
                <span class="notification-date"
                  ><time class="entry-date updated" datetime="2004-07-24T18:18"
                    >Yesterday at 8:29pm</time
                  ></span
                >
              </div>
            </li>

            <li>
              <div class="author-thumb">
                <img
                  loading="lazy"
                  src="@/assets/img/avatar14-sm.jpg"
                  alt="author"
                  class="mCS_img_loaded"
                />
              </div>
              <div class="notification-event">
                <span class="chat-message-item"
                  >Hi James! Please remember to buy the food for tomorrow! I’m
                  gonna be handling the gifts and Jake’s gonna get the
                  drinks</span
                >

                <span class="notification-date"
                  ><time class="entry-date updated" datetime="2004-07-24T18:18"
                    >Yesterday at 8:10pm</time
                  ></span
                >
              </div>
            </li>
          </ul>
          <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px">
            <div
              class="ps__scrollbar-x"
              tabindex="0"
              style="left: 0px; width: 0px"
            ></div>
          </div>
          <div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px">
            <div
              class="ps__scrollbar-y"
              tabindex="0"
              style="top: 0px; height: 0px"
            ></div>
          </div>
        </div>

        <form class="need-validation">
          <div class="form-group is-empty">
            <textarea
              class="form-control"
              placeholder="Press enter to post..."
            ></textarea>
            <span class="material-input"></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>