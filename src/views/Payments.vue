<template>
    <div>
        <div class="container tab-content-parent">
    <div class="row">
        <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="container-parent-tab ui-block">
    <div class="row">
        <div class="col col-12">
            <div class="your-profile">
                <div class="rt-panel-h">
                    Categories
                </div>
            </div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tab-2-1">On Milestone</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-2">Release Requests</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-3">Refund Requests</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2-4">Transactions</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="ui-block">
    <div class="your-profile">
        <div class="rt-panel-h">
            Statics
        </div>
        <div class="ststc">
            <span class="ststc-h">Budget Total</span>
            <span class="c-green">5000,00 €</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">In Escrow total</span>
            <span class="c-blue">3500,00 €</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Total Paid</span>
            <span class="c-orange">1000,00 €</span>
        </div>
        <div class="ststc">
            <span class="ststc-h">Payment Remain</span>
            <span class="c-red">500,00 €</span>
        </div>
    </div>
</div>	
  			   				  		
						        </div>
        <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 tab-content tab-content-nbg">
            <div class="row t-container tab-pane show active" id="tab-2-1">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">			
                        <div class="tab-pane show active stm-fnc">
                            <div class="agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/mencap.png">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-icon">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#calendar-2"></use>
                                                    </svg>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Budget</span>
                                                    <span class="c-green">1000,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">In Escrow</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Ready Paid</span>
                                                    <span class="c-green">350,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Remain</span>
                                                    <span class="c-green">450,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Total Paid</span>
                                                    <span class="c-green">350,00 €</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/mencap.png">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-red">In Hold</span>
                                        </div>
                                        <div class="tckt-t-w text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-icon">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#calendar-2"></use>
                                                    </svg>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Budget</span>
                                                    <span class="c-green">1000,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">In Escrow</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Ready Paid</span>
                                                    <span class="c-green">350,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Remain</span>
                                                    <span class="c-green">450,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Total Paid</span>
                                                    <span class="c-green">350,00 €</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-2">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">			
                        <div class="tab-pane show active stm-fnc" id="tab-1-2">
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#eye"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#checked"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Request Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#access-denied"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-3">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">			
                        <div class="tab-pane show active stm-fnc" id="tab-1-2">
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#eye"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#checked"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row agr-bud-container">
                                <div class="text-center mdl-icon mlstn-container">
                                    <div class="ui-block-title prgs-inner-title mlstn-title">
                                        <div class="msltn-avt">
                                            <img src="@/assets/img/t-image.png" class="radius-50">
                                        </div>
                                        <div class="tckt-t-w text-left">
                                            <span>Project Title</span>
                                        </div>
                                        <div class="tckt-t-w task-new">
                                            <span class="c-green">Active</span>
                                        </div>
                                        <div class="tckt-t-w text-right text-right">
                                             <span>Project ID</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-12 mlstn-inner">
                                            <div class="task-content">
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund ID</span>
                                                    <span class="c-green">RQ12345678</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Date and Time</span>
                                                    <span class="c-green">12.10.2020 – 18:00</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Title</span>
                                                    <span class="c-green">Task 2 Done</span>
                                                </div>
                                                <div class="task-ctnt-common task-det">
                                                    <span class="mlstn-h">Refund Amount</span>
                                                    <span class="c-green">200,00 €</span>
                                                </div>
                                                <div class="task-ctnt-common task-det text-center task-icon-com">
                                                    <svg class="">
                                                        <use xlink:href="@/assets/svg-sprite.svg#access-denied"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row t-container tab-pane" id="tab-2-4">
                <div class="col-12 tab-sec-ticket tab-not">
                    <div class="filter-common">
    <div class="filter-inner-comon"><span>Filter</span></div>
    <div class="filter-inner-comon"><input type="text" placeholder="Search..."></div>
    <div class="filter-inner-comon">
        <select>
            <option>Sort by</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
        </select>
        <div class="srt-dd-active">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                <g>
                    <g id="arrow-drop-down">
                        <polygon points="0,63.75 127.5,191.25 255,63.75   "></polygon>
                    </g>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </div>
</div>                    <div class="tab-content">			
                        <div class="tab-pane show active stm-fnc">
                            <div class="stm-table-common">
                                <div class="stm-table-row-common stm-table-heading">
                                    <div class="stm-table-cell-common">
                                        #
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Date
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Trans ID
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Type
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Title
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Amount
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Options
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        01
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        02
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        03
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        04
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        05
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        06
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        07
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        08
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        09
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>

                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                                <div class="stm-table-row-common">
                                    <div class="stm-table-cell-common">
                                        10
                                    </div>
                                    <div class="stm-table-cell-common">
                                        10.10.2020
                                    </div>
                                    <div class="stm-table-cell-common">
                                        ID132343
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Project
                                    </div>
                                    <div class="stm-table-cell-common">
                                        Build HTML Website
                                    </div>
                                    <div class="stm-table-cell-common">
                                        250,00 €
                                    </div>
                                    <div class="stm-table-cell-common">
                                        PDF
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>