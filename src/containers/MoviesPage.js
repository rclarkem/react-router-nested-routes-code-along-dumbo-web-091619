// .src/containers/MoviesPage.js
import React from 'react'
import { Route } from 'react-router-dom'
import MoviesList from '../components/MovieList'
import MovieShow from '../components/MovieShow'

const MoviesPage = ({ match, movies }) => {
	console.log(match)
	return (
		<div>
			<MoviesList movies={movies} />
			<Route path={`${match.url}/:movieId`} component={MovieShow} />
		</div>
	)
}

export default MoviesPage
