import './App.css';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}
























// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON')
//     .then(res=>res.json())
//     .then(data=> setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Travelling Around the World</h1>
//       <h3>Country Available: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h3>Country Name:{props.name}</h3>
//     </div>
//   )
// }
export default App;
