import React from 'react'
import Introduction from './Contents/Introduction';
import Preparation from './Contents/Preparation/Preparation';
import ImageSwiper from "../Elements/Swiper";

const Main = () => {
  return (
    <main>
      <ImageSwiper/>
      <h1 className='top_h1'>ペットとこれからの人生を</h1>
      <Introduction/>
      <Preparation/>
    </main>
  )
}

export default Main;
