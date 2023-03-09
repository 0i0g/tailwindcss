import styled from '@emotion/styled';
import { sectionHeroData } from 'src/sections/carousel/data';
import { ButtonPrimary } from 'src/shared/button';
import NcImage from 'src/shared/image/NcImage';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const Darken = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const SectionHero = () => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    navigation={true}
    loop={true}
  >
    {sectionHeroData.map((item, index) => (
      <SwiperSlide key={index} className='cursor-grab active:cursor-grabbing'>
        <Darken />
        <NcImage className='-z-50 h-[500px] w-full object-cover' src={item.image} />
        <Content>
          <div className='container mx-auto flex h-full items-center'>
            <div className=''>
              <h1 className='mb-10 text-[50px] font-bold text-white'>{item.title}</h1>
              <p className='text-white'>{item.subtitle}</p>
              {/* button */}

              <div className='mt-20'>
                <ButtonPrimary href={item.link} className='!py-2'>
                  More
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </Content>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SectionHero;
