<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-tabs
          v-model="active"
          light
          color="transparent"
          slider-color="indigo"
        >
          <v-tab
            v-for="option in options"
            :key="option"
            ripple
          >
            {{ option }}
          </v-tab>
          <v-tab-item
            v-for="option in options"
            :key="option"
          >
            <v-card class="mb-4" v-for="publication in filter_items(option)" :key="publication.title" flat>
              <v-card-text>
                <v-btn
                  v-if="publication.link != null"
                  color="blue"
                  dark
                  small
                  absolute
                  top
                  right
                  fab
                  :href="publication.link"
                  target="_blank"
                  >
                  <v-icon>link</v-icon>
                </v-btn>
                <strong> {{ publication.title }} </strong>
                <v-chip label color="green" text-color="white">
                  <v-icon left>check_circle</v-icon>{{ publication.status }}
                </v-chip>
                <br>
                <i> {{ publication.name }}. {{ publication.date }}.</i><br>
                <v-chip v-for="(author, index) in publication.authors" :key="index" outline color="grey" disabled>
                  <v-avatar class="grey darken-2">{{ index + 1 }}</v-avatar>
                  {{ author }}
                </v-chip>
                <p align="justify">
                  <strong>Abstract - </strong>{{ publication.abstract }}
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        options: ['Journal', 'Conference'],
        pub_items: [
          {
             'title': 'Role-based policy to maintain privacy of patient health records in cloud',
             'type': 'Journal',
             'date': 'Jun 6, 2019',
             'name': 'The Journal of Supercomputing, Springer',
             'authors': ['Akshay Tembhare', 'S. Sibi Chakkaravarthy', 'D. Sangeetha', 'V. Vaidehi', 'M. Venkata Rathnam'],
             'abstract': 'The proposed MediTrust combines two schemes namely RBAC and attribute-based encryption (ABE) and works on semantic database, ensuring the accessibility of patient data for different access controls. The patient data are encrypted at the provider side before outsourcing it to the cloud server and then it is decrypted again at the user end after being downloaded from the cloud server. The general information of the patient collected as PHR is stored in a separate cloud server, and the medical reports are stored separately in yet another cloud server. A second-step security control is provided using CAPTCHA which is mainly used as a security check to ensure that only human users can log in to the MediTrust. A third-step security control is also provided in which one key is shared to user’s registered mobile number and another key is shared to user’s e-mail id. In MediTrust, combination of these two keys is required to decrypt the PHR. Further, ABE policies and access control security mechanisms for privacy preservation have been validated on PHR using Amazon AWS EC2 CA. Performance evaluation results show that the proposed MediTrust is better than existing work in terms of time complexity and computational overhead.',
             'status': 'published',
             'link': 'https://link.springer.com/article/10.1007/s11227-019-02887-6'
          },
          {
              'title': 'Futuristic cyber-attacks',
              'type': 'Journal',
              'date': 'Nov 15, 2018',
              'name': 'International Journal of Knowledge-based and Intelligent Engineering Systems, IOS Press',
              'authors': ['Sibi Chakkaravarthy, S', 'Sangeetha, D', 'Venkata Rathnam, M', 'Srinithi, K', 'Vaidehi, V.'],
              'abstract': ' In the present day, human beings are living in a world which is networked together, ranging from online banking to connected physical infrastructures. The network security that was once optional has now become an exigency. Cyber-attacks have now emerged as one of the prime concerns globally. A cyber-attack is an intentional exploitation of networks, businesses and computer systems. Cyber-attackers make use of their malicious code and other software components to alter or steal information, logic or program data of financial organizations, technology-based companies or individuals leading to cybercrimes such as identity and information theft. Cyber-attacks are ubiquitous in the sense that they could be launched by anyone, at any place and at any time. Cyber breaches are spreading like wild fire globally. Existing security systems can only identify the attacks that are known. This paper aims to expose various cyber-attacks and their present-day impact. This paper also presents some mitigation techniques to stay safe against the cyber-attacks.',
              'status': 'published',
              'link': 'https://content.iospress.com/articles/international-journal-of-knowledge-based-and-intelligent-engineering-systems/kes180384'
          },
          {
              'title': 'Pervasive Health Care driven by IoT and Cloud based Analytics',
              'type': 'Journal',
              'date': 'Sep 2018',
              'name': 'Administrative Staff College of India',
              'authors': ['Sangeetha', 'Venkata Rathnam', 'Sai Chaitanya', 'Iyyanki V Muralikrishna'],
              'abstract': 'Internet of Things (IoT) has been a new paragon of connecting devices and providing services to various applications, e.g., healthcare, smart city, energy, transportation. Modern healthcare systems depend on advanced technologies and compu ting methods, like Internet of Things (IoT) devices and cloud, to collect and analyze personal health data at an unrivaled depth and scale. Patients, doctors, health care providers depend on analytic models to monitor patients,    early-diagnosis of diseases and find personalized medications. The vision of e-health system has been evolving past a decade constituting Health Care Devices connected over cloud. Data Mining and predictive modeling algorithms gather patient’s data from various sensors and propagate timely alert to the caretaker as well as doctor through textual messages. It monitors the patient’s vital parameters remotely and diagnose the diseases at its earliest. This can be implemented in the wearable alert system through Wireless Body Area Network (WBAN). Different wireless interfaces are integrated via a cloud service. This survey aims to expose pervasive health care, existing models and health care systems',
                'status': 'published',
                'link': 'https://asci.org.in/journal/AJoM_47(2)Sep2018splissue1.pdf'
          },
          {
              'title': 'MEDIDRONE – A Predictive Analytics Based Smart Healthcare System',
              'type': 'Conference',
              'date': '9 – 10 September, 2019',
              'name': '6th International Conference on Big data and Cloud Computing Challenges',
              'authors': ['D. Sangeetha', 'Venkata Rathnam M', 'Vignesh R' , 'Jitta Sai Chaitanya', 'V. Vaidehi'],
              'abstract': 'Health Care is one of the constitutional rights of the people in India.  Every resident of this country has the right to the highest attainable standard of health both physically and mentally. But, in India, the number of active Primary Health care Centers (PHCs) is very less in number, especially in the remote regions. Even in places where there are sufficient PHCs, there is a shortage of doctors, staffs, and medicine. Proper medication should be offered to people in rural areas in order to improve their health, thereby reducing the number of deaths. The trending technologies like Internet of Things (IoT), Artificial Intelligence (AI), Predictive Analytics have a key role in improving the medication and in providing preventive medical care. Therefore, exploiting these technologies to diagnose and monitor patients remotely using Body Area Network (BAN) devices and smartphones, the MEDIDRONE is proposed. The MEDIDRONE has been designed to provide on-time emergency services to the people in rural villages using drones. In addition, predictive models have been trained to provide people with insights from the data collected for their long-term welfare. The MEDIDRONE besides providing health insights and alerts to the people, also addresses the issue of unemployment in rural areas. The MEDIDRONE intends to provide the task of periodically collecting the vital signs of the people in the village as a paid work to medical practitioners, social workers, and unemployed people which could improve the economic status of the country.',
              'status': 'accepted'
          }
        ]
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
      filter_items(option){
        return this.pub_items.filter(pub_item => pub_item.type == option)
      }
    },
  }
</script>

<style>
</style>
