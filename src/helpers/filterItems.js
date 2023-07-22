
export const filterItems = ( items=[], filterField='', searchValue='' ) => {

    const filterFieldValues = ['title', 'category'];

    const isValidFilterField = filterFieldValues.includes(filterField);

    if( !isValidFilterField ) throw new Error('Invalid filter field.');

    const searchedItems = items?.filter( item => 
        {   
            if( filterField === 'title'){
                return item.title.toLowerCase().includes( searchValue.toLowerCase() );

            }else if( filterField === 'category' ){
                return item.category.name.toLowerCase().includes( searchValue.toLowerCase() );
            }
        }
    );

    return searchedItems;
}


