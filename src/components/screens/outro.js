import React from 'react';
import { Flex, Box } from 'rebass';

import Page from '../page';
import { H1, H5 } from '../style/headers';
import logo from '../../images/hubspotlogo-web-white.png';

const OutroPage = () => {
  return (
    <Page maxWidth={1050} plain={false} align="center" textAlign="left">
      <Flex>
        <Box width={750} align="center">
          <H1 my={4}>There’s Lots to Love About Vacation.</H1>
          <H5 my={4}>
            Time off from work helps us recharge.<br />
            Whether you relax on the beach, hike a mountain, or spend time with
            family, taking a (guilt-free) vacation makes you better and happier
            at the office.
          </H5>
          <H5 my={4}>
            {`That's why HubSpot's a big fan of flexibility. Our unlimited
            vacation policy (and its OOO messages) is just one way we try to
            create a flexible, inclusive culture.`}
          </H5>
          <img width="250" src={logo} />
        </Box>
      </Flex>
    </Page>
  );
};

export default OutroPage;
