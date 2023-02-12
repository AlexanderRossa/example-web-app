## Example FastAPI & React App

Implements a simple React interface for creating new products, displaying them in a table and deleting them. It uses SQLite for persistence.

## Running Locally

_Note: All of the commands assume root dir as the root of the repo. Adjust accordingly._

- Open two terminals and change directory (`cd`) to `client` and `server` respectively.

- In `server` terminal:

  - Install required packages based on the `requirements.txt` file. (_Note: You might want to use a virtual environment to isolate your main installation._)

  ```
  pip install -r requirements.txt
  ```

  - Start the `server` backend using `uvicorn`. You can optionally set it to reload automatically on code changes using `--reload`).

  ```
  uvicorn src.main:app --reload
  ```

- In `client` terminal:

  - Install the necessary NPM packages using:

  ```
  npm install
  ```

  - Start up the React application in the `client` terminal using:

  ```
  npm start
  ```

- You can now access the React application at `http://localhost:3000`
- The backend API is accessible at `http://localhost:8000`. For direct interaction I recommend using `http://localhost:8000/docs` which enables you to run requests against the API easily.

## Testing

Only the FastAPI component is covered with tests at this point. To run them, simply run `pytest` from the `server` directory and it will take care of the rest.
