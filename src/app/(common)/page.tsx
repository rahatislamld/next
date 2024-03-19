'use client';
import React from 'react';

const Homepage = () => {
  // Sample data for cards
  const cardsInfo = [
    {
      title: 'Building Materials',
      description: 'Discover unmatched Luxury and Comfort in every Home',
      imageUrl: '/buildingmaterials.svg',
    },
    {
      title: 'Saving',
      description: 'Discover unmatched Luxury and Comfort in every Home',
      imageUrl: '/saving.svg',
    },
    {
      title: 'Rent',
      description: 'Discover unmatched Luxury and Comfort in every Home',
      imageUrl: '/rent.svg',
    },
    {
      title: 'Home',
      description: 'Discover unmatched Luxury and Comfort in every Home',
      imageUrl: '/homee.svg',
    },
    {
      title: 'Property Buy or Sell',
      description: 'Discover unmatched Luxury and Comfort in every Home',
      imageUrl: '/propertybuyorsell.svg',
    },
    {
      title: 'Show More',
      description: 'Click to show more',
      imageUrl: 'url_for_show_more_image',
    },
  ];

  // State to keep track of whether to show all cards
  const [showAllCards, setShowAllCards] = React.useState(false);

  // Function to handle click on "Show More" card
  const handleShowMoreClick = () => {
    setShowAllCards(true);
  };

  return (
    <div className='flex w-full flex-col'>
      {/* hero section */}
      <div className='flex w-full flex-col items-center bg-[#022950]'>
        {/* text div */}
        <div className='flex max-w-[400px] flex-col py-[100px] text-center'>
          <h4
            className='text-white'
            style={{ fontSize: '64px', lineHeight: '70px' }}
          >
            Elevate Your
          </h4>
          <div
            className='text-orange-500'
            style={{
              fontSize: '64px',
              lineHeight: '70px',
              whiteSpace: 'nowrap',
              marginLeft: '-60px',
            }}
          >
            Living Experience
          </div>
          <br />
          <br />
          <div className='text-white'>
            Embark on a journey where sophistication meets serenity. Our
            meticulously curated real estate offerings redefine the essence of
            home, providing not just a residence but an elevated lifestyle.
          </div>
          <div className='mt-4 flex items-center justify-center gap-x-4'>
            <div
              className='flex items-center rounded-lg bg-gray-200 p-0'
              style={{ paddingLeft: '35px', paddingRight: '5px' }}
            >
              <div className='bg-white-600 mr-10 flex h-12 w-12 items-center justify-center rounded-full font-semibold text-black'>
                (02)61890388
              </div>
              <button
                type='button'
                className='inline-flex items-center gap-x-2 rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
        {/* carousel div */}
        <div className='carousel'>
          {/* Add your carousel component or content here */}
        </div>
      </div>

      {/* services sections */}
      <div className='bg-custom-gray flex flex h-[840px] w-full flex-col items-center justify-center'>
        <br />
        <br />
        <div className='mb-8 rounded-full bg-orange-100 p-2 text-center'>
          <div className='text-orange-500'>services</div>
        </div>

        <br />
        <h2 className='text-4xl'>
          Our Best <span className='text-orange-500'>Services</span>
        </h2>
        <br />
        <br />
        <div className='h-[640px] w-[984px] '>
          <div className=" 'w-[984px] grid h-[544px] grid-cols-3 gap-[26px] ">
            {cardsInfo
              .slice(0, showAllCards ? cardsInfo.length : 5)
              .map((card, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center gap-y-2 rounded-xl bg-white p-4 shadow-xl'
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className='h-[76px] w-[76px] rounded-[24px]'
                  />
                  <h2 className='text-center text-xl font-semibold'>
                    {card.title}
                  </h2>
                  <p className='text-center text-gray-600'>
                    {card.description}
                  </p>
                </div>
              ))}
            {!showAllCards && (
              <div
                onClick={handleShowMoreClick}
                className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#022950] p-4 shadow-md'
              >
                <h2 className='text-center text-xl font-semibold text-white'>
                  12+ Services{' '}
                </h2>
                <p className='text-center text-white '>You Can explore</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* map sections */}
      <div className='map'></div>
      {/* who we are section */}
      <div className='who-we-are'>
        {/* Add your "who we are" section content here */}
      </div>
    </div>
  );
};

export default Homepage;
