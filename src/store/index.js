import { createStore } from "vuex";

export default createStore({
  state: {
    i: 0,
    colors: {
      0: {
        0: "#2e4049",
        1: "#567787",
      },
      1: {
        0: "#23624b",
        1: "#3dae84",
      },
      2: {
        0: "#5d3045",
        1: "#A05377",
      },
      3: {
        0: "#0a71c6",
        1: "#41A4F5",
      },
      4: {
        0: "#384781",
        1: "#6376BC",
      },
      5: {
        0: "#c73011",
        1: "#f06a4e",
      },
    },
    accentColor: {
      0: "#2e4049",
      1: "#567787",
    },
  },
  mutations: {
    changeAccentColor(state) {
      state.i = (state.i + 1) % Object.keys(state.colors).length;
      state.accentColor = state.colors[state.i];
    },
  },
  actions: {
    changeAccentColor(context) {
      context.commit("changeAccentColor");
    },
  },
  modules: {},
});
