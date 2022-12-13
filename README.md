# The Peaks
The Peaks News. You can find the website [here](https://the-peaks-production.up.railway.app).

# Configuration

Copy `.env.example` to `.env` and fill in the values.

### Environment variables
| Variable              | Description      | Suggested Value                  |
|-----------------------|------------------|----------------------------------|
| VITE_GUARDIAN_API_KEY | Guardian API Key |                                  |
| VITE_API_URL          | Guardian API URL | https://content.guardianapis.com |

# Installing dependencies

Run `yarn install` to install dependencies.

# Starting development server

Run `yarn dev` to start the development server.

# Building for production

Run `yarn build` to build the app for production. Output will be in the `dist` directory.

# Running the production server

Run `yarn start` to start the production server. Or you can use `nginx` or `apache` to serve the `dist` directory.