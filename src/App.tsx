import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BestSellerApiResult, fetchBestsellers, getBestSellers } from './API/fetchBestsellers';

interface AppState {
  bestSellerResults: BestSellerApiResult[];
  listNames: string[];
}

class App extends Component<AppState> {
  state: AppState = {
    bestSellerResults: [],
    listNames: [],
  }

  async componentDidMount() {
    // this.setState({results: fetchBestsellers()});
    // console.log('results in app:', this.state.results);
    // const resultArray: BestSellerResult[] = [];
    // const listNames = await fetchListNames();
    // console.log('listNames:', listNames);
    // await listNames.forEach(async (name: string) => {
    //   resultArray.push(await fetchBestsellers(name))
    //   console.log('resultArray:', resultArray);
    // });
    // const results = await fetchBestsellers();
    // console.log('results in app:', results);
    // this.setState({results});
    this.setState({bestSellerResults: await getBestSellers()});

  }

  render() {
    const { bestSellerResults } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {bestSellerResults[0]?.updated_date}
        </header>
          <table>

            {bestSellerResults?.map((result: any, index: number) => <p key={index}>{result.title}</p>)}
          </table>
      </div>
    );
  }
}

export default App;


// currently working on calling bestSellers with each list and populating state with all of the bestSellers for the week
// Then display the data as required
// Then ensure functionality is met
// Style
// clean up code