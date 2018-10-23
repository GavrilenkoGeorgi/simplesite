<template>
  <v-container id="videoBackground" pa-0 ma-0 fluid>
    <!--div class="video-container-box"-->
    <v-layout row fill-height>
      <v-flex class="manual">
      <video autoplay muted loop id="doggyVideo" poster="../assets/video/maxdogAdBg-1200x720p.jpg">
        <source src="../assets/video/maxdogAd-1200x720p.mp4" type="video/mp4" media="all and (max-width: 768px)">
        <!--source src="../assets/video/Puppy1280.mp4" type="video/mp4" media="all and (min-width: 768px)"-->
        <!--source src="../assets/video/Puppy640.webm" type="video/webm"-->
      </video>
        <!-- button class="play-pause-button paused" v-on:click="playPauseVideo"></button-->
        <h1 class="video-overlay">Дрессировка собак в Киеве и Киевской области</h1>
      </v-flex>
        <!-- Use a button to pause/play the video with JavaScript -->
        <!--button id="myBtn" onclick="myFunction()">1</button-->
    <!--/div-->
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'videoBackground',
  /*
  props: {
    msg: String
  },
  mounted: function () {
    // console.log('Mounted.')
    // this.showSlides(1)
  },
  */
  methods: {
    playPauseVideo: function (event) {
      // console.log(`Play/pause video.`)
      // console.log(`${event.currentTarget}`)
      let video = document.getElementById('doggyVideo')
      if (video.paused) {
        video.play()
        event.currentTarget.classList.toggle('paused')
      } else {
        video.pause()
        event.currentTarget.classList.toggle('paused')
      }
    }
  }
}
</script>

<style scoped lang="scss">

#videoBackground {
  width: 100%;
  background-color: #ecf6ff;
}

#doggyVideo {
    width: 100%;
}

.play-pause-button {
  // border: 1px solid red;
  position: absolute;
  left: 1em;
  top: 4.7em;
  border-color: transparent transparent transparent #ffffff;
  transition: 500ms all ease;
  cursor: pointer;

  // play state
  border-style: solid;
  // border-width: .8em 0em .8em 1.4em;
  border-width: .7em 0em .7em 1em;

  &.paused {
    border-style: double;
    height: 1.4em;
    border-width: 0em 0em 0em 1em;
  }
}

.manual {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  z-index: 1;
}
.video-overlay {
  position: absolute;
  top: .4em;
  left: .4em;
  color: white;
  font-size: .9em;
  text-align: left;
  // background-color: $color-black-overlay;
  padding: 0em .3em 0em .5em;
  margin-top: .7em;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 414px) {
  .video-overlay {
    font-size: 1em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) {
  .video-overlay {
    font-size: 1.4em;
    top: .6em;
    left: .6em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px) { // iPadPro
  .video-overlay {
    font-size: 1.8em;
  }
  .play-pause-button {
    left: 3em;
    top: 7em;
  }
}
@media screen and (max-resolution: 96dpi) and (min-width: 768px) { // desktop
  .video-overlay {
    font-size: 2em;
    top: .3em;
    left: .3em;
  }
  .play-pause-button {
    left: 3em;
    top: 7em;
  }
}
</style>
