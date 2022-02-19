<template>
  <div class="compressed-container">
    <div class="container_content">
      <img
        class="container_content_cover"
        :src="getImgUrl(images.cover.path)"
        alt="cover"
      />
    </div>
    <div class="container_content container_content-outer">
      <div class="container_content-inner">
        <span class="container_content-header"
          >LISTEN TO ALL THE COMPRESSED.FM EPISODES</span
        >
        <div
          class="container_content_title"
          v-for="(title, index) in episodes"
          :key="title.id + title.name"
        >
          <unchecked
            class="container_content_title_img"
            v-if="!title.ticked"
            @click="tickCheckbox($event, title)"
          />
          <checked
            class="container_content_title_img"
            v-else
            @click="tickCheckbox($event, title)"
          />
          <span
            class="container_content_title_name"
            v-bind:class="{ checked: title.ticked }"
            >{{ index + 1 }} || {{ title.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checked from "../../assets/checkbox--checked.svg";
import unchecked from "../../assets/checkbox--unchecked.svg";
export default {
  name: "CompressedFM",
  components: { checked, unchecked },
  data() {
    return {
      images: {
        cover: {
          id: 1,
          path: "podcast-cover.png",
        },
      },
      episodes: [
        {
          id: 1,
          name: "James Q Quick's Origin Story",
          ticked: false,
        },
        {
          id: 2,
          name: "Amy Dutton's Origin Story",
          ticked: false,
        },
        {
          id: 3,
          name: "The Tech Behind Compressed.fm",
          ticked: false,
        },
        {
          id: 4,
          name: "Starting a New Development Project",
          ticked: false,
        },
        {
          id: 5,
          name: "How Do you Start a New Design Project?",
          ticked: false,
        },
        {
          id: 6,
          name: "Freelancing (Part 1)",
          ticked: false,
        },
        {
          id: 7,
          name: "Freelancing (Part 2)",
          ticked: false,
        },
        {
          id: 8,
          name: "The Tech Behind jamesqquick.com",
          ticked: false,
        },
        {
          id: 9,
          name: "Teh Tech Behind SelfTeach.me",
          ticked: false,
        },
        {
          id: 10,
          name: "Design Fundamentals (Part 1)",
          ticked: false,
        },
        {
          id: 11,
          name: "Design Fundamentals (Part 2)",
          ticked: false,
        },
        {
          id: 12,
          name: "Productivity: Tools, Tips, and Workflows",
          ticked: false,
        },
        {
          id: 13,
          name: "The Future of Code with No Code",
          ticked: false,
        },
        {
          id: 14,
          name: "Building the Perfect Desk Setup",
          ticked: false,
        },
        {
          id: 15,
          name: "Everything You Need to Know to Get Started in SvelteKit",
          ticked: false,
        },
        {
          id: 16,
          name: "Live Streaming for Beginners",
          ticked: false,
        },
        {
          id: 17,
          name: "All Things Automated",
          ticked: false,
        },
        {
          id: 18,
          name: "Amy Gives James a Design Consult",
          ticked: false,
        },
        {
          id: 19,
          name: "Figma for Everyone",
          ticked: false,
        },
        {
          id: 20,
          name: "Learning and Building in Public",
          ticked: false,
        },
        {
          id: 21,
          name: "Getting Your First Dev Job",
          ticked: false,
        },
        {
          id: 22,
          name: "Hiring a Designer or Getting Your First UI / UX Job",
          ticked: false,
        },
        {
          id: 23,
          name: "IRL Freelance Proposal",
          ticked: false,
        },
        {
          id: 24,
          name: "Getting Started on YouTube",
          ticked: false,
        },
        {
          id: 25,
          name: "Starting your own Podcast",
          ticked: false,
        },
        {
          id: 26,
          name: "How Blogging Can Change Your Career",
          ticked: false,
        },
        {
          id: 27,
          name: "Talking to Some of Our Favorite Content Creators",
          ticked: false,
        },
        {
          id: 28,
          name: "Our Favorite Things: A Crossover Episode with Web Dev Weekly",
          ticked: false,
        },
        {
          id: 29,
          name: "Freelancing IRL: Unveiling a Site Redesign",
          ticked: false,
        },
        {
          id: 30,
          name: "Wordpress in 2021",
          ticked: false,
        },
        {
          id: 31,
          name: "Struggle Bus",
          ticked: false,
        },
        {
          id: 32,
          name: "Getting Started with TypeScript",
          ticked: false,
        },
        {
          id: 33,
          name: "Small Design Tweaks that Make All the Difference",
          ticked: false,
        },
        {
          id: 34,
          name: "Getting git",
          ticked: false,
        },
        {
          id: 35,
          name: "Crossover Episode with Purrfect Dev",
          ticked: false,
        },
        {
          id: 36,
          name: "SVGs FTW",
          ticked: false,
        },
        {
          id: 37,
          name: "Building a Course",
          ticked: false,
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png|svg$/);
      return assets("./" + pic);
    },
    tickCheckbox(event, title) {
      if (!event.shiftKey) {
        title.ticked = !title.ticked;
        return;
      }
      this.checkAllBetween(title);
    },
    checkAllBetween(title) {
      let indexClicked = title.id - 1;
      let indexGoal = this.searchTicked(this.episodes, indexClicked);
      if (!indexGoal) {
        indexClicked = title.id;
        indexGoal = this.searchTicked(
          this.episodes.slice().reverse(),
          38 - title.id
        );
      }
      if (indexGoal) {
        const start = Math.min(indexClicked, indexGoal.id);
        const end = Math.max(indexClicked, indexGoal.id);
        for (let i = start; i < end; i++) {
          this.episodes[i].ticked = true;
        }
      }
    },
    searchTicked(episodes, start) {
      return episodes.slice(start).find((element) => element.ticked);
    },
  },
};
</script>

<style scoped>
.compressed-container {
  display: flex;
  flex-direction: row;
  height: 420px;
  border: 1px solid #d3d3d3;
  margin: 20px;
  border-radius: 0 20px 20px 0;
  background-color: white;
}
.container_content {
  position: relative;
  width: 420px;
  height: auto;
}
.container_content_cover {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 435px;
  height: 435px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.container_content-outer {
  padding: 20px 40px;
  margin: 20px;
  overflow-y: auto;
}
.container_content-inner {
  display: flex;
  flex-direction: column;
}
.container_content-header {
  margin: 30px 0;
  font-size: 12px;
  font-weight: 600;
  color: #a7a7a7;
  letter-spacing: 2px;
}
.container_content_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
}
.container_content_title_name {
  font-size: 16px;
  padding: 0 0 0 20px;
  color: rgb(88, 88, 88);
}
.container_content_title_img {
  overflow: visible;
  cursor: pointer;
}
.checked {
  color: #c9cdd1;
  text-decoration: line-through;
}

@media screen and (max-width: 900px) {
  .compressed-container {
    height: 370px;
  }
  .container_content {
    width: 350px;
  }
  .container_content_cover {
    width: 390px;
    height: 390px;
  }
}
@media screen and (max-width: 750px) {
  .compressed-container {
    height: 700px;
  }
  .container_content {
    width: 300px;
    height: 300px;
  }
  .compressed-container {
    flex-direction: column;
  }
  .container_content_cover {
    width: 360px;
    height: 360px;
    top: 0;
  }
  .container_content-outer {
    margin-top: 85px;
  }
}

@media screen and (max-width: 400px) {
  .compressed-container {
    height: 550px;
  }
  .container_content-outer {
    padding: 20px;
  }
  .container_content {
    width: 195px;
    height: 195px;
  }
  .container_content_cover {
    width: 260px;
    height: 260px;
  }
}
</style>
