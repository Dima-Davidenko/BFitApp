import { Item, Icon } from "./DiaryProductsListItem.styled";
import CrossIcon from "./images/close.svg";


export const DiaryProductsListItem = ({id, name, grams, calories}) => {
  
  const handleDelete = async (id) => {
    try {
      /*const result = await  Запит на видалення елемента із списку продуктів*/
     
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">{calories} <span>kcal</span></p>
      <Icon src={CrossIcon} alt="delete product" onClick={() => {handleDelete(id)}}/>
    </Item>
  )
}