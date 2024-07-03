
import { useState } from 'react';
import './Services.css'
import data from '../../data.json';

interface BlockData {
  id: number;
  title: string;
  content: string;
  alwaysVisible: boolean;
  details: string;
  price: string;
  timeLimit: string;
}

const Services: React.FC = () => {
  const [blocks] = useState<BlockData[]>(data);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedBlock, setSelectedBlock] = useState<BlockData | null>(null);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const handleBlockClick = (block: BlockData) => {
    setSelectedBlock(block);
  };

  return (
    <div className='services'>
      <div className='content'>
        {selectedBlock ? (
          <div className="block-details">
            <h2>{selectedBlock.title}</h2>
            <p>{selectedBlock.details}</p>
            <p><strong>Стоимость:</strong> {selectedBlock.price}</p>
            <p><strong>Период:</strong> {selectedBlock.timeLimit}</p>
            <div className='row'>
              <button onClick={() => setSelectedBlock(null)}>Назад</button>
              <button>Подтвердить</button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Пакеты услуг</h1>
            <div className='blocks'>
              {blocks.map(block => (
                (block.alwaysVisible || showMore) && (
                  <div key={block.id} className="block" onClick={() => handleBlockClick(block)}>
                    <h2>{block.title}</h2>
                    <p>{block.content}</p>
                    <p><strong>Стоимость:</strong> {block.price}</p>
                    <p><strong>Период:</strong> {block.timeLimit}</p>
                  </div>
                )
              ))}
            </div>
            {!showMore && (
              <button onClick={handleShowMoreClick}>Подробнее</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services
