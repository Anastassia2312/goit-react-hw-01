import css from "./TransactionHistory.module.css";
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tHead}>Type</th>
          <th className={css.tHead}>Amount</th>
          <th className={css.tHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={css.trTable} key={item.id}>
            <td className={css.tdTable}>{item.type}</td>
            <td className={css.tdTable}>{item.amount}</td>
            <td className={css.tdTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
