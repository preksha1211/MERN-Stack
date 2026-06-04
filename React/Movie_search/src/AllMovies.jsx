function AllMovies({ data }) {
    return (
        <div>
            {data.map((movie) => (
                <div key={movie.id}>
                    <img src={movie.poster} />
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                </div>
            ))}
        </div>
    )
}
export default AllMovies