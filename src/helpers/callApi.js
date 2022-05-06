import axios from "axios";
// const base_url = "http://localhost:8080";
const base_url = "http://localhost:8000";
// const ngrok_url = "http://4e449c3b.ngrok.io";

// Step 1

export const csvUpload = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/neural/csv_datas`, data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

// Step 2
export const configModel = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/neural/config_model`, data, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// Step 3
export const modelDownLoad = async modelToken => {
  try {
    const response = await axios({
      url: `${base_url}/neural/export_model?modelToken=${modelToken}`,
      method: "GET",
      responseType: "blob" // important
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "models.zip");
    document.body.appendChild(link);
    link.click();
  } catch (err) {
    return err;
  }
};

export const trainModel = trainOption => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/neural/train_model`, trainOption, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

// model form test
export const testModel_sgd  = ()=> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/neural/test_model_sgd`)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

export const testModel_adam  = ()=> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/neural/test_model_adam`)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

export const roc1  = ()=> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/neural/roc`)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};



export const modelUpload = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/neural/upload_models`, data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

// Predict model

export const predictModel = data1 => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/neural/predict?input=${data1}`)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

export const getListCsvFile = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/neural/list_csv`)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
