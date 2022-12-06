module.exports = productControllers = {

    cart: async (req, res) => {
        try {
            return res.render('products/cart');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },
    listProducts: async (req, res) => {
        try {
            return res.render('products/listProducts');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }
}