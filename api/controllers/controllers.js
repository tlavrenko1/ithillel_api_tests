const axios = require("axios");


module.exports = class CustomControllers {
    async getUsersList() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response;
    }

    async getUsersListWithWrongUrl() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/test/users")
        return response;
    }

    async postPost(body) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", body)
        return response;
    }

    async updatePost(id, body) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, body)
        return response;
    }


    async deletePost(id) {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response;
    }

    async getListOfPhotos() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos/")
        return response;
    }

    async getListOfPhotosWithUnexpectedUrl() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/./helloworld/photos/")
        return response;
    }

    async getPhotoById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        return response;
    }
}