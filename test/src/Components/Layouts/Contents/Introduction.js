import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import InnerText from '../../Elements/InnerText';
import AnimationTrigger from '@/Components/Elements/AnimationTrigger';

const Introduction = () => {
  return (
    <div className='introduction_contents'>
      <article>
        <section>
            <InnerText h2="「PET」にはこんなワンちゃんがいます!"/>
              <h3>騒がしいワンちゃん</h3>
              <div className='ic_image_reus'>
                <AnimationTrigger class="ic_image1" src="/petimg/reus/reus5.png"/>
                <AnimationTrigger class="ic_image2" src="/petimg/reus/reus2.png"/>
                <AnimationTrigger class="ic_image3" src="/petimg/reus/reus6.png"/>
                </div>
              
              <h3>大人しいワンちゃん</h3>
              <div className='ic_image_thina'>
              <AnimationTrigger class="ic_image1" src="/petimg/thina/thina1.png"/>
              <AnimationTrigger class="ic_image2" src="/petimg/thina/thina2.png"/>
              <AnimationTrigger class="ic_image3" src="/petimg/thina/thina4.png"/>
              </div>
              
                <div className='ic_button'>
              <button>
                <Link href='/pety'>PETを探す　＞</Link>
              </button>
              </div>
              <p>性格は様々ですが、どの子も良い子です。ぜひとも「PET」のワンちゃんたちをみていってください!</p>
        </section>
      </article>
    </div>
  )
}

export default Introduction;
