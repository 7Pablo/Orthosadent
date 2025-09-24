// utils/scrollAnimations.js

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const slideFromBottom = {
  initial: { y: 50 },
  animate: { y: 0 },
  exit: { y: 50 },
};

export const flipCard = (delay = 0) => ({
  initial: { rotateY: 90, opacity: 0 },  
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      delay,
      type: 'spring',
      stiffness: 150,
      damping: 12,
      mass: 1,
    },
  },
  exit: { rotateY: 90, opacity: 0 }, 
});

export const bouncyRise = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      delay,
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 1,
    },
  },
  exit: { opacity: 0, y: 50, scale: 0.95 },
});

export const bouncingBall = (delay = 0) => ({
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: [ -50, 20, -10, 0 ], 
    transition: {
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
});

// Coin flip effect (like tossing a card in 3D)
export const coinFlip = (delay = 0) => ({
  initial: { opacity: 0, rotateY: 180, scale: 0.8 },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, rotateY: 180, scale: 0.8, transition: { duration: 0.5 } },
});

// Toss effect (like throwing a card onto a table)
export const cardToss = (delay = 0) => ({
  initial: { opacity: 0, x: -100, y: -50, rotate: -15, scale: 0.8 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
  exit: { opacity: 0, x: 100, y: 50, rotate: 15, transition: { duration: 0.6 } },
});


