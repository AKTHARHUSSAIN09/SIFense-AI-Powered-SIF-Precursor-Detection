# SIFense Dashboard

Next.js dashboard and mobile worker interface for the SIFense safety platform.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Supabase is optional; without its environment variables, the app uses demo
authentication. The app expects the FastAPI backend at `http://127.0.0.1:8000`
by default. Set `NEXT_PUBLIC_API_URL` when the backend is hosted elsewhere.

## Validation

```bash
npm run lint
npm run build
```

For full-stack setup, see the [project README](../README.md).
