import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="main">
        <h2 className="eading">Plan with love</h2>
        <div className="cards">
            {
                tours.map((tour) => {
                    return <Card {...tour} key={tour.id} removeTour= {removeTour}></Card>
                })
            }
        </div>
        </div>
    );
}

export default Tours;