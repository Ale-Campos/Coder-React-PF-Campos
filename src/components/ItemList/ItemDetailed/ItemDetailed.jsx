import Counter from "./Counter";

const ItemDetailed = ({ item, loading }) => {
  console.log(item);
  const detailsCardStyle = {
    padding: "20px",
    backgroundColor: "white",
    border: "1px solid #d6d7dd",
    color: "#6c757d",
  };

  if (!loading) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div className="card mb-1 mt-3" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
              <div className="col-12 col-md-4">
                <div className="d-flex">
                  <img
                    src={item.pictureUrl}
                    className="w-100 "
                    alt={item.title}
                    style={{borderRadius: "4px 0 0 0"}}
                  />
                </div>
                <div className="text-center d-flex" style={detailsCardStyle}>
                  <div className="row">
                    <div className="col">
                      <p className="my-0">{item.details}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body pb-0">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text mb-0">{item.description}</p>
                  <h3 className="card-text text-start">
                    <small className="text-body-secondary">${item.price}</small>
                  </h3>
                  <div className="mt-md-5">
                    <Counter producto={item} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ItemDetailed;
