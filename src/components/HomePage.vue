<template lang='pug'>
  .home
    .about-me
      h1 Welcome
        input.name-input(v-if="!isNameProvided" v-model="userName" placeholder="please provide your name && hit enter/return" @keyup.enter="yolo")
        span.pos-rel(v-if="isNameProvided") &nbsp;{{userName}},
          .button-small(@click="newName") X
      h2 To my entirely new build website!
      p
      | At the time of writing $(this) website I started exactly one year ago on a new journey.
      br
      | I quit working for a financial and decided to go into completely other direction: Web-development.
      br
      | Therefore I needed to re-school myself and so I did.

      p
      | I found out about &nbsp;
      a(href="https://www.codaisseur.com/" target="_blank") Codaisseur,
      |  went to their Open Evening,
      br
      | and shortly after they were teaching me the ways of the internet.
      br
      | In like eight weeks they learned me the basics and more.TODO MAKE THIS SLIDE LIST Pop-open COMPONENT
      br
      | By the end of 2016 I could call myself Junior Webdeveloper and three months later I found my first job.

      p
      | Currently I'm working for &nbsp;
      a(href="http://project89109.nl/" target="_blank") Project89109.nl.
      br
      | We are building websites with adult rated content.
      br
      |  In the seven months I'm currently working here I've helped building 5 new websites and worked on at least twice that amount.
      br
      | If you'd be interested in the websites I've helped building feel free to contact me.

    .stuff-to-do-div
      h4.boring Boringggg
      h4 So how to make this page interesting?!
      stars

</template>

<script>
import Stars from '@/elements/Stars'

export default {
  created () {
    console.log(this.$store)
  },
  name: 'HomePage',
  data () {
    return {
      msg: '',
      userName: '',
      isNameProvided: false
    }
  },
  components: { Stars },
  methods: {
    yolo () {
      console.log('enter!!')
      this.isNameProvided = true
    },
    newName () {
      this.isNameProvided = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.home
  padding: 0px 1.25rem

.name-input
    height: 30px
    position: relative
    top: -5px
    width: 25%
    left: 4px
    font-size: 16px

.boring
  margin-top: 10px

  &:after
    overflow: hidden
    display: inline-block
    vertical-align: bottom
    -webkit-animation: ellipsis steps(4,end) 900ms infinite
    animation: ellipsis steps(4,end) 3000ms infinite
    content: "\2026"
    width: 0px

.pos-rel
  position: relative

.button-small
    display: inline-block
    position: absolute
    background-color: red
    height: 20px
    width: 20px
    font-size: 14px
    text-align: center
    color: white
    top: 0px
    right: -10px
    cursor: pointer

@keyframes ellipsis
  to
    width: 30px
</style>
