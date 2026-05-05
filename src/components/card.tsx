export default function Card(){
    return(
        <div>
            <section className="card-feature-section">
                <div className="card-feature-grid">
                    
                    {/* Coluna 1: Conteúdo de Texto */}
                    <div className="card-text-column">
                    <h2>O melhor cartão para<br/>seu perfil</h2>
                    <p>Sem anuidade, sem tarifas abusivas e<br/>cheio de vantagens.</p>
                    
                    <button className="btn-conheca">Conheça o Cartão Nubank</button>
                    </div>

                    {/* Coluna 2: Container da Imagem */}
                    <div className="card-image-column">
                    <div className="white-card-bg">
                        {/* Lembre-se de colocar a imagem na pasta public/images */}
                        <img src="/images/card.webp" alt="Cartões Nubank" />
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}