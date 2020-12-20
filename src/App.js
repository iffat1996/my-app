import React from 'react';

export default class App extends React.Component {
  state = {
    number: ''
  }

  handleChange = (e) => {
    this.setState({
      number: e.target.value
    })
  }

  createTable = (e) => {
    let table = []

    let children = []
    
    for (let j = 1; j <= this.state.number; j++) {
      let k = 1200*j
      console.log(k)
      children.push(<td style={{
        backgroundColor: 'blue',
        width: 1000+k,
        alignSelf: 'center',
        height: 20
      }}></td>)
      
    }

    table.push(<tr>{children}</tr>)
 
    return table
  }

  render() {
    return (

      <div className="app-content">
        <form>
          <input type="number" onChange={this.handleChange} />
        </form>

        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
      </div>

    )
  }


}
