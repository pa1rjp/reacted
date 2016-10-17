import request from 'superagent';

export default {

  getMakes: () => {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=gj4rv7d2jnpbx88fzfdpb8bk')
        .set('X-Originating-Ip', '115.99.196.33')
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.text);
        })
    });
  },

  getModels: (id) => {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.edmunds.com/api/vehicle/v2/'+id+'/models?fmt=json&api_key=gj4rv7d2jnpbx88fzfdpb8bk')
        .set('X-Originating-Ip', '115.99.196.33')
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.text);
        })
    });
  },

  getDetails: (id) => {
    return new Promise((resolve, reject) => {
      let params = id.split('|');
      request
        .get('https://api.edmunds.com/api/vehicle/v2/'+params[0]+'/'+params[1]+'?year='+params[2]+'&fmt=json&api_key=gj4rv7d2jnpbx88fzfdpb8bk')
        .set('X-Originating-Ip', '115.99.196.33')
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.text);
        })
    });
  }  
}
