## Usage

1. Import the csv to mongodb using following header:
   ```csv
   "cpf","name","birthDate","street","number","complement","neighborhood","cep","city","state","mothersName"
   ```
2. Set the environment variables as exemplified in the [.envrc.sampe](/.envrc.sample) file
3. Send a `GET` request to `/` passaing `name`, `cpf`, `city` or `state` as params to apply filters. Use `page` and `size` to deal with pagination.
   - `cpf`: No dots or dashes. Pass it as if it was an integer
   - `state`: Use only the two letters for the state like `PR` for *Paraná*
   - `page`: Number that represents current page to fetch. Starts at 1
   - `size`: Amount of registers to be returned at once. minimum of 1 and maximum of 100

> If you want to change field names, don't forget to change them throughout the code, or you won't be able to apply filters

## Heroku
