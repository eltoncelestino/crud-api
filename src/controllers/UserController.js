import User from '../schema/User';

class UserController {
  async index(request, response) {
    const users_result = await User.find();

    return response.json(users_result);

    // return response.json([
    //   {nome: "Elton"},
    //   {nome: "Elton"},
    //   {nome: "Elton"},
    // ]);
  }
  async create(request, response) {
    console.log(request.body);
    const newUser = await User.create(request.body)
    return response.json(newUser);

    // const newUser = await User.create({
    //   name: "Maria",
    //   email: "maria@gmail.com"
    // })

    // return response.json(newUser)
  }
  async update(request, response) {
    return response.json()
  }
  async delete(request, response) {
    return response.json()
  }
  async show(request, response) {
    return response.json()
  }
}

export default new UserController;