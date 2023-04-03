import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import SideBarSearch from "../../components/side-bar-search/side-bar-search";

function Checkout() {
  const breadcrumbs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Cart",
      href: "/cart",
    },
    {
      title: "Checkout",
      href: "/checkout",
    },
  ];

  const params = useParams;

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div className="content">
        <div className="container">
          <div className="row">
            <SideBarSearch />
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
