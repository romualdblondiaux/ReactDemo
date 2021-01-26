import React, {Component, Fragment} from 'react';
import './App.css';
import Membre from './components/Membre';

const league = {
  membre1: {
    nom: 'Batman',
    age: 45
  },
  membre2: {
    nom: 'Superman',
    age: 45
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 30
  },
}

class App extends Component {
  state = {
    league : league
  }

  handleClick = (nb) => {
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league:league})
  }

  handleChange = (event) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league.membre1.nom = nom
    this.setState({league:league})
  }

  render() { 
    const {title} = this.props
    const nb = 5
    const liste = Object.keys(this.state.league).map(membre => {
      return (
        <Membre key={membre} age={this.state.league[membre].age} nom={this.state.league[membre].nom} />
      )
    })



    return ( 
      <Fragment> 
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit repudiandae quasi aspernatur soluta similique possimus vel? Voluptatibus aut cumque ipsam perferendis, nobis quis, deserunt iusto quod voluptates dolorem, labore nisi doloribus delectus beatae. Deserunt veritatis autem excepturi eos nesciunt, sapiente eaque reiciendis libero molestiae consequatur voluptatibus perspiciatis illum iste quas molestias consequuntur. Id alias sint possimus rem? Dolore eos dolor iusto aut commodi, explicabo consequuntur vero quaerat, qui, accusamus officia iure molestiae ipsa rerum harum autem enim illum! Tenetur id sint itaque rem veniam deleniti laudantium aliquam eligendi enim delectus aperiam sunt magni molestias, provident, culpa quibusdam, facilis repellat.</p>
      </div>
      <div>Test</div>
        <input 
          value={this.state.league.membre1.nom}
          onChange={this.handleChange}
          type="text"/>
        <Membre 
          age={this.state.league.membre1.age}
          nom={this.state.league.membre1.nom} />
          <Membre 
          age={this.state.league.membre2.age}
          nom={this.state.league.membre2.nom} />
          <Membre 
          age={this.state.league.membre3.age}
          nom={this.state.league.membre3.nom} />
          <Membre 
          age={this.state.league.membre4.age}
          nom={this.state.league.membre4.nom} />   
          <Membre 
          age="2"
          nom="Ace">
            Je suis le batdog  
          </Membre>
          <button onClick={this.handleClick}>+1</button>
          <Button 
          nb={nb}
          vieillir={()=> this.handleClick(nb)} /> 
          <h1>Rendu avec boucle</h1>
          {liste} 
      </Fragment>
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App')) 
      // remplacer Fragment par <> et fermeture </>
     );
  }
}
 
export default App;