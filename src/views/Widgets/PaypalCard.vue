<template>
  <div class="card">
    <!-- Card body -->
    <div class="card-body">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <img src="img/icons/cards/paypal.png" alt="Image placeholder" />
        </div>
        <div class="col-auto">
          <span class="badge badge-lg" :class="`badge-${card.statusType}`">
            {{ card.status }}
          </span>
        </div>
      </div>
      <div class="my-4">
        <span class="h6 surtitle text-muted">
          PayPal E-mail
        </span>
        <div class="h1">{{ card.title }}</div>
      </div>
      <div class="row">
        <div class="col">
          <span class="h6 surtitle text-muted">Name</span>
          <span class="d-block h3">{{ card.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "paypal-card",
  data() {
    return {
      card: {
        status: "Active",
        statusType: "success",
        title: "john.snow@gmail.com",
        name: "Slava Nisman"
      }
    };
  }
};
</script>
