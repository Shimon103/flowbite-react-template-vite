function Card() {
    let cardTitle = 'Plcceholder'
    let cardImage = '../src/assets/avatar.jpg'
    let cardDescription = "plcaeholder paragraph"
    return (
        <>
            <div className="Card max-w-sm border-1">
                <h4 className="text-center">{cardTitle}</h4>
                <img src={cardImage} alt="placeholder" />
                <p>{cardDescription}</p>
                <footer className="cardFooter">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        click ME
                    </button>
                </footer>


            </div>
        </>
    )


}

export default Card;