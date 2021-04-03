<template>
  <card>
    <div slot="header" class="row align-items-center">
      <div class="col-8">
        <h3 class="mb-0">Edit profile </h3>
      </div>
      <div class="col-4 text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </div>
    </div>

    <form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">User information</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </div>
        </div>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-md-12">
            <base-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
          </div>
          <div class="col-lg-4">
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
          </div>
          <div class="col-lg-4">
            <base-input
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
            >
            </base-input>
          </div>
        </div>
      </div>

      <hr class="my-4">
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">About me</h6>
      <div class="pl-lg-4">
        <div class="form-group">
          <label class="form-control-label">About Me</label>
          <textarea rows="4" class="form-control" placeholder="A few words about you ...">A beautiful premium dashboard for Bootstrap 4.</textarea>
        </div>
      </div>

    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
