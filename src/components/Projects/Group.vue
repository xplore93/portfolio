<template>
  <div class="col-sm-6 col-lg-6">
    <div class="wrapper">
      <div
        id="background"
        :style="{background: 'url('+require('@/assets/dev/'+img)+') center / cover no-repeat'}"
      ></div>
      <div class="data">
        <div class="content">
          <h1 class="title">
            <a href @click="$router.push(url).catch(() => {})">{{ title }}</a>
          </h1>
          <p class="text">{{ text }}</p>
          <a href @click="$router.push(url).catch(() => {})" class="button">Leer más</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group",
  props: {
    title: String,
    text: String,
    url: String,
    img: String,
  },
};
</script>

<style scoped>
h1 {
  font-weight: 300;
}
#background {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  transition: all 0.3s;
}
.wrapper:hover > #background {
  filter: blur(2px);
  -webkit-filter: blur(2px);
  transform: translateY(0);
}
.wrapper {
  border-radius: 1%;
  min-width: 20em;
  height: 20em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}
.wrapper:hover .data {
  border-radius: 1%;
  transform: translateY(0);
}
.data {
  transform: translateY(12.2em);
  transition: transform 0.3s;
}
.data .content {
  padding: 4.5em;
  position: relative;
}
.data,
a {
  text-decoration: none;
  color: #fff;
}
.button {
  display: block;
  width: 100px;
  margin: 2em auto 1em;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  position: relative;
  font-weight: 700;
}
.button::after {
  content: "\2192";
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.3s;
}
.button:hover::after {
  transform: translate(5px, -50%);
  opacity: 1;
}

@media only screen and (max-width: 767px) {
  .wrapper {
    margin-bottom: 3em;
  }
}
</style>