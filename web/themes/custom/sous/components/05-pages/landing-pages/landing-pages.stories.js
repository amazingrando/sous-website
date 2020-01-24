import React from 'react';
import { storiesOf } from '@storybook/react';
import { hrefTo } from '@storybook/addon-links';
import { useEffect } from '@storybook/client-api';

import 'sous-components-twig/sous-components-twig/02-molecules/menus/main-menu/main-menu';

import home from 'sous-components-twig/05-pages/landing-pages/home.twig';

import mainMenuData from 'sous-components-twig/sous-components-twig/02-molecules/menus/main-menu/main-menu.yml';
import breadcrumbData from 'sous-components-twig/sous-components-twig/02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import socialMenuData from 'sous-components-twig/sous-components-twig/02-molecules/menus/social/social-menu.yml';
import footerMenuData from 'sous-components-twig/sous-components-twig/02-molecules/menus/inline/inline-menu.yml';

/**
 * Storybook Definition.
 */
hrefTo('Pages/Content Types', 'Article').then((url) => {
  // TODO: Can't figure out how to link pages with hrefTo and storiesOf.
  storiesOf('Pages/Landing Pages', module)
    .add('Home', () => {
      useEffect(() => Drupal.attachBehaviors(), []);
      return (
        <div dangerouslySetInnerHTML={{
          __html: home({
            page_layout_modifier: 'contained',
            ...mainMenuData,
            ...breadcrumbData,
            ...socialMenuData,
            ...footerMenuData,
            card_link_url: url,
            card__link__text: 'Click here',
          }),
        }}
        />
      );
    });
});