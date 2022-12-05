module.exports = productControllers = {

    detail: async (req, res) => {
        try {
            return res.render('products/detail');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }
}