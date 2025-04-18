import { User } from '../user/user.model';  // Importa o tipo de User ou defina-o conforme seu projeto
declare global {
  namespace Express {
    interface Request {
      user?: User;  // Adiciona a propriedade user no tipo Request
    }
  }
}
