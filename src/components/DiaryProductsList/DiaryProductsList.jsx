import { useEffect } from 'react';
import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

export const DiaryProductsList = () => {

  useEffect(() => {
    const getProducts = async () => {
      /*Запит на отримання продуктів із сховища*/}
    getProducts();
  }, [/*Залежності*/]);

  const {id, productName, productWeight, productCalories} = product;
  return (
    
    <List className={products.length > 4 ? null : "hidden"}>
      {products.length > 0  (
        products.map(product => {
          return (
            <DiaryProductsListItem
              key={id}
              id={id}
              name={productName}
              grams={productWeight}
              calories={productCalories}
            />
          );
        })
      )}
    </List>
  );
};