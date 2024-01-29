import React from 'react';
import InnerText from '../../../Elements/InnerText';
import Image from "next/image";
import AnimationTriggerParallax from '../../../Elements/AnimationTriggerPrallax';
import PreparationFst from './PreparationFst';
import PreparationSnd from './PreparationSnd';
import PreparationTrd from './PreparationTrd';
import PreparationFth from './PreparationFth';
import PreparationSummarize from './PreparationSummarize';


const Preparation = () => {
  return (
    <div>
      <article>
      <div className='Preparation_contents'>
        <section>
        <InnerText h2="ペットを飼う前にする準備"
          p={`さて、もうすぐ家にワンちゃんが来る！でも準備はちゃんとできていますか？\n初めて家を訪れる犬が、快適な生活を送れるように、必要なものがあればできるだけ前もって準備してあげたいものです。\n下記にはワンちゃんを迎えるために必要だけど忘れがちな物をまとめています。よければみていってください。`}
        />
        </section>
        <div className='sticky_wrap'>
          <AnimationTriggerParallax class="pre_image1" src="/petimg/reus/reus7.png"/>
          <AnimationTriggerParallax class="pre_image2" src="/petimg/thina/thina7.png"/>
          <AnimationTriggerParallax class="pre_image1" src="/petimg/reus/reus8.png"/>
          <AnimationTriggerParallax class="pre_image2" src="/petimg/thina/thina8.png"/>
          <AnimationTriggerParallax class="pre_image1" src="/petimg/reus/reus9.png"/>
        </div>

        
        <PreparationFst/>
        <PreparationSnd/>
        <PreparationTrd/>
        <PreparationFth/>
        <PreparationSummarize/>
        </div>
        </article>

    </div>
  )
}

export default Preparation;
