## Usage 

```
import React from 'react';
import { Card } from 'another-react-lib';

const App = () => {
  return (
    <div className="App">
      <Card
        HeaderFontColor="red"
        HeaderFontSize="small"
        HeaderFontFamily="serif"
        subHeaderFontColor="black"
        subHeaderFontSize="small"
        subHeaderFontFamily="serif"
        dateFontColor="black"
        dateFontSize="small"
        dateFontFamily="serif"
        backgroundImage="white"
        borderColor="black"
        borderWidth="1px"
        borderRadius="25px"
        onClick={() => alert('hello world')}
      />
    </div>
  );
}

export default App;
```

### Properties

| Property              | Type     | Required | Default value  | Description                                      |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------- |
| `buttonColor`         | string   | no       | red            | Choose from red, green, blue, black, and gray.   |
| `text`                | string   | no       | text goes here | Text you want the button to display              |
| `size`                | string   | no       | small          | small, medium, and large font sizes.             |
| `styles`              | object   | no       | {}             | Any additional styles you want to pass in        |
| `HeaderFontColor`     | string   | no       | red            | Choose from red, green, blue, black, and gray.   |
| `HeaderFontSize`      | string   | no       | small          | small, medium, and large font sizes.             |
| `HeaderFontFamily`    | string   | no       | serif          | Pick any font you preferred                      |
| `subHeaderFontColor`  | string   | no       | black          | Choose from red, green, blue, black, and gray.   |
| `subHeaderFontSize`   | string   | no       | small          | small, medium, and large font sizes.             |
| `subHeaderFontFamily` | string   | no       | serif          | Pick any font you preferred                      |
| `dateFontColor`       | string   | no       | black          | Choose from red, green, blue, black, and gray.   |
| `dateFontSize`        | string   | no       | small          | small, medium, and large font sizes.             |
| `dateFontFamily`      | string   | no       | serif          | Pick any font you preferred                      |
| `tags`                | array    | no       | []             | tags you can include                             |
| `showTags`            | boolean  | no       | false          | you can defined to show tags or not              |
| `date`                | object   | no       | null           | Date                                             |
| `showDate`            | boolean  | no       | false          | you can defined to show date or not              |
| `backgroundImage`     | string   | no       | white          | Choose from white, green, blue, black, and gray. |
| `borderColor`         | string   | no       | black          | Choose from red, green, blue, black, and gray.   |
| `borderWidth`         | string   | no       | 1px            | Pick width you preferred                         |
| `borderRadius`        | string   | no       | 25px           | Choose border radius you preferred               |
| `onClick`             | Function | no       | ()=>{}         | Function to call when you clicked the card       |