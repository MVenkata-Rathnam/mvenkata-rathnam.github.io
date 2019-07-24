<template>
  <v-container>
    <v-layout justify-end>
      <v-flex xs4 class="pb-2">
        <v-autocomplete
          v-model="selects"
          hint="Specify tags to filter the projects"
          class="mx-1"
          flat
          label="Tags"
          :items="tags"
          solo-inverted
          persistent-hint
          multiple
          chips
        >
        </v-autocomplete>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card class="mb-4" v-for="project in filter_items(selects, page)" :key="project.title" flat>
          <v-card-text>
            <strong> {{ project.title }} </strong>
            <br>
            <v-icon small>date_range</v-icon><i> {{ project.duration }}.</i><br>
            <v-icon v-if="project.contributors.length == 1" small>person</v-icon>
            <v-icon v-if="project.contributors.length > 1" small>group</v-icon>
            <i v-for="(contributor,i) in project.contributors" :key="contributor">
              {{ contributor }}<i v-if="i < project.contributors.length - 1">,</i>
            </i><br>
            <v-chip v-for="(tag, index) in project.tags"
                    :key="index"
                    light
                    small
                    label
                    :color="colors[Math.floor(Math.random() * colors.length)]" disabled>
              {{ tag }}
            </v-chip>
            <p align="justify">
              <strong>Description - </strong>{{ project.description }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn v-for="(link,name) in project.links" :key="name" :href="link" flat color="indigo">View on {{ name }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row class="text-xs-center">
      <v-flex>
        <v-pagination
          circle
          :length="(total_items + (items_per_page - (total_items % items_per_page))) / items_per_page"
          v-model="page">
        </v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      selects: [],
      page: 1,
      total_items: 4,
      items_per_page: 3,
      colors:[
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'blue-grey',
      'grey'
      ],
      tags: ['deep learning', 'classification', 'pytorch', 'python', 'resnet', 'html', 'css', 'javascript', 'php', 'vgg', 'inception', 'lenet', 'tools', 'java', 'jsp', 'servlet', 'xml', 'gan', 'sentiment analysis', 'keras', 'tensorflow', 'dynet', 'news', 'cnn', 'nlp', 'nltk', 'news', 'hashing', 'opencv', 'image generation', 'hyperspectral imaging', 'numpy', 'genetic algorithm'],
      project_items: [
        {
          "title": "Stanford Car Classification (Hackathon Auto-matic)",
          "duration": "20 Jul 2019 to 22 Jul 2019",
          "tags": ["deep learning", "classification", "pytorch", "python", "resnet"],
          "contributors": ["Venkata Rathnam Muralidharan"],
          "description": "The stanford car classification problem is solved in two stages using resnet-101.  The inital model pre-trained on Imagenet already knows to classify the given image as a car. Each car manufacturer keeps some unique features in the car which will be present in all the models released by that manufacturer. So, the pre-trained model is first fine-tuned to classify the car into different manufacturers alone. This will help the model in learning the common features that manufacturer keeps in every model. Now, this fine-tuned model is further trained to perform the actual classification of the cars into the corresponding models. In the second stage, the model just has to find the features which makes a car model distinct from the other models of the same manufacturer. This two-stage execution is more intuitive and helps in robust learning of the model.",
          "links": {"Kaggle": "https://www.kaggle.com/venkatarathnam/the-mufasa-hackathon-auto-matic"}
        },
        {
          "title": "Flower Classification (Hackathon Blossom)",
          "duration": "13 Jul 2019 to 15 Jul 2019",
          "tags": ["deep learning", "classification", "pytorch", "python", "resnet"],
          "contributors": ["Venkata Rathnam Muralidharan"],
          "description": "The transfer learning approach is adopted to solve this classification problem.  Fine tuning a model which is already trained on a larger set in the same domain (i.e. image classification) gives an upperhand in solving the problem rather than training a model from scratch.  The pretrained model that has been choosen here is Resnet-101 as this model has the least top-5 error on Imagenet 1-crop dataset. The advantage of Resnet (introduced by Microsoft) is that the model has a deeper architecture than a wider one. The number of parameters to be trained in Resnet is comparatively smaller than its variants due to its shortcut connections. This helps in training the model faster than the others.  Further, the dataset is highly unbalanced, to overcome this, data augmentation techniques like randomized cropping, flipping, and gamma correction and the other measures taken include weighted criterion, learning rate scheduling, and decaying weights.",
          "links": {"Kaggle": "https://www.kaggle.com/venkatarathnam/hackathon-blossom-spaic-mufasa"}
        },
        {
          "title": "Dog Breed Classification",
          "duration": "13 Jul 2019 to 15 Jul 2019",
          "tags": ["deep learning", "classification", "pytorch", "python", "resnet"],
          "contributors": ["Venkata Rathnam Muralidharan"],
          "description": "The dataset consists of around 120 breeds of dogs.  The objective is to rightly classify the dogs into its breed.  To achieve this objective, the standard image classification model resnet-34 has been used.  But the results achieved is not comprehensive and the reason is the noise (significant objects other than the dogs) that is present in most of the images.",
          "links": {"Kaggle": "https://www.kaggle.com/venkatarathnam/dog-breed-identification"}
        },
        {
          "title": "PDF to Image",
          "duration": "Jan 2019",
          "tags": ["python", "tools"],
          "contributors": ["Venkata Rathnam Muralidharan", "Aditya Chatterjee"],
          "description": " Let us imagine a situation in which we have The Invincible Iron Man comic available in PDF and we are trying to identify the pages which have the Iron Man in action. Can we automate this work? Yes, we can do it through image processing. Is PDF a suitable format? No, the images are the best mode of information for image processing. Can we convert a PDF to a sequence of images? Yes, we can and this has been achieved in a pythonic way in this project.",
          "links": {"Opengenus": "https://iq.opengenus.org/pdf_to_image_in_python/",
                    "GitHub": "https://github.com/OpenGenus/PDF_to_Image"
                   }
        },
        {
          "title": "Fake News Detector",
          "duration": "1 Dec 2018 to 6 Jan 2019",
          "tags": ["deep learning", "python", "keras", "nlp", "lstm", "nltk", "hashing", "news"],
          "contributors": ["Piyush Mishra", "Venkata Rathnam M", "Sai Adarsh S", "Amber Bhanarkar"],
          "description": "The objective of this project is to classify real and fake news using Keras API.  The news articles collected have been encoded into numerical representation using Hashing Trick.  To perform the classification, two different approaches have been experimented.  The first approach is by constructing a sequential densenet and feeding the news articles as input and to perform the classification.  This approach gave average results and the drawback is it's inability to long term dependency.  To overcome this drawback, an LSTM network with empirically decided parameters has been constructed and this network enhanced the classification accuracy.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/Fake-News-Detector"}
        },
        {
          "title": "Nervy Notebooks",
          "duration": "1 Dec 2018 to 6 Jan 2019",
          "tags": ["deep learning", "keras", "dynet", "lstm", "sentiment analysis", "python"],
          "contributors": ["Dhruv Apte", "Venkata Rathnam M", "Vansh Soni", "Ashwin Samudre", "Rahul Grover", "Nishant Mishra"],
          "description": "A cluster of notebooks handy for deep learning using IPython notebooks.  The notebooks include sentiment analysis performed using different APIs like Keras and DyNet.  Further, the notebooks also consists of the implementation of many standard neural networks like multilayer perceptron, RNN, LSTM, Autoencoder.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/nervy-notebooks"}
        },
        {
          "title": "Alzheimer's Disease Prediction using 3D MRI scans",
          "duration": "1 Dec 2018 to 6 Jan 2019",
          "tags": ["deep learning", "vgg", "lenet", "inception", "keras", "python"],
          "contributors": ["Mansi Sampat", "Venkata Rathnam Muralidharan"],
          "description": "Use of Machine Learning algorithms in Medical Image Processing is challenging and it is an innovative research oriented project.  The objective of this project is to identify and predict whether a person is affected with Alzheimer's disease based on the obtained 3D MRI scans.  As a part of the project, several pre-trained CNN models have been used including VGG16, LeNet, Inception, ResNet to achieve the objective.",
          "links": {"GitHub": "https://github.com/NJACKWinterOfCode/Alzheimer-s-Disease-Prediction-using-3D-MRI-scans"}
        },
        {
          "title": "Text to Image Synthesis using Modified Generative Adverarial Network",
          "duration": "Dec 2017 – Apr 2018",
          "tags": ["deep learning", "gan", "image generation", "tensorflow", "python"],
          "contributors": ["Venkata Rathnam M", "Mohan Kumar SG", "Krishna Murthi S"],
          "description": "The objective of this project is given a text description of an image, the trained model generates an image correspondingly with the help of the learned features during the training phase.  The project has been carried out with Oxford Flowers-102 dataset and Caltech-UCSD Birds 200 dataset.  The traditional GAN model consists of a discriminator and a generator.  But in this project, we tried with multiple discriminators and a generator.  The intuition behind this approach is that each one of the human beings perceive things in a different way.  The role of a discriminator is to differentiate the images created by the generator as fake from the real ones.  If there are multiple discriminators, each one of the discriminators may learn different ways to identify this difference and ultimately, the generator network will generate more realistic images.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/Creative-and-Innovative-Project"}
        },
        {
          "title": "Fake Rupee Note Detector using Image Processing",
          "duration": "Jan 2018",
          "tags": ["image processing", "opencv", "python"],
          "contributors": ["Venkata Rathnam M"],
          "description": "A simple application to identify whether a given rupee note is fake or real using image processing techniques like color recognization, edge detection, and morphological operations. The application was designed for the newly introduced notes after demonetization.  The approach is to localize and detect whether the given rupee note has all the necessary marks that was suggested by the Reserve Bank of India (RBI) for the note to be considered as real.",
          "links": {"Github": "https://github.com/MVenkata-Rathnam/Computer-Vision/tree/master/Project"}
        },
        {
          "title": "Hyperspectral Image Classification to localize defective plants in farm land",
          "duration": "Jul 2017 – Dec 2017",
          "tags": ["deep learning", "cnn", "numpy", "hyperspectral imaging", "genetic algorithm", "python"],
          "contributors": ["Venkata Rathnam M", "Nagamurugan", "Aiswaran"],
          "description": "A project with an ambitious aim to help the farmers in agriculture by identifying the area in the farm where the crops are infected with the help of hyperspectral images and deep learning.  To perform classification over the hyperspectral images a CNN network was constructed.  Since this is the first project that involves deep learning, to understand the internal working of the CNN, no neural network library was used and the complete working of CNN was implemented using Numpy and vanilla python.  In addition, the parameters optimization was performed using genetic algorithm where after several mutations over selected population, the best hyperparameters were chosen for the final network.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/SRP-Project"}
        },
        {
          "title": "Internship Management Portal",
          "duration": "Apr 2017",
          "tags": ["java", "jsp", "servlet", "html", "css", "xml", "javascript"],
          "contributors": ["Venkata Rathnam M"],
          "description": "A website which allows a general user to apply for an internship and maintain his/her records and also it allows a company to post any internships and hire the candidates based on their resume.  All the jobs will be listed for an applicant which can be filtered based on his/her preference.  Once any individual applies for an internship, his profile gets populated automatically to the employer who can either accept or reject the candidate for further proceedings.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/Internship-Management-Portal/tree/master/InternshipApplication"}
        },
        {
          "title": "Metro Train Ticket Booking Portal",
          "duration": "Jan 2017",
          "tags": ["html", "css", "javascript", "php"],
          "contributors": ["Venkata Rathnam M"],
          "description": "This website is developed as a basic step to achieve digital India initiative which is the goal ahead. Every user should link their bank accounts with their aadhar number so when there is a need to do some transactions, the user need not be demanded to produce their bank account details, instead they will need only their aadhar number and a password to successfully carry out these transactions in a safe and secure way.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/Metro-Ticket-Reservation-Website"}
        },
        {
          "title": "A College Website",
          "duration": "Mar 2016 - Apr 2016",
          "tags": ["html", "css", "javascript", "php"],
          "contributors": ["Venkata Rathnam M", "Saktheeswaran J", "Aravind Rajagopalan"],
          "description": "A college's website will incorporate all the essential information about the departments available in there campus and a quick intro about the departments. It also would require students and staffs to produce login credentials to access some important pages.  These are all the things that have been kept in mind while developing this project.",
          "links": {"GitHub": "https://github.com/MVenkata-Rathnam/Educational-Website/"}
        }
      ]
    }
  },
  methods: {
    filter_items(selects, page){
      if (selects.length == 0){
          this.total_items = this.project_items.length;
          return this.project_items.slice((page-1)*this.items_per_page, page*this.items_per_page);
      } else {
          var new_array = [];
          new_array = this.project_items.filter(project_item => project_item.tags.some(v=> selects.indexOf(v) >= 0));
          this.total_items = new_array.length;
          if (((this.total_items + (this.items_per_page - (this.total_items % this.items_per_page))) / this.items_per_page) < this.page){
            this.page = 1;
          }
          return new_array.slice((page-1)*this.items_per_page, page*this.items_per_page);
      }
    }
  }
}
</script>

<style>
</style>
