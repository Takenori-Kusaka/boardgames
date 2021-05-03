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
      <v-btn @click="deal" color="info">
        カードを配る
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-btn @click="review" color="info">
        カードを再表示する
      </v-btn>
      <v-breadcrumbs divider=" "></v-breadcrumbs>
      <v-select
        v-model="num_hands"
        :items="num_hands_list"
        filled
        label="手札枚数"
      ></v-select>
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
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.cardlist_str }}
              <v-breadcrumbs divider=" "></v-breadcrumbs>
              <v-btn text @click="clipboard(item.message)">{{ item.player }}へ伝えるカード情報をコピー</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Ito',

  props: ['playerlist'],

  data: () => ({
    num_hands: 1,
    num_hands_list: [1, 2, 3],
    playercards: [],
    dealcards_dialog: false,
    playing: false
  }),

  created: function () {
    this.initialize()
  },

  methods: {
    deal: function () {
      this.playercards = []
      var ignorelist = []
      for (let i = 0; i < this.playerlist.length; i++) {
        for (let j = 0; j < this.num_hands; j++) {
          do {
            const tmp = Math.floor(Math.random() * 99) + 1
            let p
            for (p = 0; p < ignorelist.length; p++) {
              if (tmp === ignorelist[p]) {
                break
              }
            }
            if (p >= ignorelist.length) {
              ignorelist.push(tmp)
            } else {
              continue
            }

            for (p = 0; p < this.playercards.length; p++) {
              if (this.playercards[p].player === this.playerlist[i].name) {
                this.playercards[p].cardlist.push(tmp)
                break
              }
            }
            if (p >= this.playercards.length) {
              this.playercards.push({
                player: this.playerlist[i].name,
                cardlist: [tmp]
              })
            }
          } while (false)
        }
      }
      for (let i = 0; i < this.playercards.length; i++) {
        this.playercards[i].cardlist_str = this.playercards[i].cardlist.join(',')
        this.playercards[i].message = this.playercards[i].player + 'さんのカードは、「' + this.playercards[i].cardlist_str + '」です'
      }
      this.dealcards_dialog = true
    },
    review: function () {
      this.dealcards_dialog = true
    },
    clipboard: function (msg) {
      navigator.clipboard.writeText(msg)
        .catch((e) => {
          alert('Failed to copy texts. Cause: ' + e.text)
        })
    },
    initialize: function () {
    }
  }
}
</script>
