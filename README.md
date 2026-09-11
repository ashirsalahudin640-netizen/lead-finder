# Lead Finder Frontend

Commercial-style SaaS frontend for the Lead Finder product specification.

## Stack
- Next.js (App Router)
- JavaScript / JSX (no TypeScript)
- Tailwind CSS
- shadcn/ui-inspired reusable primitives
- Lucide React
- Mock service/API abstraction

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_API_URL=
```

The mock service layer is in `lib/api/`. Replace those implementations with calls to the future backend without changing the UI components.

Expected backend contract:
- `POST /search`
- `GET /search/:id`
- `GET /search/:id/status`
- `GET /search/:id/results`
- `GET /leads`
- `GET /leads/:id`
- `POST /exports`

No Google API keys or backend secrets are used in the frontend.
