import SingleProduct from '../../components/SingleProduct.tsx';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
