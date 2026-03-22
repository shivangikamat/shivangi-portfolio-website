#  Interactive Dressing Room Portfolio

An interactive personal portfolio built with **React, TypeScript, and Vite**, designed as a **clickable dressing room environment** where visitors explore different objects to learn about my projects, experience, education, and activities.

Instead of a traditional scrolling portfolio, the site creates a **playful, immersive interface** where each object in the room leads to a different section of my work.

 **Live Website:**  
https://www.shivangikamat.com

---

##  Concept

This portfolio reimagines the standard developer website as a **virtual dressing room**.

Visitors interact with the room by clicking objects that reveal different aspects of my work and journey.

Examples include:

-  **Wardrobe items** → Projects  
- **Books / desk items** → Education  
-  **Accessories** → Work experience  
- **Decor elements** → Extracurricular activities  
- **Personal items** → Contact information  

The goal is to create a **memorable storytelling experience** rather than a static resume page.

---

## 🛠 Tech Stack

### Frontend
- React  
- TypeScript  
- Vite  

### Styling
- TailwindCSS  
- Custom UI components  
- Interactive SVG assets  

### Routing
- React Router  

### State & Data
- TanStack React Query  

### UI Utilities
- Tooltip provider  
- Toast notifications  
- Curtain-style loading animations  

### Deployment
- Vercel  

### Analytics
- Vercel Analytics  

---

## 📂 Project Structure

```text
clickable-canvas-portfolio/
├── public/
│   ├── Content/
│   ├── images/
│   └── sounds/
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── SVGPreloader/
│   │
│   ├── hooks/
│   ├── lib/
│   │
│   ├── pages/
│   │   ├── Index/
│   │   ├── Blog/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Extracurriculars/
│   │   ├── Contact/
│   │   └── NotFound/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│
├── tailwind.config.ts
├── vite.config.ts
├── package.json
└── vercel.json
