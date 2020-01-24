import React from 'react';
import { useEffect } from '@storybook/client-api';

import 'sous-components-twig/02-molecules/menus/main-menu/main-menu';

import articleTwig from 'sous-components-twig/05-pages/content-types/article.twig';

import mainMenuData from 'sous-components-twig/02-molecules/menus/main-menu/main-menu.yml';
import breadcrumbData from 'sous-components-twig/02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import socialMenuData from 'sous-components-twig/02-molecules/menus/social/social-menu.yml';
import footerMenuData from 'sous-components-twig/02-molecules/menus/inline/inline-menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Content Types' };

export const article = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: articleTwig({
          page_layout_modifier: 'contained',
          ...mainMenuData,
          ...breadcrumbData,
          ...socialMenuData,
          ...footerMenuData,
          card__link__text: 'Click here',
        }),
      }}
    />
  );
};
