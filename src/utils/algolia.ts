import { searchClient } from '@algolia/client-search';
import { readFile } from "node:fs/promises"
import type { AstroIntegration } from "astro";
import { loadEnv } from "vite";
const { ALGOLIA_APPID, ALGOLIA_ADMIN_KEY } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), "");

const client = searchClient(ALGOLIA_APPID, ALGOLIA_ADMIN_KEY);

const processRecords = async (data) => {
  return await client.saveObjects({ indexName: 'blog', objects: data });
};

export default function algolia(): AstroIntegration {
  return {
    name: 'algolia',
    hooks: {
      'astro:build:done': async ({ logger, dir }) => {
        try {
          const path = new URL('./algolia.json', dir);
          const data = await readFile(path);
          if (!data) {
            throw new Error('No data found in algolia.json');
          }

          const res = JSON.parse(data.toString());
          if (!Array.isArray(res)) {
            throw new Error('Invalid data format: expected an array');
          }

          await processRecords(res)
            .then(() => {
              logger.info('Records successfully processed')
            })
            .catch((err) => logger.error('Error processing records:${err}'));
        } catch (error) {
          logger.error('An error occurred: ${error}');
        }
      }
    }
  };
}
