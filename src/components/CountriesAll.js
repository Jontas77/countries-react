const CountriesAll = ({ data }) => {
  let countries = data.map((country) => {
    const { name, flag, population, region, capital } = country;
    return (
      <div className="card border-0" key={name}>
        <img className="card-img-top" src={flag} alt="Country Flag" />
        <div className="card-body" key={population}>
          <h5 className="card-title">{name}</h5>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="card-container d-flex flex-wrap flex-row justify-content-center">
        {countries}
    </div>
  );
};

export default CountriesAll;
// {/* <main className="d-flex flex-row flex-wrap">
// {data.map((country) => {
//   const { name, flag, population, region, capital } = country;
//   return (
//       <div className="card border-0">
//         <img className="card-img-top" src={flag} alt="Country Flag" />
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <p>
//             <strong>Population: </strong>
//             {population}
//           </p>
//           <p>
//             <strong>Region: </strong>
//             {region}
//           </p>
//           <p>
//             <strong>Capital: </strong>
//             {capital}
//           </p>
//         </div>
//       </div>
//   );
// })}
// </main>  */}
