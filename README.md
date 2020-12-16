
This app was built with [Next.js](https://nextjs.org/) 

#### Running the Application locally

Install the modules and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the home page.

#### This Application:

##### Searches for a cryptocurrency code using Apollo Client
By typing a code on the form and hitting enter or using the button "Add", a query is executed and a list of data is returned.
The prices are fetched from the Cryptocurrency Data Platform [BlockTap.io](https://api.blocktap.io/)


##### Displays the cryptocurrencies on the list to the left
The price displayed is the first valid price found in the list, where a valid price is a Non-NULL value. The result is inserted at the head of the list.
If the data returned is empty, no new values are shown in the list.
> Room for improvement: Notify the user of errors or that no results were found

##### Replaces the already entered currency in case it is typed again

If a code that is already on the list is typed on the form, the former code is removed from the list and the new value (or the same cached value) is inserted at the head.

>the fetchPolicy: "cache-and-network" is used, which means the query will be executed against the cache and the GraphQL server and update the cache in case the server-side query result is different from the one stored.

##### Uses redux to centralize the list state
Although it wasn't necessary, the redux pattern with the [Redux Toolkit](https://redux-toolkit.js.org/) is used to keep the state of the cryptocurrency list. This approach was chosen so the actions and items wouldn't need to be passed as props to the child components.

##### Uses [CSS Modules](https://github.com/css-modules/css-modules) for component scoped styles
Each component will have its CSS file with rules that applies only to that component's scope. 

##### Works well on small screens 
Media queries were added, so the application would still work on small screens in Portrait mode.
> Room for improvement: Landscape support

##### Uses [Jest](https://jestjs.io/) for tests
For running the tests:

```bash
npm run test
```
