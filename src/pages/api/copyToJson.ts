import path from 'path';
import { promises as fs } from 'fs';

export default async function copyToJson(key: string) {
  const jsonDirectory = path.join(process.cwd(), ``);
  const fileContents = await fs.readFile(
    jsonDirectory + `/ParsedFP.json`,
    `utf8`,
  );

  fs.writeFile(
    path.join(process.cwd(), `/reports`) + `/${key}.json`,
    fileContents,
  );
}
