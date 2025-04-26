📝 Documentation

1. Clone the repository:

```bash
git clone https://github.com/kenn2k/recipe-test-task.git
cd recipe-test-task
```
2. Install server dependencies:
```bash
cd server
yarn install
cd ..
```
3. Install client dependencies:
```bash
cd client
yarn install
cd ..
```
🔧 Configuration (Environment Variables)

Server Setup:

Set the following environment variables in the .env file:
```bash
PORT = 4000

BASE_URL = https://www.themealdb.com/api/json/v1/1
```
Client Setup:

Set the following environment variable in the .env file:
```bash
NEXT_PUBLIC_API_BASE_URL = http://localhost:4000
```
Running the Application

1. Start the server:
```bash
yarn start:dev
```
2. Start the client:
```bash
yarn dev
```
