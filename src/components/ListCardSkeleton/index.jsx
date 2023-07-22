import './styles.css';

export const ListCardSkeleton = () => {
    const numberCards = 20;
    const skeletonList = Array.from({ length: numberCards }, (_, index) => index);
  
    return (
        <>
            {
                skeletonList.map((index) => (
                    <CardSkeleton key={index} />
                ))
            }
        </>
    );
};



const CardSkeleton = () => {

    return (
        <div className='bg-red cursor-pointer w-56 rounded-lg border'>
            <figure className='relative w-full'>
                <img 
                    className='w-full bg-loading rounded-tl-lg rounded-tr-lg h-60' 
                />
            </figure>

            <p className='flex justify-between p-2 py-4 items-center'>
                <span className='text-sm font-light w-20 h-5 bg-loading'></span>
                <span className='text-lg font-medium w-10 h-5 bg-loading'></span>
            </p>
        </div>
    );
}


