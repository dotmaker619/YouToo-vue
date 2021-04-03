<template>
  <div class="m-5">
    <div class="justify-content-center">
      <div class="h1 text-primary mb-4">Forgot your password?</div>
      <div class="mb-4">
        If you lost your password, insert your username or your email address in the field below. You will receice a message with instructions.
      </div>
      <base-input placeholder="Your email" v-model="user.email"/>
      <base-button class="login-btn" block type="primary">Send message</base-button>
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
