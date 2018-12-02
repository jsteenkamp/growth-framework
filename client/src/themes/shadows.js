// Simpler shadows from design system (.08 -> .1, .16 -> .18)
export const sm = '0 0 2px 0 rgba(0,0,0,.1),0 1px 4px 0 rgba(0,0,0,.18)';
export const md = '0 0 2px 0 rgba(0,0,0,.1),0 2px 8px 0 rgba(0,0,0,.18)';
export const lg = '0 0 2px 0 rgba(0,0,0,.1),0 4px 16px 0 rgba(0,0,0,.18)';
export const xl = '0 0 2px 0 rgba(0,0,0,.1),0 8px 32px 0 rgba(0,0,0,.18)';

// Google Material Design 1-24dp elevations (shadows)
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_variables.scss

const umbraOpacity = '0.2';
const penumbraOpacity = '0.14';
const ambientOpacity = '0.12';

// map index are [0-24]

const elevationUmbraMap = [
  '0px 0px 0px 0px',
  '0px 2px 1px -1px',
  '0px 3px 1px -2px',
  '0px 3px 3px -2px',
  '0px 2px 4px -1px',
  '0px 3px 5px -1px',
  '0px 3px 5px -1px',
  '0px 4px 5px -2px',
  '0px 5px 5px -3px',
  '0px 5px 6px -3px',
  '0px 6px 6px -3px',
  '0px 6px 7px -4px',
  '0px 7px 8px -4px',
  '0px 7px 8px -4px',
  '0px 7px 9px -4px',
  '0px 8px 9px -5px',
  '0px 8px 10px -5px',
  '0px 8px 11px -5px',
  '0px 9px 11px -5px',
  '0px 9px 12px -6px',
  '0px 10px 13px -6px',
  '0px 10px 13px -6px',
  '0px 10px 14px -6px',
  '0px 11px 14px -7px',
  '0px 11px 15px -7px',
];

const elevationPenumbraMap = [
  '0px 0px 0px 0px',
  '0px 1px 1px 0px',
  '0px 2px 2px 0px',
  '0px 3px 4px 0px',
  '0px 4px 5px 0px',
  '0px 5px 8px 0px',
  '0px 6px 10px 0px',
  '0px 7px 10px 1px',
  '0px 8px 10px 1px',
  '0px 9px 12px 1px',
  '0px 10px 14px 1px',
  '0px 11px 15px 1px',
  '0px 12px 17px 2px',
  '0px 13px 19px 2px',
  '0px 14px 21px 2px',
  '0px 15px 22px 2px',
  '0px 16px 24px 2px',
  '0px 17px 26px 2px',
  '0px 18px 28px 2px',
  '0px 19px 29px 2px',
  '0px 20px 31px 3px',
  '0px 21px 33px 3px',
  '0px 22px 35px 3px',
  '0px 23px 36px 3px',
  '0px 24px 38px 3px',
];

const elevationAmbientMap = [
  '0px 0px 0px 0px',
  '0px 1px 3px 0px',
  '0px 1px 5px 0px',
  '0px 1px 8px 0px',
  '0px 1px 10px 0px',
  '0px 1px 14px 0px',
  '0px 1px 18px 0px',
  '0px 2px 16px 1px',
  '0px 3px 14px 2px',
  '0px 3px 16px 2px',
  '0px 4px 18px 3px',
  '0px 4px 20px 3px',
  '0px 5px 22px 4px',
  '0px 5px 24px 4px',
  '0px 5px 26px 4px',
  '0px 6px 28px 5px',
  '0px 6px 30px 5px',
  '0px 6px 32px 5px',
  '0px 7px 34px 6px',
  '0px 7px 36px 6px',
  '0px 8px 38px 7px',
  '0px 8px 40px 7px',
  '0px 8px 42px 7px',
  '0px 9px 44px 8px',
  '0px 9px 46px 8px',
];

const shadow = (index) => `${elevationUmbraMap[index]} rgba(0, 0, 0, ${umbraOpacity}), ${elevationPenumbraMap[index]} rgba(0, 0, 0, ${penumbraOpacity}), ${elevationAmbientMap[index]} rgba(0, 0, 0, ${ambientOpacity}) `;

export const s0 = shadow(0);
export const s1 = shadow(1);
export const s2 = shadow(2);
export const s3 = shadow(3);
export const s4 = shadow(4);
export const s5 = shadow(5);
export const s6 = shadow(6);
export const s7 = shadow(7);
export const s8 = shadow(8);
export const s9 = shadow(9);
export const s10 = shadow(10);
export const s11 = shadow(11);
export const s12 = shadow(12);
export const s13 = shadow(13);
export const s14 = shadow(14);
export const s15 = shadow(15);
export const s16 = shadow(16);
export const s17 = shadow(17);
export const s18 = shadow(18);
export const s19 = shadow(19);
export const s20 = shadow(20);
export const s21 = shadow(21);
export const s22 = shadow(22);
export const s23 = shadow(23);
export const s24 = shadow(24);

// generate a shadow with custom ambient opacity
export const shadowAmbient = (index, ambientOpacity) => `${elevationUmbraMap[index]} rgba(0, 0, 0, ${umbraOpacity}), ${elevationPenumbraMap[index]} rgba(0, 0, 0, ${penumbraOpacity}), ${elevationAmbientMap[index]} rgba(0, 0, 0, ${ambientOpacity}) `;
