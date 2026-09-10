import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

class UserService {
    async createUser(data) {
        const verifiedUser = await prisma.user.findUnique({
            where: { email: data.email }
        })

        if (verifiedUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: hashedPassword
            }
        });
        return {
            id: user.id,
            email: user.email,
            name: user.name
        };
    }

    async loginUser(email, password) {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name
        };
    }
}

export default new UserService();