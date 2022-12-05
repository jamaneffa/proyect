module.exports = mainControllers = {

    home: async (req, res) => {
        try {
            return res.render('main/home');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }
}
