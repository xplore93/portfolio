<template>
  <b-card :title="title" :img-src="require('@/assets/dev/'+imgSrc)" :img-alt="imgAlt">
    <b-card-text>{{text}}</b-card-text>
    <template v-slot:footer>
      <b-button
        :href="url"
        class="custom-btn btn-15"
        :style="{background:$parent.color[0], '--bgColor': $parent.color[1]}"
      >{{button}}</b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    text: String,
    imgSrc: String,
    imgAlt: String,
    button: String,
    url: String,
  },
};
</script>

<style scoped>
button {
  margin: 20px;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
/* 15 */
.btn-15 {
  background: #5f5f5f;
  border: none;
  z-index: 1;
}
.btn-15:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: var(--bgColor);
  border-radius: 5px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.btn-15:hover {
  color: #212529;
}
.btn-15:hover:after {
  left: 0;
  width: 100%;
}
.btn-15:active {
  top: 2px;
}
</style>