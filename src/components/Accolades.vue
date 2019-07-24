<template>
  <div class="text-xs-center">
    <v-container>
        <v-layout row wrap justify-center class="text-xs-center mb-4">
          <v-flex style="width: 300px" v-for="(card, i) in cards" :key="card.title" class="mx-3 my-2">
            <v-card v-if="i >= (page-1)*items_per_page && i < page*items_per_page">
              <v-img :src="require('../assets/' + card.image + '.jpg')" alt="" contain>
              </v-img>
              <v-card-text>
                <p align="justify">
                <v-icon
                  small
                  left
                  color="primary"
                  >
                  info
                </v-icon>
                {{ card.content }}
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row class="text-xs-center">
          <v-flex>
            <v-pagination
              circle
              :length="total_items / items_per_page"
              v-model="page"
              @next= "onNext"
              @previous= "onPrev"
              @input="onInput">
            </v-pagination>
          </v-flex>
        </v-layout>
      </v-container>
  </div>

</template>

<script>
  export default{
    data () {
      return {
        total_items: 18,
        items_per_page: 6,
        page: 1,
        cards: [
          {
            title: "Accolade 1",
            image: "accolade_1",
            content: "Awarded with the Amita Priza on the Founder's day of MIT for securing the highest mark in the sbject Computer Practices.",
          },
          {
            title: "Accolade 2",
            image: "accolade_2",
            content: "Awarded with a gold medal by the university for securing 10 on 10 in the both the semesters of my first year.",
          },
          {
            title: "Accolade 3",
            image: "accolade_3",
            content: "Secured 1st place for a paper presented in the name 'World's first artificially intelligent personal trainer' in the symposium Captcha'16."
          },
          {
            title: "Accolade 4",
            image: "accolade_4",
            content: "Participated in the Coffee with Java event held as a part of Samhita'17 and reached the finals."
          },
          {
            title: "Accolade 5",
            image: "accolade_5",
            content: "Secured 2nd place in the final round of Sequel Scholars held as an event in the Samhita'17."
          },
          {
            title: "Accolade 6",
            image: "accolade_6",
            content: "Finished at the 2nd place in the final round of the Net Warriors organized in the Carte Blanche'17."
          },
          {
            title: "Accolade 7",
            image: "accolade_7",
            content: "Reached 2nd place in the finals of the Work the Network event held in the ElectroFocus'17."
          },
          {
            title: "Accolade 8",
            image: "accolade_8",
            content: "Secured winning position in the hackathon held in KL University organized by UC Berkeley."
          },
          {
            title: "Accolade 9",
            image: "accolade_9",
            content: "Awarded with a gold medal for securing 10 on 10 in the both the semesters of my second year."
          },
          {
            title: "Accolade 10",
            image: "accolade_10",
            content: "Awarded with Sri Kamakoti Scholarship for having a meritorious second year."
          },
          {
            title: "Accolade 11",
            image: "accolade_11",
            content: "Awarded with MIT Silver Jubilee Scholarship for having a meritorious second year."
          },
          {
            title: "Accolade 12",
            image: "accolade_12",
            content: "Awarded with Thiru. C. Rajam Ramasamy Memorial Prize for a meritorious second year."
          },
          {
            title: "Accolade 13",
            image: "accolade_13",
            content: "Secured 17th rank over Asia Pacific and Japan Region in the final round of Netriders."
          },
          {
            title: "Accolade 14",
            image: "accolade_14",
            content: "Secured a rank of 2090 in the Pre Elimination round of SnackDown'17 after crossing 2 rounds."
          },
          {
            title: "Accolade 15",
            image: "accolade_15",
            content: "Secured 3rd rank at college level in the preliminary round of CodersBit'18."
          },
          {
            title: "Accolade 16",
            image: "accolade_16",
            content: "Finished at 6th place in my first ever open source contest of around 140 participants."
          },
          {
            title: "Accolade 17",
            image: "accolade_17",
            content: "Awarded with Delhi MITAA Silver Medal for securing the highest marks in all the semesters."
          },
          {
            title: "Accolade 18",
            image: "accolade_18",
            content: "Presented with the Cognizant sponsored award for the Best Outgoing Student of 2019."
          }
        ]
      }
    },
    methods: {
      onNext() { },
      onPrev() { },
      onInput(){ }
    }
  }
</script>

<style>
</style>
