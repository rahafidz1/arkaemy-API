import Product from "../model/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ messase: error.messase });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id
      }
    });
    if(product.length !== 0){
      res.json(product[0])
    }else{
      res.json({message:"data tidak ditemukan"})
    }
  } catch (error) {
    res.json({ messase: error.messase });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
        "message": "product created"
    });
  } catch (error) {
    res.json({ messase: error.messase });
  }
};
  
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where:{
        id: req.params.id
      }
    });
    res.json({
        "message": "product updated"
    });
  } catch (error) {
    res.json({ messase: error.messase });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy( {
      where:{
        id: req.params.id
      }
    });
    res.json({
        "message": "product deleted"
    });
  } catch (error) {
    res.json({ messase: error.messase });
  }
};