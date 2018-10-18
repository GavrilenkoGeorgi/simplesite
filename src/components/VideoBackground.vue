<template>
  <div id="videoBackground">
    <div class="video-container-box">
      <video autoplay muted loop id="doggyVideo" poster="../assets/video/maxdogAdBg-1200x720p.jpg">
        <source src="../assets/video/maxdogAd-1200x720p.mp4" type="video/mp4" media="all and (max-width: 768px)">
        <!--source src="../assets/video/Puppy1280.mp4" type="video/mp4" media="all and (min-width: 768px)"-->
        <!--source src="../assets/video/Puppy640.webm" type="video/webm"-->
      </video>
        <h1 class="video-overlay">Дрессировка собак в Киеве и Киевской области</h1>
        <button class="play-pause-button paused" v-on:click="playPauseVideo"></button>
        <!-- Use a button to pause/play the video with JavaScript -->
        <!--button id="myBtn" onclick="myFunction()">1</button-->
    </div>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/animate.css";
// @import "../assets/scss/fonts.scss";
$color-white: hsl(0, 0%, 100%);
$color-red: hsl(0, 100%, 41%);
$color-black: hsl(0, 0%, 0%);
$color-lightGray: hsl(0, 0%, 73%);
$color-grayShadow: hsla(0, 0%, 80%, 0.75);
$color-darkGray: hsl(0, 0%, 33%);

#videoBackground {
  width: 100%;
  background-color: #ecf6ff;
}
.video-container-box {
  // border: 1px solid green;
  // margin: 0em 0em 0em 0em;
  // margin-bottom: -3em;
}

#doggyVideo {
    // position: fixed;
    // right: 0;
    // bottom: 0;
    // margin-top:.3em;
    width: 100%;
    // border: 1px solid red;
    // min-width: 100%;
    // min-height: 100%;
}

/* Add some content at the bottom of the video/page */

.video-container-box:hover {
  .video-overlay {
    opacity: 0;
  }
}

.video-overlay {
  // font-size: 1em;
  // letter-spacing: .1em;
  // padding: .4em;
  // z-index: 1;
  //border: 1px solid lime;
  font-family: $alt-font-1;
  position: relative;
  color: white;
  text-align: center;
  transition: opacity 500ms ease-in;
  // padding-left: 1em;
  // font-size: .6em;
  // text-align: left;
  // bottom: 2.8em;
  // padding-left: 1em;
  // font-weight: 500;
}

.play-pause-button {
  // border: 1px solid red;
  // width: 10em;
  // height: 2em;
  // background-color: red;
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
/*
  &:hover {
    border-color: transparent transparent transparent #ff0000;
  }
}
*/

/*
@media only screen and (min-width: 768px) {
  .playPauseButton {
    top: -20em;
  }
  .content {
    top: -7em;
  }
  .video-overlay {
    font-size: 2em;
    letter-spacing: .1em;
    padding: .4em;
    width: 100%;
  }
}
*/

@media screen and (-webkit-min-device-pixel-ratio: 1.4) and (min-width: 250px) { // fly iq4415 iphone5Se
  .video-overlay {
    // color: red;
    font-size: .65em;
    bottom: 2em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 1.88) and (min-width: 360px) { // nokia5
  .video-overlay {
    // color: pink;
    font-size: .75em;
    bottom: 2.7em;
    // padding-left: .75em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) {
  .video-overlay {
    // color: orange;
    font-size: 1.55em;
    bottom: 2.2em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px) { // iPadPro
  .video-overlay {
    // color: lime;
    font-size: 2em;
  }
  .play-pause-button {
    left: 3em;
    top: 7em;
  }
}
@media screen and (max-resolution: 96dpi) and (min-width: 1024px) { // desktop
  .video-overlay {
    // color: powderblue;
    // font-size: 2em;
    bottom: 2.3em;
  }
  .play-pause-button {
    left: 3em;
    top: 7em;
  }
}

/*
@media (max-resolution: 360dpi) {
  .video-overlay {
  // font-size: 1em;
  // letter-spacing: .1em;
  // padding: .4em;
  // z-index: 1;
  //border: 1px solid lime;
  position: relative;
  color: red;
  font-size: .6em;
  text-align: left;
  bottom: 2.8em;
  padding-left: 1em;
  font-weight: 500;
  }
}

@media (max-resolution: 181dpi) { // nokia5
  color: green;
}
*/
</style>
