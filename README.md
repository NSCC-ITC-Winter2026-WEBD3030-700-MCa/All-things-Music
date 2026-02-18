# All-things-Music

All-things-Music is a collaborative project focused on showcasing favorite songs across various music genres. The site allows users to explore and celebrate music diversity by genre, providing a visually appealing and user-friendly experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Running the Project](#running-the-project)
- [Configuring/Customizing the Site](#configuringcustomizing-the-site)
- [Technologies Used](#technologies-used)
- [Additional Notes](#additional-notes)

## Getting Started

Follow these steps to clone the repository, set up the project, and get it running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) and npm (Node Package Manager)
  - [Download and install Node.js](https://nodejs.org/)
- **Git**
  - [Download and install Git](https://git-scm.com/)

### Clone the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Music.git
```

Navigate into the project directory:

```bash
cd All-things-Music
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Running the Project

This project uses the following npm scripts:

#### Development Server
To start the development server, use:

```bash
npm run dev
```

This will start the development server using `docmd dev`, and you can view the project in your browser at `http://localhost:3000` (or the port specified in the terminal).

#### Build the Site
To build the site for production, use:

```bash
npm run build
```

This will create a production build using `docmd build`.

#### Preview the Built Site
To preview the built site locally, use:

```bash
npm run preview
```

This will serve the built site using `npx serve site`.

## Configuring/Customizing the Site

To configure or customize the site, follow these steps:

1. **Update Content**:
   - Navigate to the `docs/` folder to edit the markdown files (e.g., `index.md`).
   - These files control the content displayed on the site.

2. **Modify Styles**:
   - Update the CSS files located in the `assets/css/` directory to change the look and feel of the site.

3. **Add Images**:
   - Place new images in the `assets/images/` directory and reference them in your content or styles.

4. **Update JavaScript**:
   - Modify or add JavaScript files in the `assets/js/` directory to enhance functionality.

5. **Rebuild the Site**:
   - If necessary, rebuild the site using the appropriate npm scripts (e.g., `npm run build`).

## Technologies Used

The following technologies were used to build this project:

- **HTML5** and **CSS3** for structuring and styling the site
- **JavaScript** for interactivity and dynamic content
- **Node.js** and **npm** for managing dependencies and running the development server
- **Markdown** for content management in the `docs/` folder
- **Git** for version control

## Additional Notes

- Ensure you have the correct permissions to access private npm packages if required.
- Refer to the project documentation for more details on advanced configurations.
