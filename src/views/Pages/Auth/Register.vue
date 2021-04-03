<template>
  <div class="m-5">
    <div class="justify-content-center">
      <div class="h1 text-primary mb-4">Create account</div>
      <base-input placeholder="Your email" v-model="user.email"/>
      <base-input type="passowrd" placeholder="password" v-model="user.password" addon-right-icon="fa fa-eye" />
      <base-button class="login-btn" block type="primary">Create</base-button>
      <div class="mt-4 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <base-switch class="mr-2" v-model="user.rememberMe"></base-switch> 
          <span class="text-muted">Remember me</span>
        </div>
      </div>
      <div class="text-center text-muted mt-6">
        Or sign in using
      </div>
      <div class="btn-wrapper row d-flex justify-content-between mt-4">
        <div class="col-md-6 col-sm-12 mb-3">
          <a href="#" class="btn btn-lg btn-block btn-outline-primary btn-icon">
            <span class="btn-inner--icon pl-1"><img src="img/icons/common/google.svg"></span>
            <span class="btn-inner--text px-1">Google</span>
          </a>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <a href="#" class="btn btn-lg btn-block btn-outline-primary btn-icon">
            <span class="btn-inner--icon pl-1"><img src="img/icons/common/facebook.svg"></span>
            <span class="btn-inner--text px-1">Facebook</span>
          </a>
        </div>
      </div>
      <div class="text-muted mt-4">
        <span>Already have an account?</span> 
        <router-link to="/login">
          <span class="ml-2 text-primary text-underline"> Log in </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
          rememberMe: true
        }
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      }
    }
  };
</script>
