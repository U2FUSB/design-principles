Used for learning: https://www.dofactory.com/javascript/design-patterns/

# Abstract Factory

## How to use it

Call a factory (for example userCreator).
As its argument, call another factory (for example proSubscriptionUserCreator)

> const bob = createUser(createProTierUser("Bob"));

## When to use

-   Similar kinds of objects need to be created dynamically (=usecase factory)
-   Even though they are of the same kind, they can be categorised into groups which need to be implemented differently

# Builder

## How to use it

Call the builder and chain-call its methods to incrementally build your object.
Finally, call its build/make method to return the finished object

## When to use

The methods on finished objects and during the building steps should differ. 
You need to create objects which have interdependent properties. Some properties cannot be set, if others were set before.
You want to create objects which are differently complex during the creation and the usage phase.   
