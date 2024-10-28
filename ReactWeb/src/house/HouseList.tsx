import useFetchHouses from "../hooks/HouseHooks";

const HouseList = () => {
  
  //substitute the custom hook 
  const houses =useFetchHouses();

  //Move the following code to HouseHook
  // const [houses, setHouses] = useState<House[]>
  //       ([]); //dependency array

  // const fetchHouses = async () => {
  //      const rsp = await fetch(`${config.baseApiUrl}/houses`);
  //      const houses = await rsp.json();  //deserialize to JSON
  //      setHouses(houses); //set the state after which the component will be re-rendered
  // };
  //  fetchHouses();
   
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
            {houses.map((h) => (
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
