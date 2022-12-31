import PropTypes from 'prop-types'

function Food({name, picture, rating}) {
  return <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>
}
const foodILike =[
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.9,
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />  
}
function App() {
  return (
    <div>
      { foodILike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
export default App;
