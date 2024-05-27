var axios = require('axios');

module.exports = {
    getMateriales: function() {
        return axios.get('http://localhost:8080/api/materials');
    }
};