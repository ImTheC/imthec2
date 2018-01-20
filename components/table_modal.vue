var ItcTableModal = function() {
  return Vue.component('itc-table-modal', {

    props: {
      id: {
        type: String,
        required: true
      },
      data: {
        type: Array,
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
            <div class="box">
              <table class="table is-striped is-fullwidth" v-for="(table, index) in data">
                <thead>
                  <tr>
    								<th v-for="head in table.head"><br v-if="index === 0">{{head}}</th>
    							</tr>
                </thead>
                <tbody v-if="table.items">
                  <tr v-for="tr in table.items">
    								<td v-for="td in tr">{{td}}</td>
    							</tr>
                  </tbody>
			        </table>
    				</div>
          </div>
          <button @click="toggleModal(id)" class="modal-close is-large" aria-label="close"></button>
        </div>

      </section>
    `

  });
};
