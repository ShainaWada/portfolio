import Link from 'next/link';
import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";

const thanks = () => {
  return (
    <section className='flex min-h-lvh flex-col items-center justify-center gap-8 p-4 text-white'>
      <MdOutlineMarkEmailRead className='size-32' />
      <div className='text-center'>
        <p className='text-[clamp(1rem,0.273rem+3.64vw,3rem)] font-extrabold'>お問い合わせありがとうございます。</p>
        <p className='text-[clamp(0.5rem,-0.045rem+2.73vw,2rem)]'>ご入力いただいた内容を確認後、3日営業以内に返信いたします。</p>
      </div>
      <Link href={"/"} className="rounded-full bg-gradient-to-tr from-[#ff43a1] via-[#ff57ae] to-[#ff7b93] p-3 text-white transition-opacity hover:opacity-70 md:p-6" >トップページへ戻る</Link>
    </section>
  )
}

export default thanks
