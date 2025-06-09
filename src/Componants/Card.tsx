function Card({ prop }) {
  return (
    <>
      <div className="Card max-w-sm border-1">
        <h4 className="text-center">
          <h4>
            {prop.name.first} {prop.name.last}
          </h4>
        </h4>
        <img src={prop.image.url} alt={prop.image.alt} />

        <p>{prop.isBusiness ? "Business User" : "Regular User"}</p>
        <footer className="cardFooter">
          <button className="me-2 mb-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            click ME
          </button>
        </footer>
      </div>
    </>
  );
}

export default Card;
