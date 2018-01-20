var ItcCoder = function() {
  return Vue.component('itc-coder', {

    template: `
      <section id="coder" class="hero is-primary is-fullheight">
        <div class="container section is-medium">
          <div class="columns is-multiline">
            <div class="column is-12">
              <h1 class="title is-size-2 is-size-3-touch">Web Developer</h1>
            </div>
            <div class="column is-12"></div>
            <div class="column is-one-third">
              <a target="_blank" href="https://www.12thmanfoundation.com">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/12thman.png" alt="12th Man Foundation Preview">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        12th Man Foundation
                      </h2>
                    <p class="is-size-8">Built using the Angular(2+) framework in Typescript / Javascript (ES6). I was responsible for architecting, scoping, and coding the frontend and leading a small team of developers.</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="column is-one-third">
              <a target="_blank" href="http://www.ArtistChrista.com">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/artistchrista.gif" alt="Artist Christa Preview">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        Artist Christa
                      </h2>
                    <p class="is-size-8">A single page portfolio website for artist Christa Anderson, created using HTML, CSS\SASS, Bootstrap, and jQuery.</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="column is-one-third">
              <a target="_blank" href="http://checktheposters.herokuapp.com">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/checktheposters.gif" alt="Check The Posters Preview">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        Check the Posters
                      </h2>
                    <p class="is-size-8">A site to display posters of events happening. The backend was created using Express, Node and Postgres, utilizing RESTful routes and the frontend was created using HTML, CSS, Materialize.</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="column is-one-third">
              <a target="_blank" href="http://www.imthec.com">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/imthec.gif" alt="ImTheC.com Preview">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        ImTheC
                      </h2>
                    <p class="is-size-8">A single page portfolio website created using Vue2, HTML, CSS, and Bulma.</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="column is-one-third">
              <a target="_blank" href="http://www.github.com/imthec">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/octocat.png" alt="GitHub">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        GitHub
                      </h2>
                    <p class="is-size-8">Christopher Anderson's GitHub profile.</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="column is-one-third">
              <a target="_blank" href="https://www.linkedin.com/in/imthec/">
                <div class="card hoverable">
                  <div class="card-image">
                    <div class="image">
                      <img src="./assets/images/linkedin.png" alt="GitHub">
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="is-size-4 is-size-5-touch has-text-centered">
                        LinkedIn
                      </h2>
                    <p class="is-size-8">Christopher Anderson's LinkedIn profile.</p>
                  </div>
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>
    `

  });
};
