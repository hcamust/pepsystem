# Peptinova — Modern Peptide System Landing Page

Landing Page moderna, ultra rápida e interactiva desarrollada con **Vite + React (TypeScript) + Tailwind CSS + Shadcn UI**. Incluye copia persuasiva en **inglés**, Calculadora Interactiva de Dosis de Péptidos (convertidor en vivo a UI de jeringas), temporizador regresivo de urgencia, matriz comparativa de valor, acordeón FAQ y Drawer de Checkout simulado.

---

## 🚀 Tecnologías Principales

- **Frontend**: Vite + React 19 (TypeScript)
- **Estilos**: Tailwind CSS + Radix UI / Shadcn UI + Lucide Icons
- **Animaciones**: Framer Motion & CSS custom keyframes
- **Servidor & Despliegue**: Docker + Nginx Alpine

---

## 🛠️ Ejecución Local para Desarrollo

1. Instalar las dependencias de Node:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

3. Para compilar la versión optimizada de producción en local:
   ```bash
   npm run build
   ```

---

## 🐋 Despliegue en Dokploy (VPS) paso a paso

Este repositorio está 100% optimizado para desplegarse mediante **Dokploy** (o cualquier gestor Docker en VPS) leyendo el `Dockerfile` multicapa incluido.

### Paso 1: Subir el proyecto a GitHub

Ejecuta los siguientes comandos en tu terminal dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Initial commit: Peptinova Landing Page"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Paso 2: Configurar la Aplicación en Dokploy

1. Accede al panel de control de tu **Dokploy** en tu VPS.
2. Ve a la sección **Applications** y presiona **Create Application**.
3. Asigna un nombre a la aplicación (ej. `peptides-landing`).
4. En el apartado **Source Provider**:
   - Selecciona **GitHub**.
   - Conecta tu cuenta/repositorio y selecciona la rama `main`.
5. En el apartado **Build Provider**:
   - Selecciona **Dockerfile** (Dokploy detectará automáticamente el `Dockerfile` en la raíz).
6. En la pestaña **Domains**:
   - Agrega tu dominio o subdominio (ej. `pep.tudominio.com` o el dominio que utilices).
   - Habilita la opción **HTTPS / SSL (Let's Encrypt)**.
7. Presiona **Deploy**.

Dokploy descargará el código, ejecutará el build de Vite en el contenedor builder de Node y servirá la web mediante **Nginx Alpine** expuesto en el puerto 80 con compresión Gzip habilitada automáticamente.
