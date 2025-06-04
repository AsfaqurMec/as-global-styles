
import connection from '../../../../../lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM classes');

   console.log(rows);

    return NextResponse.json({ service: rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: "No Data Found", error: error.message });
  }
}
