<template>
  <v-card
    class="mx-auto"
    max-width="80vw"
  >
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Cardlist
            </th>
            <th class="text-left">
              Used
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cards"
            :key="item.value"
          >
            <td>{{ item.value }}</td>
            <td>
              <v-icon v-if="item.used">
                mdi-check
              </v-icon>
              <h5 v-else>
                -
              </h5>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn v-if="playing" @click="finish" color="error">
        ゲームを終了する
      </v-btn>
      <v-btn v-else @click="start" color="success">
        ゲームを開始する
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-btn @click="deal" color="info">
        カードを配る
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-btn @click="review" color="info">
        カードを再表示する
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dealcards_dialog"
      max-width="50vw">
      <v-card
        class="mx-auto"
      >

        <v-toolbar
          color="indigo"
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Deal Cards</v-toolbar-title>

        </v-toolbar>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item, index) in playercards"
            :key="index"
          >
            <v-expansion-panel-header>
              {{ item.player }}
              <v-breadcrumbs divider=" "></v-breadcrumbs>
              {{ item.card }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-btn text @click="clipboard(item.message)">{{ item.player }}へ伝える他プレイヤーのカード情報をコピー</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Coyote',

  props: ['playerlist'],

  data: () => ({
    cards: [],
    playercards: [],
    dealcards_dialog: false,
    playing: false
  }),

  created: function () {
    this.initialize()
  },

  methods: {
    start: function () {
      this.playing = true
      this.playercards = []
      this.deal()
    },
    finish: function () {
      this.playing = false
      this.reset_used()
    },
    deal: function () {
      var reset = false
      for (let i = 0; i < this.playerlist.length; i++) {
        do {
          const tmp = Math.floor(Math.random() * this.cards.length)
          if (this.cards[tmp].used === false) {
            let p
            for (p = 0; p < this.playercards.length; p++) {
              if (this.playercards[p].player === this.playerlist[i].name) {
                this.playercards[p].card = this.cards[tmp].value
                break
              }
            }
            if (p >= this.playercards.length) {
              this.playercards.push({
                player: this.playerlist[i].name,
                card: this.cards[tmp].value
              })
            }
            if (this.cards[tmp].value === '0(Reset)') {
              reset = true
            }
            this.cards[tmp].used = true
            break
          }
        } while (true)
      }
      if (reset) {
        this.reset_used()
      }
      for (let i = 0; i < this.playercards.length; i++) {
        this.playercards[i].message = ''
        for (let p = 0; p < this.playercards.length; p++) {
          if (i !== p) {
            this.playercards[i].message += this.playercards[p].player + 'さんのカードは、「' + this.playercards[p].card + '」です\r\n'
          }
        }
      }
      this.dealcards_dialog = true
    },
    review: function () {
      this.dealcards_dialog = true
    },
    reset_used: function () {
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].used = false
      }
    },
    clipboard: function (msg) {
      navigator.clipboard.writeText(msg)
        .catch((e) => {
          alert('Failed to copy texts. Cause: ' + e.text)
        })
    },
    initialize: function () {
      this.cards = []
      this.cards.push(
        {
          value: '20',
          used: false
        }
      )
      this.cards.push(
        {
          value: '15',
          used: false
        }
      )
      this.cards.push(
        {
          value: '15',
          used: false
        }
      )
      this.cards.push(
        {
          value: '10',
          used: false
        }
      )
      this.cards.push(
        {
          value: '10',
          used: false
        }
      )
      this.cards.push(
        {
          value: '10',
          used: false
        }
      )
      this.cards.push(
        {
          value: '7',
          used: false
        }
      )
      this.cards.push(
        {
          value: '7',
          used: false
        }
      )
      this.cards.push(
        {
          value: '7',
          used: false
        }
      )
      this.cards.push(
        {
          value: '5',
          used: false
        }
      )
      this.cards.push(
        {
          value: '5',
          used: false
        }
      )
      this.cards.push(
        {
          value: '5',
          used: false
        }
      )
      this.cards.push(
        {
          value: '5',
          used: false
        }
      )
      this.cards.push(
        {
          value: '4',
          used: false
        }
      )
      this.cards.push(
        {
          value: '4',
          used: false
        }
      )
      this.cards.push(
        {
          value: '4',
          used: false
        }
      )
      this.cards.push(
        {
          value: '4',
          used: false
        }
      )
      this.cards.push(
        {
          value: '3',
          used: false
        }
      )
      this.cards.push(
        {
          value: '3',
          used: false
        }
      )
      this.cards.push(
        {
          value: '3',
          used: false
        }
      )
      this.cards.push(
        {
          value: '3',
          used: false
        }
      )
      this.cards.push(
        {
          value: '2',
          used: false
        }
      )
      this.cards.push(
        {
          value: '2',
          used: false
        }
      )
      this.cards.push(
        {
          value: '2',
          used: false
        }
      )
      this.cards.push(
        {
          value: '2',
          used: false
        }
      )
      this.cards.push(
        {
          value: '1',
          used: false
        }
      )
      this.cards.push(
        {
          value: '1',
          used: false
        }
      )
      this.cards.push(
        {
          value: '1',
          used: false
        }
      )
      this.cards.push(
        {
          value: '1',
          used: false
        }
      )
      this.cards.push(
        {
          value: '0',
          used: false
        }
      )
      this.cards.push(
        {
          value: '0',
          used: false
        }
      )
      this.cards.push(
        {
          value: '0',
          used: false
        }
      )
      this.cards.push(
        {
          value: '0(Reset)',
          used: false
        }
      )
      this.cards.push(
        {
          value: 'x2',
          used: false
        }
      )
      this.cards.push(
        {
          value: 'Max->0',
          used: false
        }
      )
    }
  }
}
</script>
