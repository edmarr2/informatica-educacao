<template>
  <div id="app">
    <header-link />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderLink from "@/components/organisms/HeaderWithLinkAndImage"
export default {
  name: 'App',
  components: {
    HeaderLink
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}

.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.header-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.links {
  text-decoration: none;
  padding: 10px;
  color: #000;
}

.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
}

.default {
  border-color: #000;
  color: #000;
}

.default:hover {
  background-color: #000;
  color: white;
}
</style>
