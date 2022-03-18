import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Loading from './components/loading/loading';
import Error from './components/error/error';
import BestsellerTable from './components/bestseller-table/bestseller-table';
import { BestsellerUiData, ExtractedOverviewData } from './models/data-models';
import { getOverviewData, extractBestsellersUiDataFromOverviewData, extractUniqueListNameUiDataFromOverviewData } from './helpers/helpers';

interface AppState {
  allBestsellerResults: BestsellerUiData[];
  overviewData: ExtractedOverviewData;
  listNames: string[];
  loading: boolean;
  selectedListName: string;
  displayedBestsellers: BestsellerUiData[];
  error: boolean;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    allBestsellerResults: [],
    overviewData: {
      bestseller_week: '',
      bestseller_list_name_contents: [],
    },
    listNames: [],
    loading: false,
    selectedListName: '',
    displayedBestsellers: [],
    error: false,
  }

  componentDidMount = (): void => {
    this.setState({loading: true});
    this.populateData();
  }

  populateData = async (): Promise<void> => {
    let overviewData: ExtractedOverviewData = {
      bestseller_list_name_contents: [],
      bestseller_week: '',
    };
      overviewData = await getOverviewData();
      if (overviewData.bestseller_list_name_contents.length) {
        this.setState({overviewData});
        this.setState((state, _props) => {
          const allBestsellerResults = extractBestsellersUiDataFromOverviewData(state.overviewData);
          const listNames = extractUniqueListNameUiDataFromOverviewData(state.overviewData);
  
          return {
            allBestsellerResults,
            displayedBestsellers: allBestsellerResults,
            listNames,
            loading: false,
          };
        });
      } else {
        this.setState({
          error: true,
          loading: false,
        });
      }
  }

  handleSelect = (event: any): void => {
    const displayedBestsellers: BestsellerUiData[] 
      = this.state.allBestsellerResults
      .filter((bestseller: BestsellerUiData) => {
        return event.target.value === 'All' ? true : bestseller.list_name === event.target.value;
      });

    this.setState({
      selectedListName: event.target.value,
      displayedBestsellers,
    });
  }

  displayComponent = () => {
    if(this.state.loading) {
      return <Loading />
    } else if (this.state.error) {
      return <Error />
    } else {
      return <BestsellerTable displayedBestsellers={this.state.displayedBestsellers} />
    }
  }

  render() {
    const { displayedBestsellers, overviewData, listNames } = this.state;
    return (
      <div className="App">
        <Header 
          bestsellerWeek={overviewData.bestseller_week} 
          displayedBestsellers={displayedBestsellers.length}
          handleSelect={this.handleSelect}
          listNames={listNames}
          selectedListName={this.state.selectedListName}
        />
        {
          this.displayComponent()
        }
      </div>
    );
  }
}

export default App;