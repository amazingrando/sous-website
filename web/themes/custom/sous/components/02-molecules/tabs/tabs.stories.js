import React from 'react';
import { useEffect } from '@storybook/client-api';

import tabs from 'sous-components-twig/02-molecules/tabs/tabs.twig';

import tabData from 'sous-components-twig/02-molecules/tabs/tabs.yml';

import 'sous-components-twig/02-molecules/tabs/tabs';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tabs' };

export const JSTabs = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: tabs(tabData) }} />;
};
