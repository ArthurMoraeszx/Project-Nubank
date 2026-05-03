import { useState } from "react"

export default function Hero(){
    const[cpf, setCpf] = useState('')

    return(
        <section className="hero">
            <div className="hero-content">
                <div className="hero-display">
                    <h1>Seja qual for o seu 
                        problema, o Nubank tem 
                        uma solução</h1>
                </div>
                <div className="hero-card">
                    <p>Peça seu Cartão de Crédito e sua Conta do Nubank</p>
                    <input type="text" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <button className="btn-continuar">
                        Continuar <span>→</span>
                    </button>
                </div> 
            </div> 
        </section>
    )
}