export const useNavLinks = () => {
  return useState("links", () => [
    {
      text: "About",
      path: "#about",
      title: "Look at about myself",
    },
    {
      text: "Works",
      path: "#works",
      title: "Look at my works",
    },
    {
      text: "Services",
      path: "#services",
      title: "Look at my services",
    },
  ]);
};
