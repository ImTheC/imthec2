var ItcFooter = function() {
  return Vue.component('itc-footer', {

    template: `
    <section class="hero is-black">
      <div class="hero-foot container">
        <div class="level navbar-item">

          <div class="level-left">
            <div class="level-item">
              <p class="has-text-white is-marginless has-text-centered-touch">
                &copy; Copyright 2018 - Christopher "ImTheC" Anderson
              </p>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item has-text-white">
              <div class="social-icon">
                <a target="_blank" href="https://www.twitter.com/ImTheC">
                  <span class="icon is-large"><i class="fa fa-twitter-square fa-2x"></i></span>
                </a>
              </div>
              <div class="social-icon">
                <a target="_blank" href="https://github.com/ImTheC">
                  <span class="icon is-large"><i class="fa fa-github-square fa-2x"></i></span>
                </a>
              </div>
              <div class="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/imthec">
                  <span class="icon is-large"><i class="fa fa-linkedin-square fa-2x"></i></span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    `

  });
};
