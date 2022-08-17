import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import DataSkill, { Data } from '../constants/dataSkill';

const SlideSkill = () => {
  return (
    <div className="my-8 lg:my-16">
      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={2}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {DataSkill.map((item: Data) => (
          <SwiperSlide key={item.title}>
            <div className="py-6 flex flex-col items-center justify-between">
              <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="my-8 italic font-bold">
                <h1 className="text-xl">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideSkill;
