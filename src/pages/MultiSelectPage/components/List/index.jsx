import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
