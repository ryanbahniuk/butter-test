export const linkResolver = (doc) => {
  if (doc.type == 'products') {
    return '/product/' + doc.uid
  }
 
  return '/'
}
