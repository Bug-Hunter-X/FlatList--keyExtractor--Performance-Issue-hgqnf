To fix this issue, make sure your `keyExtractor` function always returns a unique identifier for each item in the data array. This identifier should remain consistent even if the order of items changes.  The best approach is to use a unique ID that is specific to each item in your data. 

```javascript
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.text}</Text>}
  />
```

If you don't have a unique ID in your data, you can create one using a library like `uuid`:

```javascript
import uuid from 'react-native-uuid';

const data = [
  { text: 'Item 1', id: uuid.v4() },
  { text: 'Item 2', id: uuid.v4() },
  // ...
];
```