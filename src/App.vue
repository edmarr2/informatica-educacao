<template>
  <div id="app">
    <div style="margin: 20px">
      <header-link />
      <router-view></router-view>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="height: 100px;"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</template>

<script>
// cloridato de ciclobenzaprina
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
