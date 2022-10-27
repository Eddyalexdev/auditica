import {useForm} from 'react-hook-form';

function Login() {

    const {handleSubmit, register, formState:{errors}} = useForm();

    const handleOnSubmit = (values: any) => {
        const {email, password} = values;
        console.log(email, password);
    }

    return (
        <div className="bg-black w-screen h-screen flex items-center justify-center flex-col">  
            <h1 className="font-bold text-3xl uppercase">Login</h1>
            <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col w-80 p-10 gap-5">
                <input type="email" {...register('email', {required: true})} />
                {errors.email && <span>Por favor ingrese un Email</span>}
                <input type="password" {...register('password', {required: true})} />
                {errors.password && <span>El Password es requerido</span>}
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}

export default Login ;