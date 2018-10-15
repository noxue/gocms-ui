<template>
  <div class="container">
    <div class="logo">
      <router-link to="/articles"><img at="不学网" src="/static/logo.png" /></router-link>
    </div>
    <div class="description">
      不学网为各个领域的程序员提供教程。主要是图形用户界面，数据库和编程语言。该网站的使命是为现代技术提供称职/快速且易于理解的教程。 您可以关注微信公众号(不学网)关注作者。获取不学网上所有教程的列表。
    </div>
    <div class="type-list">
      <div v-if="articles[v.Name]" v-for="(v,k) in types" :key="k"  class="type-item">
        <h2>{{v.Title}}</h2>
        <ul class="article-list">
          <li v-for="(v1,k1) in articles[v.Name]" :key="k1">
            <router-link :to="'/article/' + v1.Type + '/' + v1.Name">{{ v1.Title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">&copy;不学网(noxue.com)</div>
  </div>
</template>

<script>
import { getTypes } from '@/api/article-type'
import { getArticles } from '@/api/article'

export default {
  name: 'articles',
  data () {
    return {
      types: [],
      articles: {}
    }
  },
  created () {

  },
  mounted () {
    this.fetchTypes()
  },
  methods: {
    fetchTypes () {
      getTypes().then(res => {
        this.types = res.types
        for (var i in this.types) {
          this.fetchArticles({'type': this.types[i].Name})
        }
      })
    },
    fetchArticles (params) {
      getArticles(params).then(res => {
        if (res.articles) {
          this.$set(this.articles, params.type, res.articles)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.type-item {
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

.footer{
  text-align: center;
  font-size: 12px;
  color:#666;
  margin-top:20px;
}
</style>
