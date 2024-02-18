import Counter from "./Counter";

const ItemDetailed = ({ item }) => {
    const detailsCardStyle = {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid #d6d7dd'
    }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="card mb-1 mt-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.pictureUrl}
                className="img-fluid rounded-start"
                alt={item.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{item.price}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={detailsCardStyle}>
            <div className="row">
                <div className="col">
                    <p className="my-0">{item.details}</p>
                </div>
            </div>
        </div>
        <div className="mt-1">
            <Counter producto={item}/>
        </div>
      </div>
    </>
  );
};

export default ItemDetailed;
