import React from 'react'
import GoogleIcon from '../assets/GoogleIcon'

const Login = () => {
  return (
    <div>
        <section>
            <h1>Bienvenido a DDrop</h1>
            <p>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</p>
        </section>
        <section>
            <button><GoogleIcon/> Login con Google</button>
        </section>
    </div>
  )
}

export default Login