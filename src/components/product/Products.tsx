import ProductCard from "./ProductCard";
type Props = {
  products: IProduct[] | undefined;
};

const Products = ({ products }: Props) => {
  return (
    Array.isArray(products) &&
    products?.map((product) => (
      <ProductCard product={product} key={product?._id} />
    ))
  );
};

export default Products;
