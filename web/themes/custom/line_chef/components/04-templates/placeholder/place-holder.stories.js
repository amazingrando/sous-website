import React from 'react';

import placeHolderTwig from 'sous-components-twig/04-templates/placeholder/place-holder.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Place Holder' };

export const placeHolder = () => <div dangerouslySetInnerHTML={{ __html: placeHolderTwig({}) }} />;
