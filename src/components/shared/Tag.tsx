type TagType = 'nuevo' | 'agotado';

interface Props {
    contentTag: TagType;

}


const getTagColor = (content : TagType) =>{
    const lowerContent = content.toLocaleLowerCase();
    if(lowerContent === 'nuevo') return 'bg-blue-500';
    if(lowerContent === 'agotado') return 'bg-black-500';

    return 'bg-gray-500';
}
export const Tag = ({contentTag}: Props) => {
    return (
    <div
        className={`text-white w-fit px-2${getTagColor(contentTag)}`} >
        <p className="uppercarse text-xs font-medium"></p>
    </div>
    );
}