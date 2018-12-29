import React from 'react';
import PropTypes from 'prop-types';

import CampaignCard from '../campaignCard/CampaignCard';
import image1 from '../../../public/images/EZ-tour.png';

const cardsData = [
  {
    title: 'EZ-Tour',
    date: 'October 25, 2017',
    picture: image1,
    videoM4a:
      'https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.mp4',
    videoWebm:
      'https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.webm',
    viewN: 5,
    funded: 3.78,
    price: 0.001,
    paid: 0.005,
  },
  {
    title: 'Nectar Matress',
    date: 'October 25, 2017',
    iFrame: true,
    videoM4a: '',
    videoWebm: 'https://www.youtube.com/embed/8r1F5lJgtOs',
    viewN: 5,
    funded: 3.78,
    price: 0.001,
    paid: 0.005,
  },
  {
    title: 'Delta Heavy - Ghost',
    date: 'October 25, 2017',
    iFrame: true,
    videoM4a: '',
    videoWebm: 'https://www.youtube.com/embed/b4taIpALfAo',
    viewN: 5,
    funded: 3.78,
    price: 0.001,
    paid: 0.005,
  },
];

export default function CampaignList(props) {
  const list = cardsData.map(card => {
    return (
      <CampaignCard
        key={card.title} // TODO use Id
        title={card.title}
        date={card.date}
        iFrame={card.iFrame}
        picture={card.picture}
        videoM4a={card.videoM4a}
        videoWebm={card.videoWebm}
        viewN={card.viewN}
        funded={card.funded}
        price={card.price}
        paid={card.paid}
      />
    );
  });
  return <div>{list}</div>;
}

CampaignList.propTypes = {};
