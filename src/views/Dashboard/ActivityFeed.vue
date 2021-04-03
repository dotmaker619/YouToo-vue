<template>
  <div class="card">
    <div class="card-header">
      <h5 class="h3 mb-0">Activity feed</h5>
    </div>
    <div class="card-header d-flex align-items-center">
      <div class="d-flex align-items-center">
        <a href="#">
          <img src="img/theme/team-1.jpg" class="avatar" />
        </a>
        <div class="mx-3">
          <a href="#" class="text-dark font-weight-600 text-sm">Slava Nisman</a>
          <small class="d-block text-muted">3 days ago</small>
        </div>
      </div>
      <div class="text-right ml-auto">
        <button type="button" class="btn btn-sm btn-primary btn-icon">
          <span class="btn-inner--icon"><i class="ni ni-fat-add"></i></span>
          <span class="btn-inner--text">Follow</span>
        </button>
      </div>
    </div>

    <div class="card-body">
      <p class="mb-4">
        Personal profiles are the perfect way for you to grab their attention
        and persuade recruiters to continue reading your CV because you’re
        telling them from the off exactly why they should hire you.
      </p>
      <img
        alt="Image placeholder"
        src="img/theme/img-1-1000x600.jpg"
        class="img-fluid rounded"
      />
      <div class="row align-items-center my-3 pb-3 border-bottom">
        <div class="col-sm-6">
          <div class="icon-actions">
            <a href="#" class="like active">
              <i class="ni ni-like-2"></i>
              <span class="text-muted">150</span>
            </a>
            <a href="#">
              <i class="ni ni-chat-round"></i>
              <span class="text-muted">36</span>
            </a>
            <a href="#">
              <i class="ni ni-curved-next"></i>
              <span class="text-muted">12</span>
            </a>
          </div>
        </div>
        <div class="col-sm-6 d-none d-sm-block">
          <div class="d-flex align-items-center justify-content-sm-end">
            <div class="avatar-group">
              <a
                href="#"
                class="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Jessica Rowland"
              >
                <img
                  alt="Image placeholder"
                  src="img/theme/team-1.jpg"
                  class=""
                />
              </a>
              <a
                href="#"
                class="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Audrey Love"
              >
                <img
                  alt="Image placeholder"
                  src="img/theme/team-2.jpg"
                  class="rounded-circle"
                />
              </a>
              <a
                href="#"
                class="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Michael Lewis"
              >
                <img
                  alt="Image placeholder"
                  src="img/theme/team-3.jpg"
                  class="rounded-circle"
                />
              </a>
            </div>
            <small class="pl-2 font-weight-bold">and 30+ more</small>
          </div>
        </div>
      </div>
      <!-- Comments -->
      <div class="mb-1">
        <comment
          user-image="img/theme/team-1.jpg"
          user-name="Michael Lewis"
          text="Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis."
          :like-count="3"
          :share-count="2"
        />

        <comment
          user-image="img/theme/team-2.jpg"
          user-name="Jessica Stones"
          text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
          :like-count="10"
          :share-count="3"
        />
        <hr />
        <div class="media align-items-center">
          <img
            alt="Image placeholder"
            class="avatar avatar-lg rounded-circle mr-4"
            src="img/theme/team-3.jpg"
          />
          <div class="media-body">
            <form>
              <textarea
                class="form-control"
                placeholder="Write your comment"
                rows="1"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "@/components/Feed/Comment";
export default {
  name: "activiyt-feed",
  components: {
    Comment
  }
};
</script>
<style></style>
