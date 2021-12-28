const Score = ({ scores }) => {

    return (
        <div className="tableDiv">
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        scores.map((score) =>
                        (
                            <tr>
                                <td>{score.date}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Score;