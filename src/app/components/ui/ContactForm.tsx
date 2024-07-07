'use client';

import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { sendEmail } from '@/utils/sendEmail';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      router.replace('/thanks');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto sm:w-[70%] animate-fade-up animate-delay-300 animate-ease-in-out">
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-white'
        >
          お名前
        </label>
        <input
          type='text'
          placeholder='山田 太郎'
          className='placeholder-white/70 w-full rounded-md border bg-white bg-opacity-25 border-gray-300 px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-white'
        >
          メールアドレス
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='placeholder-white/70 w-full rounded-md border border-gray-300 bg-white bg-opacity-25 px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-white'
        >
          お問い合わせ内容
        </label>
        <textarea
          rows={4}
          placeholder='お問い合わせ内容を入力'
          className='placeholder-white/70 w-full resize-none rounded-md border border-gray-300 bg-white bg-opacity-25 px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='flex justify-center'>
        <button className='mx-auto  rounded-md bg-gradient-to-tr from-pink-500 to-[#F56381] shadow-md shadow-white/25 px-8 py-3 text-base font-semibold tracking-[6px] text-white outline-none'>
          送信
        </button>
      </div>
    </form>
  );
};

export default Contact;
