import { NextApiRequest } from 'next';
import { IncomingMessage } from 'http';

declare module 'http' {
  interface IncomingMessage {
    isDarkTheme?: boolean;
  }
}