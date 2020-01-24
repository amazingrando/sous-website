import React from 'react';

// Parent Components
import card from 'sous-components-twig/02-molecules/card/card.twig';
// Parent Data
import cardData from 'sous-components-twig/02-molecules/card/card.yml';
import cardBgData from 'sous-components-twig/02-molecules/card/card-bg.yml';

// Child Components
import childCardTwig from './child-card.twig';
// Child Data
import childCardData from './child-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />;
export const cardWithBackground = () => (
  <div dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }} />);
export const childCard = () => <div dangerouslySetInnerHTML={{ __html: childCardTwig(childCardData) }} />;
