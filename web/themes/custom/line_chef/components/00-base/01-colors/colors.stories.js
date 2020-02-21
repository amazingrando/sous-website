import React from 'react';

import colors from 'sous-components-twig/00-base/01-colors/colors.twig';

import grayscale from 'sous-components-twig/00-base/01-colors/colors-grayscale.yml';
import branding from 'sous-components-twig/00-base/01-colors/colors-branding.yml';
// Line Chef Colors
import lineChefColors from './lc-colors.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

export const Grayscale = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(grayscale) }} />
);
export const Branding = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(branding) }} />
);
export const lineChef = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(lineChefColors) }} />
);
