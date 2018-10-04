
class HttpBase {

  async basePost(url, config) {
    try {
      const options = {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config, params)
      };

      let query = await this.callHttp(url, options);

      const data = await query.json();
      return data;
    } catch (error) {

    }
  }

  async baseGetParams(url, config) {
    try {
      const options = {
        method: 'GET',
        header: this.headerConfig(config.header),
        params: this.buildParams(config.params)
      }
      let query = await this.callHttp(url, options);
      const data = await query.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async baseGet(url, config) {
    try {
      const options = {
        method: 'GET',
        header: this.headerConfig(config.header)
      }
      let query = await this.callHttp(url, options);
      const data = await query.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }


  buildParams(params) {
    // cambiar los parametros de clave valor a GET
    return params;
  }

  headerConfig(custom) {
    const defaultHeader = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const headerConfig = Object.assign(defaultHeader, custom);
    let header = new Headers(headerConfig);
    return header;
  }

  callHttp(url, option) {
    let promise = new Promise( (resolve, reject) => {
      fetch(url, option)
        .then( response => resolve(response))
        .catch( error => reject(error))
    });
  }
}

export default new HttpBase;
