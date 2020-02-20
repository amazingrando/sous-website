import React from 'react';

import dl from 'sous-components-twig/01-atoms/lists/dl.twig';
import ul from 'sous-components-twig/01-atoms/lists/ul.twig';
import ol from 'sous-components-twig/01-atoms/lists/ol.twig';

import dlData from 'sous-components-twig/01-atoms/lists/dl.yml';
import ulData from 'sous-components-twig/01-atoms/lists/ul.yml';
import olData from 'sous-components-twig/01-atoms/lists/ol.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const definitionList = () => (
  <div dangerouslySetInnerHTML={{ __html: dl(dlData) }} />
);
export const unorderedList = () => (
  <div dangerouslySetInnerHTML={{ __html: ul(ulData) }} />
);
export const orderedList = () => (
  <div dangerouslySetInnerHTML={{ __html: ol(olData) }} />
);
