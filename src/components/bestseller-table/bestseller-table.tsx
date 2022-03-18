import { BestsellerUiData, BuyLink } from '../../models/data-models';
import './bestseller-table.css';

const BestsellerTable = (
  {
    displayedBestsellers
  }:
  {
    displayedBestsellers: BestsellerUiData[]
  }
) => {
  return (
    <table>
      <tbody>
        {displayedBestsellers?.map((result: any, index: number) => {
          return <tr key={index}>
            <td className="result-img"><img src={result.book_image} alt={result.description}/></td>
            <td>{result.list_name}</td>
            <td>{result.title}</td>
            <td>{result.description}</td>
            <td>{result.authors}</td>
            <td>{result.publisher}</td>
            <td>{result.current_rank}</td>
            <td>
              {result.purchase_links.map((link: BuyLink, index: number) => {
                return <tr className="no-border" key={index}><td><a className="buy-link" href={link.url} target="blank">{link.name}</a></td></tr>
              })}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default BestsellerTable;