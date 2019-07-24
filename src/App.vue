<template>
    <v-app>
      <v-toolbar color="#64B5F6" app>
        <v-toolbar-title>Venkata Rathnam Muralidharan</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" append :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-btn :key="item.icon" :to="item.link" flat>{{ item.title }}</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
        <v-footer
          height="auto"
          color="#64B5F6"
        >
          <v-layout
            justify-center
            row
            wrap
          >
            <v-flex
              color="#64B5F6"
              py-3
              text-xs-center
              black--text
              xs12
            >
            <v-btn
              v-for="med in soc_med"
              :key="med.icon"
              :href="med.link"
              target="_blank"
              class="mx-1"
              icon
            >
              <v-icon size="20px">{{ med.icon }}</v-icon>
            </v-btn>
              &copy;{{ new Date().getFullYear() }} — <strong>Venkata Rathnam Muralidharan</strong>
            </v-flex>
          </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data: () => ({
    menu: [
        { icon: "About", link: "/about", title: "About" },
        { icon: "Accolades", link: "/accolades", title: "Accolades" },
        { icon: "Certification", link: "/certifications", title: "Certs/Courses"},
        { icon: "Experience", link: "/experience", title: "Experience"},
        { icon: "Projects", link: "/projects", title: "Projects"},
        { icon: "Publications", link: "/publications", title: "Publications"}
      ],
      soc_med: [
        {icon:'fab fa-linkedin', link:"https://linkedin.com/in/Venkata-Rathnam-Muralidharan"},
        {icon:'fab fa-github', link:"https://github.com/MVenkata-Rathnam"},
        {icon:'fab fa-facebook', link:"https://www.facebook.com/venkatarathnam.muralidharan"},
        {icon:'fab fa-twitter', link:"https://twitter.com/im_venkat_28"}
      ]
  })
}
</script>

<style>
</style>
