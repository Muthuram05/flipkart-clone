import { useNavigate } from 'react-router-dom';
import './ListData.css';
const ListData = ({ name, list }) => {
  const navigate = useNavigate();
  const listProduct = list.slice(0,7)
  const handleNavigate = () => {
    navigate('/products', {state:list})
  };
  return (
    <div className='ListData'>
      <div className='products-details'>
        <h2>{name}</h2>
        <button onClick={handleNavigate}>VIEW ALL</button>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg' alt='product'/>
      </div>
      {listProduct.map((e, index) => (
        <div className='products'>
          <img src={e.image} alt={e.image} />
          <h2>{e.name}</h2>
          <span>$ {e.prize}</span>
          <h3>{e.rating}</h3> 
        </div>
      ))}
    </div>
  )
}

export default ListData