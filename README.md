# Blog con Notion CMS

Este es un blog moderno construido con Next.js que usa Notion como sistema de gestión de contenido (CMS).

## 🚀 Características

- ✅ Integración completa con Notion API
- ✅ Soporte para categorías y tags
- ✅ Imágenes destacadas
- ✅ Información de autor y fecha de publicación
- ✅ Filtrado por estado (Published/Draft)
- ✅ Conversión automática de Notion a Markdown
- ✅ Diseño responsive y moderno
- ✅ Revalidación automática cada 60 segundos

## 📋 Requisitos Previos

1. Una cuenta de Notion
2. Una base de datos de Notion con las siguientes propiedades:
   - **Title** (Title)
   - **Status** (Select: Published, Draft)
   - **Category** (Select: Business, Technology, Travel, etc.)
   - **Tags** (Multi-select: Finance, Personal, Technology, etc.)
   - **Author** (Person)
   - **Published Date** (Date)
   - **Featured Image** (Files & media)

## 🔧 Configuración

### Paso 1: Crear una Integración en Notion

1. Ve a [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Haz clic en "+ New integration"
3. Dale un nombre (ej: "Mi Blog")
4. Selecciona el workspace donde está tu base de datos
5. Haz clic en "Submit"
6. Copia el **Internal Integration Token** (lo necesitarás después)

### Paso 2: Compartir tu Base de Datos con la Integración

1. Abre tu base de datos en Notion
2. Haz clic en los tres puntos (⋯) en la esquina superior derecha
3. Selecciona "Add connections"
4. Busca y selecciona la integración que creaste
5. Haz clic en "Confirm"

### Paso 3: Obtener el ID de tu Base de Datos

El ID de tu base de datos está en la URL. Por ejemplo:

\`\`\`
https://www.notion.so/2934cd9e42278179bebdcfae22ff046d?v=...
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      Este es tu Database ID
\`\`\`

### Paso 4: Configurar Variables de Entorno

1. En tu proyecto, ve a la sección **Vars** en el sidebar de v0
2. Agrega las siguientes variables de entorno:

\`\`\`
NOTION_TOKEN=tu_integration_token_aquí
NOTION_DATABASE_ID=tu_database_id_aquí
\`\`\`

O si estás trabajando localmente, crea un archivo `.env.local`:

\`\`\`bash
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=2934cd9e42278179bebdcfae22ff046d
\`\`\`

### Paso 5: Instalar Dependencias

Si estás trabajando localmente:

\`\`\`bash
npm install
# o
yarn install
# o
pnpm install
\`\`\`

### Paso 6: Ejecutar el Proyecto

\`\`\`bash
npm run dev
# o
yarn dev
# o
pnpm dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Cómo Crear un Post

1. Ve a tu base de datos en Notion
2. Crea una nueva página
3. Llena los campos:
   - **Title**: El título de tu artículo
   - **Status**: Selecciona "Published" (solo los posts publicados aparecerán en el blog)
   - **Category**: Elige una categoría
   - **Tags**: Agrega tags relevantes
   - **Author**: Selecciona el autor
   - **Published Date**: Elige la fecha de publicación
   - **Featured Image**: Sube una imagen destacada
4. Escribe el contenido de tu artículo en la página de Notion
5. ¡Listo! Tu artículo aparecerá automáticamente en el blog

## 🎨 Estructura del Proyecto

\`\`\`
├── app/
│   ├── page.tsx              # Página principal con todos los posts
│   ├── post/[slug]/page.tsx  # Página individual de cada post
│   ├── category/[category]/page.tsx  # Posts filtrados por categoría
│   ├── categories/page.tsx   # Lista de todas las categorías
│   └── layout.tsx            # Layout principal
├── lib/
│   └── notion.ts             # Funciones para interactuar con Notion API
└── components/
    └── ui/                   # Componentes de UI (shadcn)
\`\`\`

## 🔄 Revalidación

El blog se revalida automáticamente cada 60 segundos. Esto significa que los cambios en Notion aparecerán en tu blog en menos de un minuto.

## 🚀 Desplegar en Vercel

1. Haz clic en el botón "Publish" en v0
2. O conecta tu repositorio de GitHub a Vercel
3. Agrega las variables de entorno `NOTION_TOKEN` y `NOTION_DATABASE_ID` en la configuración de Vercel
4. ¡Despliega!

## 📚 Recursos

- [Notion API Documentation](https://developers.notion.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 💡 Tips

- Asegúrate de que el Status esté en "Published" para que los posts aparezcan
- Las imágenes destacadas deben estar subidas en Notion (no enlaces externos)
- Puedes personalizar los colores y estilos en `app/globals.css`
- El contenido de Notion se convierte automáticamente a Markdown
