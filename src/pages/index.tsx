import { Inter } from 'next/font/google';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Input } from '../components/input/Input';
import { Message } from '../components/message/Message';
import { MessagesContainer } from '../components/chat/messages-container/MessagesContainer';
import { Time } from '../components/chat/time/Time';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const[socket, setSocket] = useState<Socket>()
  const[messages, setMessages] = useState<array[]>([]);

useEffect(() => {
    socketInit();
    return () => socket?.disconnect();
}, [])

const socketInit = async () => {
  await fetch('api/socket')

  const socket = io()
  setSocket(socket)

  socket.on('new-message-received', (messageObject) => {
    setMessages((messages) => {
      return [...messages, {...messageObject, me: false}]
    })
  })
}

const onMessageSend = (message: string) => {
  const messageObject = {author: 'Igor Đurić', text: message, time: new Date()}
  setMessages((messages) => {
    return [ ... messages, {...messageObject, me: true}]
  })

  socket?.emit('message-created', {author: 'Igor Đurić', text: message, time: new Date()})
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
