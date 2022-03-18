import './header.css';

const Header = (
  {
    bestsellerWeek, 
    displayedBestsellers,
    handleSelect,
    listNames,
    selectedListName,
  }: 
  {
    bestsellerWeek: string; 
    displayedBestsellers: number;
    handleSelect: Function;
    listNames: string[];
    selectedListName: string;
  }) => {

    const scrollToTop = (): void => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
      <header className="app-header">
        <div>
          <h1 className="header-title">NYT Bestsellers</h1>
          <div className="week-display">{bestsellerWeek}</div>
          {
            !!displayedBestsellers
            ? <div>{displayedBestsellers} Entries</div>
            : null
          }
        </div>
        {
          !!displayedBestsellers
          ? 
          <div>
            <button className="scroll-to-top-btn" onClick={() => scrollToTop()}>Back to Top</button>
            <select onChange={(event) => handleSelect(event)} value={selectedListName}>
              <option>All</option>
              {listNames.map((name: string, index: number) => <option key={index}>{name}</option>)}
            </select>
          </div>
          : null
        }

      </header>
    )
}

export default Header;