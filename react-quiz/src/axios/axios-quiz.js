import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-f0ffe-default-rtdb.firebaseio.com/'
})