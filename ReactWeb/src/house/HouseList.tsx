import useFetchHouses from "../hooks/HouseHooks";

const HouseList = () => {
  
  //call the custom hook. In order to get to data
  //you need to destructure it
  const {data} =useFetchHouses();

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
            {/* We have to do our mapping on data as well. data might be 
                empty. So determing if data is falsy before we do the mapping.
             */}
            {data && data.map((h) => (
              <tr key={h.id}>
                <td>{h.address}</td>
                <td>{h.country}</td>
                <td>{h.price}</td>
              </tr>
            ))}

        </tbody>
      </table>
      {/* <Link className="btn btn-primary" to="/house/add">
        Add
      </Link> */}
    </div>
  );
};

export default HouseList;
