var ItcWriter = function() {
  return Vue.component('itc-writer', {

    data: function() {
      return {
        theseWordsModal: false,
        theseWordsData: theseWords,
        ourTwoWorldsModal: false,
        ourTwoWorldsData: ourTwoWorlds
      }
    },

    methods: {
      toggleModal: function(modal) {
        this[modal+"Modal"] = !this[modal+"Modal"];
        console.log(modal, "is", this[modal+"Modal"]);
      }
    },

    template: `
      <section id="writer" class="hero is-fullheight">
        <div class="container section is-medium">
          <div class="columns is-multiline">
            <div class="column is-12">
              <h1 class="title is-size-1 is-size-3-touch">Writer</h1>
            </div>
            <div class="column is-12"></div>
          </div>
          <div class="columns">
            <div class="column">
              <div @click="toggleModal('theseWords')" class="card hoverable">
                <div class="card-image">
                  <div class="image">
                    <img src="./assets/images/thesewords_crop.png" alt="These Words Image">
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div @click="toggleModal('ourTwoWorlds')" class="card hoverable">
                <div class="card-image">
                  <div class="image">
                    <img src="./assets/images/ourtwoworlds_crop.png" alt="Our Two Worlds Image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <itc-modal :id="'theseWords'" :data="theseWordsData" :isActive="theseWordsModal" :toggleModal="toggleModal"></itc-modal>

      <itc-modal :id="'ourTwoWorlds'" :data="ourTwoWorldsData" :isActive="ourTwoWorldsModal" :toggleModal="toggleModal"></itc-modal>

    </section>
    `

  });
};

var theseWords = '<img class="image image-bump modal-image height" src="http://wordlicker.com/wp-content/uploads/2016/02/OldBooksTheseWords-1024x686.jpg" alt="These Words Old Books"><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">T</span>hese words that I write capture a moment.</p><p class="is-size-4 is-size-7-touch is-marginless">A snapshot in time, a glimpse of my mind.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">W</span>ith colors and shading, a painter’s creating,</p><p class="is-size-4 is-size-7-touch is-marginless">An image to be explored with the eye.</p><p class="is-size-4 is-size-7-touch is-marginless">With talent and skill, the creator’s will</p><p class="is-size-4 is-size-7-touch is-marginless">A moment is captured with dye.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">B</span>ut upon the page, my world you can gauge,</p><p class="is-size-4 is-size-7-touch is-marginless">By not what you see, but that which&nbsp;you read.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">A</span>t the click of a button, that which you see,</p><p class="is-size-4 is-size-7-touch is-marginless">Can be captured and stored digitally.</p><p class="is-size-4 is-size-7-touch is-marginless">In the future retrieve, these memories,</p><p class="is-size-4 is-size-7-touch is-marginless">By viewing them all on the screen.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">B</span>ut upon the page, my world is displayed,</p><p class="is-size-4 is-size-7-touch is-marginless">Not by pixels in sync, but by how you now think.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">F</span>rom the lowest of A’s to the highest of C’s,</p><p class="is-size-4 is-size-7-touch is-marginless">Tones can be made for the ear to be pleased.</p><p class="is-size-4 is-size-7-touch is-marginless">Melodies and lyrics with tempo and beat,</p><p class="is-size-4 is-size-7-touch is-marginless">A symphony of feeling you love to repeat.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">B</span>ut upon the page, my world is arranged,</p><p class="is-size-4 is-size-7-touch is-marginless">by not what you hear, but which words do appear.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">S</span>o as you read, look past what you see,</p><p class="is-size-4 is-size-7-touch is-marginless">To the affects that happen inside.</p><p class="is-size-4 is-size-7-touch is-marginless">Deepen the feeling, carefully&nbsp;revealing,</p><p class="is-size-4 is-size-7-touch is-marginless">My thoughts no longer I hide.</p><div class="divider is-size-1 is-size-6-touch"></div><p class="is-size-4 is-size-7-touch is-marginless"><span class="has-text-weight-bold">W</span>hat I see, feel, and breathe, no longer kept&nbsp;pent.</p><p class="is-size-4 is-size-7-touch is-marginless">For these words that I write capture a moment.</p><div class="divider is-size-4 is-size-9-touch"></div>';

var ourTwoWorlds = '<img class="image image-bump modal-image width" src="http://wordlicker.com/wp-content/uploads/2016/02/1455903353481-228x300.jpg" alt="Our Two Worlds - Photo by liensca"><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">U</span>p upon the risers, the choir stands their ground, while crowds of nameless faces, anticipate their sound. Voices dance with music, flowing to my ears. Fades into the distance, all but disappears. My world ignites with longing, when you I chance to see. Your world of sweet contentment, separate from me.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">Y</span>our hair of darkest night, with glistening moonlight, stirs a furied hurricane, my heart cannot contain. Our worlds are two, what can I do, to bridge this canyon grand. Our hearts to bind, our love to find, together, hand in hand.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">T</span>he echoes of applause, slap me across the face. The rising tide of people, of you I lose all trace. Like I saw a shooting star, I walk away in awe. Wishing someday soon, you\'ll see the love I saw.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">I</span> choose my way across the floor, to the exit sign. As I open up the door, I find your hand on mine. We\'ve both tried to exit, it seems at the same place. My heart explodes inside me, from this innocent embrace. You turn to me and I look back, our eyes connecting true. Instantly a world is formed, from what had once been two.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">"O</span>h, excuse me," you do say. I cling to every word. Certain with no doubt inside, "I love you," I\'ve just heard. I step aside and you walk through, into the parking lot. Filling up with human hordes, you\'re soon a tiny dot. What we\'ve had is swallowed whole, by this chaotic beast. With dripping tongue on our one world, it absently does feast.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">S</span>lowly life continues. I watch weeks drain away. I wish I would have spoken, more to you that day. Two worlds again we have, and I\'m thinking of you. Longing for that moment, when our worlds are not two.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">S</span>omeday all will see, those two worlds will be so. And when that day comes, my love for you you\'ll know. For now I lay here dreaming, of when all that may be. Perhaps that time is now, you\'ve sent something to me.</p> <div class="divider is-size-4 is-size-7-touch"></div><p class="is-size-4 is-size-9-touch"><span class="has-text-weight-bold">E</span>agerly I open it, my pulse is racing fast. Finally the moment, I\'ve been waiting for at last. Like a viper striking fast, I quickly feel the sting. My world crumbles around, the invite to your wedding.</p> <div class="divider is-size-4 is-size-7-touch"></div></div>';
