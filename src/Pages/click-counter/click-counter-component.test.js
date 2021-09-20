import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';

import Teleprompter from '../../Teleprompter';

describe('ClickCounter component', async assert => {
    const createCounter = clickCount =>
      render(<ClickCounter clicks={ clickCount } />)
    ;
    {
      const count = 3;
      const $ = createCounter(count);
      assert({
        given: 'a click count',
        should: 'render the correct number of clicks.',
        actual: parseInt($('.clicks-count').html().trim(), 10),
        expected: count
      });
    }
    {
      const count = 5;
      const $ = createCounter(count);
      assert({
        given: 'a click count',
        should: 'render the correct number of clicks.',
        actual: parseInt($('.clicks-count').html().trim(), 10),
        expected: count
      });
    }
  });


