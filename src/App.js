import React, {Component, Fragment} from 'react';
import './App.css';
import Membre from './components/Membre';

class App extends Component {
  
  render() { 
    const {title} = this.props
    return ( 
      <Fragment> 
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit repudiandae quasi aspernatur soluta similique possimus vel? Voluptatibus aut cumque ipsam perferendis, nobis quis, deserunt iusto quod voluptates dolorem, labore nisi doloribus delectus beatae. Deserunt veritatis autem excepturi eos nesciunt, sapiente eaque reiciendis libero molestiae consequatur voluptatibus perspiciatis illum iste quas molestias consequuntur. Id alias sint possimus rem? Dolore eos dolor iusto aut commodi, explicabo consequuntur vero quaerat, qui, accusamus officia iure molestiae ipsa rerum harum autem enim illum! Tenetur id sint itaque rem veniam deleniti laudantium aliquam eligendi enim delectus aperiam sunt magni molestias, provident, culpa quibusdam, facilis repellat.</p>
      </div>
      <div>Test</div>
      <Membre nom="Romuald" />
      <Membre nom="Martin" />
      <Membre nom="François" />
      </Fragment>
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App')) 
      // remplacer Fragment par <> et fermeture </>
     );
  }
}
 
export default App;