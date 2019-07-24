<template>
  <div class="text-xs-center">
    <v-container>
        <v-layout row wrap justify-center class="text-xs-center mb-4">
          <v-flex style="width: 300px" v-for="(card, i) in cards" :key="card.title" class="mx-3 my-2">
            <v-card v-show="card.show" color="#64B5F6" class="white--text font-weight-bold" v-if="i >= (page-1)*items_per_page && i < page*items_per_page">
              <v-img :src="require('../assets/' + card.image + '.jpg')" alt="" contain>
              </v-img>
              <v-divider light></v-divider>
              <v-card-text>
                <p align="justify">
                <v-icon
                  small
                  left
                  color="white"
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
              :length="Math.ceil(total_items / items_per_page)"
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
        total_items: 9,
        items_per_page: 9,
        page: 1,
        cards: [
          {
            title: "CERT 0",
            image: "cert_0",
            content: "One of the recipients for the Track 1 of the OpenClassrooms: Front-End Web Development course through Developer Circles from Facebook.",
            show: true
          },
          {
            title: "CERT 1",
            image: "cert_1",
            content: "One of the recipients of the Secure and Private AI Scholarship Challenge 2019 offered by Udacity in collaboration with Facebook.",
            show: true
          },
          {
            title: "CERT 2",
            image: "cert_2",
            content: "Successfully passed the CISCO Certification exam requirements for CCENT in the first attempt.",
            show: true
          },
          {
            title: "CERT 3",
            image: "cert_3",
            content: "Successfully completed the module 'Introduction to Networks' of the course CCNA Routing and Switching.",
            show: true
          },
          {
            title: "CERT 4",
            image: "cert_4",
            content: "Successfully completed the module 'Routing and Switching Essentials' of the course CCNA Routing and Switching.",
            show: true
          },
          {
            title: "CERT 5",
            image: "cert_5",
            content: "Successfully completed a 4-credit training course on 'Comptia Cloud+' provided by the Cybrary.",
            show: true
          },
          {
            title: "CERT 6",
            image: "cert_6",
            content: "Successfully completed a 15-credit training course on 'Comptia Security+' provided by the Cybrary.",
            show: true
          },
          {
            title: "CERT 7",
            image: "cert_6",
            content: "Successfully completed a 15-credit training course on 'Comptia Security+' provided by the Cybrary.",
            show: false
          },
          {
            title: "CERT 8",
            image: "cert_6",
            content: "Successfully completed a 15-credit training course on 'Comptia Security+' provided by the Cybrary.",
            show: false
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
