import { Product } from './Product';

const shoedata = [
  {
    title: "Abidas",
    price: 100
  },
  {
    title: "gold fish",
    price: 200
  },
  {
    title: "bata",
    price: 300
  },
  {
    title: "dior",
    price: 400
  }
];

function App() {
  return (
    <>
      {shoedata.map((data) => {
        return (
          <Product
            key={data.title}
            title={data.title}
            price={data.price}
          />
        );
      })}
    </>
  );
}

export default App;