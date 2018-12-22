import React from 'react';
import PropTypes from 'prop-types';

import CampaignList from './campaignsList/CampaignsList';

export default function Dashboard(props) {
  return (
    <div>

      <CampaignList />
    </div>
  );
}

Dashboard.propTypes = {

};
