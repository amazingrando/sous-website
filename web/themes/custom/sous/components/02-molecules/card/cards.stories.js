import React from 'react';

import card from 'sous-components-twig/02-molecules/card/card.twig';

import cardData from 'sous-components-twig/02-molecules/card/card.yml';
import cardBgData from 'sous-components-twig/02-molecules/card/card-bg.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />;
export const cardWithBackground = () => (
  <div dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }} />);
