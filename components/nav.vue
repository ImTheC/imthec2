var ItcNav = function() {
  return Vue.component('itc-nav', {

    data: function() {
      return {
        showNav: false
      }
    },

    template: `
      <nav class="navbar is-primary is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h1 class="nav-title is-size-7-touch roboto-font">Christopher Anderson</h1>
            </a>

            <div @click="showNav = !showNav" class="navbar-burger burger nav-padding" :class="{'is-active': showNav}">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{'is-active': showNav}">
            <div class="navbar-end">
              <a href="#coder" @click="showNav = false" class="navbar-item">
                Coder
              </a>
              <a href="#writer" @click="showNav = false" class="navbar-item">
                Writer
              </a>
              <a href="#actor" @click="showNav = false" class="navbar-item">
                Actor
              </a>
            </div>
          </div>

        </div>
      </nav>
    `

  });
};
