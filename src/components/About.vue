<template>
  <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex key="a" style="width: 350px;">
          <v-card dark color="transparent" hover>
            <v-img :src="require('../assets/about.jpg')" height="400px" alt=""></v-img>
          </v-card>
          <v-card v-for="(item,key) in p_info" :key="key">
            <v-avatar>
              <v-icon>{{ key }}</v-icon>
            </v-avatar>
            {{ item }}
          </v-card>
          <v-card>
            <v-chip
              v-for="interest in interests"
              outline color="indigo"
              :key="interest"
              >
              <v-icon left>label</v-icon>{{ interest }}
            </v-chip>
          </v-card>
        </v-flex>
        <v-flex key="b" style="width: 650px;">
          <v-flex key="c">
            <v-card dark color="primary">
              <v-card-text>Education</v-card-text>
            </v-card>
            <v-card light hover>
              <v-card-text class="py-0">
                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="entry in education"
                    :color="colors[Math.floor(Math.random() * colors.length)]"
                    :key="entry.degree"
                    small
                  >
                    <v-layout pt-1>
                      <v-flex xs2>
                        <strong>{{ entry.duration }}</strong>
                      </v-flex>
                      <v-flex>
                        <strong>{{ entry.degree }}</strong>
                        <div class="caption">{{ entry.from }}</div>
                        <div class="caption"><i>{{ entry.add_info }}</i></div>
                      </v-flex>
                    </v-layout>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
          </v-card>
          </v-flex>
          <v-flex key="d">
            <v-card dark color="primary">
              <v-card-text>Technical Expertise</v-card-text>
            </v-card>
            <v-card light hover>
              <v-card-text>
                <v-chip
                  v-for="skill in skills"
                  :color="colors[Math.floor(Math.random() * colors.length)]"
                  :key="skill"
                  >
                  {{ skill }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex key="e">
            <v-card dark color="primary">
              <v-card-text>CP and Blogging Profile</v-card-text>
            </v-card>
            <v-card light hover>
              <v-card-text>
                <v-btn
                  v-for="item in cp_info"
                  :key="item.name"
                  :href="item.href"
                  target="_blank"
                  flat color="black"
                  class="text-none">
                  <v-badge color="primary" left>
                    <template v-if="item.p_count != 0" v-slot:badge>
                      <span>{{ item.p_count }}</span>
                    </template>
                    <span>{{ item.name }}</span>
                  </v-badge>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      colors:[
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'blue-grey',
      'grey'
      ],
      interests:[
        'Data science', 'Programming', 'Open source contribution', 'Organic farming', 'Cricket', 'Badminton'
      ],
      skills:[
        'C', 'C++', 'Java', 'Python', 'NodeJS', 'VueJS', 'AngularJS', 'MySQL','Apache HBase','Struts','Spring','Spring Boot','Hadoop','Flask','Keras','Tensorflow','PyTorch','PySyft','DyNet','Scikit-learn','OpenCV','Git'
      ],
      p_info: {
        work: 'Technology Analyst',
        place: 'Citicorp Services India Pvt. Ltd., Chennai'
      },
      education: [
        {'duration': '2015 - 19', 'degree': 'Bachelor of Technology (Information Technology)', 'from': 'Anna University, MIT Campus, Chennai', 'add_info': 'Secured an aggregate of 9.8/10.'},
        {'duration': '2014 - 15', 'degree': 'Higher Secondary Education', 'from': 'SCS MHSS, Chennai', 'add_info': 'Secured an aggregate of 98.2%.'},
        {'duration': '2013 - 14', 'degree': 'Secondary School Education', 'from': 'SCS MHSS, Chennai', 'add_info': 'Secured an aggregate of 97.8%.'}
      ],
      cp_info: [
        {name:'Hackerrank', href:'https://www.hackerrank.com/Venkata_Rathnam',p_count:0},
        {name:'Hackerearth', href:'https://www.hackerearth.com/@venkatarathnam',p_count:148},
        {name:'InterviewBit', href:'https://www.interviewbit.com/profile/venkat28',p_count:130},
        {name:'CodeChef', href:'https://www.codechef.com/users/venkat_28',p_count:111},
        {name:'Spoj', href:'https://www.spoj.com/users/mvenkat_97/',p_count:71},
        {name:'UVA Online Judge', href:'https://uhunt.onlinejudge.org/id/1003835',p_count:44},
        {name:'Codeforces', href:'http://codeforces.com/profile/Venkata_Rathnam_M',p_count:14},
        {name:'ACM ICPC', href:'https://icpc.baylor.edu/ICPCID/43I8GHBCXNIZ',p_count:3},
        {name:'Opengenus IQ', href:'https://iq.opengenus.org/author/venkat/',p_count:1},
        {name:'Kaggle', href:'https://www.kaggle.com/venkatarathnam',p_count:0}
      ]
    })
  }
</script>
<style>
</style>
