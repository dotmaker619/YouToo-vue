<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          <a href="#" class="font-weight-bold ml-1" target="_blank"
            >Made with
          </a>
          <img src="img/icons/common/hard.png" />
          <a
            href="https://www.binarcode.com?ref=creative-tim"
            class="font-weight-bold ml-1"
            target="_blank"
          >
            By Nisman Solutions</a
          >
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end navfooter"
        >
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              target="_blank"
              style="color:2889FC !important;"
              >Privacy</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Terms</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Help</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
.navfooter .nav-link {
  color: #2889fc !important;
}
</style>
