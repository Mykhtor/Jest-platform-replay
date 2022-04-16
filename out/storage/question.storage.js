"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
let questions = [
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'Kim darsni tushunmadi?',
        variants: [
            { text: "Abror", isRight: true },
            { text: 'olmtoy', isRight: false },
            { text: 'Javphir', isRight: false }
        ]
    },
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'Kim boshachi?',
        variants: [
            { text: "jurat", isRight: true },
            { text: 'olmtoy', isRight: false },
            { text: 'Javphir', isRight: false }
        ]
    },
    {
        id: (0, nanoid_1.nanoid)(),
        question: "What are 'nudes' show me please",
        variants: [
            { text: "Javohir", isRight: false },
            { text: 'olmtoy', isRight: false },
            { text: 'JavohirJon', isRight: true }
        ]
    }
];
