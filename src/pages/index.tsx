import { Inter } from 'next/font/google';
import { Header } from '../components/header/Header';
import { MessagesContainer } from '../components/chat/messages-container/MessagesContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>

      <Header/>
      <MessagesContainer>
        <span className='text-gray-500 uppercase'>12:12 am</span>

        <p className='self-end bg-blue-600 text-white py-1 px-2 rounded-2xl mb-4'>
          My message
        </p>

        <div className='self-start flex gap-2 mb-1'>
          <div className='border rounded-full w-8 h-8 p-5 flex self-end items-center justify-center'>
            PP
          </div>
          <p className='bg-gray-200 py-1 px-2 rounded-2xl'>Zikina poruka</p>
        </div>
        <div className='self-start flex gap-2 mb-1'>
          <div className='border rounded-full w-8 h-8 p-5 flex self-end items-center justify-center'>
            PP
          </div>
          <p className='bg-gray-200 py-1 px-2 rounded-2xl'>Zikina poruka</p>
        </div>
        <div className='self-start flex gap-2 mb-4'>
          <div className='border rounded-full w-8 h-8 p-5 flex self-end items-center justify-center'>
            PP
          </div>
          <p className='bg-gray-200 py-1 px-2 rounded-2xl max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae
            expedita alias porro sed odit ducimus. Consectetur, magnam odit!
            Quaerat!
          </p>
        </div>
        <p className='self-end bg-blue-600 text-white py-1 px-2 rounded-2xl mb-4'>
          Cao ziko
        </p>
      </MessagesContainer>

      <footer className='border-t py-2 px-4 fixed bottom-0 left-0 w-full z-10'>
        <input
          type='text'
          placeholder='Aa'
          className='bg-gray-200 rounded-2xl py-2 px-3 w-full'
        />
        <svg
          className='w-7 h-7 fill-white bg-blue-700 rounded-full p-1 flex justify-center items-center absolute top-[14px] right-[30px] '
          viewBox='0 0 20 20'
        >
          <path d='M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z'></path>
        </svg>
      </footer>
    </main>
  );
}
