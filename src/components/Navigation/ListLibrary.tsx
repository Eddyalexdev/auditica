import React from 'react';
import {useLocation} from 'react-router-dom';
import {GrAddCircle} from 'react-icons/gr';
import {CgLoadbarSound} from 'react-icons/cg';

function ListLibrary() {
    const location = useLocation();

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-grey">{
                    location.pathname === '/' ?
                        'Home':
                        location.pathname.replace('/', '')
                }</span>
                <button>
                    <GrAddCircle size={20}/>
                </button>
            </div>

            <div>
                <ul className="flex flex-col gap-3 text-grey">
                    <li className="flex items-center gap-3 text-red-100">For workplace <CgLoadbarSound size={25} /></li>
                    <li className="flex items-center gap-3">Rich Brian’s collections</li>
                    <li className="flex items-center gap-3">For workplace</li>
                </ul>
            </div>
        </div>
    )
}

export default ListLibrary