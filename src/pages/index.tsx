import { Inter, Noto_Serif_SC } from 'next/font/google';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Input } from '../components/input/Input';
import { Message } from '../components/message/Message';
import { MessagesContainer } from '../components/chat/messages-container/MessagesContainer';
import { Time } from '../components/chat/time/Time';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const[messages, setMessages] = useState([
    {
      me: true,
      author: 'Igor Đurić',
      text: 'E igore',
      time: new Date(),
    },

    {
      me: false,
      author: 'Igor Đurić',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: new Date(),
    },
    {
      me: false,
      author: 'Igor Đurić',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: new Date(),
    },

    {
      me: true,
      author: 'Igor Đurić',
      text: 'Šta pričaš ti?',
      time: new Date(),
    },

    {
      me: false,
      author: 'Igor Đurić',
      text: 'Nista',
      time: new Date(),
    }

  ]);
const onMessageSend = (message: string) => {
  setMessages((messages) => {
  return [ ... messages, {me: true, author: 'Igor Đurić', text: message, time: new Date()}]
  })
}

  return (
    <main>

      <Header/>
      <MessagesContainer>
      <Time><span>11:11pm</span></Time>
      {messages.map((message, index) => {
        const lastInSequence = message.me !== messages[index+1]?.me;
        return(
          <Message
            key={index}
            me={message.me} 
            author={message.author}
            text={message.text} 
            lastInSequence={lastInSequence}
          />
        )
      })}

      </MessagesContainer>

      <Footer>
        <Input onMessageSend={onMessageSend} />
      </Footer>
    </main>
  );
}
