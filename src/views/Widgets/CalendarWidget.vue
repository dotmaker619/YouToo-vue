<template>
  <div class="card widget-calendar">
    <div class="card-header">
      <div class="h5 text-muted mb-1 widget-calendar-year">{{year}}</div>
      <div class="h3 mb-0 widget-calendar-day">{{today}}</div>
    </div>

    <div class="card-body">
      <full-calendar :events="events"
                     :plugins="calendarPlugins"
                     :editable="true"
                     defaultDate="2018-12-01"
                     contentHeight="auto"
                     :theme="false"
                     ref="fullCalendar"
                     :defaultView="defaultView">
      </full-calendar>
    </div>
  </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import format from 'date-fns/format'

  const today = new Date();
  export default {
    name: 'calendar',
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        year: today.getFullYear(),
        today: format(today, 'MMM dd'),
        events: [

          {
            title: 'Call with Dave',
            start: '2018-11-18',
            end: '2018-11-18',
            className: 'bg-red'
          },

          {
            title: 'Lunch meeting',
            start: '2018-11-21',
            end: '2018-11-22',
            className: 'bg-orange'
          },

          {
            title: 'All day conference',
            start: '2018-11-29',
            end: '2018-11-29',
            className: 'bg-green'
          },

          {
            title: 'Meeting with Mary',
            start: '2018-12-01',
            end: '2018-12-01',
            className: 'bg-blue'
          },

          {
            title: 'Winter Hackaton',
            start: '2018-12-03',
            end: '2018-12-03',
            className: 'bg-red'
          },

          {
            title: 'Digital event',
            start: '2018-12-07',
            end: '2018-12-09',
            className: 'bg-warning'
          },

          {
            title: 'Marketing event',
            start: '2018-12-10',
            end: '2018-12-10',
            className: 'bg-purple'
          },

          {
            title: 'Dinner with Family',
            start: '2018-12-19',
            end: '2018-12-19',
            className: 'bg-red'
          },

          {
            title: 'Black Friday',
            start: '2018-12-23',
            end: '2018-12-23',
            className: 'bg-blue'
          },

          {
            title: 'Cyber Week',
            start: '2018-12-02',
            end: '2018-12-02',
            className: 'bg-yellow'
          },
        ],
      };
    }
  };
</script>
<style lang="scss">
  @import "~@fullcalendar/core/main.css";
  @import "~@/assets/sass/core/vendors/fullcalendar";
</style>
