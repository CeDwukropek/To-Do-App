function Day(props) {
    const {day, stateOfDay} = props
    return (
        <div className={'day ' + stateOfDay} data-state={stateOfDay}>
            {day}
        </div>
    )
}

export default Day