import Receipt from "./Receipt";

const Receipts = ({ receipts }) => {
    const receiptElems = receipts.map(r => (
        <Receipt receipt={r}/> 
    ))

    return (
        <div className="receiptsContainer">
            {receiptElems}
        </div>
    )
}

export default Receipts;