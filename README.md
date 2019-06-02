# Burger Builder in React.js

## Introduction

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
