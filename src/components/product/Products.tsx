import ProductCard from "./ProductCard";
type Props = {
  products: IProduct[] | undefined;
};

// css variables
const Products = ({ products }: Props) => {
  //state for checking if card is being hovered or not
  return (
    Array.isArray(products) &&
    products?.map((product) => (
      <ProductCard product={product} key={product?._id} />
    ))
  );
};

export default Products;
