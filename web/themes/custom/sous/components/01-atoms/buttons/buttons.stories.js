import React from 'react';

import Button from './react/Button.component';

// Parent Components
import button from 'sous-components-twig/01-atoms/buttons/twig/button.twig';
// Parent Data
import buttonData from 'sous-components-twig/01-atoms/buttons/twig/button.yml';
import buttonAltData from 'sous-components-twig/01-atoms/buttons/twig/button-alt.yml';
import buttonAlt2Data from 'sous-components-twig/01-atoms/buttons/twig/button-alt2.yml';

// Child Components
import childButtonTwig from './child-button.twig';
// Child Data
import childButtonData from './child-button.yml';

/**
 * Storybook Definition.
 */
export default {
  component: Button,
  title: 'Atoms/Button',
};

export const react = () => <Button>React Button</Button>;

export const twig = () => <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />;
export const twigAlt = () => <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />;
export const twigAlt2 = () => <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />;
export const childButton = () => <div dangerouslySetInnerHTML={{ __html: childButtonTwig(childButtonData) }} />;
