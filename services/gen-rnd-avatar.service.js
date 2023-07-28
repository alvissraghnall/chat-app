
const generateDiceBearAvataaars = seed => {
    return `https://api.dicebear.com/5.0/avataaars/svg?seed=${seed}`;
}

const generateDiceBearBottts = seed => {
    return `https://api.dicebear.com/5.0/bottts/svg?seed=${seed}`;
}

const generateDiceBearMicah = seed => {
    return `https://api.dicebear.com/5.0/micah/svg?seed=${seed}`;
}

const generateDiceBearLorelei = seed => {
    return `https://api.dicebear.com/5.0/lorelei/svg?seed=${seed}`;
}

const generateDiceBearMiniavs = seed => {
    return `https://api.dicebear.com/5.0/miniavs/svg?seed=${seed}`;
}

const generateDiceBearFunEmoji = seed => {
    return `https://api.dicebear.com/5.0/fun-emoji/svg?seed=${seed}`;
}

const generateDiceBearAdventurer = seed => {
    return `https://api.dicebear.com/5.0/adventurer/svg?seed=${seed}`;
}

export const generateAvatars = () => {
    const data = [];
    for (let i = 0; i < 3; i++) {
        const res = generateDiceBearAvataaars(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 2; i++) {
        const res = generateDiceBearBottts(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 3; i++) {
        const res = generateDiceBearMicah(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 3; i++) {
        const res = generateDiceBearLorelei(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 2; i++) {
        const res = generateDiceBearMiniavs(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 3; i++) {
        const res = generateDiceBearFunEmoji(Math.random());
        data.push(res);
    }
    for (let i = 0; i < 2; i++) {
        const res = generateDiceBearAdventurer(Math.random());
        data.push(res);
    }
    return data;
}