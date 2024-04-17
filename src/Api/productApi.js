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
