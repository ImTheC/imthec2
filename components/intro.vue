var ItcIntro = function() {
  return Vue.component('itc-intro', {

    template: `
        <div class="has-text-centered">
          <div class="columns is-variable is-6">
            <div class="column is-one-third">
              <img class="image circle image-bump" src="./assets/images/imthec_profile.png" alt="Christopher Anderson's Profile Picture">
            </div>
            <div class="column">
              <p class="is-size-5 is-size-6-mobile has-text-weight-light">As a <span class="has-text-primary has-text-weight-semibold">web developer</span>, I creatively solve problems and bring life to ideas. </p>
              <p class="is-size-5 is-size-6-mobile has-text-weight-light">As a <span class="has-text-primary has-text-weight-semibold">writer</span>, I express life and breathe into existence worlds of imagination.</p>
              <p class="is-size-5 is-size-6-mobile has-text-weight-light">As an <span class="has-text-primary has-text-weight-semibold">actor</span>, I breathe and feel and  live in other artists' worlds, drawing you into the story, in hopes to entertain and inspire.</p>
              <p class="is-size-5 is-size-6-mobile has-text-weight-light"><span class="has-text-primary has-text-weight-semibold">I'm The C</span>, otherwise known as <span class="span_p">Christopher</span>.</p>
            </div>
          </div>
        </div>
    `,

  });
};
