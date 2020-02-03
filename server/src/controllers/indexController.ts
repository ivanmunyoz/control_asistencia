import { Request, Response } from 'express';

class IndexController{

    index (req: Request, res: Response) {
        res.json({text: 'Todo esto funciona'});
    }

}

export const indexController = new IndexController();