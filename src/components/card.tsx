export default function Card(){
    return(
        <div>
            <section className="card-feature-section">
                <div className="card-feature-grid">
                    <div className="card-text-column">
                        <h2>O melhor cartão para<br/>seu perfil</h2>
                        <p>Sem anuidade, sem tarifas abusivas e<br/>cheio de vantagens.</p>
                        <button className="btn-conheca">Conheça o Cartão Nubank</button>
                    </div>
                    <div className="card-image-column">
                        <div className="white-card-bg">
                            <img src="/images/card.webp" alt="Cartões Nubank" />
                        </div>
                    </div>
                </div>
                </section>
        </div>
    )
}