
# Copilot Instructions for AI Coding Agents

## Project Overview
This is a React + TypeScript todo list app using Vite, Zustand, and Tailwind CSS. Tasks are categorized as "Business" or "Personal" and persisted in browser localStorage. The UI is component-driven, with category filtering and progress tracking. No backend/API calls are made.

## Architecture & Data Flow
- **State Management:** All app state (tasks, categories, filters) is managed via Zustand in `src/store/todoStore.ts`. This is the single source of truth for tasks and categories. State is persisted to localStorage using Zustand's `persist` middleware.
- **Component Structure:**
  - `src/components/`: Reusable UI elements (e.g., `AddTask.tsx`, `TaskItem.tsx`, `CategoryCard.tsx`, `ConfirmDialog.tsx`, `Header.tsx`).
  - `src/pages/`: Main page(s), e.g., `HomePage.tsx` orchestrates the UI and connects to the store.
- **Types:** All shared types are in `src/types/index.ts`.
- **Styling:** Tailwind CSS is used for all styling. No CSS-in-JS or SCSS. Global styles in `src/index.css` and `src/App.css`.
- **Icons:** Use Lucide React icons for all iconography.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **No formal test suite** (as of this version)
- **Debugging:** Use browser devtools. State can be inspected via Zustand's devtools if enabled.

## Project-Specific Conventions
- **Component Imports:** Always import components, store, and types using the `@` alias (e.g., `import Header from '@/components/Header'`). Do not use relative paths like `../components/Header`.
- **Task Categories:** Only "Business" and "Personal" are supported. Category logic is centralized in the store and components. To add a new category, update `src/types/index.ts` and all category-dependent UI logic.
- **Modals:** All dialogs (add, confirm) are implemented as React components, not external libraries. See `AddTask.tsx` and `ConfirmDialog.tsx` for modal patterns.
- **Filtering:** Category filtering is handled in the store and reflected in UI via `CategoryCard` and `HomePage`.
- **No Routing:** Single-page app, all logic in `HomePage.tsx`.
- **Persistence:** All data is local, stored in browser localStorage via Zustand middleware.

## Integration Points & External Dependencies
- **Zustand:** State management (`src/store/todoStore.ts`)
- **Tailwind CSS:** Styling (`tailwind.config.js`, `postcss.config.js`)
- **Lucide React:** Icons
- **Vite:** Build tool (`vite.config.ts`)

## Examples & Patterns
- To add a new task type, update `src/types/index.ts` and the store logic in `src/store/todoStore.ts`.
- To add a new UI feature, create a component in `src/components/` and connect it to the store via hooks.
- To change styling, use Tailwind classes in JSX or update global styles in `src/App.css`/`src/index.css`.
- To add a new modal, follow the pattern in `AddTask.tsx` and `ConfirmDialog.tsx` (use React portals, no external modal libraries).

## Key Files & Directories
- `src/store/todoStore.ts`: Zustand store, all state logic and persistence
- `src/components/`: UI building blocks
- `src/pages/HomePage.tsx`: Main app logic and UI orchestration
- `src/types/index.ts`: Shared types for todos and categories
- `vite.config.ts`, `tailwind.config.js`: Build and styling config

---

For questions or unclear conventions, check `README.md` or ask for clarification.
