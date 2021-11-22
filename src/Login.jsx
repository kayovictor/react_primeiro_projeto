import react from "react";
import './login.css'


export default function Login() {
    return (
        <div className='conteudo'>
            <div className='imagem'>
              <img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-computer-screen-illustration-with-smile-emoticons-computer-vector-illustration-for-web-png-image_5063282.jpg' />  
            </div> 
            <section>
                <h1>Member Login </h1>
                <form action="">
                    <input type='email' placeholder='E-mail' />
                    <br />
                    <input type='password' placeholder='Password' maxLength='4' />
                    <br />
                    <button>Login</button>
                    <p className='paragrafo'>Esqueceu sua senha? <a href='#'>Clique aqui</a></p>
                    <p className='embaixo'>© Aieychan Karoline</p>
                </form>
            </section>
        </div>
    )
}