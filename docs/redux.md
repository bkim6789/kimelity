## install 
```
yarn add redux react-redux
yarn add @reduxjs/toolkit
```

## initialize 
```
reducer.js
* create initialState
* set up reducer

store.js
* create store

index.js
* provide store

```
## add new state
```
action-types.js
* add name of actions

reducer.js
* add to initial state
* add action handler

actions.js
* create action creator

Component.js
* import { connect } from 'react-redux';
* import action from actions.js
* in component function extract props/actions
* mapStateToProps
const mapStateToProps = state => {
    return {
        isTicketOpen,
    };
};

* mapDispatchToProps (use action creators)
const mapDispatchToProps = {
        isTicketOpen: state.isTicketOpen,
};

* connect
export default connect(mapStateToProps, mapDispatchToProps)(Login);
```
