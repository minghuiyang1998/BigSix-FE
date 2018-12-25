<template>
  <div>
    <h2>我的联赛</h2>
    <LeagueList :leagues="leagues" />
  </div>
</template>

<script>
import { LeagueList } from '@/components/League';

export default {
  components: {
    LeagueList
  },
  data() {
    return {
      leagues: [
        {
          name: 'NBA',
          intro: "The National Basketball Association is a men's professional basketball league in North America; composed of 30 teams. It is widely considered to be the premier men's professional basketball league in the world.",
          avatar_url: "https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png"
        },
        {
          name: "La Liga",
          intro: "The Campeonato Nacional de Liga de Primera División, commonly known as La Liga, is the men's top professional football division of the Spanish football league system.",
          avatar_url: "https://files.laliga.es/seccion_logos/laliga-v-300x300_2018.jpg"
        }
      ]
    }
  }
}
</script>
