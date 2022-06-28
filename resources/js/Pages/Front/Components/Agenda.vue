<template>
    <v-row class="fill-height">
      <v-col>
          <v-card>
              <v-card-text>
                <h1><v-icon large>mdi-calendar</v-icon> AGENDA</h1>
                  <v-sheet height="64">
                      <v-toolbar
                          flat
                      >
                          <v-btn
                              fab
                              text
                              small
                              color="grey darken-2"
                              @click="prev"
                          >
                              <v-icon small>
                              mdi-chevron-left
                              </v-icon>
                          </v-btn>
                          <v-btn
                              fab
                              text
                              small
                              color="grey darken-2"
                              @click="next"
                          >
                              <v-icon small>
                              mdi-chevron-right
                              </v-icon>
                          </v-btn>
                          <v-toolbar-title>
                              <span v-if="$refs.calendar">{{ $refs.calendar.title }}</span><span v-else>{{thisMonth}}</span>
                          </v-toolbar-title>
                          <!-- <v-spacer></v-spacer> -->
                      </v-toolbar>
                  </v-sheet>
                  <v-sheet >
                      <v-calendar
                      ref="calendar"
                      v-model="focus"
                      color="primary"
                      :events="events"
                      :event-color="getEventColor"
                      :type="type"
                      @click:event="showEvent"
                      ></v-calendar>
                  </v-sheet>
              </v-card-text>
          </v-card>
          <v-dialog
            width="400"
            v-model="selectedOpen"
          >
            <v-card
              :color="selectedEvent.color"
              dark
            >
              <v-card-title><h3>{{selectedEvent.name}}</h3></v-card-title>
              <v-divider class="mb-3"></v-divider>
              <v-card-text>
                Mulai: {{selectedEvent.start}} |
                Selesai: {{selectedEvent.end}} <br>
                <span v-html="selectedEvent.description"></span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closeEvent">Tutup</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-col>
  </v-row>
</template>
<script>
export default {
    name: 'FrontAgenda',
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
        {
          name: 'Libur Akhir Semester',
          start: '2022-06-24',
          end: '2022-07-11',
          color: 'error',
          description: 'Libur Akhir Semester Genap / Libur Akhir Tahun 2021-2022'
        }
      ],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
    //   this.$refs.calendar
      this.getEvents()
    },
    methods: {
      getEvents() {
          axios({
          method: 'post',
          url: '/agenda'
        }).then(res => {
          this.events = res.data.events
        }).catch(err => {
          console.log(err)
        })
      },
      closeEvent() {
        this.selectedOpen = false
        Object.assign(this.selectedEvent, {})
      },
      showEvent({nativeEvent, event}){
        this.selectedEvent = event
        this.selectedOpen = true
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
    },
    computed: {
        thisMonth() {
            const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
            let date = new Date()
            return months[date.getMonth()]+' '+date.getFullYear()
        }
    }

}
</script>