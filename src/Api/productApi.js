import axios from 'axios';

export const addproduct = async (productData) => {
  console.log("iiiiiiiii");
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
    // return response;
    console.log("kkkk",response.data.data);
    return response.data.data;

  } catch (error) {
    throw error
  }
};

export const DeleteData = async (id) => {
  console.log("ccccccc", id);
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:7000/DeleteProducts/${id}`,
      data: id,
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw error; // Throw the error to be handled by the calling function
  }
};

export const Editdata = async (id) => {
  console.log("vvvvv", id);
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:7000/EditProducts/${id}`,
      data: id,
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw error; // Throw the error to be handled by the calling function
  }
};
