import { ReactNode, useState } from "react";
interface FooterProps{

    children: ReactNode;
}
export function Footer({children}: FooterProps) {
    return(
        <footer className='border-t py-2 px-4 fixed bottom-0 left-0 w-full z-10'>{children}</footer>
    );
}