import React from 'react';
import { useEffect } from '@storybook/client-api';

import breadcrumb from 'sous-components-twig/02-molecules/menus/breadcrumbs/breadcrumbs.twig';
import inlineMenu from 'sous-components-twig/02-molecules/menus/inline/inline-menu.twig';
import mainMenu from 'sous-components-twig/02-molecules/menus/main-menu/main-menu.twig';
import socialMenu from 'sous-components-twig/02-molecules/menus/social/social-menu.twig';

import breadcrumbsData from 'sous-components-twig/02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import inlineMenuData from 'sous-components-twig/02-molecules/menus/inline/inline-menu.yml';
import mainMenuData from 'sous-components-twig/02-molecules/menus/main-menu/main-menu.yml';
import socialMenuData from 'sous-components-twig/02-molecules/menus/social/social-menu.yml';

import 'sous-components-twig/02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => (
  <div dangerouslySetInnerHTML={{ __html: breadcrumb(breadcrumbsData) }} />);
export const inline = () => (
  <div dangerouslySetInnerHTML={{ __html: inlineMenu(inlineMenuData) }} />);
export const main = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: mainMenu(mainMenuData) }} />;
};
export const social = () => (
  <div dangerouslySetInnerHTML={{ __html: socialMenu(socialMenuData) }} />);
