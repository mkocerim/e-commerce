import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import SideBarSearch from "../../components/side-bar-search/side-bar-search";
import ProductList from "./components/product-list/product-list";



function Category(props) {
  
  const params= useParams()
  
const breadcrumbs= [
  {
    title: 'Home',
    href: '/',

  },
  {
    title: 'Category',
    href: '/category',
    
  },
  {
    title: params.slug,
    href: '/category/' + params.slug,
    
  }
]
  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div className="content">
        <div className="container">
          <div className="row">


            <SideBarSearch />
            <ProductList/>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
