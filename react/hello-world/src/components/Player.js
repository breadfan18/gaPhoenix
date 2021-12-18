function Player(props) {
    console.log('This is props: ', props);
    return (
        <div className={props.whichPlayer}>
            <h2>Player: {props.whichPlayer}</h2>
            <h3>Wins: {props.numWins || 0}</h3>
        </div>
    );
}

export default Player;