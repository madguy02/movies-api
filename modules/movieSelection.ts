import * as _ from 'lodash'
import * as util from '../utils/dateChecker'

export async function calculateDiffTime (movies: any) {
    let newArr: any = []
    for (let movie of movies) {
        const start: any = new Date(movie.startDate)
        const end: any = new Date(movie.endDate)
        const diff = Math.abs(end - start)
        const diffTime = Math.ceil(diff/ (1000 * 60 * 60 * 24))
        movie['diffTime'] = diffTime
        newArr.push(movie)
    }
    return newArr
}

export async function sortByEndDate(moviesWithDiffAttr: any) {
    const sort = _.orderBy(moviesWithDiffAttr, 'endDate', 'asc')

    return sort
}

export async function movieSelection (movies: any) {
    let selectedMovies: any = []
    const calcDiffTime = await calculateDiffTime(movies)
    const sortByEnd =  await sortByEndDate(calcDiffTime)
    for (let movie of sortByEnd) {
        let count = 0
        if (selectedMovies.length === 0) {
            selectedMovies.push(movie)
        } else {
            for (let mov of selectedMovies) {
                console.log(mov.movieName)
                console.log(movie.movieName)
                if (util.dateCheck(mov.startDate, mov.endDate, movie.startDate, movie.endDate)) {
                    count = count + 1
                }
            }
            console.log(count)
            if (count === selectedMovies.length) {
                selectedMovies.push(movie)
            }
        }
    }
    return selectedMovies
}