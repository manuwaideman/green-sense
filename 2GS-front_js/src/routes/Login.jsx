import { useState } from 'react';
import '../css/style.css';
import logo from '../images/logo2.png';

function Login() {

    //Hook- useState

    const [usuario, setUsuario] = useState({
        usuario: "",
        senha: "",
    })
    //função para pegar os dados passando em name e value 

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if (response.ok) {
                const users = await response.json();
                //varrendo todos os usuarios


                let user = null;

                for (let i = 0; i < users.length; i++) {
                    const use = users[i];
                    //validando o usuario e senha
                    if (use.usuario == usuario.usuario && use.senha == usuario.senha) {
                        user = use;
                        break;
                    }
                }

                if (user) {
                    sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                    setTimeout(() => {
                        window.location = '/home';
                    }, 3000)
                } else {
                    //se o usuario e senha for invalidos
                    alert("Usuário e/ou senha inválidos.")
                    //limpa os campos
                    setUsuario({
                        usuario: "",
                        senha: "",
                    });
                    //volta para a tela de login
                    window.location = "/login";
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <header className='cabecalho'>
                <img className="logo" src={logo} alt="Logo" />
                <div className="text-gs">
                    <p>Global Solution 2023 - Engenharia de Software</p>
                </div>
            </header>

            <div className='login-container'>
                <form onSubmit={handleSubmit} class='login-form'>

                    <div>
                        <label htmlFor="idUsuario">Usuário</label>
                        <input
                            type="text"
                            name="usuario"
                            value={usuario.usuario}
                            placeholder="Digite seu usuário"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            value={usuario.senha}
                            placeholder="Digite sua senha"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Login&gt;&gt;</button>

                </form>

            </div>

        </>
    )
}

export default Login