// middleware/auth.ts

import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return res.status(401).json({ message: 'Access denied. Token is missing.' });
  }

  const token = tokenHeader.split(' ')[1];

  jwt.verify(token, 'this is key', (err:any, user:any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    req = user;
    next();
  });
};


