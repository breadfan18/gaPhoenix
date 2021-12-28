const Score = ({ scores }) => {
    const scoreElements = scores.map(score =>
    (
        <tr>
            <td>{score.date}</td>
            <td>{score.score}</td>
        </tr>
    )
    )
    return (
        <div className="tableDiv">
            <table className="table">
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