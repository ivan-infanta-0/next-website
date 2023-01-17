// pages/api/upload
import {pool} from '../../lib/db';


async function write(req, res) {
  try {
    const timestamp = null; //
    const image = null; //
    
    const result = await pool.query("INSERT INTO __tableName__ SET ?", {
      timestamp, image
    });
    
    res.status(201).json({id: result.insertId, ...req.body})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(400).send('');
  
  await write(req, res);
}
