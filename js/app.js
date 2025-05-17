import initScrollReveal from "./scrollReveal";
import initTiltEffect from "./tiltAnimation";
import { targetElements, defaultProps } from "./scrollRevealConfig";
import '/sass/styles.scss'

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
