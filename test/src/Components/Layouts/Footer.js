import React from 'react';
import Image from "next/image";


 const Footer = () => {
  return (
    <footer>
      <Image className='footer_logo' src='/petlogo.png' alt='ロゴ' width={241} height={108}/>
      <small>Copyright© 2023 PET All Rights Reserved.</small>
    </footer>
  )
}

export default Footer;
