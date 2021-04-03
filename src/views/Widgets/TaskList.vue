<template>
  <card body-classes="p-0">
    <!-- Card header -->
    <h5 slot="header" class="h3 mb-0">To do list</h5>
    <!-- Card body -->
    <ul class="list-group list-group-flush" data-toggle="checklist">
      <li class="checklist-entry list-group-item flex-column align-items-start py-4 px-4"
          v-for="item in items"
          :key="item.title"
      >
        <div class="checklist-item"
             :class="{'checklist-item-checked': item.done, [`checklist-item-${item.checkType}`]: item.checkType}">
          <div class="checklist-info">
            <h5 class="checklist-title mb-0">{{item.title}}</h5>
            <small>{{item.description}}</small>
          </div>
          <div>
            <base-checkbox v-model="item.done"
                           :type="item.checkType"/>
          </div>
        </div>

      </li>
    </ul>
  </card>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Call with Dave',
            description: '10:30 AM',
            done: true,
            checkType: 'success'
          },
          {
            title: 'Lunch meeting',
            description: '10:30 AM',
            done: false,
            checkType: 'warning'
          },
          {
            title: 'Argon Dashboard Launch',
            description: '10:30 AM',
            done: false,
            checkType: 'info'
          },
          {
            title: 'Winter Hackaton',
            description: '10:30 AM',
            done: true,
            checkType: 'danger'
          },
          {
            title: 'Dinner with Family',
            description: '10:30 AM',
            done: true,
            checkType: 'success'
          }
        ]
      };
    }
  };
</script>
<style></style>
