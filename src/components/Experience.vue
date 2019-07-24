<template>
  <v-container>
    <v-timeline reverse dense align-top>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        small
        fill-dot
        class="text-right"
      >
        <template>
          <v-avatar>
            <img
              :src="require('../assets/' + item.icon + '.png')"
              :alt="item.title"
            >
          </v-avatar>
          <p><strong>{{ item.company }}</strong></p>
        </template>
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title class="title">{{ item.title }}</v-card-title>
          <v-card-text class="white text--primary">
            <i>{{ item.duration }}</i>
            <v-divider/>
            <v-chip
              v-for="(tech, i) in item.technology"
              :color="colors[Math.floor(Math.random() * colors.length)]"
              :key = "i"
              outline
              disabled>
              {{ tech }}
            </v-chip>
            <v-divider/>
            <ul>
              <li v-for="(desc, i) in item.description" :key="i">
                {{ desc }}
              </li>
            </ul>
            <v-btn
              :color="item.color"
              class="mx-0"
              :href="item.link"
              target="_blank"
              outline
            >
              View Certificate
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      colors:[
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'blue-grey',
      'grey'
      ],
      items: [
        {
          color: 'red lighten-2',
          icon: 'Citi',
          link: 'https://drive.google.com/file/d/1oio7PcJW32dm-qBLE9EPK00GgTPv-VHa/view?usp=sharing',
          company: 'Citicorp Services India Private Limited',
          title: 'Technology Summer Analyst',
          duration: 'May 16 2018 - July 13 2018',
          technology: ['Java', 'Spring', 'Spring Boot', 'Kafka', 'ELK Stack'],
          description: ['Developed an Analytics and Reactive service to monitor and perform analytical operations on all the services running in the production.',
                        'Spring Boot was used to create an application which listens to different events that can be triggered by the any of the services.',
                        'Kafka Streams were used to stream the event messages from the source to the persisting location for further analysis.',
                        'ElasticSearch was used to persist the incoming event information and the Kibana dashboards were created to dynamically perform analysis on the services.']
        },
        {
          color: 'purple darken-1',
          icon: 'KioTek',
          link: 'https://drive.google.com/file/d/1X9kOO1OpC3GczBlIBtoXXf_Y92fgcLg8/view?usp=sharing',
          company: 'KioTek Digi Networks Private Limited',
          title: 'Engineering Intern',
          duration: 'May 6 2017 - March 31 2018',
          technology: ['HTML', 'CSS', 'Javascript', 'Liquid', 'Shopify'],
          description: ['Worked in a team of aspiring engineers to design and develop a new age e-commerce store for the automation products.',
                        'A boilerplate template was chosen from the Shopify and the template was modified to facilitate the required functionalities using the Liquid template language, HTML, and CSS.',
                       ]
        },
        {
          color: 'green lighten-1',
          icon: 'Hakunamatata',
          link: 'https://drive.google.com/file/d/1koRNQLPwmqr1nW3WtDO9Fzarx4gByu7p/view?usp=sharing',
          company: 'Hakuna Matata Solutions Private Limited',
          title: 'Engineering Intern',
          duration: 'May 4 2017 - June 16 2017',
          technology: ['Java', 'Android', 'Unity3D'],
          description: ['Developed a timesheet automation software which performs different analytical operations automatically to gain insights from the timesheets filled by the employees.',
                        'Developed a dedicated converter which converts an excel file into its corresponding JSON file and vice versa based on a given template.',
                        'Gained knowledge on Unity3D, and Enterprise Android apps.'
                       ]
        }
      ]
    })
  }
</script>
<style>
</style>
