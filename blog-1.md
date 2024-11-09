## 1. Union type
Here Union data type means or data type.

```typescript
Example : type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
```
Here I can set variable FrontendDeveloper value to fakibazDeveloper or juniorDeveloper. Can't set other value.


## 2. Intersection type
Here Intersection data type means and data type.

```typescript
Example :

type FrontendDeveloper = {
skills: string[];
designation1: 'Frontend Developer';
};
 type BackendDeveloper = {
skills: string[];
designation1: 'Backend Developer';
}
type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper : FullstackDeveloper = {
skills: ['HTML', 'CSS', 'EXPRESS'],
designation1: 'Frontend Developer',
designation2: 'Backend Developer'
}
```

Here the type of FullstackDeveloper will be FrontendDeveloper and BackendDeveloper type. My function must have above 2 types of data or else I will get error.