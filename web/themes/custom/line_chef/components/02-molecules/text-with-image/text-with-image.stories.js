import React from 'react';

import textImageTwig from 'sous-components-twig/02-molecules/text-with-image/text-with-image.twig';

import textImageData from 'sous-components-twig/02-molecules/text-with-image/text-with-image.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Text With Image' };

export const textWithImage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: textImageTwig(textImageData),
    }}
  />
);
