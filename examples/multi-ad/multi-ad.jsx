'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import VastPlayer from '../../index.js';
import request from 'browser-request';

const videoOptions = {
  autoPlay: false,
  disableControls: true,
};

request('../../test/data/multi-ad.xml', (err, xml) => (
    ReactDOM.render(
      <VastPlayer
        height={1080}
        width={1920}
        vastXml={xml.body}
        videoOptions={videoOptions}
      />,
      document.getElementById('example')
    )
  )
);
