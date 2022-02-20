<template>
  <div class="youtube-container">
    <logo class="logo" />
    <div class="content-container">
      <div class="player-container">
        <iframe
          class="youtube-iframe"
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + playingVideo.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="player-container_title-container">
          <h2 class="player-container_title-container_title">
            {{
              playingVideo.data ? playingVideo.data.items[0].snippet.title : ""
            }}
          </h2>
          <chevron
            class="chevron"
            @click="descriptionOpen = !descriptionOpen"
          />
        </div>
        <div
          class="player-container_description-container"
          v-bind:class="{ 'show-description': descriptionOpen }"
        >
          <p>
            {{
              playingVideo.data
                ? playingVideo.data.items[0].snippet.description
                : ""
            }}
          </p>
        </div>
      </div>
      <div class="gallery-container">
        <div
          class="gallery-container_iframe-container"
          v-for="video in videos"
          :key="video.id + video.url"
          @click="playVideo(video)"
        >
          <img
            class="gallery-container_iframe-container_img"
            :src="
              video.data
                ? video.data.items[0].snippet.thumbnails.default.url
                : ''
            "
            :alt="video.data ? video.data.items[0].snippet.title : ''"
          />
          <a class="gallery-container_iframe-container_title">{{
            video.data ? video.data.items[0].snippet.title : ""
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/youtube-logo.svg";
import chevron from "../../assets/chevron.svg";

export default {
  name: "Youtube",
  components: { logo, chevron },
  data() {
    return {
      key: "AIzaSyBGG-cTjDkqI6nll21MAnVAnwiTRKI6Kqs",
      videoId: "4xcU6YYw0KI",
      videoIds: [
        "4xcU6YYw0KI",
        "tnFw8dFMRHo",
        "zUJaulF6KA8",
        "WQtLE656gVM",
        "ILbt5fqHUPg",
        "mYcx4_tJx9w",
        "MYHVJqzzeYU",
        "Q0__YRd8ivw",
        "GNyrYiljeIw",
        "rf8GjhXvOjU",
        "1Ogjp1hzmZU",
        "RhJ0q7X3DLM",
      ],
      videos: [],
      playingVideo: {},
      descriptionOpen: false,
    };
  },
  methods: {
    async apiCall() {
      try {
        this.videoIds.forEach(async (video, index) => {
          let url =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            video +
            "&key=" +
            this.key;
          const response = await fetch(url);
          let data = await response.json();
          const videoData = {
            id: index,
            url: video,
            data: data,
          };
          this.videos.push(videoData);
          if (index === 0) {
            this.playingVideo = videoData;
          }
        });
      } catch (error) {
        console.log("Can't get data from API: " + error);
      }
    },
    playVideo(video) {
      this.playingVideo = video;
    },
  },
  mounted() {
    this.apiCall();
  },
};
</script>

<style scoped>
.youtube-container {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 25px;
  background-color: #212121;
}
.content-container {
  display: flex;
  flex-direction: row;
  max-height: min-content;
}
.logo {
  max-width: 200px;
  margin-bottom: 20px;
}
.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.youtube-iframe {
  width: 100%;
}
.player-container_title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.player-container_title-container_title {
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.chevron {
  width: 20px;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 3px;
  fill: white;
  transform: rotate(-90deg);
  cursor: pointer;
}
.chevron:hover {
  opacity: 0.7;
}
.gallery-container {
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 0 30px;
  overflow-y: scroll;
}
.gallery-container_iframe-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  cursor: pointer;
}
.gallery-container_iframe-container:hover {
  opacity: 0.7;
}
.gallery-container_iframe-container_img {
  display: block;
  width: 100%;
  max-width: 120px;
  height: auto;
}
.gallery-container_iframe-container_title {
  max-width: 400px;
  padding: 5px 0 0 20px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
}
.player-container_description-container {
  display: none;
  max-height: 100px;
  overflow-y: scroll;
  color: white;
}
.show-description {
  display: block;
}

@media screen and (max-width: 1050px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .player-container_description-container {
    margin-bottom: 30px;
  }
  .gallery-container {
    width: 100%;
    padding: 0;
  }
}
@media screen and (max-width: 470px) {
  .youtube-container {
    width: 100%;
    padding: 20px;
  }
  .gallery-container_iframe-container_title {
    max-width: 200px;
  }
}
</style>
