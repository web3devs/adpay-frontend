import React from 'react';
import PropTypes from 'prop-types';

import CampaignCard from '../campaignCard/CampaignCard';
import image1 from '../../../public/images/EZ-tour.png';

const cardsData = [
  {
    title: 'EZ-Tour',
    date: 'October 25, 2017',
    picture: image1,
    videoM4a: "https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.mp4",
    videoWebm: "https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.webm",
    viewN: 5,
    funded: 3.78,
    price: .001,
    paid: .005,
  },
  {
    title: 'Nectar Matress',
    date: 'October 25, 2017',
    picture: '',
    videoM4a: '',
    videoWebm: "https://www.youtube.com/6e934cf7-6087-4310-99fa-9f18a327752c",
    viewN: 5,
    funded: 3.78,
    price: .001,
    paid: .005,
  },
  {
    title: 'Ghost - Delta Heavy',
    date: 'October 25, 2017',
    picture: '',
    videoM4a: '',
    videoWebm: "https://www.youtube.com/0bd43c72-2208-47fc-af42-70b51e7f805d",
    viewN: 5,
    funded: 3.78,
    price: .001,
    paid: .005,
  },
];


export default function CampaignList(props) {
  const list = cardsData.map((card) => {
    return <CampaignCard
      key={card.title} // TODO use Id
      title={card.title}
      date={card.date}
      picture={card.picture}
      videoM4a={card.videoM4a}
      videoWebm={card.videoWebm}
      viewN={card.viewN}
      funded={card.funded}
      price={card.price}
      paid={card.paid}
    />
  })
  return (
    <div>
      {list}
    </div>
  );
}

CampaignList.propTypes = {

};
