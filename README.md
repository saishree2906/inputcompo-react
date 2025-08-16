# InputCompo React

A simple React component library built with TypeScript, Vite, and Storybook. This library contains reusable UI components with Storybook stories for easy visualization and testing.

---

## Folder Structure

my-components/
├── src/
│ ├── components/
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ └── Button.stories.tsx
│ │ └── Input/
│ │ ├── Input.tsx
│ │ └── Input.stories.tsx
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md


---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/inputcompo-react.git
cd inputcompo-react
```

2.Install dependencies

npm install

3.Run Storybook locally

npm run storybook

4.Build Storybook

npm run build-storybook

5.Publish Storybook to Chromatic

Make sure your package.json has the Chromatic script:

"scripts": {
  "chromatic": "npx chromatic --project-token=YOUR_PROJECT_TOKEN"
}

Then run:

npm run chromatic
