import React from 'react';

import grid from 'sous-components-twig/03-organisms/grid/grid.twig';

import gridData from 'sous-components-twig/03-organisms/grid/grid.yml';
import gridCardData from 'sous-components-twig/03-organisms/grid/grid-cards.yml';
import gridCtaData from 'sous-components-twig/03-organisms/grid/grid-ctas.yml';
import gridEventCardData from 'sous-components-twig/03-organisms/grid/grid-event-cards.yml';
import gridNewsCardData from 'sous-components-twig/03-organisms/grid/grid-news-cards.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const defaultGrid = () => (
  <div dangerouslySetInnerHTML={{ __html: grid(gridData) }} />
);
export const cardGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCardData }) }}
  />
);
export const ctaGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCtaData }) }}
  />
);
export const eventCardGrid = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: grid({ ...gridData, ...gridEventCardData }),
    }}
  />
);
export const newsCardGrid = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: grid({ ...gridData, ...gridNewsCardData }),
    }}
  />
);
