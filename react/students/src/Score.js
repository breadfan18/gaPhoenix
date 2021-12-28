const Score = ({ scores }) => {
    const scoreElements = scores.map(score =>
    (
        <tr style={{ border: '1px solid black' }}>
            <td>{score.date}</td>
            <td>{score.score}</td>
        </tr>
    )
    )
    return (
        <div className="tableDiv">
            <table style={{ border: '1px solid black' }} className="table">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                    {scoreElements}
                </tbody>
            </table>

        </div>
    )
}

export default Score