<template>
  <div id="app">
    <router-view/>
    <div class="footer">&copy;不学网(noxue.com)&nbsp;&nbsp;联系站长QQ:30670835</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'reset-css/reset.css';
body{
  background: #333;
  text-align: center;
  color: #444;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
  line-height: 1.5;
}
.container{
  margin:auto;
  max-width:900px;
  text-align: left;
  background: #fff;
  color: #000;
  padding:40px 30px;
}
.logo img{
  height:50px;
}

.footer{
  text-align: center;
  font-size: 12px;
  color:#aaa;
  margin-top:10px;
}

.footer a{
  color:#ddd;
}

a{
  text-decoration: none;
}
img {
  max-width: 100%;
}
</style>
