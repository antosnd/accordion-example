import { useState } from 'react';
import { AccordionData } from '../types';
import AccordionItem from './AccordionItem';
import './Accordion.css';

function Accordion({ items }: { items: Array<AccordionData> }) {

  var statesObj: { [idx: number]: boolean } = {};
  const [isVisible, setVisibility] = useState(statesObj);
  const toggleItem = (idx: number) => {
    setVisibility(prevState => {

      //decides whether the item should be opened exclusively
      if (!prevState[idx] && items[idx].isExclusive) {

        //returns toggled item in clean statesObj (all others become hidden)
        return ({ [idx]: !prevState[idx] });
      }

      //returns toggled item in previous statesObj (all others keep last state)
      return ({ ...prevState, [idx]: !prevState[idx] });
    });
  };

  return (
    <div className="accordion">
      {items.map((item, idx) =>
        <AccordionItem
          key={idx}
          data={item}
          isVisible={Boolean(isVisible[idx])}
          headerOnClick={() => toggleItem(idx)}
        />
      )}
    </div>
  );
}

export default Accordion;