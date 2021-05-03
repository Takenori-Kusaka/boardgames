<template>
  <v-card
    class="mx-auto"
    max-width="80vw"
  >
    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Coyote</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="setting">mdi-account-settings</v-icon>
      </v-btn>
    </v-app-bar>

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
      <v-btn v-if="playing" @click="finish">
        ゲームを終了する
      </v-btn>
      <v-btn v-else @click="start">
        ゲームを開始する
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-btn @click="deal">
        カードを配る
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-btn @click="review">
        カードを再表示する
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="setting_dialog"
    max-width="30vw">
      <v-card>
        <v-toolbar
          color="orange lighten-1"
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Player list</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="add_account">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </v-toolbar>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Ctrl
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in playerlist"
                :key="index"
              >
                <td>
                  <v-text-field v-model="item.name">
                  </v-text-field>
                </td>
                <td>
                  <v-btn icon @click="remove_account(index)">
                    <v-icon>mdi-account-minus</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
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

  data: () => ({
    cards: [],
    playerlist: [],
    playercards: [],
    dealcards_dialog: false,
    setting_dialog: false,
    playing: false
  }),

  created: function () {
    this.initialize()
  },

  methods: {
    setting: function () {
      this.setting_dialog = true
    },
    start: function () {
      this.playing = true
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
            this.playercards.push({
              player: this.playerlist[i].name,
              card: this.cards[tmp].value
            })
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
          this.playercards[i].message += this.playercards[i].player + 'さんのカードは、「' + this.playercards[i].card + '」です\r\n'
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
    add_account: function () {
      this.playerlist.push({
        name: ''
      })
    },
    remove_account: function (index) {
      this.playerlist = this.playerlist.filter(n => n !== index)
    },
    clipboard: function (msg) {
      navigator.clipboard.writeText(msg)
        .then((e) => {
          alert('You just copied: ' + e.text)
        })
        .catch((e) => {
          alert('Failed to copy texts. Cause: ' + e.text)
        })
    },
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
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
