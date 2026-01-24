Used for learning: https://www.dofactory.com/javascript/design-patterns/
Implementations are functional. So no classes

All explanations are about possible usecases and maybe differences to other patterns if necessary.

# creational

## abstractFactory

- Similar kinds of objects need to be created dynamically (=usecase simple factory)
- Even though they are of the same kind, they can be categorised into different groups
- Every Group implements the same objects, but they maybe have a different behaviour
- These groups do not contain the objects themselfs, but rather factories to create said objects. Every factory is used to create one kind of object. (This is important to distuinguish from a factoryMethod)
- A central controller should take such kits as an argument and implement their methods (the factories) as a generic kit, which can then be used (=you want a kit of factories as resulting object)

## factoryMethod

- mostly the same as the abstract factory
- one difference is, that the kits don't contain other factories, but methods and properties directly
- the other difference is, that the central controller therefore does not create a generic kit using the factory method as an argument, but just an object build from its methods/properties (=you want a resulting object with simple methods/properties)

## builder

- The methods on finished objects and during the building steps should differ.
- You need to create objects which have interdependent properties. Some properties cannot be set, if others were set before.
- You want to create objects which are differently complex during the creation and the usage phase.

## prototype

Skipped.
Just needed if you want to have every created object filled with default values.
To me this seems to be more of a class-based issue.

## singleton

- not more then one instance of the desired object should exist at the same time.
- there is a need to create more then one instance but all are just virtual instances with reference to the single real one.
- the object should not exist by default, but only when created (so creation should only happen once - and done with intend, not automatically - during runtime)

# structural

## adapter

- a new function/api/whatever should be used as replacement for another. The new uses a different interface.
- Neither the old nor the new should change their interface, but all existing functionality should keep working.
- You basically "can" refactor all identifiers in the existing code, but that's it.

## bridge

- A component should be used with the same methods/api, even if it changes over time (drivers, libraries, etc)
- Different components should be used in the same way. Like they all would be the same generic API

## composite

- A tree structure is needed. Could be a directory, a structure for some form of organized computation, elements on a page, whatever
- This can also be build as a "transparent" composite, in which all components are treated as a composite on its own.
- Especially useful if different object types are handled in a different way, but should be accessed using the same interface and/or in some way traversed.

## decorator

- extending an existing component with additional functionality, without changing the component itself.
- using Object.assign to an object with a new property/method whould be the object-based way to do this

## facade

- whenever components you dont want to touch need a simplified interface
- especially if they interact with each other
- For example the fetch api working together with some other api. This can be abstracted into a facade which only handles their use cases.

## flyweight

- As far, I can see only 2 useful scenarios:
- first, when vast amounts of objects are created and it restricts memory. However, it also reduces uniqueness of the created objects.
- second, when you have a randomly created set of objects and don't want to (or cant) have more of them, then the count of every unique combination of their properties/methods

## proxy

- to handle usage of an existing component.
- For example to translate all deletion requests into saving them to a backup component
- Or to cache results
- or to rate limit usages by user

## chain of responsibility

- taking cash from an atm, handling password validation incrementally, etc.
- can be used when one or more components process an object, where the order of these components, if they are used or not and their amount should be independent.
- seems similar to the builder pattern, but instead of building a component, data gets processed.

## command

- allows to tread commands like data.
- Maybe for safety checks on commands.
- Also to allow sending them in bulk to - for example - a proxy.
- Of course everything which needs to implement undo/redo operations on commands

## interpreter

skipped. Could not think up a usecase which isn't very complex and not a calculator.
But I use one from [here](https://medium.com/@artemkhrenov/the-interpreter-pattern-in-javascript-41493e1ad06b) in the examples, for completenes

## iterator

allows to create iteration methods for a collection. Thats it.

## mediator

- messaging board, separate communication channels, sending commands to one or all receivers, etc.
- basically everywhere usable where one component sends communication or data through a central hub to other components.

## memento

- if I need to save the state of objects for later restore

## observer

- for event based communication. Can allow loose coupling between modules.

## state

- stuff like vending machines, state-based games, website forms, etc.
- Basically Everything that has different states, and needs a maintainable way to transition between them

## strategy

- Basically everywhere one wants to switch different components for the same purpose around
- For example when one wants to choose an fitting algorith for a task, based on conditions of the environment
- or to choose between designs/themes, based on user input
