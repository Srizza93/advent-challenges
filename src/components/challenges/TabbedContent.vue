<template>
  <div class="tabbed-content-container">
    <div class="menu-container">
      <logo />
      <ul class="menu-container_episodes">
        <li
          class="menu-container_episodes_episode"
          v-for="episode in episodes"
          :key="episode.id + episode.title"
          :episode-num="episode.id"
          @click="changeEpisode(episode)"
        >
          <span class="menu-container_episodes_episode_number"
            >EPISODE {{ episode.id }}</span
          >
          <span class="menu-container_episodes_episode_title">{{
            episode.title
          }}</span>
        </li>
      </ul>

      <div class="menu-container_track-container">
        <div class="menu-container_track-container_outer">
          <div class="menu-container_track-container_inner"></div>
        </div>
      </div>
    </div>
    <div class="episode-container">
      <img
        class="episode-container_cover"
        :src="getImgUrl(currentEpisode.cover)"
        :alt="currentEpisode.title"
      />
      <div class="episode-container_info">
        <h2 class="episode-container_info_title">{{ currentEpisode.title }}</h2>
        <p class="episode-container_info_paragraph">
          {{ currentEpisode.description }}
        </p>
        <a class="episode-container_info_link" :href="currentEpisode.link"
          >MORE &#8594;</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/logo.svg";

export default {
  name: "TabbedContent",
  components: { logo },
  data() {
    return {
      currentEpisode: "",
      episodes: [
        {
          id: 39,
          title: "Tech to Look Forward to in 2022",
          description:
            "In this episode, Amy and James discuss the future of web development: Astro, Veet, Supabase, SvelteKit, Redwood.js, Blitz.js, GitHub Co-Pilot, Web Assembly, Blockchain, w3, no-code, and low-code.",
          cover: "cover__episode-39.png",
          link: "https://www.compressed.fm/episode/39",
        },
        {
          id: 38,
          title: "2021 Gift Guide",
          description:
            "This episode is full of picks! Amy and James talk about all of their favorite things, just in time for the holidays.",
          cover: "cover__episode-38.png",
          link: "https://www.compressed.fm/episode/38",
        },
        {
          id: 37,
          title: "Building a Course",
          description:
            "In this episode, Amy and James discuss all the things that go into course creation: why? What? How? Where to Host? Building the right audience.",
          cover: "cover__episode-37.png",
          link: "https://www.compressed.fm/episode/37",
        },
        {
          id: 36,
          title: "SVGs FTW",
          description:
            "In this episode, Amy and James discuss all things SVGs: what is, why and when to reach for it, and seven different ways to get an SVG on the page, and the pros and cons of each method.",
          cover: "cover__episode-36.png",
          link: "https://www.compressed.fm/episode/36",
        },
        {
          id: 35,
          title: "Crossover Episode with Purrfect Dev",
          description:
            "This is a crossover episode with our friends, Alex Patterson and Brittney Postma from the Purrfect.dev podcast. In this episode, we all discuss our jobs. Even though we're all in tech, our day- to - day work looks vastly different.",
          cover: "cover__episode-35.png",
          link: "https://www.compressed.fm/episode/35",
        },
        {
          id: 34,
          title: "Getting git",
          description:
            "In this episode, Amy and James explain the fundamentals of git and their most-used commands. They also explain basic different workflows, if you're working with a team or by yourself.",
          cover: "cover__episode-34.png",
          link: "https://www.compressed.fm/episode/34",
        },
        {
          id: 33,
          title: "Small Design Tweaks that Make All the Difference",
          description:
            "In this episode, Amy and James talk about small design tweaks that you can make that will make a big difference. These recommendations are helpful if you're looking for basic principles and guidelines to take your site to the next level.",
          cover: "cover__episode-33.png",
          link: "https://www.compressed.fm/episode/33",
        },
      ],
    };
  },
  methods: {
    changeEpisode(episode) {
      this.currentEpisode = episode;
      this.moveTracker(episode.id);
    },
    moveTracker(episodeId) {
      const tracker = document.querySelector(".menu-container_track-container");
      const episodeTop = document.querySelector(
        `[episode-num="${episodeId}"]`
      ).offsetTop;
      tracker.style.top = episodeTop + "px";
    },
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./" + pic);
    },
  },
  created() {
    this.currentEpisode = this.episodes[0];
  },
  mounted() {
    this.changeEpisode(this.episodes[0]);
  },
};
</script>

<style scoped>
.tabbed-content-container {
  display: flex;
  flex-direction: row;
  background-color: black;
  padding: 0 50px;
  font-family: "Roboto", sans-serif;
}
.menu-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  padding: 50px 50px 50px 0;
  border-right: 2px solid #fbff00;
}
.menu-container_track-container {
  position: absolute;
  right: -20px;
}
.menu-container_track-container_outer {
  position: relative;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #fbff00;
}
.menu-container_track-container_inner {
  position: absolute;
  top: -20px;
  left: -23px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid black;
}
.menu-container_episodes {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.menu-container_episodes_episode {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  cursor: pointer;
}
.menu-container_episodes_episode:hover {
  opacity: 0.7;
}
.menu-container_episodes_episode_number {
  font-size: 14px;
  color: #fbff00;
  font-weight: 400;
}
.menu-container_episodes_episode_title {
  font-size: 22px;
  color: white;
  font-weight: bold;
}
.episode-container {
  display: flex;
  flex-direction: row;
  width: 500px;
  padding: 100px 0 50px 50px;
  color: white;
}
.episode-container_cover {
  width: 250px;
  height: 250px;
  border: 1px solid white;
}
.episode-container_info {
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  line-height: 25px;
}
.episode-container_info_title {
  margin: 0;
}
.episode-container_info_link {
  color: #fbff00;
  text-decoration: none;
}
.episode-container_info_link:hover {
  opacity: 0.7;
}

@media screen and (max-width: 1050px) {
  .menu-container,
  .episode-container {
    width: 200px;
  }

  .episode-container {
    flex-direction: column;
  }

  .episode-container_cover {
    width: 180px;
    height: 180px;
  }

  .episode-container_info {
    margin: 30px;
  }
}
@media screen and (max-width: 515px) {
  .menu-container,
  .episode-container {
    width: 150px;
  }

  .episode-container {
    flex-direction: column;
  }

  .episode-container_cover {
    width: 130px;
    height: 130px;
  }

  .episode-container_info {
    margin: 15px;
  }
}
</style>
