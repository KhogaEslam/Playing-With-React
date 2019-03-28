// Import default styles.
// This only needs to be done once; probably during bootstrapping process.
import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";

import React from "react";
import ReactDOM from "react-dom";
import Select from "react-virtualized-select";
import faker from "faker";

// Dummy array of test values.
const options = Array.from(new Array(1000), (_, index) => ({
  label: faker.lorem.sentence(),
  value: index
}));

const VirtualizedSelect = (props) => (<Select options={options} />);

export default VirtualizedSelect;