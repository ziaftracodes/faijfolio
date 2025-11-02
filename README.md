# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/84137181-5d9b-4b26-a4f9-3b0dbdb0bee3

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/84137181-5d9b-4b26-a4f9-3b0dbdb0bee3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Three.js (3D effects)
- React Three Fiber
- Next Themes (dark mode)

---

## 🎨 Portfolio Features

- **3D Effects & Parallax**: Smooth depth-based animations
- **Glass Morphism**: Modern UI with liquid glass effects
- **Dark/Light Mode**: Beautiful themes with automatic switching
- **Grainy Gradients**: Textured, modern backgrounds
- **Fully Responsive**: Works perfectly on all devices
- **Easy to Edit**: All content in one simple file

## ✏️ How to Edit Your Portfolio Content

All website content (text, images, links, etc.) is centralized for easy editing:

📝 **`src/config/contentstoedit.ts`**

This file contains:
- Personal information (name, role, photos)
- Navigation links
- Hero section content
- Project/work showcase
- About section
- Skills and technologies
- Contact information
- Social media links

**Just edit this file and save - changes appear automatically!**

See `src/config/README.md` for detailed editing instructions.

## 📁 Simplified Project Structure

```
src/
├── config/
│   └── contentstoedit.ts    ← EDIT THIS for all content
├── components/              ← All UI components (simple & focused)
├── pages/
│   └── Index.tsx           ← Main page layout
└── index.css               ← Design system & styles
```

All components pull content from `contentstoedit.ts` making updates super simple!

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/84137181-5d9b-4b26-a4f9-3b0dbdb0bee3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
