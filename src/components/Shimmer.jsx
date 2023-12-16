import '../assets/styles/shimmer.css'

const Shimmer = () => {
    const dummyCards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="dummy-card">
            <div className="dummy-img"></div>
            <div className="dummy-content">
                <div className="dummy-top"></div>
                <div className="dummy-mid"></div>
                <div className="dummy-down"></div>
            </div>
        </div>
    ));

    return (
        <div className="shimmer">
            <div className="dummy-games">
                {dummyCards}
            </div>
        </div>
    )
}

export default Shimmer;