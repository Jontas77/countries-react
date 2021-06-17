const CountriesAll = ({ data }) => {
  return (
    <main className="card-container">
      {data.map((country) => {
        const { name, flag, population, region, capital } = country;
        return (
            <div className="card border-0">
              <img className="card-img-top" src={flag} alt="Country Flag" />
              <div className="card-body">
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
      })}
    </main>
  );
};

export default CountriesAll;
