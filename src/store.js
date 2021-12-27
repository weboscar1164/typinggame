import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resultData: [
      {
        id: 0,
        name: "EASY",
        ranking: [
          { id: 1, baseTime: 16000, time: "00:20:00" },
          { id: 2, baseTime: 17000, time: "00:21:00" },
          { id: 3, baseTime: 18000, time: "00:22:00" },
        ],
      },
      {
        id: 1,
        name: "NOMAL",
        ranking: [
          { id: 1, baseTime: 32000, time: "01:00:00" },
          { id: 2, baseTime: 33000, time: "01:10:00" },
          { id: 3, baseTime: 34000, time: "01:20:00" },
        ],
      },
      {
        id: 2,
        name: "HARD",
        ranking: [
          { id: 1, baseTime: 64000, time: "02:00:00" },
          { id: 2, baseTime: 65000, time: "02:10:00" },
          { id: 3, baseTime: 66000, time: "02:20:00" },
        ],
      },
    ],
  },
});
