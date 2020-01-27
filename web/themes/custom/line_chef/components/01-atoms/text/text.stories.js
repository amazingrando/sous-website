import React from 'react';

import headings from 'sous-components-twig/01-atoms/text/headings/headings.twig';
import blockquote from 'sous-components-twig/01-atoms/text/text/02-blockquote.twig';
import pre from 'sous-components-twig/01-atoms/text/text/05-pre.twig';
import paragraph from 'sous-components-twig/01-atoms/text/text/03-inline-elements.twig';

import blockquoteData from 'sous-components-twig/01-atoms/text/text/blockquote.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

export const headingsExamples = () => <div dangerouslySetInnerHTML={{ __html: headings({}) }} />;
export const blockquoteExample = () => (
  <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteData) }} />);
export const preformatted = () => <div dangerouslySetInnerHTML={{ __html: pre({}) }} />;
export const random = () => <div dangerouslySetInnerHTML={{ __html: paragraph({}) }} />;
