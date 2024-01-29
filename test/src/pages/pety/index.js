import Head from 'next/head'
import Image from 'next/image'
import parse from 'html-react-parser';
import { client } from "../../../libs/client";
import Link from 'next/link';
import Header from "../../Components/Layouts/Header";
import Footer from "../../Components/Layouts/Footer";


export default function Pety({pety}) {
  return (
    <div>
      <Header/>
      <h1>ワンちゃんを探す</h1>
      <div className='pety_contents'>
      {pety.map((pety) => (
        <li key={pety.id}>
          <Link href = {`pety/${pety.id}`}>
          <div className='pety_item'>
              <p className='pety_title'>{pety.title}</p>
              <img src = {pety.image.url} />
             {parse(pety.subcontents)}
            </div>
          </Link>
        </li>
      ))}
      </div>
        <Footer/>
    </div>
  )
}

export const getStaticProps = async() => {
  const data = await client.get({
    endpoint:"pety"});
  return {
    props: {
      pety:data.contents,
    },
  };
}