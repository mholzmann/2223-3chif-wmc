# Objects

## Object Literals

- In **JavaScript** an object consists of key-value-pairs. 

- You can create an object with the *object literal syntax*:

  ```javascript
  const john = {
      firstName: "John",
      lastName: "Smith",
      age: 27,
      female: false
  }
  ```

- As you can see that the values can have a primitive type.
- Types like `Object`, `Array` or a `function` are possible too.

<!---->

- You can access the properties of an object, by using the *dot notation*:

  ```javascript [|1|2]
  john.lastName = "Doe";
  console.log(john.firstName + " " + john.lastName); // output: John Doe
  ```



## Interfaces

- In **TypeScript** we describe objects by using interfaces:

  ```typescript
  interface Person {
      firstName: string;
      lastName: string;
      age: number;
      female?: boolean;
  }
  ```

> 💡**Please note:**
> - Because of the question mark, `female` is an optional property.

<!---->


- You can use an interface like any other type:

  ```typescript
  const john: Person = {
      firstName: "John",
      lastName: "Smith",
      age: 27,
      female: false
  };
  
  const jane: Person = {
      firstName: "Jane",
      lastName: "Doe",
      age: 31
  };
  ```

<!---->

- As mentioned before, objects can also contain functions:

  ```typescript
  interface NamedPerson extends Person {
      getName: () => string;
  }
  ```

>
> 💡**Please note**:
> - The `NamedPerson`-interface extends the `Person`-interface. So it contains all properties of `Person`.
> - The function type `() => string` means:
>   - has no parameters
>   - returns a `string`


<!---->

- Below you can see an example for an object of type `NamedPerson`:

  ```typescript
  const jill: NamedPerson = {
  	firstName: 'Jill',
  	lastName: 'Smith',
  	age: 44,
  	getName: function() {
  		return this.firstName + " " + this.lastName;
  	}
  };
  ```

> 💡**Please note:** 
> - You have to use the `this` keyword, if you want to access a property within a method.