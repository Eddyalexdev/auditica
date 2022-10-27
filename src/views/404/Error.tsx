import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineAlert} from 'react-icons/ai';

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl flex mb-10">Error "<span className="text-red">404</span>" Not Found <span className="text-red"><AiOutlineAlert /></span></h1>  
        <Link to="/" className="py-2 px-5 bg-red rounded">Volver al Inicio</Link>
    </div>
  )
}

export default Error