<template>
  <div class="card bg-gradient-primary">
    <!-- Card body -->
    <div class="card-body">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <img src="img/icons/cards/visa.png" alt="Image placeholder" />
        </div>
        <div class="col-auto">
          <span
            class="badge badge-lg"
            :class="`badge-${creditCard.statusType}`"
            >{{ creditCard.status }}</span
          >
        </div>
      </div>
      <div class="my-4">
        <span class="h6 surtitle text-light">
          Card number
        </span>
        <div class="card-serial-number h1 text-white">
          <div
            v-for="(part, index) in creditCard.number.split(' ')"
            :key="index"
          >
            {{ part }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="h6 surtitle text-light">Name</span>
          <span class="d-block h3 text-white">{{ creditCard.name }}</span>
        </div>
        <div class="col">
          <span class="h6 surtitle text-light">Expiry date</span>
          <span class="d-block h3 text-white">{{ creditCard.expire }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "visa-card",
  data() {
    return {
      creditCard: {
        number: "4358 7421 9256 6682",
        status: "Active",
        statusType: "success",
        name: "Slava Nisman",
        expire: "11/23"
      }
    };
  }
};
</script>
