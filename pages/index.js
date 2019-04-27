import 'isomorphic-fetch'
import React from 'react'
import { RichText } from 'prismic-reactjs'
import Head from '../components/head'
import generateConnection from '../api-client'
import { productsQuery } from '../api-client'
import { linkResolver } from '../link-resolver'

const Home = ({ products }) => {
	const productElements = products.map(product => (
		<div key={product.id}>
			{RichText.render(product.data.name, linkResolver)}
			<img src={product.data.photo.url} alt={product.data.photo.alt} />
			{RichText.render(product.data.description, linkResolver)}
			<style jsx>{`
				img {
					width: 400px;
					height: auto;
				}
			`}</style>
		</div>
	))
	return (
		<div>
			<Head title="Butter Test" />
			{productElements}
		</div>
	)
}

Home.getInitialProps = async ({ req }) => {
	return generateConnection().then(api => api
			.query(productsQuery)
			.then(response => {
				let products
				if (response) {
					products = response.results
				} else {
					products = []
				}
			
				return { products }
			})
		)
}

export default Home
