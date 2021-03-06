# Burger Builder in React.js

## Introduction

A simple application that will allow a user to build an item (burger) based on several ingredients, calculate it's final cost, and allow the user to buy or checkout the item.

## Build

1. Checkout the repository
2. \$ npm install
3. \$ npm run start
4. Go to http://localhost:3000/

NOTE: node version 8.xx.x (carbon lts) works the best at the moment. Need to update project to be compatible with 
later versions of node and update dependencies to use the latest/most secure versions

## Dependencies

1. React.js
2. Webpack
3. Axios
4. dependencies...
5. here

## Component Tree/Structure

```
<App>
    <Layout propX, propY ...> // account for different devices
        { props.children } // referencing burger builder and other pages (see below)
        <Toolbar showToggle={} logo={} navItems={}/>
        <SideDrawer showToggle={} logo={} navItems={}/>
        <Backdrop />
        <Header>
            <Logo />
            <Orders>
                <Order />
            </Orders>
        </Header>
    <Layout>
</App>


// pages
<BurgerBuilder> // ** stateful/container component **
    <BuildControls>
        <BuildControl />
        <BuildControl />
        <BuildControl />
        ...
        <OrderButton />
    </BuildControls>

    <Burger>
        <Ingredient />
        <Ingredient />
        <Ingredient />
        ...
    </Burger>

    <Modal>
        {props.children} // wrap around the modal, display conf message, summary ...
    </Model>
</BurderBuilder>
```

## Application State (Data)

- Ingredients
  - { meat, cheese, condiments }
  - purchased: (true | false)
  - total: float
  - Manage in BurgerBuilder component

## Components vs Containers

`Aux` and `Layout` are examples of containers. Any component defined outside of the `hoc` directory is a component (stateful and pure/stateless)

## Todo

1. Implement checkout feature (http)
2. ???
