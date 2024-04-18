import axios from 'axios';

export const addproduct = async (productData) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:7000/addproduct",
        data: productData,
      });
      console.log("wwwwwwwwwwww", response);
      return response
    } catch (error) {
      throw error
    }
};

export const getDatas = async()=> {
  try {
    
    const response = await axios({
      method:"get",
      url: "http://localhost:7000/getProducts",
      

    });
    console.log("kkkk",response.data.data);
    return response.data.data;

  } catch (error) {
    throw error
  }
};

