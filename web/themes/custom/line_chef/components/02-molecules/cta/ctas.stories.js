import React from 'react';

import ctaTwig from 'sous-components-twig/02-molecules/cta/cta.twig';

import ctaData from 'sous-components-twig/02-molecules/cta/cta.yml';
import ctaHomeData from 'sous-components-twig/02-molecules/cta/cta~home.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTAs' };

export const cta = () => (
  <div dangerouslySetInnerHTML={{ __html: ctaTwig(ctaData) }} />
);
export const ctaHome = () => (
  <div dangerouslySetInnerHTML={{ __html: ctaTwig(ctaHomeData) }} />
);
