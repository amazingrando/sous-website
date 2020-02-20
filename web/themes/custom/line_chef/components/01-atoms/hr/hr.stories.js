import React from 'react';

import hr from 'sous-components-twig/01-atoms/hr/hr.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Horizontal Rule' };

export const horizontalRule = () => (
  <div dangerouslySetInnerHTML={{ __html: hr() }} />
);
