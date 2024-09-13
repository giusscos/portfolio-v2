export const useMyState = () => {
  const menuToggle = useState("menu-toggle", () => false);

  return { menuToggle };
};
