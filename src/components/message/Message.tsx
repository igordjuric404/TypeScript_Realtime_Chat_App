import { Avatar } from "../avatar/Avatar";

interface MessageProps{
    me: boolean;
    author: string;
    text: string;

}
export function Message({me,author, text}: MessageProps) {
    return (        
        <div className={` ${ me ? 'self-end': 'self-start'} flex gap-2 mb-4 items-center`}>
            {me ? null : <Avatar author={author} className="self-start" />}
            <p className={` ${ me ? ' bg-blue-600 text-white': ' bg-gray-200'} py-1 px-2 rounded-2xl max-w-md h-auto`}>
            {text}
            </p>
        </div>
  );
}