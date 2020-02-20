import React from 'react';

import link from 'sous-components-twig/01-atoms/links/link/link.twig';

import linkData from 'sous-components-twig/01-atoms/links/link/link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => (
  <div dangerouslySetInnerHTML={{ __html: link(linkData) }} />
);
