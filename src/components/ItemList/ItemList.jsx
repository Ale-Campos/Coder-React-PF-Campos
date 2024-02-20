import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex flex-wrap gap-4 justify-content-center">
            {
              items.map(
                (item) => {
                return <Item key={item.id} item={item}></Item>;
                }
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
