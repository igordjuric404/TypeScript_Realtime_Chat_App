interface AvatarProps{
    author: string;
}
export function Avatar({author}: AvatarProps) {
    const initials = () => {
        return author.split(' ').map(word => word[0]).join('').toUpperCase()

    }
    return(
        <div className='border rounded-full w-8 h-8 flex justify-center items-center font-semibold p-5'>
            <span>{initials()}</span>
        </div>
    );
}