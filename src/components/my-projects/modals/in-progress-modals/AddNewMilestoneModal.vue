<template>
    <div>
        <b-modal :id="'add-new-milestone'"
        size="lg"
      hide-footer
      hide-header
      >
    <template #default="{ close }">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
				<svg class="olymp-close-icon"><use xlink:href="#olymp-close-icon" @click="close()"></use></svg>
            </a>
            <div class="ui-block">
                <div class="ui-block-title">
                    <span class="stm-popup-title">
                        <span>Create new Milestone</span>
                    </span>
                </div>
            </div>
            <div class="modal-body modal-body-no-p">
                <form class="custom-form">
                    <div class="ui-block ui-block-no-m">
                        <div class="ui-block-content ui-block-padd">
                            <!-- Personal Information Form  -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group label-floating">
                                        <label class="control-label">Milestone Title</label>
                                        <input class="form-control" placeholder="Add Amount" type="text">
                                        <div class="form-icon">
                                            <svg class="v-rating-svg">
                                                <use xlink:href="#alert"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="form-group label-floating no-margin">
                                        <label class="control-label">Start Date</label>
                                        <input class="form-control" placeholder="Release Date" type="text">
                                        <div class="form-icon">
                                            <svg class="v-rating-svg">
                                                <use xlink:href="#calendar-4"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="form-group label-floating no-margin">
                                        <label class="control-label">Delivery Date</label>
                                        <input class="form-control" placeholder="Delivery Date" type="text">
                                        <div class="form-icon">
                                            <svg class="v-rating-svg">
                                                <use xlink:href="#calendar-4"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rel-date-error mt-4">
                                <span>
                                    <svg class="v-rating-svg">
                                        <use xlink:href="#warning"></use>
                                    </svg>
                                    Milestone will be not released by selected Date
                                </span>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group label-floating label-textarea">
                                        <label class="control-label">Milestone Descr.</label>
                                        <textarea class="form-control" placeholder="Milestone Descr."></textarea>
                                        <div class="form-icon">
                                            <svg class="v-rating-svg">
                                                <use xlink:href="#alert"></use>
                                            </svg>
                                        </div>
                                        <span class="material-input"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 btn-files-container" style="overflow: hidden">
                        <div class="row">
                            <button class="btn btn-primary btn-files-pop">Create and Close</button>
                            <button class="btn btn-primary btn-files-pop">Create and Add New</button>
                        </div>
                    </div>
                </form>
                <!-- ... end Personal Information Form  -->
            </div>
        </div>
    </template>
  </b-modal>
    </div>
</template>


