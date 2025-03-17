// src/pages/api/corporateData.ts
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export async function GET() {
  try {
    // Get the current file's directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Construct the path to the JSON file (adjust as needed)
    const filePath = path.join(__dirname, '../../../public/data/corporateData.json');
    const data = await fs.readFile(filePath, 'utf-8');
    
    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
