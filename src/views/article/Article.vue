<template>
  <div class="container">
    <div class="logo">
      <router-link to="/articles"><img src="/static/logo.png" /></router-link>
    </div>
    <h3 class="title">{{article.Title}}</h3>
    <div class="content markdown-body" v-html="article.Content"/>
    <p v-if="article.Chapters && article.Chapters.length>0" class="chapter-menu">目录</p>
    <ul v-if="article.Chapters && article.Chapters.length>0" class="chapter-list">
      <li v-for="(v,k) in article.Chapters" :key="k">
        <router-link :to="'/article/' + article.Type + '/' + article.Name + '/' + v.Name">{{ v.Title }}</router-link>
      </li>
    </ul>
    <div class="footer">&copy;不学网(noxue.com)</div>
  </div>
</template>

<script>
import { getArticle, getChapter } from '@/api/article'
var marked = require('marked')
var hljs = require('highlight.js')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

export default {
  name: 'articleDetail',
  data () {
    return {
      typeName: '',
      articleName: '',
      chapterName: '',
      article: {}
    }
  },
  watch: {
    $route (to, from) {
      this.typeName = this.$route.params.type
      this.articleName = this.$route.params.article
      this.chapterName = this.$route.params.chapter
      this.fetchArticle()
    },
    'article': function (n, o) {
      this.article.Content = marked(n.Content, { sanitize: true })
    }
  },
  created () {
  },
  mounted () {
    this.typeName = this.$route.params.type
    this.articleName = this.$route.params.article
    this.chapterName = this.$route.params.chapter
    this.fetchArticle()
  },
  methods: {
    fetchArticle () {
      if (this.chapterName && this.chapterName !== '') {
        getChapter(this.typeName, this.articleName, this.chapterName).then(res => {
          this.article = res.article
        })
        return
      }
      getArticle(this.typeName, this.articleName).then(res => {
        this.article = res.article
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import 'github-markdown-css/github-markdown';
@import 'highlight.js/styles/github.css';

.description{
  margin-top:20px;
}

.article-list{
  list-style: none;
  display: flex;
  flex-flow: row;
}

.article-list > li {
  width:33.3333%;
}

@media screen and (max-width: 700px) {
  .article-list{
    flex-flow: column;
  }
  .article-list > li {
    width:100%;
  }
}

.type-item > h2 {
  font-size: 22px;
  margin: 20px auto;
}

.article-list a {
  color: #0099f7;
}

.article-list a:hover{
  color: #a11515;
}

h3.title{
  margin-top:25px;
  margin-bottom: 20px;
  font-size:22px;
}

.chapter-menu {
  margin-top:40px;
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
}

.chapter-list{
  list-style:none;
}

.chapter-list a {
  color: #0099f7;
}

.chapter-list a:hover{
  color: #a11515;
}

</style>
