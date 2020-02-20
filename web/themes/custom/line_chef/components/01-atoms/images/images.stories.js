import React from 'react';
import { useEffect } from '@storybook/client-api';
// Global Data
import globalDataImages from 'sous-components-twig/_global-data/images.yml';

import image from 'sous-components-twig/01-atoms/images/image/responsive-image.twig';
import figure from 'sous-components-twig/01-atoms/images/image/figure.twig';
import iconTwig from 'sous-components-twig/01-atoms/images/icons/icons.twig';
import bgImageTwig from 'sous-components-twig/01-atoms/images/background-image/background-image.twig';

import imageData from 'sous-components-twig/01-atoms/images/image/image.yml';
import figureData from 'sous-components-twig/01-atoms/images/image/figure.yml';
import iconData from 'sous-components-twig/01-atoms/images/icons/icons.yml';
import bgImageContent from 'sous-components-twig/01-atoms/images/background-image/background-image--with-content.yml';

import 'sous-components-twig/01-atoms/images/background-image/background-image';

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
export const backgroundImage = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{ __html: bgImageTwig(globalDataImages) }}
    />
  );
};

export const backgroundImageWithContent = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{
        __html: bgImageTwig({ ...globalDataImages, ...bgImageContent }),
      }}
    />
  );
};
