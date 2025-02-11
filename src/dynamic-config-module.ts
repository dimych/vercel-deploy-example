import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

// you must import this const in the head of your app.module.ts
export const configModule = ConfigModule.forRoot({
  envFilePath: [
    process.env.ENV_FILE_PATH?.trim() || '',
    join(__dirname, `env`, `.env.${process.env.NODE_ENV}.local`),
    join(__dirname, `env`, `.env.${process.env.NODE_ENV}`), // и могут быть переопределены выше стоящими файлами
    join(__dirname, `env`, `.env.production`),
  ],
  isGlobal: true,
});
