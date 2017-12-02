<template lang='pug'>
	.news-list
		h3.text-center {{userName}} it is time for some VueNews!

		section.callout.secondary
			h5.text-center Filter by Category
			form
				.row
					.large-6.columns
						select(v-model="section")
							option(v-for="section in sections" :value="section" :key='section') {{ section }}

					.medium-6.columns
						a.button(@click="getPosts(section)") Retrieve

		h5.text-center.uppercase(v-if="!loading") {{ title }}
		div.loader(v-if="loading")
			img(src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader")

		news-list(v-if="!loading" :results="results")
</template>

<script>
// rebuild this to make a news-site work: https://github.com/sitepoint-editors/vuejs-news
import NewsList from '@/elements/NewsList'
import axios from 'axios'
const config = {
  KEY: 'ADD YOUR OWN API KEY!!!!!'
}
const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const ApiKey = config.KEY

function buildUrl (url) {
  return NYTBaseUrl + url + '.json?api-key=' + ApiKey
}

const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world' // From NYTimes

export default {
  computed: {
    userName: function () {
      return this.$store.state.userName
    }
  },
  name: 'NewsPage',
  data () {
    return {
      results: [],
      sections: SECTIONS.split(', '), // create an array of the sections
      section: 'technology', // set default section to 'technology'
      loading: true,
      title: ''
    }
  },
  mounted () {
    this.getPosts('technology')
  },
  components: { NewsList },
  methods: {
    getPosts (section) {
      let url = buildUrl(section)
      axios
        .get(url)
        .then(response => {
          this.loading = false
          this.results = response.data.results
          let title =
            this.section !== 'technology'
              ? 'Top stories in `' + this.section + '` today'
              : 'Top stories in technology today'
          this.title = title + '(' + response.data.num_results + ')'
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.container {
			padding: 20px 0
		}
		.column:last-child:not(:first-child), .columns:last-child:not(:first-child) {
			float: left;
		}
		.main_heading {
			margin: 10px 0 30px;
		}
		.callout {
			margin-bottom: 40px;
		}
		select {
			text-transform:capitalize;
		}
		.loader {
			text-align: center;
			padding: 40px;
		}
		.uppercase {
			text-transform: uppercase;
		}
</style>
