import {AiOutlineSearch} from 'react-icons/ai';

const Filter = () => {
    return (
        <form className="flex justify-center">
            <label className="flex items-center bg-white gap-2 absolute z-10 p-1 w-auto top-4 py-2 px-3 rounded">
                <button>
                    <AiOutlineSearch />
                </button>
                <input type="text" placeholder='Search artists, songs, albums...' className='bg-white w-96'/>
            </label>
        </form>
    )
}

export default Filter;