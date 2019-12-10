import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer FRctOPFioCkEGcaF8pBiMh6ymEeSSEyBzJvJyWazLN_aKIS1J4bQcwsYEKKDgpIVg037FfMyN3rHrRTmDftDHsI3SZfXuPp5B8Ol0I7KEPROaYhOTy4LfqTOAvHqXXYx'
    }
})