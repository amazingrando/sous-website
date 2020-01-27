import React from 'react';

import tables from 'sous-components-twig/01-atoms/tables/tables.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Tables' };

export const table = () => <div dangerouslySetInnerHTML={{ __html: tables({}) }} />;
