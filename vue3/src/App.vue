<template>
  <Index />
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e6f2ff; /* 浅蓝色背景 */
            color: #333;
        }
html {
  font-family: "Work Sans", Sans-serif;
  font-size: 14px;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
a:link,
a:visited {
  color: #333;
  text-decoration: none;
}
img {
  border: none;
  display: block;
}
ol,
ul,
li {
  list-style: none;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
</style>
