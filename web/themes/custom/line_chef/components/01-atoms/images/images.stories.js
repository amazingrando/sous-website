import React from 'react';

import image from 'sous-components-twig/01-atoms/images/image/responsive-image.twig';
import figure from 'sous-components-twig/01-atoms/images/image/figure.twig';
import iconTwig from 'sous-components-twig/01-atoms/images/icons/icons.twig';

import imageData from 'sous-components-twig/01-atoms/images/image/image.yml';
import figureData from 'sous-components-twig/01-atoms/images/image/figure.yml';
import iconData from 'sous-components-twig/01-atoms/images/icons/icons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => (
  <div dangerouslySetInnerHTML={{ __html: image(imageData) }} />
);
export const figures = () => (
  <div dangerouslySetInnerHTML={{ __html: figure(figureData) }} />
);
export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
