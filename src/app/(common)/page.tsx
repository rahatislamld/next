'use client';
import Imageswiper from '@/components/imageswiper/Imageswiper';
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
        <div className='flex max-w-[500px] flex-col py-[100px] text-center'>
          <h4
            className='text-white'
            style={{ fontSize: '64px', lineHeight: '70px' }}
          >
            Elevate Your
          </h4>
          <p
            className='text-orange-500'
            style={{
              fontSize: '64px',
              lineHeight: '70px',
              whiteSpace: 'nowrap',
            }}
          >
            Living Experience
          </p>
          <br />
          <br />
          <div className='tracking-wider text-white'>
            Embark on a journey where sophistication meets serenity. Our
            meticulously curated real estate offerings redefine the essence of
            home, providing not just a residence but an elevated lifestyle.
          </div>
          <div className='mt-4 flex items-center justify-center gap-x-4'>
            <div
              className='flex items-center rounded-lg bg-gray-200 p-0'
              style={{ paddingLeft: '35px', paddingRight: '5px' }}
            >
              <div className='bg-white-600 mr-10 flex h-12 w-12 items-center justify-center rounded-full text-black'>
                (02)61890388
              </div>
              <button
                type='button'
                className='inline-flex items-center gap-x-2 rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
        {/* carousel div */}
        <div className='carousel'>
          {/* Add your carousel component or content here */}
          <Imageswiper />
        </div>
      </div>

      {/* services sections */}
      <div className='bg-custom-gray flex h-[840px] w-full flex-col items-center justify-center'>
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
                  className='flex cursor-pointer flex-col items-center gap-y-2 rounded-xl bg-white p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105'
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
                className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#022950] p-4 text-white underline-offset-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-orange-500 hover:underline'
              >
                <h2 className='text-center text-xl font-semibold'>
                  12+ Services{' '}
                </h2>
                <p className='text-center'>You Can explore</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* map sections */}
      <div className='w-full'></div>
      {/* who we are section */}

      <div className='relative h-[983px] w-full bg-gray-200'>
        <br />
        <br />
        <br />

        <div className='absolute flex w-full justify-center'>
          <h3 className='font-inter text-2xl font-bold leading-7 text-orange-500'>
            Who we are?
          </h3>
        </div>

        <div className='absolute flex w-full'>
          <div className='w-1/2'>
            <div className='w-713 h-369 top-396 font-inter absolute left-16 text-base font-normal leading-7 text-white'>
              Welcome to AmarNeer, where innovation meets real estate
              excellence. As industry leaders, we redefine the way you
              experience property. With a commitment to integrity and client
              satisfaction, we specialize in delivering tailored solutions that
              transform houses into dream homes and investments into success
              stories. At AmarNeer, we don&#39;t just sell properties; we craft
              experiences and build lasting relationships. Join us in shaping
              the future of real estate – where your vision becomes our mission.
            </div>
          </div>

          <div className='w-1/2'>
            <img
              src='/who.svg'
              className='top-245 absolute right-16 h-[598px] w-[457px]'
            />
          </div>
        </div>
      </div>

      <div className='who-we-are'></div>
      <div className='h-[710px] w-full items-center bg-blue-900'>
        <div className='relative top-16 ml-[.375rem] flex items-center justify-center'>
          <div className='flex h-[225px] w-[628px] flex-col items-center justify-center py-[100px]'>
            <div className='font-inter leading-29 text-center text-[24px] font-extrabold font-semibold text-orange-500'>
              Do you want to sponsor us?
            </div>
            <br />
            <div className='font-inter h-[96px] w-[628px] text-center text-base font-normal leading-8 text-white'>
              Embark on a journey where sophistication meets serenity. Our
              meticulously curated real estate offerings redefine the essence of
              home, providing not just a residence but an elevated lifestyle.
            </div>
            <br />
            <div className='mt-4 flex justify-center gap-4'>
              <button className='flex h-[52px] w-[193px] items-center justify-center gap-4 rounded-lg border border-blue-300 bg-blue-900 p-4 text-white'>
                Login
              </button>
              <button className='flex h-[52px] w-[193px] items-center justify-center gap-4 rounded-lg border border-orange-300 bg-orange-500 p-4'>
                Sign Up
              </button>
            </div>
            {/* Horizontal Line */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='items-centertop-420 flex flex flex h-[163px] w-[888px]  flex-row justify-center gap-52 '>
          <div className='order-0 flex h-[157.39px] w-[128px] flex-grow-0 flex-col items-center'>
            <img
              src='/applogo.svg'
              alt='Logo'
              className='h-[120.41px] w-[73.02px]'
            />
            <p className='mt-2 text-center text-white'>AmarNeer</p>
          </div>
          <div className='flex h-[163px] w-[301px] flex-col items-start gap-6'>
            <div className='font-inter h-[19px] w-[48px] text-base font-semibold leading-4 text-white'>
              About
            </div>

            <div className='font-inter h-[120px] w-[302px] text-base font-normal leading-6 text-white'>
              Welcome to AmarNeer, where innovation meets real estate
              excellence. As industry leaders, we redefine the way you
              experience property.
            </div>
          </div>
          <div className='flex h-[147px] w-[192px] flex-col items-start gap-6'>
            <div className='font-inter h-[19px] w-[63px] text-base font-semibold leading-4 text-white'>
              Support
            </div>
            <div className='flex h-[104px] w-[193px] flex-col items-start gap-4'>
              <div className='font-inter h-[24px] w-[193px] text-base font-normal leading-6 text-white'>
                Support Request
              </div>
              <div className='font-inter h-[24px] w-[193px] text-base font-normal leading-6 text-white'>
                Contact Us
              </div>
              <div className='font-inter h-[24px] w-[193px] text-base font-normal leading-6 text-white'>
                Help Centre
              </div>
            </div>
          </div>
          <div className=' ml-auto flex h-[67px] w-[111px] flex-col items-start gap-[16px]'>
            <div className='font-inter order-0 h-[19px] w-[73px] flex-none font-semibold text-white'>
              Follow us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
