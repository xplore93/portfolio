<template>
  <div>
    <p v-if="bool">{{ info }}</p>
    <p v-else>{{ texto }}</p>
    <button @mouseover="texto+='2'">lol</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    info: null,
	bool: false,
	texto: "Hola pisha"
  }),
  created() {
    axios
      .post(
        "http://colabora.elnucleo.org/api/auth/login",
        { email: "superadmin@pruebas.net", password: "%hvJfI#1VGRr" },
        {
          auth: {
            username: "42madrid",
            password: "lighthouse",
          },
        }
      )
      .then((response) => (this.info = response))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>