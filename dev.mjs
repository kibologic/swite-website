#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';
import { SwiteServer } from '@kibologic/swite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = new SwiteServer({
  root: path.resolve(__dirname, 'app'),
  publicDir: 'public',
  port: parseInt(process.env.PORT || '6002', 10),
  host: '0.0.0.0',
  open: false,
});

// Serve plain static assets from local node_modules (e.g. reflect-metadata)
const NM = path.resolve(__dirname, 'node_modules');
server.app.use('/node_modules', (req, res, next) => {
  const url = req.url.split('?')[0];
  if (url.endsWith('.ui') || url.endsWith('.uix') || url.endsWith('.ts')) return next();
  const filePath = path.join(NM, url);
  if (!existsSync(filePath)) return next();
  try {
    const content = readFileSync(filePath, 'utf-8');
    if (url.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
    else if (url.endsWith('.js') || url.endsWith('.mjs')) res.setHeader('Content-Type', 'application/javascript');
    else return next();
    res.end(content);
  } catch {
    next();
  }
});

// SPA Fallback: Serve index.html for unknown routes
server.app.use((req, res, next) => {
  if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
    res.setHeader('Content-Type', 'text/html');
    res.end(readFileSync(path.join(__dirname, 'app/public/index.html'), 'utf-8'));
    return;
  }
  next();
});

await server.start();
console.log('[swite-website] running on http://localhost:6002');
