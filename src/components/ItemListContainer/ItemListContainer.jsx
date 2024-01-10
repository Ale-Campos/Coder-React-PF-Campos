
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{textAlign:'center', padding:'2px', position:'relative', top:'60px'}}>
            <h1 style={{fontSize:'40px'}}>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;