

export const SearchProducts = ({ searchValue, setSearchValue }) => {

    const inputChange = ( event ) => {
        const { value } = event.target;
        setSearchValue( value );
    }

    return (
        <div className="p-6 mb-4">
            <input 
                className  ="w-80 h-10 rounded-lg text-center border border-gray-300 focus:border-lime-500"
                type       ="text" 
                placeholder="Search Products"
                onChange   ={ inputChange }
                value      ={ searchValue }
            />
        </div>
    );
}
