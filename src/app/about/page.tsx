import React from 'react'
import Image from 'next/image'
import img from "../../../public/web-illustration.png";

const About = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full gap-12 md:flex-row md:items-center text-white'>
        <Image src={img} alt='' width={350} height={350} className='mb-3 max-w-[70%] h-auto' />
        <div>
          <p className='mb-2'>こんにちは！<br />自称フロントエンドエンジニアのshainaです。日本とフィリピンのハーフで英語、タガログ語、日本語の3国語話せます。千葉県千葉市在住、チーバくんで言うと喉のら辺です。推しは、愛犬のゴールデンレトリバーのレオです！</p>
          <p>小学5年生から高校卒業までフィリピンに住んでました。その後、日本に戻り2年間ITの専門学校でWebデザイン/Web開発について勉強しました。中でも私は、Next.jsが好きでマスター出来るように勉強に励んでいます。</p>
        </div>
      </div>
    </>
  )
}

export default About
