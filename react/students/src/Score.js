const Score = ({ scores }) => {
    const scoreElements = scores.map(score =>
        (<table style={{ border: '1px solid black'}}>
            <tbody>
                <tr style={{ backgroundColor: 'black', color: 'white'}}>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
                <tr style={{ border: '1px solid black'}}>
                    <td>{score.date}</td>
                    <td>{score.score}</td>
                </tr>
            </tbody>
        </table>
        )
    )
    return (
        <div className="tableDiv">
            {scoreElements}
        </div>
    )
}

export default Score