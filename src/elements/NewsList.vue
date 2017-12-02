<template lang='pug'>
  .news-list
    section
      .row(v-for="(posts, index) in processedPosts" :key='index')
        .columns.large-3.medium-6(v-for="(post, index) in posts" :key='index')
          .card
          .card-divider {{ post.title }}

          a(:href="post.url" target="_blank")
            img(:src="post.image_url")
          .card-section
            p {{ post.abstract }}
</template>

<script>
import axios from 'axios'

const config = {
  KEY: 'Replace with own key'
}

const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const ApiKey = config.KEY

function buildUrl (url) {
  return NYTBaseUrl + url + '.json?api-key=' + ApiKey
}

export default {
  name: 'news-list',
  props: ['results'],
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    processedPosts () {
      let posts = this.results

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(
          media => media.format === 'superJumbo'
        )
        post.image_url = imgObj
          ? imgObj.url
          : 'http://placehold.it/300x200?text=N/A'
      })

      // Put Array into Chunks
      let i
      let j
      let chunkedArray = []
      let chunk = 4
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i, i + chunk)
      }
      return chunkedArray
    }
  },
  methods: {
    getPosts (section) {
      let url = buildUrl(section)
      axios
        .get(url)
        .then(response => {
          this.loading = false
          this.results = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
