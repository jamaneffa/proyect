module.exports = userControllers = {

    login: async (req, res) => {
        try {
            return res.render('users/login');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }
}