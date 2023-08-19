import axios from "axios";


export const getProducts = (min_max) => {
    if (min_max){
        return (dispatch) => {
            let min = min_max[0]
            let max = min_max[1]
            console.log(min_max)
            axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=1${max}`)
                .then(({data}) => {
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    } else {
        return (dispatch) => {
            axios.get('https://api.escuelajs.co/api/v1/products')
                .then(({data}) => {
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    }
}