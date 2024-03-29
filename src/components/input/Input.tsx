import { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from './Input.module.css'
import { eventNames } from "process";

interface InputProps{
  onMessageSend: (message: string) => void
}

export function Input({onMessageSend}:InputProps) {
    const [input, setInput] = useState('');  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
    }
    const handleMessageSend = () =>{
      if(!input) return
      onMessageSend(input)
      setInput('')
    } 
    const handleEnterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key !== 'Enter') return

      handleMessageSend()
    }
    return(
        <>
            <input
              value={input}
              onChange={(event) => handleInputChange(event)}
              onKeyDown={(event) => handleEnterPressed(event)}
              type='text'
              placeholder='Enter your message'
              className='bg-gray-200 rounded-2xl py-2 px-3 w-full'
            />
            <svg
              className={`w-7 h-7 fill-white bg-blue-700 rounded-full p-1 flex justify-center items-center absolute top-[14px] right-[30px] ${styles.sendIcon}`}
              viewBox='0 0 20 20'
              onClick={handleMessageSend}
            >
              <path d='M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z'></path>
            </svg>
            
        </>
    );
}