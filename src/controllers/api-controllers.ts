import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose'
import Tx, { ITx } from '../models/Tx';

export class ApiControllers {
  getHomePage(req: Request, res: Response) {
    res.type('text/plain');
    res.send('Homepage');
  }

  async createGuideline(req: Request, res: Response) {
    const { transaction, description }: ITx = req.body;
    await Tx.create({ transaction, description }).catch((err) => {
      console.log(err);
      throw new Error('Database Error');
    });
    res.type('text/plain');
    res.send('All articles are here!');
  }

  async findGuideline(req: Request, res: Response) {
    const {transaction} = req.query
    console.log(transaction)
    const tx = await Tx.findOne(req.query).catch((err) => {
      console.log(err);
      throw new Error('Database Error');
    });
    console.log(tx)
  
    res.type('text/plain');
    res.send('My name is Jimmy.');
  }
}