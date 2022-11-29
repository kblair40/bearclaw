# Install / Usage Instructions

Make sure you're at the project's root and run commands below

1. `git clone https://github.com/kblair40/bearclaw.git`
2. `yarn install`
3. `yarn dev`

Vite does not force open a tab at the port it uses, so you'll need to open a new tab and type in the address you see in your terminal, which is usually localhost:5173 (or 127.0.0.1:5173/)

The .env file in project root does not have any sensitive information in it.  There's a placeholder VITE_API_URL variable you can replace with the actual api's url to test the POST request.  Odds are very high some of the variables in formData will need to be changed to match what the api expects first.

Most functionality can be found in src/store/FormContext.tsx.