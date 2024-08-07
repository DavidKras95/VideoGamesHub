import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '15f7a5866a2e4f5797fa583cf0799c50'
    }
})