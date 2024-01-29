import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
};

const Header = () => {
  return (
    <header>
      <Link href='/'>
      <Image className='header_logo' src="/petlogo.png" alt='ロゴ' width={241} height={108} onClick={returnTop}/>
      </Link>
    </header>
  )
}

export default Header;