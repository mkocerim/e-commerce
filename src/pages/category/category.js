import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import SideBarSearch from "../../components/side-bar-search/side-bar-search";
import useApi from "../../hooks/useApi";
import ProductList from "./components/product-list/product-list";

function Category(props) {
  const params = useParams();
  const api = useApi();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlQueryData = {};
    //  urlQueryData.foo = 'foo'
    //  urlQueryData.bar = 'bar'
    //  urlQueryData.baz = 'baz'
    //  urlQueryData.ahmet_mehmet= 'test'
    // //  urlQueryData.productTaxons.taxon.code = 'asc'
    //  urlQueryData['productTaxons.taxon.code'] = 'asc'

    urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
    urlQueryData["order[code"] = params.taxon_code;
    urlQueryData["order[createdAt]"] = params.taxon_code;
    urlQueryData["productTaxons.taxon.code"] = params.taxon_code;

    console.log(">>URLS QUERY DATA", urlQueryData);

    api
      .get("shop/products", { params: urlQueryData })
      .then((response) => {
        console.log(">> PRODUCT RESP", response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(">>PRODUCT ERR", err);
      });
  }, []);

  const breadcrumbs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Category",
      href: "/category",
    },
    {
      title: params.taxon_code,
      href: "/category/" + params.taxon_code,
    },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div className="content">
        <div className="container">
          <div className="row">
            <SideBarSearch />
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
