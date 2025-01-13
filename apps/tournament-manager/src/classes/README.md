# Domain-Driven Frontend

## Vocabulary

### Entity

An object defined primarily by its identity that can change over time. An entity has a lifecycle and is uniquely identifiable.

### Repository

An object that mediates between the domain and data mapping layers, acting like an in-memory domain object collection. An object with the main purpose of store and retrieve entities. It's form should be indipentent from the data source.

### Service

A Service is an object that orchestrates the steps required to fulfill the commands imposed by the client. Notice that in DDD there are three different kinds of services: Domain, Application and Infrastructure. However, this classification lose some it's importance for a frontend application.


### Value Object

Value Objects are objects that are known only by their properties and values. Addreses, 2D Points and other immutable objects are good examples of Value Objects.

### Aggregate

An Aggregate is a cluster of domain objects (entities or value objects) that can be treated as a single unit. their main purpose is to ensure the validity of the business rules related to the domain.

### Domain Events

Something happend that is relevant to the domain, their name should be in the past tense, in order to communicate that something is already happend in the system.
