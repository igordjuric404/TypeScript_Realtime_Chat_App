import { ReactNode } from "react";

interface MessagesContainerProps{
    children: ReactNode
}
export function MessagesContainer({children}: MessagesContainerProps){
    return (
        <section className='flex flex-col items-center py-2 px-4 max-w-3xl mx-auto messages'>
            {children}
        </section>  
    );
}