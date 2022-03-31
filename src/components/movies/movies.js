import styles from "./Movies.module.css";
import Movie from "./movies/movie";
// import data movies
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
    // membuat variaeble state:movies
    const [movies, setMovies] = useState(data);


    // buat fungsi tambah film
    // dijalanin ketika tombol diklik
    function tambahFile() {
        const movie = {
            id: nanoid(),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/350/450",
        };

        // menambahkan movie je state movie
        // spread operator copy dan merge array

        setMovies([...movies, movie]);
    }
    return ( <
        div className = { styles.container } >
        <
        section className = { styles.movies } >
        <
        h2 className = { styles.movies__title } > Latest Movies < /h2> <
        div className = { styles.movie__container } > {
            /*
                     *looping data movies:map,
                     * render component movie
                     * kirim props movie
                     * /}
                     </div>


                movies.map(function(movie) {
                    return <movie key={movie.id}movie = { movie }
                    / >
                })

            }

            <
            /div> < /
            section > 
            /* Menambahkan event onClick*/
            <
            button on Click = { rambahFile } > Add Movie < /button> < /
            div >
        );
    }

    export default Movies;