import React from 'react';

// Core Components
import card from 'sous-components-twig/02-molecules/card/card.twig';
// Core Data
import cardData from 'sous-components-twig/02-molecules/card/card.yml';
import cardBgData from 'sous-components-twig/02-molecules/card/card-bg.yml';

// Project Components
import lcCardTwig from './lc-card.twig';
// Project Data
import lcCardData from './lc-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
);
export const cardWithBackground = () => (
  <div
    dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }}
  />
);
export const lineChefCard = () => (
  <div dangerouslySetInnerHTML={{ __html: lcCardTwig(lcCardData) }} />
);
