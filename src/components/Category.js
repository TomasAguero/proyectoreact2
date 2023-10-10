import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const { id } = useParams();

  return (
    <div>
      <h2>Products in {id} category:</h2>

    </div>
  );
}

export default Category;
