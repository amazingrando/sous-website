import React from 'react';

import status from 'sous-components-twig/02-molecules/status/status.twig';

import statusData from 'sous-components-twig/02-molecules/status/status.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Status' };

export const statusExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: status(statusData) }} />
);
