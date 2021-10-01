import { colors } from "../../src/configs/background.json";
const randomIndex = Math.round(Math.random() * (colors.length - 1));
let i = randomIndex;

export const randomBackgroud = (colors) => {
  const indColors = colors.length - 1;
  indColors > i ? i++ : (i = 0);

  console.log(`i ===>>>`, i);
  return colors[i];
};
