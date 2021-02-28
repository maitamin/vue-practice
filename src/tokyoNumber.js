export const tokyoNumber = {
  data() {
    return {
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a greate city",
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  created() {
    console.log("created in Mixin");
  }
}
