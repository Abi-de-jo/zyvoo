import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";

const Related = ({ productData, currency }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productData && productData.category) {
      const related = products
        .filter(
          (item) =>
            item.category === productData.category && item._id !== productData._id
        )
        .slice(0, 4); // Limit to 4 related products
      setRelatedProducts(related);
    }
  }, [productData]);

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="h-[300px] hover:scale-105 w-full object-cover object-center group-hover:opacity-75 transition-transform"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {currency} {product.price}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default Related;
