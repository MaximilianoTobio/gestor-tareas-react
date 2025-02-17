# 📝 Gestor de Tareas con React

Este es un **Gestor de Tareas** simple construido con **React** y **Vite**, diseñado para agregar, listar y eliminar tareas de manera sencilla. Además, incluye **diseño responsive** para adaptarse a dispositivos móviles. 📱✨

## 🚀 Tecnologías utilizadas

- ⚡ React + Vite
- 🎣 Hooks (`useState`), (`useEffect`)
- 🎨 CSS para estilos modernos y responsivos

---

## 📌 Características

✅ **Agregar tareas**: Ingresa una tarea en el input y presiona "Agregar".

- La tarea se **agrega y se muestra inmediatamente** en la lista sin necesidad de recargar la página.
- **Las tareas se guardan automáticamente en `localStorage`**, por lo que no se pierden al cerrar o actualizar la página.

✅ **Listar tareas**: Las tareas **se muestran automáticamente** en la lista a medida que son agregadas y **se recuperan desde `localStorage`** al abrir la aplicación.

✅ **Eliminar tareas**: Cada tarea tiene un botón de **"Eliminar"** para removerla fácilmente.

- Al eliminar una tarea, esta también **se borra de `localStorage`** para que no vuelva a aparecer.

✅ **Interfaz moderna y responsive**: Diseño adaptable a cualquier tamaño de pantalla.

✅ **Persistencia de datos con `localStorage`**:

- **Las tareas permanecen guardadas** incluso si cierras o recargas la página.
- No se necesita una base de datos, ya que la información se almacena localmente en el navegador.

✅ **Código modular y reutilizable**: Separación de componentes para facilitar mantenimiento y escalabilidad.

## 📥 Instalación y ejecución

### 1️⃣ Clonar el repositorio

Si deseas probarlo localmente, clona este proyecto con:

```bash
git clone https://github.com/tu-usuario/gestor-tareas-react.git

```

### 2️⃣ Instalar dependencias

```bash
cd gestor-tareas-react
npm install
```

### 3️⃣ Ejecutar la aplicación

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Luego, abre en tu navegador:

```bash
http://localhost:5173/
```
