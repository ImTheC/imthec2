var ItcActor = function() {
  return Vue.component('itc-actor', {

    data: function() {
      return {
        resumeModal: false,
        resumeData: resume,
        backgroundModal: false,
        backgroundData: background
      }
    },

    methods: {
      toggleModal: function(modal) {
        this[modal+"Modal"] = !this[modal+"Modal"];
      }
    },

    template: `
      <section id="actor" class="hero is-primary is-fullheight">
        <div class="container section is-medium">
          <div class="columns is-multiline">
            <div class="column is-12">
              <h1 class="title is-size-1 is-size-3-touch">Actor</h1>
            </div>
            <div class="column is-12"></div>
            <div class="column">
              <div @click="toggleModal('resume')" class="card hoverable">
                <div class="card-content has-text-centered">
                  <div class="card-icon">
                    <i class="fa fa-film" aria-hidden="true"></i>
                  </div>
                  <h3 class="is-size-3">Resume</h3>
                </div>
              </div>
            </div>

            <div class="column">
                <div @click="toggleModal('background')" class="card hoverable">
                  <div class="card-content has-text-centered">
                    <div class="card-icon">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                  </div>
                  <h3 class="is-size-3">Background</h3>
                </div>
            </div>

          </div>
        </div>

        <itc-table-modal :id="'resume'" :data="resumeData" :isActive="resumeModal" :toggleModal="toggleModal"></itc-table-modal>

        <itc-table-modal :id="'background'" :data="backgroundData" :isActive="backgroundModal" :toggleModal="toggleModal"></itc-table-modal>

      </section>
    `

  });
};


var resume = [
    {
      "head": ["Film:", "", ""],
      "items": [
        ["Deadline", "Lead", "Reid Alt"],
        ["Photographic Memories", "Lead", "Travis Chesney"],
        ["Replay", "Lead", "Mohamed Diab"],
      ],
    },

    {
      "head": ["Voice Over:", "", ""],
      "items": [
        ["Brenda's Bedtime Stories Vol 1-5", "Audio Book Narrator", "Christian Record Services" ], ["Second Chance: From A Life...", "Audio Book Narrator", "Christian Record Services"],
        ["Breaking The Silence", "Audio Book Narrator", "Christian Record Services"],
        ["Meet John Doe", "Supporting", "Scott Glen"],
      ],
    },

    {
      "head": ["Commercials:", "", ""],
      "items": [
        ["CONFLICT LIST AVAILABLE UPON REQUEST"]
      ],
    },

    {
      "head": ["Theater:", "", ""],
      "items": [
        ["The Somewhat True Tale of Robin Hood", "Robin Hood", "Morrie Enders"],
        ["Disney 's My Son Pinocchio", "Stromboli, Bernardo", "Robie Hayek"], ["Hairspray", "Fender", "Morrie Enders"],
        ["Annie", "Bert Healy, Ensemble", "Morrie Enders"]
      ],
    },

    {
      "head": ["Training:", "", ""],
      "items": [
        ["Killian 's Commercial Workshop", "Killian McHugh", "Los Angeles, CA"], ["Scene Study & Acting Technique", "Nora Stone", "New York Film Academy(LA)"],
        ["Audition Technique", "Rick Kostenick", "New York Film Academy(LA)"],
        ["Voice", "Jerri Tubbs", "New York Film Academy(LA)"],
        ["Movement", "Doug Matranga", "New York Film Academy(LA)"]
      ],
    }
];

var background = [
    {
      "head": ["Show:", "Season: Episode"],
      "items": [
        ["The Big Bang Theory", "Season 6: Episode 1"],
        ["Vegas", "Season 1: Episode 3"],
        ["Vegas", "Season 1: Episode 4"],
        ["Vegas", "Season 1: Episode 5"],
        ["Vegas", "Season 1: Episode 7"],
        ["Community", "Season 4: Episode 3"],
        ["CSI: New York", "Season 9: Episode 4"],
        ["NCIS: Los Angeles", "Season 4: Episode 4"],
        ["Up All Night", "Season 2: Episode 7"],
        ["CSI: New York", "Season 9: Episode 8"],
        ["Criminal Minds", "Season 8: Episode 8"],
        ["Touch", "Season 2: Episode 5"],
        ["Body of Proof", "Season 3: Episode 6"],
        ["The Office", "Season 9: Episode ??"],
        ["Saving Mr. Banks", "MOVIE"]
      ]
    }
];
