import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import Home from './Home';

describe('<Home />', () => {
  it('renders consistently', async () => {
    const { baseElement } = render(<Home />);
    /**
     * Current snapshot contains no CSS classes normally added by Ionic at runtime
     * If you uncomment the 500ms delay below you'll see that the snapshot test will fail and output shows received DOM contains CSS classes
     */
    // await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve('wait');
    //   }, 500);
    // });
    expect(baseElement).toMatchSnapshot();
  });

  describe('open my modal', () => {
    it('displays my modal', async () => {
      const { getByText, getByTestId } = render(<Home />);
      const button = getByTestId(/openModalButton/) as HTMLIonButtonElement;
      fireEvent.click(button);
      try {
        // Will retry finding IonModal title for 1000ms before failing
        // https://testing-library.com/docs/dom-testing-library/api-async#waitfor
        await waitFor(() => expect(getByText('My Modal')).toBeDefined());
      } catch (e) {
        // Will end up here if IonModal title is not found, notice modal content is missing in DOM output
        // https://testing-library.com/docs/queries/about#screendebug
        screen.debug();
      }
    });
  });
});
