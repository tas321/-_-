import React from 'react';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const AnimationTriggerParallax = (props) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-150px', // ref要素が現れてから〇〇px過ぎたら
    triggerOnce: false, // 最初の一度だけ実行
  });

  
  return (
    <div>
      {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります  */}
      <div ref={ref} style={{ height: '200px' , width: '100px'}}>
        {inView && (
          <div className="animate__parallax">
                <Image className={props.class} src={props.src} alt='犬の写真' width={800} height={800}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationTriggerParallax;