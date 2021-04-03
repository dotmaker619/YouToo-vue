<template>
    <card type="gradient-primary">
        <div class="row justify-content-between align-items-center">
            <div class="col">
                <img src="img/icons/cards/mastercard.png" alt="Image placeholder">
            </div>
            <div class="col-auto">
                <div class="d-flex align-items-center">
                    <small class="text-white font-weight-bold mr-3">Make default</small>
                    <div>
                        <base-switch type="white" v-model="creditCard.default"></base-switch>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <form role="form" class="form-primary">
                <base-input prepend-icon="ni ni-single-02"
                            class="input-group-alternative mb-3"
                            placeholder="Name on card"
                            v-model="creditCard.name">
                </base-input>

                <base-input prepend-icon="ni ni-credit-card"
                            class="input-group-alternative mb-3"
                            placeholder="Card number"
                            v-model="creditCard.cardNumber">
                </base-input>
                <div class="row">
                    <div class="col-6">

                        <base-input prepend-icon="ni ni-calendar-grid-58"
                                    class="input-group-alternative mb-3"
                                    placeholder="MM/YY"
                                    v-model="creditCard.expire">
                        </base-input>
                    </div>
                    <div class="col-6">
                        <base-input prepend-icon="ni ni-lock-circle-open"
                                    class="input-group-alternative mb-3"
                                    placeholder="CCV"
                                    v-model="creditCard.ccv">
                        </base-input>
                    </div>
                </div>
                <base-button type="info" block>Save new card</base-button>
            </form>
        </div>
    </card>
</template>
<script>
  export default {
    name: 'master-card',
    data() {
      return {
        creditCard: {
          default: true,
          name: '',
          cardNumber: '',
          expire: '',
          ccv: ''
        }
      }
    }
  }
</script>
