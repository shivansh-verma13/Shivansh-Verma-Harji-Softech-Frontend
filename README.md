# Harji Softech Assignment One

Next.js implementation of the provided two-page Figma UI with functional dashboard and session workflows.

## Features

- AI chat input with user messages, mocked assistant replies, and suggestion chips that submit immediately.
- Persisted task checklist using `localStorage`.
- Dynamic checklist progress percentage, linear progress bar, and circular journey progress.
- Session task flow with `Start -> Continue -> Completed` states.
- Locked session tasks stay disabled until the previous task is completed.
- Mock data is separated in `lib/mockApi.ts` so it can be replaced by real API calls later.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Approach

The app keeps the Figma-inspired layout in server-rendered Next.js pages, then isolates interactive behavior into client components:

- `components/AiChat.tsx` owns chat input state and calls the mocked `sendAiMessage` API helper.
- `components/TaskProgress.tsx` owns checklist state, persists it to `localStorage`, and calculates dashboard progress.
- `components/SessionTaskFlow.tsx` owns gated lesson state and calculates session progress.
- `hooks/useLocalStorageState.ts` centralizes browser persistence.
- `lib/mockApi.ts` contains API-shaped mock data and response helpers.

## Submission

Live deployed URL: https://shivansh-harji-softech.vercel.app/

GitHub repository: https://github.com/shivansh-verma13/Shivansh-Verma-Harji-Softech-Frontend
