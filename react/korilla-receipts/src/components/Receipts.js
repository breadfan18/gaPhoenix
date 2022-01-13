import Receipt from "./Receipt";

const Receipts = ({ receipts }) => {
    const receiptElems = receipts.map((r, i) => (
        <Receipt receipt={r} key={i+1}/> 
    ))

    return (
        <div className="receiptsContainer">
            {receiptElems}
        </div>
    )
}

export default Receipts;