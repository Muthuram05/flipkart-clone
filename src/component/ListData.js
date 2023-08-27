import { useNavigate } from "react-router-dom";
import "./ListData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ListData = ({ name, list }) => {
  const navigate = useNavigate();
  const listProduct = list.slice(0, 7);
  const handleNavigate = () => {
    navigate("/products", { state: name });
  };
  const handleViewProduct = (data) =>{
    navigate('/viewProduct',{state : {data}})
  }
  return (
    <div className="ListData">
      <div className="products-details">
        <h2>{name}</h2>
        <button onClick={handleNavigate}>VIEW ALL</button>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg"
          alt="product"
        />
      </div>
      {listProduct.map((e, index) => (
        <div className="products" onClick={()=>handleViewProduct(e)} key={e.id}>
          <img src={e.image} alt={e.image} />
          <h2>{e.name}</h2>
          <span>$ {e.prize}</span>
          <div style={{display:"flex",alignItems:"center"}}>
            <h3 style={{paddingBottom:"2px"}}>{e.rating}</h3>
            <StarRating rating={e.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListData;
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const starColor = "#fdcc0d";
  const starWidth = (rating / maxStars) * 100;

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color={
            starWidth >= (index + 1) * (100 / maxStars) ? starColor : "gray"
          }
          size="lg"
          style={{ width: `${100 / maxStars}%` }}
        />
      ))}
    </div>
  );
};
