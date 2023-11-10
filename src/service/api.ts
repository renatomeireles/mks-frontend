const apiProducts = async () => await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
.then(response => response.json()).then(data => data.products)

export default apiProducts