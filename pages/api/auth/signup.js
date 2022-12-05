import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch((error) =>
    res.json({ error: 'Connection Failed' })
  );
  //Only Allow Post Method
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: 'Missing Form Data' });
    const { username, email, password } = req.body;

    //Check For Duplicate Users
    const checkExisting = await Users.findOne({ email });
    if (checkExisting)
      return res.status(422).json({ message: 'User Already Exists' });

    //Hash Password
    Users.create(
      {
        username,
        email,
        password: await hash(password, 12),
      },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res.status(500).json({ message: 'HTTP Method Not Valid.' });
  }
}
