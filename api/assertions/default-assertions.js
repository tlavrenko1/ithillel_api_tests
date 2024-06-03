module.exports = class CustomAssertions {
        validateStatusCode(response, expectedStatusCode) {
            expect(response.status).toEqual(expectedStatusCode);
        };

        validatePostBody(response, expectedBody, expectedStatusCode) {
            this.validateStatusCode(response, expectedStatusCode);
            expect(response.data).toEqual(expectedBody);
        }

}