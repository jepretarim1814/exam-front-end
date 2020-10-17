<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-9">Welcome {{ currentUser.username }} !</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
      name: 'Home',
      data() {
          return {
              timeToRefreshToken: 300, // refresh token every 5 mins
              startTimeInterval: null,
              timeInSeconds: 0
          }
      },
      computed: {
          ...mapGetters("auth", [
              'getCurrentUser'
          ]),
          currentUser() {
              return this.getCurrentUser;
          }
      },
      mounted() {
          if (!this.currentUser) {
              this.$router.push('/login');
          }
          this.startTimer();
      },
      methods: {
          ...mapActions("auth", [
              'refreshToken'
          ]),
          startTimer() {
              const _this = this;
              let time = JSON.parse(localStorage.getItem('timeToRefresh'));
              this.timeInSeconds = time && time.timeToRefresh ? parseInt(time.timeToRefresh) : 0;
              this.startTimeInterval = setInterval(function() {
                  _this.timeInSeconds += 1;
                  _this.updateTimeToRefreshFromLocalStorage();

                  if (_this.timeInSeconds >= _this.timeToRefreshToken) {
                      _this.timeInSeconds = 0;
                      _this.resetTimer();
                  }
              }.bind(this), 1000);
          },
          async resetTimer() {
              clearInterval(this.startTimeInterval);
              await this.refreshToken();
              this.removeTimeToRefreshFromLocalStorage();
              this.startTimer();
          },
          removeTimeToRefreshFromLocalStorage() {
              localStorage.removeItem('timeToRefresh');
          },
          updateTimeToRefreshFromLocalStorage() {
              let data = {
                  timeToRefresh: this.timeInSeconds
              };
              localStorage.setItem('timeToRefresh', JSON.stringify(data));
          }
      }
  }
</script>
