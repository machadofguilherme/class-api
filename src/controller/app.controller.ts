import { Express, Request, Response } from "express";

class AppController {
  public findAll(_req: Request, res: Response) {
    const result = res.status(200)
      .json({
        message: 'Requisição realizada com sucesso'
      })
    
    return result;
  }
}

export default AppController;