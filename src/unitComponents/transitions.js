import { config } from "react-spring";

export const titleSpringProps = {
  config: config.slow,
  from: { transform: "translateY(3em)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
};

export const contentSpringProps = {
  config: config.slow,
  from: { transform: "translateY(4em)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
};

export const rightImageSpringProps = {
  config: config.slow,
  from: { transform: "translateX(1em)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
};

export const leftImageSpringProps = {
  config: config.slow,
  from: { transform: "translateX(-1em)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
};

export const normalAppearProps = {
  config: config.molasses,
  from: { opacity: 0 },
  to: { opacity: 1 },
};
