const { createApp } = Vue;

createApp({
  data() {
    return {
      generatedMailArray: [],
      mailCount: 1,
    };
  },

  computed: {},

  methods: {
    fetchMail() {
      this.generatedMailArray = [];
      for (let i = 0; i < this.mailCount; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            const randomEmail = resp.data.response;

            this.generatedMailArray.push(randomEmail);
          });
      }
    },
  },

  mounted() {},
}).mount("#app");
