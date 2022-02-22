import './App.css';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      title: `First Item Title`,
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus fermentum ipsum. Nam quis nulla. Sed ac dolor sit amet purus malesuada congue. Integer imperdiet lectus quis justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.`,
      isExclusive: false,
    },
    {
      title: `Seccond Item Title`,
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque ipsum. Nam quis nulla. Morbi scelerisque luctus velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Quisque tincidunt scelerisque libero. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nullam eget nisl. Praesent id justo in neque elementum ultrices. Etiam bibendum elit eget erat.`,
      isExclusive: true,
    },
  ];

  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;