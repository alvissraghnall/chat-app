const generateDiceBearAvataaars = (seed) =>
  `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

const generateDiceBearBottts = (seed) =>
  `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

const generateDiceBearBigSmile = (seed) =>
  `https://avatars.dicebear.com/api/big-smile/${seed}.svg`;

  const generateDiceBearAdventurer = (seed) =>
  `https://avatars.dicebear.com/api/adventurer/${seed}.svg`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random() * 5 + 905);
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBigSmile(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAdventurer(Math.random());
    data.push(res);
  }
  return data;
};