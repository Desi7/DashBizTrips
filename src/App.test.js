// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//----

const sum = function sum(a, b) {
  return a + b;
};
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//----
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

//----
test('not true and false is false', () => {
  expect(!true && false).toBe(false);
});

//----
test('spinner to be spinning', () => {
  expect({ spinning: true }.spinning).toBeTruthy();
});
