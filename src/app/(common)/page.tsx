'use client';
import Imageswiper from '@/components/imageswiper/Imageswiper';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
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
      <br />
      <br />
      {/* map sections */}

      {/* who we are section */}

      <div className='ml-60 h-[883px] w-[1281px]'>
        <br />

        <h3 className='font-inter text-center text-5xl font-bold leading-7 text-orange-500'>
          <span className='text-[#002F5B]'>Who</span> we are?
        </h3>
        <br />
        <br />
        <br />
        <br />

        <div className='flex w-full flex-row items-center justify-center'>
          <div className='h-[598px] w-2/3 overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 to-green-400'>
            <br />
            <div className='font-inter relative mx-auto  mt-14 flex h-[369px] w-[713px] items-center justify-center text-base text-xl font-normal leading-7 text-white'>
              <br />
              Welcome to AmarNeer, where innovation meets real estate
              excellence. As industry leaders, we redefine the way you
              experience property.
              <br /> <br />
              With a commitment to integrity and client satisfaction, we
              specialize in delivering tailored solutions that transform houses
              into dream homes and investments into success stories.
              <br /> <br />
              At AmarNeer, we dont just sell properties; we craft experiences
              and build lasting relationships. Join us in shaping the future of
              real estate – where your vision becomes our mission.
            </div>
          </div>
          <div className='flex w-1/3 items-center justify-center rounded-3xl bg-white'>
            <img src='/who.svg' className='h-[598px] w-[457px]' />
          </div>
        </div>
      </div>

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
        <div className='top-356 absolute left-[calc(50%-640px)] mt-20 h-0 w-[1380px] border border-gray-300'></div>

        <br />
        <br />
        <br />

        <div className='top-420px absolute left-[calc(50%-444px)] mt-20 flex h-[163px] w-[888px] flex-row items-start gap-[92px]'>
          <div className='right-100 flex flex-col'>
            <img
              src='/applogo.svg'
              alt='Logo'
              className='h-[120.41px] w-[73.02px]'
              style={{ maxWidth: '100%', height: 'auto' }}
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
          <div className='flex h-[67px] w-[111px] flex-col items-start gap-[16px]'>
            <div className='font-inter order-0 h-[19px] w-[73px] flex-none font-semibold text-white'>
              Follow us
            </div>
            <div className='flex h-[32px] w-[112px] flex-row items-start gap-8'>
              <FaFacebook className='h-[32px] w-[32px] text-white' />
              <FaLinkedin className='h-[32px] w-[32px] text-white' />
              <FaWhatsapp className='h-[32px] w-[32px] text-white' />
            </div>
          </div>
          <div className='top-356 absolute left-[calc(50%-640px)] mt-60 h-0 w-[1380px] border border-gray-300'></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
