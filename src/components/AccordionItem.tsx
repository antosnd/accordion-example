import { useEffect, useRef, useState } from 'react';
import { AccordionData } from '../types';
import './AccordionItem.css';

function AccordionItem({
  data,
  isVisible,
  headerOnClick,
}: {
  data: AccordionData;
  isVisible: boolean;
  headerOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isVisible]);

  return (
    <div className={`accordion-item ${isVisible ? 'active' : ''}`}>
      <div className="accordion-item-title">
        <div className="accordion-item-btn" onClick={headerOnClick}>
          {data.title}
        </div>
      </div>
      <div className="accordion-item-container" style={{ height }}>
        <div ref={contentRef} className="accordion-item-content">
          {data.content}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;