<template>
  <div class="table-contents-container">
    <div class="table-contents">
      <span class="table-contents_title">TABLE OF CONTENTS</span>
      <span
        class="table-contents_titles"
        v-for="pData in paragraphs"
        :key="pData.title + pData.id"
        :position="pData.id + 'pos'"
        @click="scrollToParagraph($event, pData.id)"
        >{{ pData.title }}</span
      >
    </div>
    <div class="content-container" @scroll="trackTitle($event)">
      <h1 class="content-container_main-title">
        Framer is still alive and well… and it’s a game-changer
      </h1>
      <span class="content-container_sub-title"
        >A love letter to my prototyping tool of choice.</span
      >
      <p>
        Earlier, this week, this post came across my feed: “Framer is Dead.”
        Impossible. I’ve been using it non-stop for the past month. Sadly, this
        post has gotten some traction, and I’ve seen it pop-up on several
        round-ups. Two weeks ago, Framer launched a new home page design and
        Smart Components, with Variants coming out of Beta. Looking at new
        features alone, it’s very much alive and well. The leading case this
        post made was that Framer was at fault for moving toward React. In doing
        so, it’s alienating designers that aren’t code-savvy. Or, on the
        opposite end of the spectrum, over-empowering UX engineers who
        over-value the code. Then, as if to drive the nail in the coffin:
        “Framer used to be about playing around. Now it’s about building
        things.” — Frankly, I’m not sure why “playing around” and “building
        things” have to be mutually exclusive. Are we talking about the same
        product?
      </p>
      <div
        class="paragraphs-container"
        v-for="pData in paragraphs"
        :key="pData.id + pData.title"
        :position="pData.id"
      >
        <h2>{{ pData.title }}</h2>
        <p>
          {{ pData.paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableContents",
  data() {
    return {
      paragraphs: [
        {
          id: 1,
          title: "My Story",
          paragraph: `Framer, we were using Invision for prototyping. At best, this experience
      felt clunky. I was taking static images, creating hot spots, and linking
      them together. If anything, it demonstrated how screens were linked
      together. But, during pitches, there was still a considerable amount of
      hand waving and, “Imagine this. The user will scroll down, and this will
      happen…” While this worked for some clients, others still had trouble
      making that leap, however big or small. There was even a fair amount of
      redesigning once developers got involved. “Oh, I didn’t realize that’s
      what you meant.”`,
        },
        {
          id: 2,
          title: "Priming",
          paragraph: `In November (2020), I started working with a new client, designing a
      native application. About the same time, I was listening to the Design
      Details Podcast, Episode 377: Future-Proof Designer. One of the skills
      they talked about was prototyping. The best designers at prototyping are
      the best communicators. The best designers at prototyping are the best
      communicators. Noted. At that moment, I knew that the most effective way
      to get stakeholders on board was to create a prototype true to the app’s
      experience. That’s the key: an app is an experience. When you’re designing
      a native application, you’re pushing pixels on a laptop or a desktop. The
      point is: it’s a different medium; it’s a different device than how the
      end-user will experience the final product. I wanted to create a prototype
      that felt real. They could pull it up on their mobile device and feel like
      they were using an application — no smoke and mirrors. No handwaving. No
      magic.`,
        },
        {
          id: 3,
          title: "Enter Framer",
          paragraph: `I’ve known about Framer for years but never explored it as an option. This
      project seemed like the perfect opportunity and the perfect fit. I’ve been
      blown away.`,
        },
        {
          id: 4,
          title: "For the no-coders. Framer is for you.",
          paragraph: `In Framer, you can code custom React components(!!) and use them alongside
      designed components. This is mind-blowing to me. I can play with
      interactions while building something real. The sky truly is the limit.`,
        },
        {
          id: 5,
          title: "For the code-saavy. Framer is for you.",
          paragraph: `In Framer, you can code custom React components(!!) and use them alongside
      designed components. This is mind-blowing to me. I can play with
      interactions while building something real. The sky truly is the limit.`,
        },
        {
          id: 6,
          title: "My Sweet Spot: How Our Team is Using Framer",
          paragraph: `I recognize that my skill set is different. I design and write code. Not
      all designers code, and not all developers design — and that’s perfectly
      fine. I’ve found Framer blends both worlds in a way that I’ve never seen
      in an application.`,
        },
        {
          id: 7,
          title: "Figma",
          paragraph: `I’ve done all the initial design work within Figma. I have more experience
      there, and it’s allowed me to create multiple drafts and experiment in
      design without muddying my prototype in Framer. Pages list in Figma
      highlighting “Prep for Prototype” Once the design is cleaned up, I have a
      page in Figma that I use specifically for a hand-off. This keeps unwanted
      elements out of Framer.`,
        },
      ],
      highligthed: 1,
      lastPosition: 0,
    };
  },
  computed: {
    paragPositions() {
      return Array.from(document.querySelectorAll(".paragraphs-container")).map(
        (paragraph) => {
          return Math.round(paragraph.offsetTop + paragraph.offsetHeight);
        }
      );
    },
  },
  methods: {
    scrollToParagraph(event, position) {
      this.highlightTitle(event.target);
      document.querySelector(`[position="${position}"]`).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    trackTitle(event) {
      const scrollPosition = event.target.scrollTop + event.target.offsetHeight;
      let titleToHighlight = "";
      if (this.lastPosition < scrollPosition) {
        if (
          this.paragPositions[this.highligthed - 1] < scrollPosition &&
          this.paragPositions[this.highligthed - 1] <
            this.paragPositions[this.paragPositions.length - 1]
        ) {
          this.highligthed++;
        }
      } else {
        if (this.paragPositions[this.highligthed - 2] > scrollPosition) {
          this.highligthed--;
        }
      }
      titleToHighlight = document.querySelector(
        `[position="${this.highligthed}pos"]`
      );
      this.highlightTitle(titleToHighlight);
      this.lastPosition = scrollPosition;
    },
    highlightTitle(element) {
      const highlighted = document.querySelector(".highlighted-title");
      if (highlighted) {
        highlighted.classList.remove("highlighted-title");
      }
      element.classList.add("highlighted-title");
    },
  },
  mounted() {
    document
      .querySelectorAll(".table-contents_titles")[0]
      .classList.add("highlighted-title");
  },
};
</script>

<style scoped>
.table-contents-container {
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 700px;
  padding: 30px;
  border-radius: 15px;
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.table-contents {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  flex-shrink: 0;
  padding: 100px 30px;
  color: #505050;
}
.table-contents_title {
  font-weight: bold;
  margin-bottom: 10px;
}
.table-contents_titles {
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
}
.content-container {
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 0 30px;
  overflow-y: scroll;
  color: #505050;
}
.content-container_main-title {
  font-size: 40px;
  color: black;
}
.content-container_sub-title {
  font-size: 20px;
  color: rgba(117, 117, 117, 1);
}
.highlighted-title {
  color: #ff00c7;
  padding-left: 10px;
  border-left: 2px solid #ff00c7;
}

@media screen and (max-width: 700px) {
  .table-contents-container {
    max-width: 90%;
  }
  .content-container_main-title {
    font-size: 30px;
  }
}
</style>
