import UserService from '../services/userService.js';

class UserController {
    async createUser(req, res) {
        try {
            console.log(req.body);

            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.loginUser(email, password);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new UserController();