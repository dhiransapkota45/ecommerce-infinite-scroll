import ProductCard from "./ProductCard";

type Props = {
  products: IProductResponse | null;
};

// css variables
const Products = ({ products }: Props) => {
  //state for checking if card is being hovered or not
  return (
    <div className=" max-w-[1000px] mx-auto grid grid-cols-3 gap-3 mt-6">
      {Array.isArray(products?.data?.docs) &&
        products?.data?.docs?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
    </div>
  );
};

export default Products;
