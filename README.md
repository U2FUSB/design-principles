Used for learning: https://www.dofactory.com/javascript/design-patterns/
Implementations are functional. So no classes

All explanations are about possible usecases and maybe differences to other patterns if necessary.

# creational

## abstractFactory

-   Similar kinds of objects need to be created dynamically (=usecase simple factory)
-   Even though they are of the same kind, they can be categorised into different groups
-   Every Group implements the same objects, but they maybe have a different behaviour
-   These groups do not contain the objects themselfs, but rather factories to create said objects. Every factory is used to create one kind of object. (This is important to distuinguish from a factoryMethod)
-   A central controller should take such kits as an argument and implement their methods (the factories) as a generic kit, which can then be used (=you want a kit of factories as resulting object)

## factoryMethod

-   mostly the same as the abstract factory
-   one difference is, that the kits don't contain other factories, but methods and properties directly
-   the other difference is, that the central controller therefore does not create a generic kit using the factory method as an argument, but just an object build from its methods/properties (=you want a resulting object with simple methods/properties)

## builder

-   The methods on finished objects and during the building steps should differ.
-   You need to create objects which have interdependent properties. Some properties cannot be set, if others were set before.
-   You want to create objects which are differently complex during the creation and the usage phase.

## prototype

Skipped.
Just needed if you want to have every created object filled with default values.
To me this seems to be more of a class-based issue

## singleton

-   not more then one instance of the desired object should exist at the same time.
-   there is a need to create more then one instance but all are just virtual instances with reference to the single real one.
-   the object should not exist by default, but only when created (so creation should only happen once - and done with intend, not automatically - during runtime)

# structural

## adapter

-   a new function/api/whatever should be used as replacement for another. The new uses a different interface.
-   Neither the old nor the new should change their interface, but all existing functionality should keep working.
-   You basically "can" refactor all identifiers in the existing code, but that's it.

## bridge

-   A component should be used with the same methods/api, even if it changes over time (drivers, libraries, etc)
-   Different components should be used in the same way. Like they all would be the same generic API

## composite

-   A tree structure is needed. Could be a directory, a structure for some form of organized computation, elements on a page, whatever
-   This can also be build as a "transparent" composite, in which all components are treated as a composite on its own.
