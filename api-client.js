import Prismic from 'prismic-javascript'
import config from './config.json'

const apiEndpoint = 'https://butter-test.prismic.io/api/v2'
const accessToken = config.accessToken

export const productsQuery = Prismic.Predicates.at('document.type', 'products')

export default () => Prismic.api(apiEndpoint, { accessToken })
