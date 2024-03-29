import { ReactNode } from "react";

interface TimeProps{
    children: ReactNode
}
export function Time({children}: TimeProps){
    return (
        <span className='text-gray-500 uppercase'>{children}</span>
    );
}