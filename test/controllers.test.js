const axios = require("axios");
const CustomControllers = require("../api/controllers/controllers.js");
const CustomAssertions = require("../api/assertions/default-assertions.js");
const {
    faker
} = require('@faker-js/faker');


const controllers = new CustomControllers;
const asserting = new CustomAssertions;
const fakeTitle = faker.lorem.sentence(5);
const fakeBody = faker.lorem.sentence(7);

const postBody = {
    "userId": 8,
    "id": 101,
    "title": fakeTitle,
    "body": fakeBody
};

const invalidPostBody = {
    "title": fakeTitle,
    "body": fakeBody
};

const updatePost = {
    "userId": 8,
    "id": 15,
    "title": fakeTitle,
    "body": fakeBody
};


test('getUsersList', async () => {
     const response = await controllers.getUsersList();
     asserting.validateStatusCode(response, 200);
 });

test('getUsersList ', async () => {
    try {
        await controllers.getUsersListWithWrongUrl();
    } catch (error) {
        asserting.validateStatusCode(error.response, 404);
    }
});

test('postPost', async () => {
    const response = await controllers.postPost(postBody);
    asserting.validatePostBody(response,postBody, 201);
});

test('postPost with missing fields', async () => {
    try {
        await controllers.postPost(invalidPostBody);
    } catch (error) {
        asserting.validateStatusCode(error.response, 400);
    }
});

test('updatePost', async () => {
    const response = await controllers.updatePost(15, updatePost);
    console.log(postBody.title, postBody.body);
    asserting.validatePostBody(response, updatePost, 200);
});

test('updatePostWithUnexpectedId', async () => {
    try {
        await controllers.updatePost('yeyeyeyeye', updatePost);
    } catch (error) {
        asserting.validateStatusCode(error.response, 500);
    }
});

test('deletePost', async () => {
    const response = await controllers.deletePost(15);
    asserting.validateStatusCode(response, 200);
})

test('deletePostWithUnexpectedId', async () => {
    try {await controllers.deletePost('tetetet');}
    catch (error) {
        asserting.validateStatusCode(error.response, 500);
    }
})


test('getListOfPhotos', async () => {
    const response = await controllers.getListOfPhotos();
    asserting.validateStatusCode(response, 200);
})

test('getListOfPhotosWithUnexpectedUrl', async () => {
    try{
        await controllers.getListOfPhotosWithUnexpectedUrl();
    }
    catch(error){
        asserting.validateStatusCode(error.response, 404);
   }
})

test('getPhotoById', async () => {
    const response = await controllers.getPhotoById(1);
    asserting.validateStatusCode(response, 200);
})

test('getPhotoById', async () => {
    try {
        await controllers.getPhotoById('Hello');
    } catch (error) {
        asserting.validateStatusCode(error.response, 404);
    }
});