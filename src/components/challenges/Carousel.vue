<template>
  <div class="carousel-container">
    <div class="main-photo">
      <div class="main-photo_arrows" @click="prevPic">
        <chevron class="main-photo_arrows_arrow" />
      </div>
      <div class="main-photo_photo-container">
        <div class="main-photo_photo-container_wrapper">
          <img
            class="main-photo_photo-container_wrapper_photo"
            :src="getImgUrl(photos[photosIndex].image)"
            :alt="photos[photosIndex].caption"
          />
        </div>
        <span class="main-photo_photo-container_caption">{{
          photos[photosIndex].caption
        }}</span>
      </div>
      <div class="main-photo_arrows" @click="nextPic">
        <chevron
          class="main-photo_arrows_arrow main-photo_arrows_arrow-right"
        />
      </div>
    </div>
    <div class="photo-list">
      <div class="photo-list_container" v-for="photo in photos" :key="photo.id">
        <img
          class="photo-list_container_photo"
          :src="getImgUrl(photo.image)"
          :alt="photo.caption"
          @click="togglePic(photo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import chevron from "../../assets/chevron.svg";

export default {
  name: "Carousel",
  components: { chevron },
  data() {
    return {
      photos: [
        {
          id: 1,
          image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
          caption: "Photo by Sherman Yang n Unsplash",
        },
        {
          id: 2,
          image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
          caption: "Photo by Eugene Golovesov on Unsplash",
        },
        {
          id: 3,
          image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
          caption: "Photo by Kellen Riggin on Unsplash",
        },
        {
          id: 4,
          image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
          caption: "Photo by Rafael Hoyos on Unsplash",
        },
        {
          id: 5,
          image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
          caption: "Photo by Sonya Romanovska on Unsplash",
        },
      ],
      photosIndex: 0,
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.jpg$/);
      return assets("./" + pic);
    },
    togglePic(id) {
      this.photosIndex = id - 1;
      this.highlightSelected();
    },
    prevPic() {
      this.photosIndex > 0 ? this.photosIndex-- : this.photosIndex;
      this.highlightSelected();
    },
    nextPic() {
      this.photosIndex < this.photos.length - 1
        ? this.photosIndex++
        : this.photosIndex;
      this.highlightSelected();
    },
    highlightSelected() {
      const photos = document.querySelectorAll(".photo-list_container_photo");
      photos.forEach((photo) => photo.classList.remove("selected-photo"));
      photos[this.photosIndex].classList.add("selected-photo");
      this.scrollPhotoList();
    },
    scrollPhotoList() {
      const list = document.querySelector(".photo-list");
      const selected = document.querySelector(".selected-photo");
      list.scrollLeft = selected.offsetLeft;
    },
  },
  mounted() {
    this.highlightSelected();
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  background-color: white;
  font-family: monospace;
  font-size: 14px;
}
.main-photo_arrows {
  display: flex;
  justify-content: center;
  width: 100px;
  background-color: rgba(255, 0, 199, 0.3);
  cursor: pointer;
}
.main-photo_arrows:hover {
  background-color: rgba(255, 0, 199);
}
.main-photo_arrows_arrow {
  margin-top: 240px;
  fill: white;
}
.main-photo_arrows_arrow-right {
  transform: rotate(180deg);
}
.main-photo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 700px;
}
.main-photo_photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  overflow-y: auto;
}
.main-photo_photo-container_wrapper_photo {
  width: 100%;
  height: auto;
  max-width: 600px;
  object-fit: cover;
}
.main-photo_photo-container_caption {
  margin-bottom: 250px;
}
.photo-list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  position: absolute;
  width: 100%;
  bottom: 0px;
  gap: 30px;
}
.photo-list_container_photo {
  display: block;
  width: 175px;
  height: 175px;
  object-fit: cover;
  cursor: pointer;
}
.selected-photo {
  outline: 10px solid #ff00c7;
  outline-offset: -10px;
}

@media screen and (max-width: 800px) {
  .main-photo {
    width: 400px;
    height: 500px;
  }
  .main-photo_photo-container {
    padding: 0 20px;
  }
  .main-photo_photo-container_wrapper_photo {
    width: 260px;
    height: 260px;
  }
  .main-photo_arrows {
    width: 50px;
  }
}
@media screen and (max-width: 800px) {
  .main-photo {
    width: 375px;
  }
}
@media screen and (max-width: 400px) {
  .carousel-container {
    width: 100%;
  }
  .main-photo {
    width: auto;
  }
}
</style>
