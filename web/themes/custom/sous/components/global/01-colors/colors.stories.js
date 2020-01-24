import React from 'react';

import colors from 'sous-components-twig/global/01-colors/colors.twig';

import grayscale from 'sous-components-twig/global/01-colors/colors-grayscale.yml';
import branding from 'sous-components-twig/global/01-colors/colors-branding.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

export const Grayscale = () => <div dangerouslySetInnerHTML={{ __html: colors(grayscale) }} />;
export const Branding = () => <div dangerouslySetInnerHTML={{ __html: colors(branding) }} />;
