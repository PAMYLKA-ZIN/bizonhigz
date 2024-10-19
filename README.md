# Bizonhigs

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Project Overview


## Tech Stack

- **Next.js 14** – for React-based server-side rendering and static site generation.
- **Node.js 21** – the latest Node.js version for enhanced performance.
- **pnpm** – for dependency management.
- **JavaScript** (or **TypeScript**, if applicable) – for frontend and backend logic.

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

- **Node.js** version 21 or later
- **pnpm** version 8.x or later (install using `npm i -g pnpm`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PAMYLKA-ZIN/bizonhigz.git
   ```

2. Navigate into the project directory:

   ```bash
   cd bizonhigz
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

### Running the Development Server

1. Create a `.env` file in the root of the project:

   ```bash
   touch .env
   ```

2. Add the following environment variable to the `.env` file:

   ```bash
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

   Modify the URL if needed, depending on your deployment environment.

3. Start the development server:

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`.

### Build for Production

To build the project for production, run:

```bash
pnpm build
```

To start the production server after building:

```bash
pnpm start
```

## Environment Variables

This project uses environment variables to manage configuration. The environment variable is defined in the `.env` file.

- `NEXT_PUBLIC_APP_URL`: This is the public-facing URL of the application. It can be configured differently for local, staging, and production environments.

Example `.env` file:

```bash
NEXT_PUBLIC_APP_URL=https://your-production-url.com
```

## Deployment

This section explains how to deploy the application on a VPS.

### Step 1: Set Up VPS

1. Set up a VPS server with an operating system of your choice (e.g., Ubuntu).
2. Ensure you have the following installed on your VPS:
   - **Node.js 21** 
   - **pnpm** (install it globally if needed: `npm i -g pnpm`)
   - A process manager like **PM2** or **systemd**

### Step 2: Clone the Repository on VPS

SSH into your VPS:

```bash
ssh your-user@your-vps-ip
```

Clone the repository:

```bash
git clone https://github.com/PAMYLKA-ZIN/bizonhigz.git
```

Navigate into the project directory:

```bash
cd bizonhigz
```

### Step 3: Install Dependencies

Run the following command to install all the project dependencies:

```bash
pnpm install
```

### Step 4: Set Environment Variables

Create a `.env` file on the VPS and set the production URL:

```bash
touch .env
```

Add the following line:

```bash
NEXT_PUBLIC_APP_URL=https://your-production-url.com
```

### Step 5: Build the Project

Build the project for production:

```bash
pnpm build
```

### Step 6: Run the Application

Use a process manager like **PM2** or **systemd** to run the application in the background.

#### PM2 Example:

Install PM2 if you haven't:

```bash
pnpm add pm2 -g
```

Start the application using PM2:

```bash
pm2 start pnpm --name "bizonhigz" -- start
```

Check that the application is running:

```bash
pm2 list
```

### Step 7: Set Up Nginx (Optional)

To serve the app on port 80, you can configure **Nginx** as a reverse proxy.

1. Install Nginx:

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Configure Nginx by editing the configuration file:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

3. Add the following configuration:

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Restart Nginx:

   ```bash
   sudo systemctl restart nginx
   ```

Your application should now be accessible via `http://your-domain.com`.
