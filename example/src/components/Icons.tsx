import * as React from 'react';
import { SVG, colors } from 'pangeling-ui';

export const BookIcon = () => {
  return (
    <SVG.Svg width="26" height="30" viewBox="0 0 26 30" fill="none">
      <SVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8353 2.01676H7.42456C4.48237 2.00545 2.07062 4.35072 2.00131 7.29149V22.4452C1.93624 25.4341 4.30555 27.9109 7.29443 27.9774C7.33828 27.9774 7.38071 27.9788 7.42456 27.9774H18.7251C21.6871 27.8571 24.0211 25.41 23.9999 22.4452V9.47975L16.8353 2.01676Z"
        stroke={colors.green}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <SVG.Path
        d="M16.4688 2V6.11483C16.4688 8.12344 18.0926 9.75155 20.1012 9.7572H23.9982"
        stroke={colors.green}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <SVG.Path
        d="M15.768 18.468C15.768 15.3 11.472 16.188 11.472 15.024C11.472 14.628 11.808 14.388 12.36 14.388C13.032 14.388 13.416 14.82 13.404 15.372H15.504C15.504 14.136 14.868 12.96 13.44 12.6V11.16H11.592V12.576C10.344 12.864 9.492 13.812 9.492 15.036C9.492 18.108 13.764 17.244 13.764 18.468C13.764 18.924 13.32 19.212 12.648 19.212C11.928 19.212 11.424 18.804 11.424 18.168H9.42C9.42 19.524 10.296 20.604 11.592 20.976V22.44H13.44V21.048C14.82 20.76 15.768 19.764 15.768 18.468Z"
        fill={colors.green}
      />
    </SVG.Svg>
  );
};

export const BurgerIcon = () => {
  return (
    <SVG.Svg width="43" height="43" viewBox="0 0 43 43" fill="none">
      <SVG.Circle cx="21.5" cy="21.5" r="21.5" fill="#003C2F" />
      <SVG.Line
        x1="9.82812"
        y1="15.2212"
        x2="33.171"
        y2="15.2212"
        stroke={colors.white}
        strokeWidth="1.5"
      />
      <SVG.Line
        x1="9.82812"
        y1="21.3643"
        x2="33.171"
        y2="21.3643"
        stroke={colors.white}
        strokeWidth="1.5"
      />
      <SVG.Line
        x1="9.82812"
        y1="27.5073"
        x2="33.171"
        y2="27.5073"
        stroke={colors.white}
        strokeWidth="1.5"
      />
    </SVG.Svg>
  );
};
