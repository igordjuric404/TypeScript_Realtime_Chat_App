import { Avatar } from "../avatar/Avatar";

interface MessageProps{
    me: boolean;
    author: string;
    text: string;
    lastInSequence: boolean;
}
export function Message({me,author, text, lastInSequence}: MessageProps) {
    return (        
        <div className={` ${ me ? 'self-end': 'self-start'}
        ${lastInSequence ? 'mb-4' : 'mb-1'}
        flex gap-2 mb-4 items-center`}>
            {!me && (
                <Avatar 
                author={author} 
                className={`self-end ${!lastInSequence && 'opacity-0'}`} 
                />
            )}
            <p className={` ${ me ? ' bg-blue-600 text-white': ' bg-gray-200'} py-1 px-2 rounded-2xl max-w-md h-auto`}>
            {text}
            </p>
        </div>
  );
}