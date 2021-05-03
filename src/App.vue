<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      clipped-left
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Boardgame Master</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="setting">mdi-account-settings</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      permanent
      hide-overlay
    >
      <v-list dense>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
        >
          <v-list-item-content>
            <v-list-item-title @click="currentview = item.title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <Coyote
        v-if="currentview === 'Coyote'"
        :playerlist="playerlist"
        >
      </Coyote>
      <Ito
        v-if="currentview === 'Ito'"
        :playerlist="playerlist"
        >
      </Ito>
    </v-main>

    <v-dialog
      v-model="setting_dialog"
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
  </v-app>
</template>

<script>
import Coyote from './components/Coyote'
import Ito from './components/Ito'

export default {
  name: 'App',

  components: {
    Coyote,
    Ito
  },

  data: () => ({
    playerlist: [],
    setting_dialog: false,
    currentview: 'Coyote',
    menu: [
      {
        title: 'Coyote'
      },
      {
        title: 'Ito'
      }
    ]
  }),

  methods: {
    setting: function () {
      this.setting_dialog = true
    },
    add_account: function () {
      this.playerlist.push({
        name: ''
      })
    },
    remove_account: function (index) {
      this.playerlist = this.playerlist.filter(n => n !== index)
    }
  }
}
</script>
