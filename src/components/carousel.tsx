import { useState } from 'react';
import { type CarouselItem } from '../types/carousel';

const initialItems: CarouselItem[] = [
  { id: 1, title: 'Nu Empresas', subtitle: 'Quero gerenciar meu negócio \ncom facilidade', image: ' images/img1.jpg', buttonText: 'Saiba mais' },
  { id: 2, title: 'Nubank Ultravioleta', subtitle: 'Quero o melhor cartão para \nviajar', image: ' images/img2.jpg', buttonText: 'Saiba mais' },
  { id: 3, title: 'Nubank', subtitle: 'Quero ter controle sobre \nminha vida financeira', image: ' images/img3.jpg', buttonText: 'Saiba mais' },
];

export default function Carousel() {
  const [displayItems, setDisplayItems] = useState(initialItems);

  const handleCardClick = (clickedIndex: number) => {
    if (clickedIndex === 1) return; 

    const newItems = [...displayItems];
    
    if (clickedIndex === 0) {
      const last = newItems.pop()!;
      newItems.unshift(last);
    } else {
      const first = newItems.shift()!;
      newItems.push(first);
    }

    setDisplayItems(newItems);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>Para cada momento, um Nubank <br/> diferente</h2>
        <p>{displayItems[1].subtitle}</p>
      </div>

      <div className="carousel-container">
        {displayItems.map((item, index) => (
          <div 
            key={item.id}
            className={`carousel-card ${index === 1 ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={item.image} alt={item.title} />
            <div className="card-overlay">
              <h3>{item.title}</h3>
              <button>{item.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}