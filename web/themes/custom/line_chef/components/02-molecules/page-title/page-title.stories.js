import React from 'react';

import pageTitleTwig from 'sous-components-twig/02-molecules/page-title/page-title.twig';

import pageTitleData from 'sous-components-twig/02-molecules/page-title/page-title.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Page Title' };

export const pageTitle = () => (
  <div dangerouslySetInnerHTML={{ __html: pageTitleTwig(pageTitleData) }} />
);
