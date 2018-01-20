const app = new Vue({
  el: '#app',
  components: {
    'itc-nav': new ItcNav,
    'itc-main': new ItcMain,
    'itc-intro': new ItcIntro,
    'itc-tiles': new ItcTiles,
    'itc-coder': new ItcCoder,
    'itc-writer': new ItcWriter,
    'itc-actor': new ItcActor,
    'itc-table-modal': new ItcTableModal,
    'itc-modal': new ItcModal,
    'itc-footer': new ItcFooter
  }
});
