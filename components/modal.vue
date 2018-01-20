var ItcModal = function() {
  return Vue.component('itc-modal', {

    props: {
      id: {
        type: String,
        required: true
      },
      data: {
        type: String,
        required: true
      },
      isActive: {
        type: Boolean,
        required: true
      },
      toggleModal: {
        type: Function,
        required: true
      }
    },

    template: `
      <div :id="id" class="modal" :class="{'is-active': isActive}">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box hero has-text-centered" v-html="data"></div>
          </div>
          <button @click="toggleModal(id)" class="modal-close is-large" aria-label="close"></button>
        </div>

      </section>
    `

  });
};
