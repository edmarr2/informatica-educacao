<template>
    <nav class="header">
      <img src="@/assets/loho.png" width="100" @click="redirectToHome()">
      <div class="header-links">
        <router-link to="/" class="links">Início</router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: "HeaderLink",
  methods: {
    redirectToHome () {
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
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
