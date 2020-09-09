<template>
  <div class="col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
    <div class="bg-white shadow-sm py-4 px-5 position-relative">
      <h4 class="text-center mb-3 mt-5">{{ this.title }}</h4>
      <div
        class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center"
        :style="{background:this.$parent.$parent.navColor[$parent.$parent.j][1]}"
      >
        <img :src="require('@/assets/skills/'+imgSrc)" />
      </div>
      <ul class="list-unstyled text-secondary">
        <li class="mb-2" v-for="row in this.rows" :key="row">
          <img class="svg-inline--fa mr-2" src="@/assets/skills/tick.svg" />
          {{ row }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    title: String,
    imgSrc: String,
    rows: Array,
  },
};
</script>

<style>
.skills-icon-holder {
  width: 80px;
  height: 80px;
  padding-top: 1.25rem;
  top: -40px;
  left: 50%;
  margin-left: -40px;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>