# redux-action-type-factory
Simple tool to create redux action type list with minimal typing, but fully autocomplete support

## Getting Started

### Installation

```bash
npm i redux-action-type-factory
```
or
```bash
yarn add redux-action-type-factory
```

### Basic Usage
- This relies on `typescript` for intellisense to run.

- Function `actionTypesFactory` accepts first argument as the prefix, if this is empty string then there will be no prefix, the remaining arguments will be the action types.

- Each defined actionType has three members:
`begin`: `ACTION_BEGIN` <br />
`succeeded`: `ACTION_SUCCEEDED` <br />
`failed`: `ACTION_FAILED` <br />

Use them as following:
```javascript
import { actionTypesFactory } from 'redux-action-type-factory';

let actionType = actionTypesFactory('todo',
  'INCREMENT',
  'DECREMENT'
);

actionType.INCREMENT.begin // 'todo/INCREMENT_BEGIN'
actionType.INCREMENT.succeeded // 'todo/INCREMENT_SUCCEEDED'
actionType.INCREMENT.failed // 'todo/INCREMENT_FAILED'

actionType.DECREMENT.begin // 'todo/DECREMENT_BEGIN'
actionType.DECREMENT.succeeded // 'todo/DECREMENT_SUCCEEDED'
actionType.DECREMENT.failed // 'todo/DECREMENT_FAILED'

// or

let actionType = actionTypesFactory('',
  'END',
);

actionType.END.begin // 'END_BEGIN'
actionType.END.succeeded // 'END_SUCCEEDED'
actionType.END.failed // 'END_FAILED'
```

And this is fully supported by VS Code intellisense!
