# Burger Builder in React.js

## Introduction

## Component Tree/Structure

```
<App>
    <Layout propX, propY ...> // account for different devices
        { props.children } // referencing burger builder and other pages
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
```

## Application State (Data)

## Components vs Containers
