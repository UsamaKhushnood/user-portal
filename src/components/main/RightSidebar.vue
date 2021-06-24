<template>
  <div
    id="main-right-sidebar"
    class="col-md-1"
    @mouseover="sidebarOpen = true"
    @mouseout="sidebarOpen = false"
  >
    <ChatPopup v-show="showChat" />
    <div
      class="fixed-sidebar right"
      :class="{ open: sidebarOpen == true }"
      id="fr"
    >
      <div class="fixed-sidebar-right sidebar--small" id="sidebar-right">
        <div class="mCustomScrollbar" data-mcs-theme="dark">
          <ul class="chat-users">
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar67-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar62-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>

            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar68-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>

            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar69-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status away"></span>
              </div>
            </li>

            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar70-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status disconected"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar64-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar71-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar72-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status away"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar63-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status status-invisible"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar72-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status away"></span>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar71-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>
            </li>
          </ul>
          <div class="ls-footer">
            <div class="ls-f-bottom">
              <div class="ls-f-bottom-icon ls-f-b-messages">
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="@/assets/svg-sprite.svg#settings"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 	<div class="search-friend inline-items">
			<a href="#" class="js-sidebar-open">
				<svg class="olymp-menu-icon"><use xlink:href="@/assets/svg-sprite.svg#olymp-menu-icon"></use></svg>
			</a>
		</div>
 -->
        <!-- 	<a href="#" class="olympus-chat inline-items js-chat-open">
			<svg class="olymp-chat---messages-icon"><use xlink:href="@/assets/svg-sprite.svg#olymp-chat---messages-icon"></use></svg>
		</a> -->
      </div>

      <div class="fixed-sidebar-right sidebar--large" id="sidebar-right-1">
        <div class="mCustomScrollbar" data-mcs-theme="dark">
          <div class="ui-block-title ui-block-title-small">
            <a href="#" class="title">Close Friends</a>
            <a href="#">Settings</a>
          </div>

          <ul class="chat-users">
            <li
              class="inline-items js-chat-open"
              v-for="(user, userIndex) in userList"
              :key="userIndex"
            >
              <div class="author-thumb">
                <img alt="author" :src="user.img" class="avatar" />
                <span class="icon-status" :class="user.status.toLowerCase()"></span>
              </div>

              <div class="author-status" @click="showChat = !showChat">
                <a href="#" class="h6 author-name">{{ user.name }}</a>
                <span class="status">{{ user.status }}</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div class="ui-block-title ui-block-title-small">
            <a href="#" class="title">MY FAMILY</a>
            <a href="#">Settings</a>
          </div>

          <ul class="chat-users">
            <li class="inline-items js-chat-open" >
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar64-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Sarah Hetfield</a>
                <span class="status">ONLINE</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div class="ui-block-title ui-block-title-small">
            <a href="#" class="title">UNCATEGORIZED</a>
            <a href="#">Settings</a>
          </div>

          <ul class="chat-users">
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar71-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Bruce Peterson</a>
                <span class="status">ONLINE</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar72-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status away"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Chris Greyson</a>
                <span class="status">AWAY</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar63-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status status-invisible"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Nicholas Grisom</a>
                <span class="status">INVISIBLE</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar72-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status away"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Chris Greyson</a>
                <span class="status">AWAY</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
            <li class="inline-items js-chat-open">
              <div class="author-thumb">
                <img
                  alt="author"
                  src="@/assets/img/avatar71-sm.jpg"
                  class="avatar"
                />
                <span class="icon-status online"></span>
              </div>

              <div class="author-status">
                <a href="#" class="h6 author-name">Bruce Peterson</a>
                <span class="status">ONLINE</span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon">
                  <use
                    xlink:href="@/assets/svg-sprite.svg#olymp-three-dots-icon"
                  ></use>
                </svg>

                <ul class="more-icons">
                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-comments-post-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="ADD TO CONVERSATION"
                      class="olymp-add-to-conversation-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-add-to-conversation-icon"
                      ></use>
                    </svg>
                  </li>

                  <li>
                    <svg
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="BLOCK FROM CHAT"
                      class="olymp-block-from-chat-icon"
                    >
                      <use
                        xlink:href="@/assets/svg-sprite.svg#olymp-block-from-chat-icon"
                      ></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="search-friend inline-items">
          <form class="form-group">
            <input
              class="form-control"
              placeholder="Search Friends..."
              value=""
              type="text"
            />
          </form>

          <a href="#" class="settings">
            <svg class="olymp-settings-icon">
              <use
                xlink:href="@/assets/svg-sprite.svg#olymp-settings-icon"
              ></use>
            </svg>
          </a>

          <!-- 	<a href="#" class="js-sidebar-open">
				<svg class="olymp-close-icon"><use xlink:href="@/assets/svg-sprite.svg#olymp-close-icon"></use></svg>
			</a> -->
        </div>

        <div class="search-friend inline-items text-center">
          <a href="#" class="settings2">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 508 508"
              xml:space="preserve"
              class="messageSvg"
            >
              <circle
                cx="254"
                cy="254"
                r="254"
                style="fill: rgb(144, 223, 170)"
              ></circle>
              <path
                d="M263.3,87.5c-86.8,0-157.2,70.4-157.2,157.2c0,27.2,6.9,52.8,19.1,75.1l-19.1,82.1l82.1-19.1
	                  c22.3,12.2,47.9,19.1,75.1,19.1c86.8,0,157.2-70.4,157.2-157.2S350.1,87.5,263.3,87.5z"
                style="fill: rgb(255, 255, 255)"
              ></path>
              <path
                d="M271.6,280.3h-29.3v-15.8c0-6.9,0.8-12.1,2.5-15.4c1.6-3.4,5.2-7.8,10.8-13.3l18.9-18.9
	                c4-4.3,6-9.7,6-16.1c0-6.4-2.1-11.7-6.2-15.9c-4.2-4.2-9.5-6.4-16.1-6.4s-12,2-16.5,6.1c-4.4,4.1-7,9.5-7.7,16.2h-31.4
	                c1.7-15.4,7.7-27.4,18-36.1c10.3-8.7,23.1-13.1,38.5-13.1s27.9,4.2,37.6,12.6c9.7,8.4,14.5,20.1,14.5,35.1c0,10.4-2.8,19-8.5,25.9
	                c-3.3,4.1-5.8,7.1-7.5,8.8s-4,3.9-6.9,6.6c-2.9,2.7-5.3,5-7.3,7s-3.6,3.7-4.8,5.1c-3.1,3.8-4.7,9.2-4.7,16.1v11.5H271.6z
	                 M257.5,337.9c-5.4,0-10.1-1.9-14.1-5.6s-6-8.2-6-13.5s1.9-9.8,5.8-13.6c3.9-3.8,8.6-5.7,14-5.7c5.4,0,10.1,1.9,14.1,5.6
	                s5.9,8.2,5.9,13.5s-1.9,9.8-5.8,13.6C267.6,336,262.9,337.9,257.5,337.9z"
                style="fill: rgb(255, 112, 88)"
              ></path>
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
          </a>

          <a href="#" class="settings2">
            <svg
              height="464pt"
              viewBox="0 0 464 464"
              width="464pt"
              xmlns="http://www.w3.org/2000/svg"
              class="powerSvg"
            >
              <path
                d="m232 216c8.835938 0 16-7.164062 16-16v-144c0-8.835938-7.164062-16-16-16s-16 7.164062-16 16v144c0 8.835938 7.164062 16 16 16zm0 0"
                fill="#f1f2f2"
              ></path>
              <path
                d="m303.273438 97.726562c-4.429688-2.394531-9.726563-2.582031-14.3125-.503906-4.585938 2.082032-7.933594 6.1875-9.050782 11.097656v.105469c-1.546875 7.039063 1.808594 14.246094 8.195313 17.597657 48.75 25.773437 73.660156 81.457031 60.382812 134.980468-13.277343 53.523438-61.324219 91.109375-116.46875 91.109375s-103.191406-37.585937-116.46875-91.109375c-13.277343-53.523437 11.632813-109.207031 60.386719-134.980468 6.386719-3.347657 9.742188-10.554688 8.199219-17.597657v-.097656c-1.105469-4.902344-4.433594-9.007813-9.007813-11.09375-4.570312-2.089844-9.851562-1.921875-14.28125.453125-61.667968 32.71875-93.121094 103.234375-76.265625 170.976562 16.855469 67.746094 77.691407 115.296876 147.503907 115.296876 69.808593 0 130.644531-47.550782 147.5-115.296876 16.855468-67.742187-14.597657-138.257812-76.265626-170.976562zm0 0"
                fill="#f1f2f2"
              ></path>
              <path
                d="m232 0v40c8.835938 0 16 7.164062 16 16v144c0 8.835938-7.164062 16-16 16v135.832031c1.960938 0 3.886719.121094 5.863281 0 53.96875-2.632812 99.515625-41.023437 111.242188-93.769531 11.730469-52.742188-13.257813-106.816406-61.027344-132.070312-6.382813-3.351563-9.738281-10.558594-8.191406-17.601563v-.101563c1.117187-4.910156 4.464843-9.019531 9.050781-11.097656s9.882812-1.894531 14.308594.503906c61.707031 32.703126 93.1875 103.242188 76.324218 171.011719-16.863281 67.765625-77.734374 115.324219-147.570312 115.292969v80c128.128906 0 232-103.871094 232-232s-103.871094-232-232-232zm0 0"
                fill="#ff4764"
              ></path>
              <path
                d="m214.59375 383.03125c-66.179688-7.59375-119.703125-57.390625-132.042969-122.851562-12.339843-65.457032 19.378907-131.324219 78.25-162.492188 4.425781-2.375 9.710938-2.542969 14.28125-.453125 4.570313 2.085937 7.902344 6.191406 9.007813 11.09375v.097656c1.542968 7.042969-1.8125 14.25-8.203125 17.597657-48.726563 25.738281-73.625 81.386718-60.332031 134.871093 13.289062 53.480469 61.335937 91.003907 116.445312 90.9375v-135.832031c-8.835938 0-16-7.164062-16-16v-144c0-8.835938 7.164062-16 16-16v-40c-128.128906 0-232 103.871094-232 232s103.871094 232 232 232v-80c-5.816406-.003906-11.628906-.324219-17.40625-.96875zm0 0"
                fill="#ff3051"
              ></path>
            </svg>
          </a>
          <a href="#" class="settings2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChatPopup from "./ChatPopup.vue";
export default {
  components: { ChatPopup },
  data() {
    return {
      sidebarOpen: false,
      showChat: false,
      userList: [
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "online",
        },
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "status-invisible",
        },
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "disconected",
        },
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "disconected",
        },
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "online",
        },
        {
          img: require("@/assets/img/avatar63-sm.jpg"),
          name: "Carol Summers",
          status: "ONLINE",
        },
      ],
    };
  },
};
</script>

