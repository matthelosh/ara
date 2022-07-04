<template>
	<div>
		<v-container>
			<v-row>
				<v-col>
					<v-card>
						<v-card-title class="text-h5">
							<v-icon>mdi-calendar</v-icon>
							Agenda Sekolah 
						</v-card-title>
						<v-card-text>
							<v-sheet height="64">
			                    <v-toolbar
			                        flat
			                    >
			                    <v-menu
						            bottom
						            right
						          >
						            <template v-slot:activator="{ on, attrs }">
						              <v-btn
						                outlined
						                color="grey darken-2"
						                v-bind="attrs"
						                v-on="on"
						              >
						                <span>{{ typeToLabel[type] }}</span>
						                <v-icon right>
						                  mdi-menu-down
						                </v-icon>
						              </v-btn>
						            </template>
						            <v-list>
						              <v-list-item @click="type = 'day'">
						                <v-list-item-title>Hari</v-list-item-title>
						              </v-list-item>
						              <v-list-item @click="type = 'week'">
						                <v-list-item-title>Minggu</v-list-item-title>
						              </v-list-item>
						              <v-list-item @click="type = 'month'">
						                <v-list-item-title>Bulan</v-list-item-title>
						              </v-list-item>
						              <v-list-item @click="type = '4day'">
						                <v-list-item-title>4 Hari</v-list-item-title>
						              </v-list-item>
						            </v-list>
						          </v-menu>
		                          <v-btn
		                              fab
		                              text
		                              small
		                              color="grey darken-2"
		                              @click="prev"
		                          >
		                              <v-icon>
		                              mdi-chevron-left
		                              </v-icon>
		                          </v-btn>
		                          
		                          <v-toolbar-title>
		                              <span v-if="$refs.calendar">{{ $refs.calendar.title }}</span><span v-else>{{thisMonth}}</span>
		                          </v-toolbar-title>
		                          <v-btn
		                              fab
		                              text
		                              small

		                              color="grey darken-2"
		                              @click="next"
		                          >
		                              <v-icon >
		                              	mdi-chevron-right
		                              </v-icon>
		                          </v-btn>
		                          <v-spacer></v-spacer>
						          
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
		                      @click:date="viewDate"
		                      @mouseenter:event=""
		                      >
		                      	<template v-slot:event="{event}" >
		                      		<v-row >
		                      			<v-col class="d-flex justify-between">
		                      				<v-btn x-small icon @click.stop="deleteEvent(event)" color="white">
			                      				<v-icon x-small>mdi-close</v-icon>
			                      			</v-btn>
				                      		{{event.name}}
			                      		</v-col>
		                      		</v-row>
		                      	</template>
		                      </v-calendar>
		                  </v-sheet>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-dialog
            max-width="600"
            v-model="selectedOpen"
            style="display:flex"
          >
            <v-card
              :color="selectedEvent.color"
              dark
            >
              <v-card-title>
              	<h3 class="text-h4"><v-icon>mdi-calendar</v-icon>Agenda Sekolah</h3>
              </v-card-title>
              <v-divider class="mb-3"></v-divider>
              <v-card-text>
              	<v-text-field label="Nama Agenda" v-model="selectedEvent.name"  outlined></v-text-field>
                <v-textarea label="Deskripsi Agenda" v-model="selectedEvent.description" outlined  hide-details rows="2" auto-grow />
                <v-row class="mt-1">
                	<v-col>
                		<label for="start" style="border: 1px solid white;padding: 5px 10px;border-radius: 3px;background: #fefefe;color:#363636;">
	                		Mulai: 
	                		<input id="start" type="date" v-model="selectedEvent.start">
	                	</label> 
                	</v-col>
                	<v-col>
                		<label for="end" style="border: 1px solid white;padding: 5px 10px;border-radius: 3px;background: #fefefe;color:#363636;">
	              		Selesai:
	              		<input type="date" v-model="selectedEvent.end">	
	              	</label>
                	</v-col>
                </v-row>
                <div class="pickColor d-flex justify-center my-3" >
                	<v-btn fab small 
                		v-for="(color,i) in colors"
                		:key="i"
                		:color="color"
                		@click="selectedEvent.color = color" 
                		style="border: 2px solid white!important; margin: 2px 3px;"
                		></v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
              	
                <v-spacer></v-spacer>
                <v-btn text @click="closeEvent">Tutup</v-btn>
                <v-btn text @click="saveEvent" :loading="loading">Simpan</v-btn>
              </v-card-actions>
            </v-card>
	    </v-dialog>
	</div>
</template>
<script>
import DashLayout from '@/js/Layouts/Dashboard'
import {Calendar} from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'
export default {
	name: 'AdminAgenda',
	components: {Calendar},
	layout: DashLayout,
	data: () => ({
		colors: [
			'primary','warning','info', 'success','error','teal', '#363636', '#9a9a9a'
		],
		events: [
			{
				name: "Tes",
				start: '2022-06-24 07:00',
				end: '2022-06-25 16:00',
				color: 'primary',
				description: 'Not Available'
			},
			{
				name: "Libur Akhir Semester",
				start: '2022-06-24',
				end: '2022-06-30',
				color: 'error',
				description: 'Not Available'
			},
		],
		focus: '',
		type: 'month',
		typeToLabel: {
			month: 'Bulan',
			week: 'Minggu',
			day: 'Hari',
			'4day': '4 Hari'
		},
		selectedEvent: {},
		selectedElement: null,
		selectedOpen: false,
		loading: false,
	}),
	methods: {
		deleteEvent(event) {
			axios({
				method: 'delete',
				url: '/admin/agenda/'+event.id
			}).then(res => {
				this.getEvents()
			}).catch(err => {
				console.log(err)
			})
		},
		getEvents(){
			axios({
				method: 'post',
				url: '/admin/agenda'
			}).then(res => {
				this.events = res.data.events
			}).catch(err => {
				console.log(err)
			})
		},
		viewDate({date}){
			// this.focus = date
			// this.type = 'day'
			this.selectedOpen = true
			this.selectedEvent = {
				mode: 'new',
				start: date,
				end: date,
				color: 'primary'
			}
		},
		saveEvent() {
			if (this.selectedEvent.id) {
				this.events[this.events.indexOf(this.selectedEvent.id)] = this.selectedEvent
			} else {
				this.events.push(this.selectedEvent)
			}
			this.loading = true
			axios({
				method: 'post',
				url: '/admin/agenda/store',
				data: this.selectedEvent
			}).then(res => {
				this.getEvents()
				this.selectedOpen = false
				Object.assign(this.selectedEvent, {})
				this.loading = false
			})
			
		},
		closeEvent() {
			// if (this.selectedEvent.index) {
			// 	this.events[this.selectedEvent.index] = this.selectedEvent
			// } else {
			// 	this.events.push(this.selectedEvent)
			// }
			this.selectedOpen = false
			Object.assign(this.selectedEvent, {})
		},
		
		showEvent({nativeEvent, event}) {
			this.selectedEvent = event
			// this.selectedEvent.index = this.events.indexOf(event)
			this.selectedOpen = true
		},
		getEventColor(event) {
			return event.color
		},
		prev() {
			this.$refs.calendar.prev()
		},
		next() {
			this.$refs.calendar.next()
		},
		goToday() {
			this.$refs.calendar.goToday()
		}
	},
	computed: {
		thisMonth() {
			const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
            let date = new Date()
            return months[date.getMonth()]+' '+date.getFullYear()
		}
	},
	mounted() {
		this.getEvents()
	}
}
</script>
<style scoped>
	/*.bordered-white{
		border: 2px solid white!important;
	}*/
</style>