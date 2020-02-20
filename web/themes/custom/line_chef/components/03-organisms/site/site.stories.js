import React from 'react';
import { useEffect } from '@storybook/client-api';

import footerTwig from 'sous-components-twig/03-organisms/site/site-footer/site-footer.twig';
import siteHeader from 'sous-components-twig/03-organisms/site/site-header/site-header.twig';

import footerSocial from 'sous-components-twig/02-molecules/menus/social/social-menu.yml';
import footerMenu from 'sous-components-twig/02-molecules/menus/inline/inline-menu.yml';
import breadcrumbData from 'sous-components-twig/02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenubData from 'sous-components-twig/02-molecules/menus/main-menu/main-menu.yml';
import siteHeaderData from 'sous-components-twig/03-organisms/site/site-header/site-header.yml';

import 'sous-components-twig/02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: footerTwig({ ...footerSocial, ...footerMenu }),
    }}
  />
);
export const header = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: siteHeader({
          ...breadcrumbData,
          ...mainMenubData,
          ...siteHeaderData,
        }),
      }}
    />
  );
};
