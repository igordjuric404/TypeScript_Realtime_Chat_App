import { Inter } from 'next/font/google';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Input } from '../components/input/Input';
import { Message } from '../components/message/Message';
import { MessagesContainer } from '../components/chat/messages-container/MessagesContainer';
import { Time } from '../components/chat/time/Time';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>

      <Header/>
      <MessagesContainer>
      <Time><span>11:11pm</span></Time>

        <p className='self-end bg-blue-600 text-white py-1 px-2 rounded-2xl mb-4'>
          E Igore
        </p>

        <Message
        me={false} 
        author="Igor Đurić"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <Message
        me={true} 
        author="Igor Đurić"
        text="Šta pričaš ti?" />
        
        <Message
        me={false} 
        author="Igor Đurić"
        text="Nista" />

      </MessagesContainer>

      <Footer>
        <Input/>
      </Footer>
    </main>
  );
}
